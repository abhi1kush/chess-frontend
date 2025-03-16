import React, { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import Clocks from "./Clocks";
import MoveHistory from "./MoveHistory";
import Settings from "./Settings";
import { saveGameToStorage, loadGameFromStorage } from "../utils/storage";
import playSound from "../utils/soundUtils";
import "../styles/ChessGame.css"; 
import "../styles/global.css";
import ChessboardComponent from "./ChessboardComponent";
import { getMoveType } from "../utils/helpers";

const ChessGame = () => {
  const gameRef = useRef(new Chess());
  const [data, setData] = useState(null);
  const [position, setPosition] = useState(gameRef.current.fen());
  const [moveHistory, setMoveHistory] = useState([]);
  const [whiteTime, setWhiteTime] = useState(600);
  const [blackTime, setBlackTime] = useState(600);
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [lastMove, setLastMove] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("chessTheme") || "classic");
  const [enableSound, setEnableSound] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load game state from localStorage
  useEffect(() => {
    async function fetchData() {
      // (gameRef, setPosition, setMoveHistory, setWhiteTime, setBlackTime)
      loadGameFromStorage(gameRef, setPosition, setMoveHistory, setWhiteTime, setBlackTime);
      setIsLoaded(true); // ✅ Only after loading is complete
    }
    fetchData();
  }, []);

  // Save game state on updates (Only after loading is complete)
  useEffect(() => {
    if (!isLoaded) return;  // ✅ Prevent saving before loading is done
    // (fen, moveHistory, whiteTime, blackTime)
    saveGameToStorage(gameRef.current.fen(), moveHistory, whiteTime, blackTime);
  }, [position, moveHistory, whiteTime, blackTime, isLoaded]); 

  // Timer Logic
  useEffect(() => {
    if (!gameStarted) return;
    const timer = setInterval(() => {
      setIsWhiteTurn(gameRef.current.turn() === "w");
      gameRef.current.turn() === "w"
        ? setWhiteTime((prev) => Math.max(prev - 1, 0))
        : setBlackTime((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [gameStarted, position]);

  // Handle piece movement
  const handleMove = ({ from, to }) => {
    try {
      const move = gameRef.current.move({ from, to, promotion: "q" });
      if (!move) return;

      if (!gameStarted) setGameStarted(true);
      setPosition(gameRef.current.fen());
      setMoveHistory((prev) => [...prev, move.san]);
      setLastMove({ from, to });
      playSound(getMoveType(move, gameRef.current), enableSound);
    } catch (error) {
      console.warn("Invalid move:", error);
    }
  };

  return (
    <div className={`chess-container ${theme}-theme`}>
      <Settings theme={theme} setTheme={setTheme} enableSound={enableSound} setEnableSound={setEnableSound} />
      <Clocks whiteTime={whiteTime} blackTime={blackTime} isWhiteTurn={isWhiteTurn} />
      <ChessboardComponent position={position} handleMove={handleMove} lastMove={lastMove} />
      <MoveHistory moveHistory={moveHistory} />
    </div>
  );
};

export default ChessGame;