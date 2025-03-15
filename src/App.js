import React, { useState, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import "./ChessGame.css"; // Import CSS file

const ChessGame = () => {
  const gameRef = useRef(new Chess()); // Persist game instance
  const [position, setPosition] = useState(gameRef.current.fen());
  const [moveHistory, setMoveHistory] = useState([]);
  const [invalidMove, setInvalidMove] = useState(false);
  const [whiteTime, setWhiteTime] = useState(600); // 10-minute timer
  const [blackTime, setBlackTime] = useState(600);

  const handleMove = ({ from, to }) => {
    const game = gameRef.current;
    const move = game.move({ from, to, promotion: "q" });

    if (move) {
      setPosition(game.fen());
      setMoveHistory((prev) => [...prev, move.san]); // Append move
      setInvalidMove(false);
    } else {
      setInvalidMove(true);
    }
  };

  return (
    <div className="chess-container">
      {/* Left Panel: Clocks */}
      <div className="left-panel">
        <div className="clock">♔ {whiteTime}s</div>
        <div className="clock">♚ {blackTime}s</div>
      </div>

      {/* Center Panel: Chessboard */}
      <div className="chess-board">
        <Chessboard
          position={position}
          onPieceDrop={(source, target) => handleMove({ from: source, to: target })}
          boardWidth={500}
        />
        {invalidMove && <p className="invalid-move">Invalid move!</p>}
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
