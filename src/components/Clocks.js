import React from "react";

const Clocks = ({ whiteTime, blackTime, isWhiteTurn }) => {
  return (
    <div className="left-panel">
      <div className={`clock ${!isWhiteTurn ? "active-turn" : ""}`}>♚ {blackTime}s</div>
      <div className={`clock ${isWhiteTurn ? "active-turn" : ""}`}>♔ {whiteTime}s</div>
    </div>
  );
};

export default Clocks;
