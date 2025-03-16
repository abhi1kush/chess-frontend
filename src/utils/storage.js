export const saveGameToStorage = (fen, history, whiteTime, blackTime) => {
    localStorage.setItem("chessGame", fen);
    localStorage.setItem("chessHistory", JSON.stringify(history));
    localStorage.setItem("whiteTime", whiteTime);
    localStorage.setItem("blackTime", blackTime);
  };
  
  export const loadGameFromStorage = (gameRef, setPosition, setMoveHistory, setWhiteTime, setBlackTime) => {
    const savedGame = localStorage.getItem("chessGame");
    const savedHistory = localStorage.getItem("chessHistory");
    const savedWhiteTime = localStorage.getItem("whiteTime");
    const savedBlackTime = localStorage.getItem("blackTime");
  
    if (savedGame) {
      gameRef.current.load(savedGame);
      setPosition(gameRef.current.fen());
    }
    if (savedHistory) setMoveHistory(JSON.parse(savedHistory));
    if (savedWhiteTime) setWhiteTime(parseInt(savedWhiteTime, 10));
    if (savedBlackTime) setBlackTime(parseInt(savedBlackTime, 10));
  };
  