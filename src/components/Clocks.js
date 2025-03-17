import React from "react";
import "../styles/components/clock.css" 

const Clocks = ({ whiteTime, blackTime, isWhiteTurn , isFlipped}) => {
  return (
    <div className="left-panel">
    <div className="clocks-container">
     {isFlipped ? (
        <>
          <div className={`clock ${isWhiteTurn ? "active-turn" : ""}`}>⚪ {whiteTime}</div>
          <div className={`clock ${!isWhiteTurn ? "active-turn" : ""}`}>⚫ {blackTime}</div>
        </>
      ) : (
        <>
          <div className={`clock ${!isWhiteTurn ? "active-turn" : ""}`}>⚫ {blackTime}</div>
          <div className={`clock ${isWhiteTurn ? "active-turn" : ""}`}>⚪ {whiteTime}</div>
        </>
      )}
    </div>
    </div>
  );
};

export default Clocks;
