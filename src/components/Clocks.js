import React, { useState, useRef, useEffect } from "react";
import "../styles/components/clock.css"; 
import PropTypes from "prop-types";

const Clocks = React.memo((props) => {
  const [whiteTime, setWhiteTime] = useState(10);
  const [blackTime, setBlackTime] = useState(10);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!props.gameStarted || props.gameOver) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    if (timerRef.current) return; // Prevent multiple intervals

    timerRef.current = setInterval(() => {
      setWhiteTime((prev) => {
        if (props.getTurn() === "w") {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          props.onTimeUpdate("w", prev - 1);
          return prev - 1;
        }
        return prev;
      });

      setBlackTime((prev) => {
        if (props.getTurn() === "b") {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          props.onTimeUpdate("b", prev - 1);
          return prev - 1;
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [props.gameStarted, props.gameOver, props.getTurn, props.onTimeUpdate]);

  // ✅ Use `useEffect` to handle game-over state updates
  useEffect(() => {
    if (whiteTime === 0) props.onGameOver("Black");
    if (blackTime === 0) props.onGameOver("White");
  }, [whiteTime, blackTime, props.onGameOver]);

  return (
    <div className="left-panel">
      <div className="clocks-container">
        {props.isFlipped ? (
          <>
            <div className={`clock ${props.getTurn() === "w" ? "active-turn" : ""}`}>⚪ {whiteTime}</div>
            <div className={`clock ${props.getTurn() !== "w" ? "active-turn" : ""}`}>⚫ {blackTime}</div>
          </>
        ) : (
          <>
            <div className={`clock ${props.getTurn() !== "w" ? "active-turn" : ""}`}>⚫ {blackTime}</div>
            <div className={`clock ${props.getTurn() === "w" ? "active-turn" : ""}`}>⚪ {whiteTime}</div>
          </>
        )}
      </div>
    </div>
  );
});

export default Clocks;

Clocks.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  getTurn: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onGameOver: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  timerDuration: PropTypes.number.isRequired,
};