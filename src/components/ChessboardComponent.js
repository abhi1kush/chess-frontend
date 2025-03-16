import React from "react";
import { Chessboard } from "react-chessboard";
import "../styles/ChessBoard.css"
import "../styles/themes.css"

const ChessboardComponent = ({ position, handleMove, lastMove }) => {
  const getSquareStyles = () => {
    if (!lastMove) return {};
    return {
      [lastMove.from]: { backgroundColor: "rgba(255, 255, 0, 0.5)" },
      [lastMove.to]: { backgroundColor: "rgba(0, 255, 0, 0.5)" },
    };
  };

  return (
    <div className="chess-board">
      <Chessboard
        position={position}
        onPieceDrop={(source, target) => handleMove({ from: source, to: target })}
        boardWidth={window.innerHeight * 0.8}
        customBoardStyle={{ maxWidth: "80vw" }}
        customSquareStyles={getSquareStyles()}
        customDarkSquareStyle={{ backgroundColor: "var(--dark-square)" }}
        customLightSquareStyle={{ backgroundColor: "var(--light-square)" }}
      />
    </div>
  );
};

export default ChessboardComponent;