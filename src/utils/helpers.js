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

  // Reset Game
 export const resetGame = (gameRef, setPosition, setMoveHistory) => {
    gameRef.current.reset();
    setPosition(gameRef.current.fen());
    setMoveHistory([]);
  };

  // Handle Game Over
export const checkGameOver = (gameRef, whiteTime, blackTime, setGameOver, setGameResult) => {
        console.log("Checking game over... whitTiem %d, blackTime %d", whiteTime, blackTime);
        if (gameRef.current.isCheckmate()) {
          setGameOver(true);
          setGameResult(gameRef.current.turn() === "w" ? "Black Wins by Checkmate!" : "White Wins by Checkmate!");
        } else if (gameRef.current.isDraw()) {
          setGameOver(true);
          setGameResult("Game Drawn!");
        } else if (whiteTime === 0 || whiteTime == null) {
          setGameOver(true);
          setGameResult("Black Wins on Time!");
        } else if (blackTime === 0 || blackTime == null) {
          setGameOver(true);
          setGameResult("White Wins on Time!");
        }
      };