import { Chess } from 'chess.js';
import { PieceType } from '../../CustomTypes/CustomTypes'
export type BoardType = Record<string, PieceType | null>;

export const FenToBoard = (fen: string): BoardType => {
  const board: BoardType = {};
  try {
    const game = new Chess();
    game.load(fen);
    const boardArray = game.board();

    for (let rankIndex = 0; rankIndex < 8; rankIndex++) {
      for (let fileIndex = 0; fileIndex < 8; fileIndex++) {
        const square = boardArray[rankIndex][fileIndex];
        const squareId = `${"abcdefgh"[fileIndex]}${8 - rankIndex}`;
        board[squareId] = square ? { type: square.type, color: square.color } : null;
      }
    }
  } catch (error) {
    console.error("FenToBoard error", error, fen);
  }
  return board;
};

export const GetPlayerToMove = (fen: string): string | undefined => {
  return fen.split(" ")?.[1];
};