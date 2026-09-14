/**
 * Aggregate move-quality counts per player for the Game Review panel.
 * Move index `i` (0-based): White if `i % 2 === 0`, Black otherwise.
 */

import { AnalysisDataRow } from '../redux/reducers/pgnReducer';
import { moveQualityClassFromLabel } from './moveClassification';

/** Per-move weight for a simple accuracy % (tunable). */
export const CATEGORY_ACCURACY_WEIGHT : Record<string, number> = {
  brilliant: 100,
  great: 98,
  best: 100,
  excellent: 92,
  good: 82,
  inaccuracy: 68,
  mistake: 45,
  blunder: 12,
  missed_win: 55,
  unknown: 72,
};

/** Row order and labels for the Game Review table. */
export const GAME_REVIEW_ROWS = [
  { id: 'brilliant', name: 'Brilliant' },
  { id: 'great', name: 'Great' },
  { id: 'best', name: 'Best' },
  { id: 'excellent', name: 'Excellent' },
  { id: 'good', name: 'Good' },
  { id: 'inaccuracy', name: 'Inaccuracy' },
  { id: 'mistake', name: 'Mistake' },
  { id: 'missed_win', name: 'Miss' },
  { id: 'blunder', name: 'Blunder' },
  { id: 'unknown', name: 'Other' },
];

/** @returns {{ white: Record<string, number>; black: Record<string, number> }} */

export function aggregateGameReviewStats(analysisData : AnalysisDataRow[], numMoves: number): 
{whiteStat: Record<string, number>; blackStat: Record<string, number>} {
  const whiteStat : Record<string, number> = {};
  const blackStat : Record<string, number> = {};
  for (const { id } of GAME_REVIEW_ROWS) {
    whiteStat[id] = 0;
    blackStat[id] = 0;
  }

  for (let i = 0; i < numMoves; i++) {
    const entry = analysisData?.[i + 1];
    const label = entry?.moveClassification;
    let id = moveQualityClassFromLabel(label);
    if (!id) id = 'unknown';
    if (!(id in whiteStat)) id = 'unknown';
    if (i % 2 === 0) whiteStat[id] += 1;
    else blackStat[id] += 1;
  }

  return { whiteStat, blackStat };
}

/**
 * @param {Record<string, number>} counts
 * @returns {number | null}
 */
export function computePlayerAccuracy(counts: Record<string, number>): number | null {
  let moves = 0;
  let weighted = 0;
  for (const [id, c] of Object.entries(counts)) {
    if (!c) continue;
    const w = CATEGORY_ACCURACY_WEIGHT[id] ?? CATEGORY_ACCURACY_WEIGHT.unknown;
    moves += c;
    weighted += c * w;
  }
  if (moves === 0) return null;
  return Math.round((weighted / moves) * 10) / 10;
}
