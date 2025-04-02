import CONFIG from "../config"

export const getMoveType = (move, game) => {
    if (move.flags.includes("c")) {
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

const getCheckMateMessage = (turn) => {
    const turnColor = turn === "w" ? "Black" : "White"
    return turnColor + " " + CONFIG.CHECKMATE_MESSAGE
}

  // Handle Game Over
export const checkGameOver = (game) => {
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

   
export const getKingPosition = (chessBoard, color) => {
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

export const getWinnerColor = (result) => {
  if (result === '1-0') return 'w';
  if (result === '0-1') return 'b';
  return null; // Draw or other result
};