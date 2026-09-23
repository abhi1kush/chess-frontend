import type { EngineScore } from './MoveAnalysis';

/**
 * Maps a score already expressed for one side (positive = good for that side)
 * onto expected game result in [0, 1].
 *
 * Mate is not converted through centipawns. A positive mate is a win (1),
 * a negative mate is a loss (0).
 *
 * The centipawn scale is the usual logistic approximation and can be replaced
 * without touching MoveClassifier.
 */
export const EXPECTED_POINTS_CP_SCALE = 0.00368208;

export function evaluationToExpectedPoints(score: EngineScore): number {
  if (score.type === 'mate') {
    if (score.value > 0) return 1;
    if (score.value < 0) return 0;
    return 0.5;
  }
  const ep = 1 / (1 + Math.exp(-EXPECTED_POINTS_CP_SCALE * score.value));
  if (!Number.isFinite(ep)) return score.value >= 0 ? 1 : 0;
  return Math.min(1, Math.max(0, ep));
}
