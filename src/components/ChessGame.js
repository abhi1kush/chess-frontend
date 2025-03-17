import React, { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import Clocks from "./Clocks";
import MoveHistory from "./MoveHistory";
import { saveGameToStorage, loadGameFromStorage } from "../utils/storage";
import playSound from "../utils/soundUtils";
import ChessboardComponent from "./ChessboardComponent";
import { getMoveType, resetGame , checkGameOver} from "../utils/helpers";
import TopContainer from "./TopContainer";
import "../styles/global.css";
import "../styles/pageLayout.css"
import "../styles/topContainer.css"

const ChessGame = () => {
  const gameRef = useRef(new Chess());
  const [position, setPosition] = useState(gameRef.current.fen());
  const [moveHistory, setMoveHistory] = useState([]);
  const [whiteTime, setWhiteTime] = useState(600);
  const [blackTime, setBlackTime] = useState(600);
  const [gameStarted, setGameStarted] = useState(false);
  const [lastMove, setLastMove] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("chessTheme") || "classic");
  const [enableSound, setEnableSound] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");

  // Flip Board
  const flipBoard = () => setIsFlipped((prev) => !prev);

  // Load game state from localStorage
  useEffect(() => {
    async function fetchData() {
      // (gameRef, setPosition, setMoveHistory, setWhiteTime, setBlackTime, setTheme)
      await loadGameFromStorage(gameRef, setPosition, setMoveHistory, setWhiteTime, setBlackTime, setTheme);
      setIsLoaded(true); // ✅ Only after loading is complete
    }
    fetchData();
  }, []);

  // Save game state on updates (Only after loading is complete)
  useEffect(() => {
    if (!isLoaded) return;  // ✅ Prevent saving before loading is done
    // (fen, moveHistory, whiteTime, blackTime)
    saveGameToStorage(gameRef.current.fen(), moveHistory, whiteTime, blackTime, theme);
  }, [position, moveHistory, whiteTime, blackTime, theme, isLoaded]); 

  // Timer Logic
  useEffect(() => {
    if (!gameStarted) return;
    const timer = setInterval(() => {
      gameRef.current.turn() === "w"
        ? setWhiteTime((prev) => Math.max(prev - 1, 0))
        : setBlackTime((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [gameStarted, position, gameOver]);

  // Handle piece movement
  const handleMove = ({ from, to }) => {
    if (gameOver) return; // Prevent moves after game over
    try {
      const move = gameRef.current.move({ from, to, promotion: "q" });
      if (!move) return;

      if (!gameStarted) setGameStarted(true);
      setPosition(gameRef.current.fen());
      setMoveHistory((prev) => [...prev, move.san]);
      setLastMove({ from, to });
      if (enableSound) {
        playSound(getMoveType(move, gameRef.current));
      }
      // gameRef, whiteTime, blackTime, setGameOver, setGameResult)
      checkGameOver(gameRef, whiteTime, blackTime, setGameOver, setGameResult); // Check if game ended after this move
    } catch (error) {
      console.warn("Invalid move:", error);
    }
  };

  const resetGameHandler = () => {
    gameRef.current.reset();
    setPosition(gameRef.current.fen());
    setMoveHistory([]);
    setWhiteTime(100);
    setBlackTime(100);
    setGameStarted(false);
    setGameOver(false);
    setGameResult("");
    setLastMove(null)
  };
  

  return (
    <div className="main-container">
      <TopContainer
        resetGame={resetGameHandler}
        flipBoard={flipBoard}
        isFlipped={isFlipped}
        theme={theme}
        setTheme={setTheme}
        enableSound={enableSound}
        setEnableSound={setEnableSound}
      />
      <div className="middle-container">
        <div className="left-menu-bar">
        </div>
        <div className={`chess-container ${theme}-theme`}>
          <div className="left-panel"> 
            <Clocks whiteTime={whiteTime} blackTime={blackTime} isWhiteTurn={gameRef.current.turn() === "w"} isFlipped={isFlipped}/>
          </div>
          <div className="centre-area">
            <ChessboardComponent position={position} handleMove={handleMove} lastMove={lastMove} isFlipped={isFlipped}/>
            {gameOver && <div className="game-over-overlay"><div className="game-over-message">
              <p>
              {gameResult}
              </p>
              <button className="restart-button" onClick={resetGameHandler}>Restart Game</button>
              </div></div>}
          </div>
          <div className="right-panel">
            <MoveHistory moveHistory={moveHistory} />
          </div>
        </div>
        <div className="ad-banner"></div>
      </div>
      <div className="bottom-container">
      </div>
      </div>
  );
};
export default ChessGame;