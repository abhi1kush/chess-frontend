import React from "react";
import "../styles/topContainer.css"; // Add styles for the top bar
import Settings from "./Settings";

const TopBar = ({ resetGame, flipBoard, isFlipped}) => {
  return (
        <div className="top-bar">
            <button onClick={resetGame} className="action-button">Reset Board</button>
            <button onClick={flipBoard}className="action-button">{isFlipped ? "Unflip Board" : "Flip Board"}</button>
        </div>
  );
};

export default TopBar;