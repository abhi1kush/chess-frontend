import { Move, Chess } from "chess.js";
import CONFIG from "../../config"
import { FromToSquare } from "../types/AnalysisTypes";

export const getMoveType = (move : Move, game: Chess): string => {
    if (move.isCapture()) {
        return "capture"
    } 
    if (game.isCheckmate()) {
        return "checkmate"
    } 
    if (game.inCheck()) {
        return "check"
    } 
    return "move"
}

const getCheckMateMessage = (turn: string) => {
    const turnColor = turn === "w" ? "Black" : "White"
    return turnColor + " " + CONFIG.CHECKMATE_MESSAGE
}


  // Handle Game Over
export const checkGameOver = (game: Chess) => {
        if (game.isCheckmate()) {
          return {
            isGameOver: true, 
            gameResult: getCheckMateMessage(game.turn())
          }
        } else if (game.isDraw()) {
          return {
            isGameOver: true,
            gameResult: "Game Drawn!"
          }
        } 
        return {isGameOver: false, gameResult: ""}
      };

   
type ChessBoard = ReturnType<Chess['board']>;
export const getKingPosition = (chessBoard : ChessBoard, color: string) => {
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const square = chessBoard[rank][file];
      if (square && square.type === 'k' && square.color === color) {
        return { rank, file };
      }
    }
  }
  return null;
};

export const getWinnerColor = (result: string) => {
  if (result === '1-0') return 'w';
  if (result === '0-1') return 'b';
  return null; // Draw or other result
};

export const getLastMoveSquareStyles = (lastMove: FromToSquare) => {
  if (lastMove) {
    return {
      [lastMove.from]: { backgroundColor: 'var(--last-move-from)' },
      [lastMove.to]: { backgroundColor: 'var(--last-move-to)' },
    }
  }
  return null
};


export const normalizeEval = (evalScore : number, fen: string) => {
  const sideToMove = fen.split(" ")[1];
  return sideToMove === "w" ? evalScore : -evalScore;
}