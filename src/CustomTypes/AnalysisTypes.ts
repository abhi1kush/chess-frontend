import { PieceCode, SquareIdType } from "./CustomTypes"

/** One entry per `fens[i]` in analysis (same length and indices as `fens`). */
export type PgnAnalysisEntry = {
  evalScore: number | null;
  bestMove: string;
  /** Set for `i >= 1`: quality label for the move that created `fens[i]` (after Start Review). */
  moveClassification: string | null;
};

export interface LoadPgnParams {
    finalPos: string, 
    moves: string[], 
    fens: string[], 
    fromToSquares: {from: string, to: string}, 
    termination: string, 
    result: string, 
    blackPlayerName: string, 
    whitePlayerName: string
};

export type MoveType = { from: SquareIdType, to: SquareIdType, promotionPiece: PieceCode};