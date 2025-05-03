import { PieceCode, SquareIdType } from "./CustomTypes"

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