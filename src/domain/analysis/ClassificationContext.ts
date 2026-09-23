import type { EngineScore } from './MoveAnalysis';
import type { PlayerColor } from './ExpectedPoints';

export interface MaterialSummary {
  white: number;
  black: number;
}

/**
 * Everything MoveClassifier needs. Built by the review layer from engine
 * output; the classifier does not talk to Stockfish or Redux.
 *
 * beforeScore / afterScore / secondBestScore / scoreBeforeOpponentMove
 * are White's perspective.
 */
export interface ClassificationContext {
  beforeScore: EngineScore;
  afterScore: EngineScore;
  bestMove: string;
  playedMove: string;
  playerColor: PlayerColor;
  expectedPointsBefore: number;
  expectedPointsAfter: number;
  expectedPointsLoss: number;
  materialBefore?: MaterialSummary;
  materialAfter?: MaterialSummary;
  pv?: string[];
  /** FEN before the played move. Used by sacrifice rules. */
  fenBefore?: string;
  /** FEN after the played move. */
  fenAfter?: string;
  /**
   * White-POV score of the position before the opponent's previous move.
   * Required for Miss: the opponent created a chance the player then missed.
   */
  scoreBeforeOpponentMove?: EngineScore;
  /** White-POV score of the second-best line in the position before the move. */
  secondBestScore?: EngineScore;
}
