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