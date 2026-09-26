import type { ClassificationContext } from './ClassificationContext';
import { CLASSIFICATION_THRESHOLDS, type MoveClassification } from './MoveClassification';
import { detectBrilliantMove, detectGreatMove, detectMiss, detectAllowsMate } from './SpecialMoveDetector';

function ordinaryClassification(loss: number): MoveClassification {
  const t = CLASSIFICATION_THRESHOLDS;
  if (loss <= t.effectivelyZero) return 'BEST';
  if (loss <= t.excellent) return 'EXCELLENT';
  if (loss <= t.good) return 'GOOD';
  if (loss <= t.inaccuracy) return 'INACCURACY';
  if (loss <= t.mistake) return 'MISTAKE';
  return 'BLUNDER';
}

/**
 * Pure classifier. Stockfish is not involved.
 *
 * A later special check replaces an earlier label:
 * ordinary → Miss → Great → Brilliant → allows-mate blunder.
 * A blunder stays a blunder; Miss does not hide it.
 * Allowing a mate (or a much faster mate) is always a blunder.
 */
export class MoveClassifier {
  classify(context: ClassificationContext): MoveClassification {
    let classification = ordinaryClassification(context.expectedPointsLoss);
    if (classification !== 'BLUNDER' && detectMiss(context)) {
      classification = 'MISS';
    }
    if (detectGreatMove(context)) {
      classification = 'GREAT';
    }
    if (detectBrilliantMove(context)) {
      classification = 'BRILLIANT';
    }
    if (detectAllowsMate(context)) {
      classification = 'BLUNDER';
    }
    return classification;
  }
}
