import { Chess } from 'chess.js';
import type { Square } from 'chess.js';
import { Arrow } from 'react-chessboard/dist/chessboard/types';

/** Chess.com-style suggestion arrow (green). */
export const BEST_MOVE_ARROW_COLOR = '#22c55e';

/**
 * Build `react-chessboard` customArrows if `uci` is a legal move from `fen`.
 * Tuple: [from, to, optionalColor] per react-chessboard.
 */
export function bestMoveUciToCustomArrows(fen: string, uci: any, color = BEST_MOVE_ARROW_COLOR): Arrow[] {
  if (!fen || !uci || typeof uci !== 'string') return [];
  const trimmedUci = uci.trim().toLowerCase().replace(/\s+/g, '');
  if (trimmedUci.length < 4) return [];
  const from = trimmedUci.slice(0, 2);
  const to = trimmedUci.slice(2, 4);
  const prom = trimmedUci.length >= 5 && 'qrbn'.includes(trimmedUci[4]) ? trimmedUci[4] : undefined;
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
    return [[from as Square, to as Square, color as string]];
  } catch {
    return [];
  }
}

/**
 * Arrow from raw UCI squares only (no legality check). Use when the board
 * left the main line but the comparison arrow should stay visible.
 */
export function uciToArrowFromSquares(uci: any, color = BEST_MOVE_ARROW_COLOR): Arrow[] {
  if (!uci || typeof uci !== 'string') return [];
  const trimmedUci = uci.trim().toLowerCase().replace(/\s+/g, '');
  if (trimmedUci.length < 4) return [];
  const from = trimmedUci.slice(0, 2);
  const to = trimmedUci.slice(2, 4);
  if (!/^[a-h][1-8]$/.test(from) || !/^[a-h][1-8]$/.test(to)) return [];
  return [[from as Square, to as Square, color as string]];
}
