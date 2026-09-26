import { sanToFigurineDisplay } from '../../../shared/utils/sanFigurine';
import type { LinePly } from '../types';

/**
 * Numbered user line from the fork FEN (fullmove + side to move).
 * Segments are one White–Black pair each, joined with ", ".
 * Incomplete tail: "N. san" (only White).
 * If the first try-move is Black (fork with Black to move), "N. — san" (placeholder White
 * slot, em dash) so the pair shape matches White-first rows.
 */
export function formatUserLineWithNumbers(fenAtBranch: string, plies: LinePly[]): string {
  if (!plies?.length || !fenAtBranch) return '';
  const parts = fenAtBranch.trim().split(/\s+/);
  let fullmove = parseInt(parts[5] || '1', 10);
  if (!Number.isFinite(fullmove) || fullmove < 1) fullmove = 1;

  const segments: string[] = [];
  let pendingWhite: { fullmove: number; fig: string } | null = null;

  for (let i = 0; i < plies.length; i++) {
    const p = plies[i];
    const isW = p.color === 'w';
    const fig = sanToFigurineDisplay(p.san, isW);

    if (isW) {
      pendingWhite = { fullmove, fig };
    } else if (pendingWhite) {
      segments.push(`${pendingWhite.fullmove}. ${pendingWhite.fig} ${fig}`);
      fullmove = pendingWhite.fullmove + 1;
      pendingWhite = null;
    } else {
      /** Black to move at fork: show numbered white slot + black so pairs stay “W B”. */
      segments.push(`${fullmove}. — ${fig}`);
      fullmove += 1;
    }
  }

  if (pendingWhite) {
    segments.push(`${pendingWhite.fullmove}. ${pendingWhite.fig}`);
  }

  return segments.join(', ');
}
