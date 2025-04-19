import { useState } from "react";
import "../../../styles/components/MoveToggle.css";

function MoveToggle({playerToMove, setPlayerToMove}) {
  const handleToggle = (color) => {
    setPlayerToMove(color);
  };

  return (
    <div className="move-toggle">
      <button
        className={`move-option ${playerToMove === "w" ? "active" : ""}`}
        onClick={() => handleToggle("w")}
      >
        White
      </button>
      <button
        className={`move-option ${playerToMove === "b" ? "active" : ""}`}
        onClick={() => handleToggle("b")}
      >
        Black
      </button>
    </div>
  );
}

export default MoveToggle;