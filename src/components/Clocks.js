// src/components/Clocks.js
import React, { useState, useEffect, useRef, useCallback } from 'react';

const Clocks = ({ gameStarted, gameOver, getTurn, onTimeUpdate, onGameOver, isFlipped, timerDuration, setGameOver, setGameResult }) => {
  const [whiteTime, setWhiteTime] = useState(timerDuration);
  const [blackTime, setBlackTime] = useState(timerDuration);
  const timerRef = useRef(null);

  const updateClocks = useCallback(() => {
    const turn = getTurn();
    if (turn === 'w') {
      setWhiteTime((prev) => prev - 1);
      onTimeUpdate('w', whiteTime - 1);
    } else {
      setBlackTime((prev) => prev - 1);
      onTimeUpdate('b', blackTime - 1);
    }
  }, [getTurn, onTimeUpdate, whiteTime, blackTime]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      timerRef.current = setInterval(updateClocks, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [gameStarted, gameOver, updateClocks]);

  useEffect(() => {
    if (whiteTime < 0) {
      clearInterval(timerRef.current);
      onGameOver('Black');
    } else if (blackTime < 0) {
      clearInterval(timerRef.current);
      onGameOver('White');
    }
  }, [whiteTime, blackTime, onGameOver]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="clocks">
      <div className={`clock ${isFlipped ? 'clock-black' : 'clock-white'}`}>
        {formatTime(isFlipped ? blackTime : whiteTime)}
      </div>
      <div className={`clock ${isFlipped ? 'clock-white' : 'clock-black'}`}>
        {formatTime(isFlipped ? whiteTime : blackTime)}
      </div>
    </div>
  );
};

export default Clocks;