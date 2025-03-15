import React, { useState, useRef , useEffect} from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import "./styles/ChessGame.css"; // Import CSS file
import "./styles/themes.css"; // Import CSS file
import moveSound from "./sounds/move.mp3";
import captureSound from "./sounds/capture.mp3";
import checkSound from "./sounds/capture.mp3";
import checkmateSound from "./sounds/capture.mp3";
import wrongSound from "./sounds/wrong.mp3"

const ChessGame = () => {
  const gameRef = useRef(new Chess()); // Persist game instance
  const [position, setPosition] = useState(gameRef.current.fen());
  const [moveHistory, setMoveHistory] = useState([]);
  const [invalidMove, setInvalidMove] = useState(false);
  const [whiteTime, setWhiteTime] = useState(600); // 10-minute timer
  const [blackTime, setBlackTime] = useState(600);
  const [isWhiteTurn, setIsWhiteTurn] = useState(true); // Track whose turn it is
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
  const [lastMove, setLastMove] = useState(null); // Store last move
  const [theme, setTheme] =  useState(localStorage.getItem("chessTheme") || "classic");     // Load theme from localStorage or use default "classic"
  const [showSettings, setShowSettings] = useState(false);
  const [enableSound, setEnableSound] = useState(true);

    // Save theme to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem("chessTheme", theme);
    }, [theme]);

  useEffect(() => {
    if (!gameStarted) return; // If the game hasn't started, don't run the timer

    const timer = setInterval(() => {
      if (gameRef.current.turn() === "w") {
        setIsWhiteTurn(true);
        setWhiteTime((prev) => (prev > 0 ? prev - 1 : 0));
      } else {
        setIsWhiteTurn(false);
        setBlackTime((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, position]); // Depend on game start and position updates

  const handleMove = ({ from, to }) => {
    const game = gameRef.current; // Ensure we're using the correct instance
    console.log(`Attempting move: ${from} to ${to}`);
    try {
    const move = game.move({ from, to, promotion: "q" });

    console.log("Valid move:", move); // 🔍 Log successful move
    setInvalidMove(false);
   
    // Refresh game state
    // gameRef.current = new Chess(game.fen()); 

      
      if (!gameStarted) {
        setGameStarted(true); // Start the game on the first move
      }

      // Check if the game has ended
      if (game.isCheckmate()) {
        console.log("Checkmate! Game Over.");
      } else if (game.isDraw()) {
        console.log("Draw! Game Over.");
      }
      setPosition(game.fen());
      setMoveHistory((prev) => [...prev, move.san]); // Append move
      setLastMove({ from, to }); // Store last move squares
      // setTurn(game.turn()); // Update turn ('w' or 'b')
      if (move.flags.includes("c")) {
        playSound("capture");
      } else if (game.isCheckmate()) {
        playSound("checkmate");
      } else if (game.inCheck()) {
        playSound("check");
      } else {
        playSound("move");
      }
    }catch(error) {
      var wrong = new Audio(wrongSound);
      wrong.play()
      console.warn("Invalid move detected:", { from, to });
      console.error("Error making move:", error);
      setInvalidMove(true);
      setTimeout(() => setInvalidMove(false), 1000);
    }
  };

    // Generate square styles for highlighting last move
    const getSquareStyles = () => {
      if (!lastMove) return {};
      return {
        [lastMove.from]: { backgroundColor: "rgba(255, 255, 0, 0.5)" }, // Light Yellow
        [lastMove.to]: { backgroundColor: "rgba(0, 255, 0, 0.5)" }, // Light Green
      };
    };

    const playSound = (type) => {
      if (!enableSound) return;
      let sound;
      switch (type) {
        case "move":
          sound = new Audio(moveSound);
          break;
        case "capture":
          sound = new Audio(captureSound);
          break;
        case "check":
          sound = new Audio(checkSound);
          break;
        case "checkmate":
          sound = new Audio(checkmateSound);
          break;
        default:
          return;
      }
      sound.play();
    };

  return (
      <div className={`chess-container ${theme}-theme`}>
 {/* Settings Dropdown */}
{/* Settings Button */}
<div className="settings">
<button className="settings-button" onClick={() => setShowSettings(!showSettings)}>
    ⚙ Settings
  </button>
  {showSettings && (
    <div className="settings-menu">
      <h4>Select Theme:</h4>
      <select
        onChange={(e) => {
          setTheme(e.target.value); // Change theme
          setShowSettings(false); // Auto-hide dropdown
        }}
        value={theme}
      >
        <option value="classic">Classic</option>
        <option value="wood">Wood</option>
        <option value="marble">Marble</option>
        <option value="dark">Dark Mode</option>
      </select>
      <label>
              <input
                type="checkbox"
                checked={enableSound}
                onChange={(e) => setEnableSound(e.target.checked)}
              />
              Enable Move Sound
            </label>
    </div>
  )}
      </div>

       {/* Left Panel: Clocks */}
       <div className="left-panel">
        <div className={`clock ${!isWhiteTurn ? "active-turn" : ""}`}>♚ {blackTime}s</div>
        <div className={`clock ${isWhiteTurn ? "active-turn" : ""}`}>♔ {whiteTime}s</div>
      </div>


      {/* Center Panel: Chessboard */}
      <div className="chess-board">
        <Chessboard
          position={position}
          onPieceDrop={(source, target) => handleMove({ from: source, to: target })}
          boardWidth={500}
          customSquareStyles={getSquareStyles()} // Apply highlight styles
          boardStyle={{
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
          customDarkSquareStyle={{ backgroundColor: "var(--dark-square)" }}
          customLightSquareStyle={{ backgroundColor: "var(--light-square)" }}
        />
        {/* Show invalid move message */}
        {/* {invalidMove && <p className="invalid-move">Invalid move!</p>} */}
      </div>

      {/* Right Panel: Move History */}
      <div className="right-panel">
        <div className="move-history">
          <h3>Move History</h3>
          <ol>
            {moveHistory.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
