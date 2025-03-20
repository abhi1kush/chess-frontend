import CONFIG from "../config";

export const saveGameToStorage = (fen, moveHistory) => {
    const gameData = {
      fen,
      moveHistory,
      // whiteTime,
      // blackTime,
    };
    localStorage.setItem(CONFIG.CHESS_GAME_KEY, JSON.stringify(gameData));
  };
  
  export const loadGameFromStorage = (gameRef, setMoveHistory) => {
    const savedGame = localStorage.getItem(CONFIG.CHESS_GAME_KEY);
    if (!savedGame) return; // No saved game, exit early
  
    try {
        const gameData = JSON.parse(savedGame);
        gameRef.current.load(gameData.fen); // ✅ Load saved FEN into the chess.js instance
        setMoveHistory(gameData.moveHistory || []); // ✅ Restore move history
        // setWhiteTime(gameData.whiteTime || CONFIG.TIMER_DURATION); // ✅ Restore timer values
        // setBlackTime(gameData.blackTime || CONFIG.TIMER_DURATION);
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.removeItem(CONFIG.CHESS_GAME_KEY); // 🔥 Clear corrupted data to prevent errors
    }
  };
  