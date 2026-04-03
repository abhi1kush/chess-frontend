/**
 * Per-position engine snapshot, aligned with `state.pgn.fens[i]` (same index).
 */
export function createEmptyAnalysisData(length) {
  return Array.from({ length }, () => ({
    evalScore: null,
    bestMove: '',
    moveClassification: null,
  }));
}
