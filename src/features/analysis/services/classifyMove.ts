/**
 * UI adapter for move quality.
 * Stockfish supplies eval, best move, and PV. MoveClassifier turns those
 * into Best / Excellent / Good / Inaccuracy / Mistake / Blunder, then
 * Miss, Great, and Brilliant. Book is opening theory and stays here.
 */

import { Chess } from 'chess.js';
import { FromToSquare } from '../../../shared/types/AnalysisTypes';
import { CustomSquareStyles } from 'react-chessboard/dist/chessboard/types';
import { isOpeningBookMove } from './openingBook';
import type { ClassificationContext, MoveClassification } from '../domain';
import {
  MoveClassifier,
  calculateExpectedPointsLoss,
  engineEvalToScore,
  expectedPointsForPlayer,
} from '../domain';

export { isOpeningBookMove };

export const CATEGORY_IDS = {
  BRILLIANT: 'brilliant',
  GREAT: 'great',
  BOOK: 'book',
  BEST: 'best',
  EXCELLENT: 'excellent',
  GOOD: 'good',
  INACCURACY: 'inaccuracy',
  MISTAKE: 'mistake',
  BLUNDER: 'blunder',
  MISSED_WIN: 'missed_win',
  UNKNOWN: 'unknown',
};

type categoryUiData = {
  id: string,
  emoji: string,
  name: string
}

/** @type {Record<string, { id: string; emoji: string; name: string }>} */
export const DISPLAY : Record<string, categoryUiData> = {
  [CATEGORY_IDS.BRILLIANT]: { id: CATEGORY_IDS.BRILLIANT, emoji: '🔥', name: 'Brilliant' },
  [CATEGORY_IDS.GREAT]: { id: CATEGORY_IDS.GREAT, emoji: '⭐', name: 'Great' },
  [CATEGORY_IDS.BOOK]: { id: CATEGORY_IDS.BOOK, emoji: '📖', name: 'Book' },
  [CATEGORY_IDS.BEST]: { id: CATEGORY_IDS.BEST, emoji: '✅', name: 'Best' },
  [CATEGORY_IDS.EXCELLENT]: { id: CATEGORY_IDS.EXCELLENT, emoji: '👍', name: 'Excellent' },
  [CATEGORY_IDS.GOOD]: { id: CATEGORY_IDS.GOOD, emoji: '🙂', name: 'Good' },
  [CATEGORY_IDS.INACCURACY]: { id: CATEGORY_IDS.INACCURACY, emoji: '⚠️', name: 'Inaccuracy' },
  [CATEGORY_IDS.MISTAKE]: { id: CATEGORY_IDS.MISTAKE, emoji: '❌', name: 'Mistake' },
  [CATEGORY_IDS.BLUNDER]: { id: CATEGORY_IDS.BLUNDER, emoji: '💀', name: 'Blunder' },
  [CATEGORY_IDS.MISSED_WIN]: { id: CATEGORY_IDS.MISSED_WIN, emoji: '🚫', name: 'Missed Win' },
  [CATEGORY_IDS.UNKNOWN]: { id: CATEGORY_IDS.UNKNOWN, emoji: '', name: '—' },
};

/**
 * Emoji shown on the board for a review category (empty if none).
 * @param {string} categoryId from {@link moveQualityClassFromLabel}
 */
export function categoryEmojiFromCategoryId(categoryId: string): string {
  if (!categoryId) return '';
  return DISPLAY[categoryId]?.emoji ?? '';
}

/**
 * @param {string} uci
 */
export function normalizeUci(uci : string): string {
  if (uci == null || typeof uci !== 'string') return '';
  return uci.trim().toLowerCase().replace(/\s+/g, '');
}

/**
 * @param {{ from?: string; to?: string; promotion?: string } | null | undefined} fromTo
 */
export function toUci(fromTo : FromToSquare): string {
  if (!fromTo) return '';
  const f = String(fromTo.from || '').toLowerCase();
  const t = String(fromTo.to || '').toLowerCase();
  const p = fromTo.promotion ? fromTo.promotion.toLowerCase() : '';
  return `${f}${t}${p}`;
}

/**
 * Full UCI including promotion from SAN on `fenBefore` (handles underpromotion).
 * @param {string} fenBefore
 * @param {string} san
 * @returns {string}
 */
export function playedUciFromSan(fenBefore: string, san: string): string {
  try {
    const g = new Chess(fenBefore);
    const m = g.move(san);
    if (!m) return '';
    return `${m.from}${m.to}${m.promotion || ''}`.toLowerCase();
  } catch {
    return '';
  }
}

const CLASSIFICATION_TO_CATEGORY: Record<MoveClassification, string> = {
  BRILLIANT: CATEGORY_IDS.BRILLIANT,
  GREAT: CATEGORY_IDS.GREAT,
  BEST: CATEGORY_IDS.BEST,
  EXCELLENT: CATEGORY_IDS.EXCELLENT,
  GOOD: CATEGORY_IDS.GOOD,
  INACCURACY: CATEGORY_IDS.INACCURACY,
  MISTAKE: CATEGORY_IDS.MISTAKE,
  BLUNDER: CATEGORY_IDS.BLUNDER,
  MISS: CATEGORY_IDS.MISSED_WIN,
};

const classifier = new MoveClassifier();

/**
 * UI adapter. Engine numbers stay White-POV pawns; MoveClassifier owns the rules.
 * Book is applied here because it is opening theory, not an engine label.
 */
export function classifyMove({
  evalBefore,
  evalAfter,
  bestMoveUci = '',
  playedUci = '',
  fenBefore = '',
  fenAfter = '',
  altEval = null,
  scoreBeforeOpponent = null,
  mateBefore = null,
  mateAfter = null,
  mateBeforeOpponent = null,
  mateSecond = null,
  book = false,
}: {
  evalBefore: number | null;
  evalAfter: number | null;
  bestMoveUci: string;
  playedUci: string;
  fenBefore: string;
  fenAfter: string;
  altEval?: number | null;
  scoreBeforeOpponent?: number | null;
  mateBefore?: number | null;
  mateAfter?: number | null;
  mateBeforeOpponent?: number | null;
  mateSecond?: number | null;
  book?: boolean;
}): { categoryId: string; label: string; emoji: string; name: string } {
  if (book) {
    const u = DISPLAY[CATEGORY_IDS.BOOK];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }
  if (
    evalBefore == null ||
    evalAfter == null ||
    !Number.isFinite(evalBefore) ||
    !Number.isFinite(evalAfter)
  ) {
    const u = DISPLAY[CATEGORY_IDS.UNKNOWN];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }

  const playerColor = fenBefore.trim().split(/\s+/)[1] === 'b' ? 'b' : 'w';
  const beforeScore = engineEvalToScore(evalBefore, mateBefore);
  const afterScore = engineEvalToScore(evalAfter, mateAfter);
  const context: ClassificationContext = {
    beforeScore,
    afterScore,
    bestMove: bestMoveUci,
    playedMove: playedUci,
    playerColor,
    expectedPointsBefore: expectedPointsForPlayer(beforeScore, playerColor),
    expectedPointsAfter: expectedPointsForPlayer(afterScore, playerColor),
    expectedPointsLoss: calculateExpectedPointsLoss(beforeScore, afterScore, playerColor),
    fenBefore,
    fenAfter,
    pv: bestMoveUci ? [bestMoveUci] : [],
  };
  if (scoreBeforeOpponent != null && Number.isFinite(scoreBeforeOpponent)) {
    context.scoreBeforeOpponentMove = engineEvalToScore(scoreBeforeOpponent, mateBeforeOpponent);
  }
  if (altEval != null && Number.isFinite(altEval)) {
    context.secondBestScore = engineEvalToScore(altEval, mateSecond);
  }

  const id = CLASSIFICATION_TO_CATEGORY[classifier.classify(context)];
  const u = DISPLAY[id];
  return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
}

function formatLabel(u: categoryUiData) {
  return u.emoji ? `${u.emoji} ${u.name}` : u.name;
}

/**
 * CSS modifier (matches {@link CATEGORY_IDS}) for coloring the move-quality line.
 * Matches longest display names first so e.g. "Missed Win" wins over substrings.
 * @param {string | null | undefined} label
 * @returns {string} category id or ''
 */
export function moveQualityClassFromLabel(label: string | null | undefined) {
  if (!label || typeof label !== 'string') return '';
  const names = Object.entries(DISPLAY)
    .filter(([id]) => id !== CATEGORY_IDS.UNKNOWN)
    .map(([id, d]) => ({ id, name: d.name }))
    .filter((x) => x.name && x.name !== '—')
    .sort((a, b) => b.name.length - a.name.length);
  for (const { id, name } of names) {
    if (label.includes(name)) return id;
  }
  return '';
}

/**
 * Board last-move tints — RGB from MoveCategoryBoardIcons.jsx circle fill (same hex per category).
 * Slightly stronger on `to` so the destination reads clearly on light and dark squares.
 * @type {Record<string, { from: string; to: string }>}
 */
const MOVE_QUALITY_HIGHLIGHT_RGBA : Record<string, { from: string; to: string }> = {
  [CATEGORY_IDS.BRILLIANT]: {
    from: 'rgba(38, 194, 163, 0.38)',
    to: 'rgba(38, 194, 163, 0.55)',
  },
  [CATEGORY_IDS.GREAT]: {
    from: 'rgba(116, 155, 191, 0.38)',
    to: 'rgba(116, 155, 191, 0.55)',
  },
  [CATEGORY_IDS.BOOK]: {
    from: 'rgba(148, 163, 184, 0.32)',
    to: 'rgba(148, 163, 184, 0.48)',
  },
  [CATEGORY_IDS.BEST]: {
    from: 'rgba(129, 182, 76, 0.38)',
    to: 'rgba(129, 182, 76, 0.55)',
  },
  [CATEGORY_IDS.EXCELLENT]: {
    from: 'rgba(129, 182, 76, 0.38)',
    to: 'rgba(129, 182, 76, 0.55)',
  },
  [CATEGORY_IDS.GOOD]: {
    from: 'rgba(149, 183, 118, 0.38)',
    to: 'rgba(149, 183, 118, 0.55)',
  },
  [CATEGORY_IDS.INACCURACY]: {
    from: 'rgba(247, 198, 49, 0.38)',
    to: 'rgba(247, 198, 49, 0.55)',
  },
  [CATEGORY_IDS.MISTAKE]: {
    from: 'rgba(255, 164, 89, 0.38)',
    to: 'rgba(255, 164, 89, 0.55)',
  },
  [CATEGORY_IDS.BLUNDER]: {
    from: 'rgba(250, 65, 45, 0.38)',
    to: 'rgba(250, 65, 45, 0.55)',
  },
  [CATEGORY_IDS.MISSED_WIN]: {
    from: 'rgba(255, 119, 105, 0.38)',
    to: 'rgba(255, 119, 105, 0.55)',
  },
};

/**
 * Last-move square highlights tinted by review category (main line after Start Review).
 * @param {{ from: string; to: string } | null | undefined} lastMove
 * @param {string} categoryId from {@link moveQualityClassFromLabel}
 * @returns {Record<string, { backgroundColor: string }> | null}
 */
export function getReviewLastMoveSquareStyles(lastMove: FromToSquare | null | undefined, categoryId: string): 
Record<string, {backgroundColor: string}> | null {
  if (!lastMove?.from || !lastMove?.to) return null;
  if (!categoryId) return null;
  const palette = MOVE_QUALITY_HIGHLIGHT_RGBA[categoryId];
  if (!palette) return null;
  return {
    [lastMove.from]: { backgroundColor: palette.from },
    [lastMove.to]: { backgroundColor: palette.to },
  };
}

function defaultLastMoveSquareStyles(lastMove: FromToSquare): CustomSquareStyles | undefined {
  if (lastMove == null || !lastMove?.from || !lastMove?.to) return undefined;
  return {
    [lastMove.from]: { backgroundColor: 'var(--last-move-from)' },
    [lastMove.to]: { backgroundColor: 'var(--last-move-to)' },
  };
}

/**
 * Last-move styles: category tint after review on main line, else default CSS vars.
 * @param {{ from: string; to: string } | null | undefined} lastMove
 * @param {string} categoryId
 */

export function getLastMoveSquareStylesForAnalysis(lastMove: FromToSquare | undefined, categoryId: string): CustomSquareStyles | undefined {
  if (lastMove == null || !lastMove?.from || !lastMove?.to) return undefined;

  const tinted = getReviewLastMoveSquareStyles(lastMove, categoryId);
  if (tinted) return tinted;
  return defaultLastMoveSquareStyles(lastMove);
}

/**
 * Display string for Redux / UI (same as `classifyMove` label).
 */
function classificationDisplayString(result: any) {
  if (!result || !result.label) return '—';
  return result.label;
}
