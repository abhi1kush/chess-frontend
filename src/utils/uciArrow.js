import { Chess } from 'chess.js';

/** Chess.com-style suggestion arrow (green). */
export const BEST_MOVE_ARROW_COLOR = '#22c55e';

/**
 * Build `react-chessboard` customArrows if `uci` is a legal move from `fen`.
 * Tuple: [from, to, optionalColor] per react-chessboard.
 */
export function bestMoveUciToCustomArrows(fen, uci, color = BEST_MOVE_ARROW_COLOR) {
  if (!fen || !uci || typeof uci !== 'string') return [];
  const clean = uci.trim().toLowerCase().replace(/\s+/g, '');
  if (clean.length < 4) return [];
  const from = clean.slice(0, 2);
  const to = clean.slice(2, 4);
  const prom = clean.length >= 5 && 'qrbn'.includes(clean[4]) ? clean[4] : undefined;
  try {
    const g = new Chess(fen);
    let m = g.move({
      from,
      to,
      ...(prom ? { promotion: prom } : {}),
    });
    if (!m && !prom) {
      for (const p of ['q', 'r', 'b', 'n']) {
        const g2 = new Chess(fen);
        m = g2.move({ from, to, promotion: p });
        if (m) break;
      }
    }
    if (!m) return [];
    return [[from, to, color]];
  } catch {
    return [];
  }
}

/**
 * Arrow from raw UCI squares only (no legality check). Use when the board
 * left the main line but the comparison arrow should stay visible.
 */
export function uciToArrowFromSquares(uci, color = BEST_MOVE_ARROW_COLOR) {
  if (!uci || typeof uci !== 'string') return [];
  const clean = uci.trim().toLowerCase().replace(/\s+/g, '');
  if (clean.length < 4) return [];
  const from = clean.slice(0, 2);
  const to = clean.slice(2, 4);
  if (!/^[a-h][1-8]$/.test(from) || !/^[a-h][1-8]$/.test(to)) return [];
  return [[from, to, color]];
}
