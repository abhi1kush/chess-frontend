import React, { useState, useRef, useEffect, useCallback, use } from "react";
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

const ChessGame = ({onEnterAnalysis}) => {
  const gameRef = useRef(new Chess());
  const { theme, setTheme, enableSound, setEnableSound , timerDuration, setTimerDuration, isFlipped, setIsFlipped} = useConfig();
  const [moveHistory, setMoveHistory] = useState([]);
  const whiteTimeRef = useRef(timerDuration);
  const blackTimeRef = useRef(timerDuration);
  const [lastMove, setLastMove] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const hasLoaded = useRef(false); 
  const [isReset, setIsReset] = useState(false);

    // Use callback to provide stable handlers (prevents unnecessary renders)
    const handleTimeUpdate = useCallback((turn, time) => {
      if (turn === "w") whiteTimeRef.current = time;
      else blackTimeRef.current = time;
    }, []);

    const handleGameOver = useCallback((winner) => {
      setGameResult(`${winner} Won by Time`);
      setGameOver(true);
    }, []);

  console.log(`🎯 ChessGame rendered`);

  //Load game state on mount (Only Once)
  useEffect(() => {
    if (hasLoaded.current) return;
    console.log("🔥 useEffect -> Game Loaded");

    async function fetchData() {
      const savedData = await loadGameFromStorage();
      if (savedData) {
        gameRef.current.load(savedData.fen); // ✅ Load saved FEN into chess.js instance
        setMoveHistory(savedData.moveHistory || []); // ✅ Ensure moveHistory is always an array
        console.log("Game Loaded Successfully", savedData);
      }
    }

    fetchData();
    hasLoaded.current = true;
  }, []);

  // Save game state ONLY if moveHistory actually changes
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

      console.log("Valid Move:", move.san);
      setLastMove({ from, to });

      // Prevent unnecessary re-renders
      setMoveHistory((prev) => {
        const newHistory = [...prev, move.san];
        console.log(" Move History Updated:", newHistory);
        return newHistory;
      });

      if (enableSound) playSound(getMoveType(move, gameRef.current));
      checkGameOver(gameRef, whiteTimeRef.current, blackTimeRef.current, setGameOver, setGameResult);
    } catch (error) {
      console.warn("❌ Invalid move:", error);
    }
  }, [gameOver, enableSound]);

  const resetGameHandler = (timerDuration) => {
    setGameOver(true);
    console.log("🔄 Resetting game...");
    gameRef.current.reset();
    setMoveHistory([]);
    whiteTimeRef.current = timerDuration;
    blackTimeRef.current = timerDuration;
    setGameOver(false);
    setGameResult("");
    setLastMove(null);
  }

    // Save game state & switch to Analysis Mode
    const enterAnalysisMode = () => {
      saveGameToStorage(gameRef.current.fen(), moveHistory);
      onEnterAnalysis();
    };

  return (
    <div className="main-container">
      <TopContainer
        resetGame={() => {resetGameHandler(timerDuration)}}
        flipBoard={() => setIsFlipped((prev) => !prev)}
        isFlipped={isFlipped}
        theme={theme}
        setTheme={setTheme}
        enableSound={enableSound}
        setEnableSound={setEnableSound}
        enterAnalysisMode={enterAnalysisMode}
      />
      <div className="middle-container">
        <div className="left-menu-bar"><h3>Chess Game</h3></div>
        <div className={`chess-container ${theme}-theme`}>
        <div className="left-panel"> 
          {/*gameStarted, gameOver, getTurn, onTimeUpdate, onGameOver, isFlipped, timerDuration  */}
          <Clocks
            gameStarted={moveHistory.length > 0}
            gameOver={gameOver}
            setGameOver = {setGameOver}
            setGameResult = {setGameResult}
            getTurn={() => gameRef.current.turn()} 
            onTimeUpdate={handleTimeUpdate} 
            onGameOver={handleGameOver} 
            isFlipped={isFlipped} 
            timerDuration={timerDuration}
            isReset={isReset}
          />
          </div>
          <div className="centre-area">
          <ChessboardComponent
            position={gameRef.current.fen()}
            handleMove={handleMove}
            lastMove={lastMove}
            isFlipped={isFlipped}
          />
          {gameOver && <div className="game-over-overlay"><div className="game-over-message">
              {() => {console.log("Game Over %s", gameResult) }}
              <p>
              {gameResult}
              </p>
              <button className="restart-button" onClick={() =>{resetGameHandler(timerDuration)}}>Restart Game</button>
              </div></div>}
          </div>
          <div className="right-panel">
          <MoveHistory moveHistory={moveHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
