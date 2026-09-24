import { evaluationToExpectedPoints } from './EvaluationConverter';
import type { EngineScore } from './MoveAnalysis';

export type PlayerColor = 'w' | 'b';

/** Flip a White-POV score so positive means good for `playerColor`. */
export function toPlayerPerspective(score: EngineScore, playerColor: PlayerColor): EngineScore {
  if (playerColor === 'w') return score;
  if (score.type === 'cp') return { type: 'cp', value: -score.value };
  return { type: 'mate', value: -score.value };
}

/**
 * How much the move reduced the mover's expected result.
 * Always >= 0. Scores are White's perspective.
 */
export function calculateExpectedPointsLoss(
  beforeScore: EngineScore,
  afterScore: EngineScore,
  playerColor: PlayerColor,
): number {
  const before = evaluationToExpectedPoints(toPlayerPerspective(beforeScore, playerColor));
  const after = evaluationToExpectedPoints(toPlayerPerspective(afterScore, playerColor));
  return Math.max(0, before - after);
}

export function expectedPointsForPlayer(score: EngineScore, playerColor: PlayerColor): number {
  return evaluationToExpectedPoints(toPlayerPerspective(score, playerColor));
}
