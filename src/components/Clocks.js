import React, { useState, useRef, useEffect } from "react";
import "../styles/components/clock.css"; 

const Clocks = React.memo(({ gameStarted, gameOver, getTurn, onTimeUpdate, onGameOver, isFlipped, timerDuration }) => {
  const [whiteTime, setWhiteTime] = useState(timerDuration);
  const [blackTime, setBlackTime] = useState(timerDuration);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!gameStarted || gameOver) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    if (timerRef.current) return; // Prevent multiple intervals

    timerRef.current = setInterval(() => {
      setWhiteTime((prev) => {
        if (getTurn() === "w") {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          onTimeUpdate("w", prev - 1);
          return prev - 1;
        }
        return prev;
      });

      setBlackTime((prev) => {
        if (getTurn() === "b") {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          onTimeUpdate("b", prev - 1);
          return prev - 1;
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [gameStarted, gameOver, getTurn, onTimeUpdate]);

  // ✅ Use `useEffect` to handle game-over state updates
  useEffect(() => {
    if (whiteTime === 0) onGameOver("Black");
    if (blackTime === 0) onGameOver("White");
  }, [whiteTime, blackTime, onGameOver]);

  return (
    <div className="left-panel">
      <div className="clocks-container">
        {isFlipped ? (
          <>
            <div className={`clock ${getTurn() === "w" ? "active-turn" : ""}`}>⚪ {whiteTime}</div>
            <div className={`clock ${getTurn() !== "w" ? "active-turn" : ""}`}>⚫ {blackTime}</div>
          </>
        ) : (
          <>
            <div className={`clock ${getTurn() !== "w" ? "active-turn" : ""}`}>⚫ {blackTime}</div>
            <div className={`clock ${getTurn() === "w" ? "active-turn" : ""}`}>⚪ {whiteTime}</div>
          </>
        )}
      </div>
    </div>
  );
});

export default Clocks;
