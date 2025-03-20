import React from "react";
import { Chessboard } from "react-chessboard";
import "../styles/themes.css"

const ChessboardComponent = ({ position, handleMove, lastMove , isFlipped}) => {
  const getSquareStyles = () => {
    if (!lastMove) return {};
    return {
      [lastMove.from]: { backgroundColor: "var(--last-move-from)" },
      [lastMove.to]: { backgroundColor: "var(--last-move-to)" },
    };
  };
  console.log("🛠 ChessboardComponent rendred");
  return (
    <div className="chess-board">
      <Chessboard
        position={position}
        onPieceDrop={(source, target) => handleMove({ from: source, to: target })}
        boardOrientation={isFlipped ? "black" : "white"}
        // boardWidth={window.innerHeight * 0.8}
        // customBoardStyle={{ maxWidth: "80vw" }}
        customSquareStyles={getSquareStyles()}
        customDarkSquareStyle={{ backgroundColor: "var(--dark-square)" }}
        customLightSquareStyle={{ backgroundColor: "var(--light-square)" }}
      />
    </div>
  );
};

export default ChessboardComponent;