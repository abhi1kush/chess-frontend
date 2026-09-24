import { Chess } from 'chess.js';
import type { FromToSquare, LoadPgnParams, PromotionPiece } from '../../../shared/types/AnalysisTypes';

export type ParsedPgn = LoadPgnParams;

function promotionOf(letter: string | undefined): PromotionPiece | undefined {
  if (letter === 'q' || letter === 'r' || letter === 'b' || letter === 'n') return letter;
  return undefined;
}

export function parsePgn(pgn: string): ParsedPgn {
  const chess = new Chess();
  chess.loadPgn(pgn);

  const moves = chess.history();
  const fens: string[] = [];
  const fromToSquares: FromToSquare[] = [];
  const headers = chess.getHeaders();

  chess.reset();
  fens.push(chess.fen());

  for (const move of moves) {
    const played = chess.move(move);
    const promotion = promotionOf(played.isPromotion() ? played.promotion : undefined);
    fromToSquares.push({
      from: played.from,
      to: played.to,
      promotion,
    });
    fens.push(chess.fen());
  }

  return {
    finalPos: fens[fens.length - 1],
    moves,
    fens,
    fromToSquares,
    termination: headers.Termination ?? '',
    result: headers.Result ?? '',
    blackPlayerName: headers.Black || '-',
    whitePlayerName: headers.White || '-',
  };
}
