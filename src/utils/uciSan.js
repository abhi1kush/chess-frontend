import { Chess } from "chess.js";

export function uciToSan(fen, uci) {
  if (!uci || uci.length < 4) return uci;
  try {
    const game = new Chess(fen);
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    const promotion = uci.length > 4 ? uci[4] : undefined;
    const m = game.move({ from, to, promotion });
    return m ? m.san : uci;
  } catch {
    return uci;
  }
}
