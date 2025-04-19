import { useState } from "react";
import "../../../styles/components/MoveToggle.css";

function MoveToggle() {
  const [currentMove, setCurrentMove] = useState("white");

  const handleToggle = (color) => {
    setCurrentMove(color);
  };

  return (
    <div className="move-toggle">
      <button
        className={`move-option ${currentMove === "white" ? "active" : ""}`}
        onClick={() => handleToggle("white")}
      >
        White
      </button>
      <button
        className={`move-option ${currentMove === "black" ? "active" : ""}`}
        onClick={() => handleToggle("black")}
      >
        Black
      </button>
    </div>
  );
}

export default MoveToggle;