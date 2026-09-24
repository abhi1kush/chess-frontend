import { Chess } from 'chess.js';
import type { FromToSquare, LoadPgnParams, PromotionPiece } from '../../../shared/types/AnalysisTypes';
import { IsValidFen } from '../../chessboard/services/fenValidation';

export type ParsedPgn = LoadPgnParams;

export type FenParseResult =
  | { ok: true; game: ParsedPgn }
  | { ok: false; error: string };

function promotionOf(letter: string | undefined): PromotionPiece | undefined {
  if (letter === 'q' || letter === 'r' || letter === 'b' || letter === 'n') return letter;
  return undefined;
}

function normalizeFenInput(raw: string): string {
  return raw.trim().replace(/\s+/g, ' ');
}

export function parseFenPosition(raw: string): FenParseResult {
  const fen = normalizeFenInput(raw);
  if (!fen) {
    return { ok: false, error: 'Enter a FEN to load a position.' };
  }

  let chess: Chess;
  try {
    chess = new Chess(fen);
  } catch {
    const extra = IsValidFen(fen);
    return { ok: false, error: extra.msg || 'Invalid FEN.' };
  }

  const extra = IsValidFen(chess.fen());
  if (!extra.isValid && extra.msg) {
    return { ok: false, error: extra.msg };
  }

  const normalized = chess.fen();
  return {
    ok: true,
    game: {
      finalPos: normalized,
      moves: [],
      fens: [normalized],
      fromToSquares: [],
      termination: '',
      result: '*',
      blackPlayerName: 'Black',
      whitePlayerName: 'White',
    },
  };
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
