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
export const checkGameOver = (game, setGameOver, setGameResult) => {
        console.log("Checking game over...", );
        if (game.isCheckmate()) {
          setGameOver(true);
          setGameResult(getCheckMateMessage(game.turn()));
        } else if (game.isDraw()) {
          setGameOver(true);
          setGameResult("Game Drawn!");
        } 
      };