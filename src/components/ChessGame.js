import React, { useState, useRef, useEffect, useCallback } from "react";
import { useConfig } from "../context/configContext";
import { Chess } from "chess.js";
import Clocks from "./Clocks";
import MoveHistory from "./MoveHistory";
import { saveGameToStorage, loadGameFromStorage } from "../utils/storage";
import playSound from "../utils/soundUtils";
import ChessboardComponent from "./ChessboardComponent";
import { getMoveType, checkGameOver } from "../utils/helpers";
import TopContainer from "./TopContainer";
import "../styles/global.css";
import "../styles/pageLayout.css";
import "../styles/topContainer.css";

const ChessGame = () => {
  const gameRef = useRef(new Chess());
  const { theme, setTheme, enableSound, setEnableSound, timerDuration, setTimerDuration, isFlipped, setIsFlipped} = useConfig();
  const [moveHistory, setMoveHistory] = useState([]);
  const whiteTimeRef = useRef(timerDuration);
  const blackTimeRef = useRef(timerDuration);
  const [lastMove, setLastMove] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const renderCount = useRef(0); // 🛠️ Track renders
  const hasLoaded = useRef(false); // Prevent multiple loads
  const [gameStarted, setGameStarted] = useState(false);
  const timerRef = useRef(null); // Store the timer interval

    // ✅ Use callback to provide stable handlers (prevents unnecessary renders)
    const handleTimeUpdate = useCallback((turn, time) => {
      if (turn === "w") whiteTimeRef.current = time;
      else blackTimeRef.current = time;
    }, []);

    const handleGameOver = useCallback((winner) => {
      setGameResult(`${winner} Won by Time`);
      setGameOver(true);
    }, []);

  renderCount.current += 1;
  console.log(`🎯 ChessGame rendered (${renderCount.current})`);

  // ✅ Load game state on mount (Only Once)
  useEffect(() => {
    if (hasLoaded.current) return;
    console.log("🔥 useEffect -> Game Loaded");

    async function fetchData() {
      const success = await loadGameFromStorage(gameRef, setMoveHistory);
      if (success) console.log("✅ Game Loaded Successfully");
    }

    fetchData();
    hasLoaded.current = true;
  }, []);

  // ✅ Save game state ONLY if moveHistory actually changes
  useEffect(() => {
    console.log("💾 useEffect -> Saving Game, moveHistory:", moveHistory);
    saveGameToStorage(gameRef.current.fen(), moveHistory);
  }, [moveHistory.length]);
  
  const handleMove = useCallback(({ from, to }) => {
    console.log("🛠 handleMove called, from:", from, "to:", to);
    if (gameOver) return;

    try {
      const move = gameRef.current.move({ from, to, promotion: "q" });
      if (!move) return;

      console.log("✅ Valid Move:", move.san);
      setGameStarted(true);
      setLastMove({ from, to });

      // ✅ Prevent unnecessary re-renders
      setMoveHistory((prev) => {
        const newHistory = [...prev, move.san];
        console.log("✅ Move History Updated:", newHistory);
        return newHistory;
      });

      if (enableSound) playSound(getMoveType(move, gameRef.current));
      // checkGameOver(gameRef, whiteTime, blackTime, setGameOver, setGameResult);
    } catch (error) {
      console.warn("❌ Invalid move:", error);
    }
  }, [gameOver, enableSound]);

  return (
    <div className="main-container">
      <TopContainer
        resetGame={() => {
          console.log("🔄 Resetting game...");
          gameRef.current.reset();
          setMoveHistory([]);
          whiteTimeRef.current = timerDuration;
          blackTimeRef.current = timerDuration;
          setGameStarted(false);
          setGameOver(false);
          setGameResult("");
          setLastMove(null);
        }}
        flipBoard={() => setIsFlipped((prev) => !prev)}
        isFlipped={isFlipped}
        theme={theme}
        setTheme={setTheme}
        enableSound={enableSound}
        setEnableSound={setEnableSound}
      />
      <div className="middle-container">
        <div className={`chess-container ${theme}-theme`}>
          {/*gameStarted, gameOver, getTurn, onTimeUpdate, onGameOver, isFlipped, timerDuration  */}
          <Clocks
            gameStarted={gameStarted}
            gameOver={gameOver}
            getTurn={() => gameRef.current.turn()} 
            onTimeUpdate={handleTimeUpdate} 
            onGameOver={handleGameOver} 
            isFlipped={isFlipped} 
            timerDuration={timerDuration}
          />

          <ChessboardComponent
            position={gameRef.current.fen()}
            handleMove={handleMove}
            lastMove={lastMove}
            isFlipped={isFlipped}
          />
          <MoveHistory moveHistory={moveHistory} />
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
