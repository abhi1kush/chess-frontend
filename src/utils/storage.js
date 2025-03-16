const chessGameKey = "chessGame"

// class StorageManager {
//     constructor(fen, moveHistory, whiteTime, blackTime) {
//         this.fen
//     }
// }

export const saveGameToStorage = (fen, moveHistory, whiteTime, blackTime) => {
    const gameData = {
      fen,
      moveHistory,
      whiteTime,
      blackTime,
    };
    localStorage.setItem(chessGameKey, JSON.stringify(gameData));
  };
  
  export const loadGameFromStorage = (gameRef, setPosition, setMoveHistory, setWhiteTime, setBlackTime) => {
    const savedGame = localStorage.getItem(chessGameKey);
    if (!savedGame) return; // No saved game, exit early
  
    try {
        const gameData = JSON.parse(savedGame);
        gameRef.current.load(gameData.fen); // ✅ Load saved FEN into the chess.js instance
        setPosition(gameData.fen); // ✅ Update board position in React state
        setMoveHistory(gameData.moveHistory || []); // ✅ Restore move history
        setWhiteTime(gameData.whiteTime || 600); // ✅ Restore timer values
        setBlackTime(gameData.blackTime || 600);
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.removeItem(chessGameKey); // 🔥 Clear corrupted data to prevent errors
    }
  };
  