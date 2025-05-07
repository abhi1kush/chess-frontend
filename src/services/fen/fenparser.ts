import { Chess } from 'chess.js';
import { BoardType, PieceColor, SquareId } from '../../CustomTypes/CustomTypes'
import { ClearBoardPosition } from '../../config'

export const FenToBoard = (fen: string): BoardType => {
  const board: BoardType = ClearBoardPosition;
  try {
    const game = new Chess();
    game.load(fen);
    const boardArray = game.board();

    for (let rankIndex = 0; rankIndex < 8; rankIndex++) {
      for (let fileIndex = 0; fileIndex < 8; fileIndex++) {
        const square = boardArray[rankIndex][fileIndex];
        const squareId: SquareId = `${"abcdefgh"[fileIndex]}${8 - rankIndex}`;
        board[squareId] = square ? { type: square.type, color: square.color } : null;
      }
    }
  } catch (error) {
    console.error("FenToBoard error", error, fen);
  }
  return board;
};

export const GetPlayerToMove = (fen: string): PieceColor => {
  if (fen.split(" ")?.[1] === "w") {
    return 'w'
  };
  return 'b';
};