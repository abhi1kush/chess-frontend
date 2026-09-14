/**
 * Figurine notation for UI only — stored moves stay standard SAN (Nf3, e4, …).
 * White: ♔♕♖♗♘♙ · Black: ♚♛♜♝♞♟
 */

type PieceLetter = 'K' | 'Q' | 'R' | 'B' | 'N' | 'P';
type promotionPieceLetterr = 'Q' | 'R' | 'B' | 'N';
type NonPawnPieceLetterr = 'K' | 'Q' | 'R' | 'B' | 'N';

const WhitePieceFigurine: Record<PieceLetter, string> = { K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙' };
const BlackPieceFigurine: Record<PieceLetter, string> = { K: '♚', Q: '♛', R: '♜', B: '♝', N: '♞', P: '♟' };

/**
 * @param {string} san
 * @param {boolean} isWhite
 * @returns {string}
 */
export function sanToFigurineDisplay(san: string, isWhite: boolean) {
  if (!san) return '';
  const trimmedSan = san.trim();
  if (!trimmedSan) return '';
  const pieceSet = isWhite ? WhitePieceFigurine : BlackPieceFigurine;

  if (trimmedSan.startsWith('O-O-O')) {
    return `${pieceSet.K} ${trimmedSan}`;
  }
  if (trimmedSan.startsWith('O-O')) {
    return `${pieceSet.K} ${trimmedSan}`;
  }

  let promotionMove = trimmedSan.replace(/=([QRBN])([#+]*)$/, (_, piece: promotionPieceLetterr, suf) => `=${pieceSet[piece]}${suf}`);

  const first : NonPawnPieceLetterr = promotionMove[0] as NonPawnPieceLetterr;
  if (first && 'KQRBN'.includes(first)) {
    return pieceSet[first] + promotionMove.slice(1);
  }

  return pieceSet.P + promotionMove;
}
