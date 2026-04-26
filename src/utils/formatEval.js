/** Format engine eval for display (White’s perspective after normalizeEval). */
export function formatEvalDisplay(score) {
  if (score == null || Number.isNaN(score)) return "—";
  const sign = score >= 0 ? "+" : "-";
  const abs = Math.abs(score);

  // Use 2 decimals for one-digit whole part (e.g. 0.73, 4.20), keep larger values compact.
  const body = abs < 10 ? abs.toFixed(2) : String(Math.round(abs));

  return `${sign}${body}`;
}
