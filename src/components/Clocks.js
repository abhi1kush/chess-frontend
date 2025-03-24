// src/components/Clocks.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/clock.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setGameOver, setGameResult } from '../redux/actions/gameActions';

const Clocks = React.memo(({ gameStarted, gameOver, getTurn, isFlipped, timerDuration }) => {
  const dispatch = useDispatch();
  const [whiteTime, setWhiteTime] = useState(timerDuration);
  const [blackTime, setBlackTime] = useState(timerDuration);
  const timerRef = useRef(null);
  const currentTurn = useRef(getTurn());

  useEffect(() => {
    if (getTurn() !== currentTurn.current) {
      currentTurn.current = getTurn();
    }
  }, [getTurn]);

  useEffect(() => {
    if (gameStarted) {
      setWhiteTime(timerDuration);
      setBlackTime(timerDuration);
    }
  }, [gameStarted, gameOver, timerDuration]);

  useEffect(() => {
    if (!gameStarted || gameOver) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setWhiteTime(timerDuration);
      setBlackTime(timerDuration);
      return;
    }

    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      if (currentTurn.current === 'w') {
        setWhiteTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            dispatch(setGameResult('Black Won by Time'));
            dispatch(setGameOver(true));
            return 0;
          }
          return prev - 1;
        });
      } else {
        setBlackTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            dispatch(setGameResult('White Won by Time'));
            dispatch(setGameOver(true));
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [gameStarted, gameOver, timerDuration, dispatch, getTurn]);

  return (
    <div className="left-panel">
      <div className="clocks-container">
        {isFlipped ? (
          <>
            <div className={`clock ${currentTurn.current === 'w' ? 'active-turn' : ''}`}><span role="img" aria-label="whitesymbol">⚪</span> {whiteTime}</div>
            <div className={`clock ${currentTurn.current !== 'w' ? 'active-turn' : ''}`}><span role="img" aria-label="blacksymbol">⚫</span> {blackTime}</div>
          </>
        ) : (
          <>
            <div className={`clock ${currentTurn.current !== 'w' ? 'active-turn' : ''}`}><span role="img" aria-label="blacksymbol">⚫</span> {blackTime}</div>
            <div className={`clock ${currentTurn.current === 'w' ? 'active-turn' : ''}`}><span role="img" aria-label="whitesymbol">⚪</span> {whiteTime}</div>
          </>
        )}
      </div>
    </div>
  );
});

Clocks.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  getTurn: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  timerDuration: PropTypes.number.isRequired,
};

export default Clocks;