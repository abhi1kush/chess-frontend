/**
 * Engine facts only. Stockfish does not choose Best, Blunder, Brilliant, etc.
 * Scores are White's perspective: positive cp / positive mate favors White.
 */
import { Chess } from 'chess.js';

export type EngineScore =
  | { type: 'cp'; value: number }
  | { type: 'mate'; value: number };

export interface MoveAnalysis {
  beforeEval: EngineScore;
  afterEval: EngineScore;
  bestMove: string;
  playedMove: string;
  depth: number;
  pv: string[];
  beforePosition: string;
  afterPosition: string;
}

/**
 * Objective score when the game is already over.
 * A search of a checkmated position often returns no score, which would
 * look like 0.00 and punish the move that delivered mate.
 * Positive mate means White is mating.
 */
export function scoreForTerminalPosition(fen: string): EngineScore | null {
  try {
    const game = new Chess(fen);
    if (!game.isCheckmate()) return null;
    return { type: 'mate', value: game.turn() === 'b' ? 1 : -1 };
  } catch {
    return null;
  }
}

/** White-POV pawns (and optional mate) from the engine layer → EngineScore. */
export function engineEvalToScore(
  pawns: number,
  mate?: number | null,
): EngineScore {
  if (mate != null && mate !== 0 && Number.isFinite(mate)) {
    return { type: 'mate', value: mate };
  }
  return { type: 'cp', value: Math.round(pawns * 100) };
}
