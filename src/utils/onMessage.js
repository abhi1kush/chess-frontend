export const normalizeEval = (evalScore, fen) => {
  const sideToMove = fen.split(" ")[1];
  return sideToMove === "w" ? evalScore : -evalScore;
};

/**
 * Stockfish reports score from the side-to-move’s perspective (UCI).
 * normalizeEval converts to White’s perspective for display.
 */
export const onMessage = (data, setEvalScore, setBestLine, fen, setBestMove) => {
  if (typeof data === "string") {
    if (data.startsWith("info") && data.includes("score")) {
      const match = data.match(/score (cp|mate) (-?\d+)/);
      if (match) {
        const type = match[1];
        const value = parseInt(match[2], 10);
        let evalValue = 0;
        if (type === "cp") {
          evalValue = value / 100;
        } else if (type === "mate") {
          evalValue = value > 0 ? 10 : -10;
        }
        const normalized = normalizeEval(evalValue, fen);
        setEvalScore(normalized);
      }
      // Extract PV (best line suggestion)
      const pvMatch = data.match(/ pv (.+)/);
      if (pvMatch) {
        setBestLine(pvMatch[1]);
      }
    }
    if (data.startsWith("bestmove") && setBestMove) {
      const parts = data.trim().split(/\s+/);
      const m = parts[1];
      if (m && m !== "(none)") setBestMove(m);
      else setBestMove("");
    }
  }
};
