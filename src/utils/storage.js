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
  
  export const loadGameFromStorage = () => {
    const savedGame = localStorage.getItem(CONFIG.CHESS_GAME_KEY);
    if (!savedGame) {
      return { fen: CONFIG.START_FEN, moveHistory: [] }; // ✅ Ensure a default return value
    }

    try {
        const gameData = JSON.parse(savedGame);
        return { fen: gameData.fen, moveHistory: gameData.moveHistory || [] };
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.removeItem(CONFIG.CHESS_GAME_KEY); // 🔥 Clear corrupted data
        return { fen: CONFIG.START_FEN, moveHistory: [] };
    }
  };
  