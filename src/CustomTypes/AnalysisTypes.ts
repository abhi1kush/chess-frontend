import type { Square, Move, Piece, PieceSymbol } from 'chess.js';

/** One entry per `fens[i]` in analysis (same length and indices as `fens`). */
export type PgnAnalysisEntry = {
  evalScore: number | null;
  bestMove: string;
  /** Set for `i >= 1`: quality label for the move that created `fens[i]` (after Start Review). */
  moveClassification: string | null;
};

export type FromToSquare = {
  from: Square;
  to: Square;
  promotion: PieceSymbol | null | undefined;
};

export interface LoadPgnParams {
    finalPos: string, 
    moves: string[], 
    fens: string[], 
    fromToSquares: FromToSquare[], 
    termination: string, 
    result: string, 
    blackPlayerName: string, 
    whitePlayerName: string
};

export type MoveType = {
  from: Square;
  to: Square;
  promotionPiece?: 'q' | 'r' | 'b' | 'n';
}