import { Chess } from 'chess.js';

export const FenToBoard = (fen) => {
    const game = new Chess();
    game.load(fen);
    const boardArray = game.board();
    const board = boardArray.map((rank, rankIndex) => rank.map((square, fileIndex) => {
      return ({
        id: square ? square.square : `${"abcdefgh"[fileIndex]}${8 - rankIndex}`, 
        piece: square ? {type: square.type, color: square.color} : null,
      })
    }));
    return board;
  };

  export const GetPlayerToMove = (fen) => {
    return fen.split(" ")?.[1]
  }