import React from "react";
import { Chessboard } from "react-chessboard";
import "../styles/themes.css"
import PropTypes from "prop-types";

const ChessboardComponent = (props) => {
  const getSquareStyles = () => {
    if (!props.lastMove) return {};
    return {
      [props.lastMove.from]: { backgroundColor: "var(--last-move-from)" },
      [props.lastMove.to]: { backgroundColor: "var(--last-move-to)" },
    };
  };
  console.log("🛠 ChessboardComponent rendred");
  return (
    <div className="chess-board">
      <Chessboard
        position={props.position}
        onPieceDrop={(source, target) => props.handleMove({ from: source, to: target })}
        boardOrientation={props.isFlipped ? "black" : "white"}
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

ChessboardComponent.propTypes = {   
  position: PropTypes.string.isRequired,
  handleMove: PropTypes.func.isRequired,
  lastMove: PropTypes.object.isRequired,
  isFlipped: PropTypes.bool.isRequired,
};