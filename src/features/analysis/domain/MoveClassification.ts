export type MoveClassification =
  | 'BEST'
  | 'EXCELLENT'
  | 'GOOD'
  | 'INACCURACY'
  | 'MISTAKE'
  | 'BLUNDER'
  | 'MISS'
  | 'GREAT'
  | 'BRILLIANT';

/**
 * Expected-points loss cutoffs for ordinary labels.
 * A loss of 0 (within EFFECTIVELY_ZERO) is Best.
 * Upper bound of each band is exclusive of the next band via <=.
 */
export const CLASSIFICATION_THRESHOLDS = {
  /** Loss at or below this is treated as zero (Best). */
  effectivelyZero: 0.005,
  excellent: 0.02,
  good: 0.05,
  inaccuracy: 0.1,
  mistake: 0.2,
} as const;

export const ORDINARY_CLASSIFICATIONS = [
  'BEST',
  'EXCELLENT',
  'GOOD',
  'INACCURACY',
  'MISTAKE',
  'BLUNDER',
] as const;
