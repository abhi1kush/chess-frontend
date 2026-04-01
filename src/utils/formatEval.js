/** Format engine eval for display (White’s perspective after normalizeEval). */
export function formatEvalDisplay(score) {
  if (score == null || Number.isNaN(score)) return "—";
  const sign = score >= 0 ? "+" : "";
  return `${sign}${score.toFixed(2)}`;
}
