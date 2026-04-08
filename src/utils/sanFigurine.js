/**
 * Figurine notation for UI only — stored moves stay standard SAN (Nf3, e4, …).
 * White: ♔♕♖♗♘♙ · Black: ♚♛♜♝♞♟
 */

const W = { K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙' };
const B = { K: '♚', Q: '♛', R: '♜', B: '♝', N: '♞', P: '♟' };

/**
 * @param {string} san
 * @param {boolean} isWhite
 * @returns {string}
 */
export function sanToFigurineDisplay(san, isWhite) {
  if (san == null || san === '') return '';
  const s = String(san).trim();
  if (!s) return '';
  const set = isWhite ? W : B;

  if (s.startsWith('O-O-O')) {
    return `${set.K} ${s}`;
  }
  if (s.startsWith('O-O')) {
    return `${set.K} ${s}`;
  }

  let t = s.replace(/=([QRBN])([#+]*)$/, (_, piece, suf) => `=${set[piece]}${suf}`);

  const first = t[0];
  if (first && 'KQRBN'.includes(first)) {
    return set[first] + t.slice(1);
  }

  return set.P + t;
}
