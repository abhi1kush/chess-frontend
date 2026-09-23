import { Chess, type Move, type PieceSymbol, type Square } from 'chess.js';
import type { ClassificationContext } from './ClassificationContext';
import { CLASSIFICATION_THRESHOLDS } from './MoveClassification';
import { expectedPointsForPlayer } from './ExpectedPoints';

const PIECE_VALUES: Record<PieceSymbol, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };

/** Expected points at or above this means the sacrifice was not needed. */
const ALREADY_WINNING_EP = 0.85;
/** After a brilliant sacrifice the mover should still have a playable result. */
const NOT_LOSING_AFTER_EP = 0.4;
/** Second line must be this much worse (expected points) to count as the only good move. */
const ONLY_MOVE_EP_GAP = 0.08;
/** Opponent must hand at least this much expected points for a later Miss. */
const MISS_OPPORTUNITY_EP = 0.06;

function pieceValue(type: PieceSymbol | undefined): number {
  if (!type) return 0;
  return PIECE_VALUES[type] ?? 0;
}

function parseUci(uci: string): { from: Square; to: Square; promotion?: 'q' | 'r' | 'b' | 'n' } | null {
  const u = uci.trim().toLowerCase();
  if (u.length < 4) return null;
  const letter = u.length > 4 ? u[4] : undefined;
  let promotion: 'q' | 'r' | 'b' | 'n' | undefined;
  if (letter === 'q' || letter === 'r' || letter === 'b' || letter === 'n') promotion = letter;
  else if (letter) return null;
  return { from: u.slice(0, 2) as Square, to: u.slice(2, 4) as Square, promotion };
}

function captureMaterialLoss(game: Chess, m: Move): number {
  const victim = pieceValue(m.captured);
  const attacker = pieceValue(m.piece);
  const clone = new Chess(game.fen());
  try {
    clone.move({ from: m.from, to: m.to, promotion: m.promotion });
  } catch {
    return 0;
  }
  const recaptured = clone.moves({ verbose: true }).some((reply) => reply.to === m.to && reply.captured);
  if (!recaptured) return victim;
  return Math.max(0, victim - attacker);
}

function netLossIfTakenOn(game: Chess, square: Square): number {
  let max = 0;
  for (const m of game.moves({ verbose: true })) {
    if (m.to !== square || !m.captured) continue;
    const loss = captureMaterialLoss(game, m);
    if (loss > max) max = loss;
  }
  return max;
}

function biggestPieceLoss(game: Chess, victimColor: 'w' | 'b'): number {
  if (game.turn() === victimColor) return 0;
  let max = 0;
  for (const m of game.moves({ verbose: true })) {
    if (!m.captured || m.captured === 'p') continue;
    const loss = captureMaterialLoss(game, m);
    if (loss > max) max = loss;
  }
  return max;
}

/** Piece or exchange sacrifice: RxN, bishop left hanging after a pawn capture, and similar. */
function isPieceSacrifice(fenBefore: string, playedUci: string): boolean {
  const parsed = parseUci(playedUci);
  if (!parsed) return false;
  try {
    const before = new Chess(fenBefore);
    const mover = before.turn();
    const moving = before.get(parsed.from);
    if (!moving || moving.type === 'k') return false;
    const beforeHang = biggestPieceLoss(before, mover);
    const played = before.move({
      from: parsed.from,
      to: parsed.to,
      promotion: parsed.promotion,
    });
    if (!played) return false;
    if (beforeHang >= 2) return false;
    const hangNet = netLossIfTakenOn(before, parsed.to);
    if (hangNet < 2) return false;
    const gained = pieceValue(played.captured);
    const movedValue = pieceValue(played.piece);
    if (gained >= 3 && movedValue - gained >= 2) return true;
    if (gained >= 1 && gained < 3 && hangNet >= 3) return true;
    return false;
  } catch {
    return false;
  }
}

/**
 * A strong piece sacrifice that leaves a playable position and was not
 * already a trivial win. Rules are isolated so they can be tightened later.
 */
export function detectBrilliantMove(context: ClassificationContext): boolean {
  if (!context.fenBefore || !context.playedMove) return false;
  if (!isPieceSacrifice(context.fenBefore, context.playedMove)) return false;
  if (context.expectedPointsBefore >= ALREADY_WINNING_EP) return false;
  if (context.expectedPointsAfter < NOT_LOSING_AFTER_EP) return false;
  if (context.expectedPointsLoss >= CLASSIFICATION_THRESHOLDS.mistake) return false;
  return true;
}

/**
 * A critical move that changes the game's direction, or the only good move.
 * A plain best move with several equal alternatives is not Great.
 */
export function detectGreatMove(context: ClassificationContext): boolean {
  if (context.expectedPointsLoss > CLASSIFICATION_THRESHOLDS.good) return false;

  const before = context.expectedPointsBefore;
  const after = context.expectedPointsAfter;
  const gain = after - before;
  const losingToEqual = before <= 0.4 && after >= 0.5 && gain >= 0.1;
  const equalToWinning = before <= 0.55 && after >= 0.7 && gain >= 0.12;
  if (losingToEqual || equalToWinning) return true;

  if (!context.secondBestScore) return false;
  if (context.expectedPointsLoss > CLASSIFICATION_THRESHOLDS.excellent) return false;
  const second = expectedPointsForPlayer(context.secondBestScore, context.playerColor);
  return before - second >= ONLY_MOVE_EP_GAP;
}

/**
 * The opponent created a real chance and this move gave it back.
 * Requires the score from before the opponent's move. Not a raw centipawn check.
 */
export function detectMiss(context: ClassificationContext): boolean {
  if (!context.scoreBeforeOpponentMove) return false;
  if (context.expectedPointsLoss <= CLASSIFICATION_THRESHOLDS.good) return false;
  const beforeOpportunity = expectedPointsForPlayer(
    context.scoreBeforeOpponentMove,
    context.playerColor,
  );
  const opportunity = context.expectedPointsBefore - beforeOpportunity;
  if (opportunity < MISS_OPPORTUNITY_EP) return false;
  const givenBack = context.expectedPointsBefore - context.expectedPointsAfter;
  return givenBack > CLASSIFICATION_THRESHOLDS.good;
}
