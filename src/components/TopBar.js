import React from "react";
import "../styles/topContainer.css"; // Add styles for the top bar
import Settings from "./Settings";

const TopBar = ({ resetGame, flipBoard, isFlipped}) => {
  return (
    <div className="top-container">
        <div className="top-bar">
            <button onClick={resetGame}>♻️ Reset Board</button>
            <button onClick={flipBoard}>{isFlipped ? "🔄 Unflip Board" : "🔃 Flip Board"}</button>
        </div>
    </div>
  );
};

export default TopBar;