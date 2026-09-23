/**
 * Tiny opening book: a ply is Book when the UCI prefix from the start
 * position is a known theory line. Expand this list to cover more openings.
 */
const BOOK_PREFIXES = new Set([
  'e2e4',
  'e2e4 e7e5',
  'e2e4 e7e5 g1f3',
  'e2e4 e7e5 g1f3 g8f6',
  'e2e4 e7e5 g1f3 g8f6 d2d3',
  'e2e4 e7e5 g1f3 b8c6',
  'e2e4 e7e5 g1f3 b8c6 f1b5',
  'e2e4 c7c5',
  'd2d4',
  'd2d4 d7d5',
  'd2d4 g8f6',
  'c2c4',
  'g1f3',
]);

export function isOpeningBookMove(uciPrefix: string[]): boolean {
  if (!uciPrefix.length) return false;
  const key = uciPrefix.map((u) => u.trim().toLowerCase()).filter(Boolean).join(' ');
  return BOOK_PREFIXES.has(key);
}
