// src/components/Clocks.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/clock.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setGameOver } from '../redux/actions/gameActions';

const Clocks = React.memo(({ hasGameStarted, isGameOver, isWhiteTurn, isFlipped, timerDuration }) => {
  const dispatch = useDispatch();
  const [whiteTime, setWhiteTime] = useState(timerDuration);
  const [blackTime, setBlackTime] = useState(timerDuration);
  const timerRef = useRef(null);

  useEffect(() => {
    if (hasGameStarted) {
      setWhiteTime(timerDuration);
      setBlackTime(timerDuration);
    }
  }, [hasGameStarted, isGameOver, timerDuration]);

  useEffect(() => {
    if (isGameOver) return;
    
    if (whiteTime === 0) {
      dispatch(setGameOver(true, 'Black Won by Time'));
    } else if (blackTime === 0){
      dispatch(setGameOver(true, 'White Won by Time'));
    }
  },[whiteTime, blackTime, isGameOver, dispatch])

  useEffect(() => {
    if (!hasGameStarted || isGameOver) {
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
      if (isWhiteTurn) {
        setWhiteTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          return prev - 1;
        });
      } else {
        setBlackTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
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
  }, [hasGameStarted, isGameOver, timerDuration, dispatch, isWhiteTurn]);

  const whiteClockClass = isWhiteTurn ? 'active-turn' : '';
  const blackClockClass = !isWhiteTurn ? 'active-turn' : '';
  return (
    <div className="left-panel">
      <div className="clocks-container">
        {isFlipped ? (
          <>
            <div className={`clock ${whiteClockClass}`}><span role="img" aria-label="whitesymbol">⚪</span> {whiteTime}</div>
            <div className={`clock ${blackClockClass}`}><span role="img" aria-label="blacksymbol">⚫</span> {blackTime}</div>
          </>
        ) : (
          <>
            <div className={`clock ${blackClockClass}`}><span role="img" aria-label="blacksymbol">⚫</span> {blackTime}</div>
            <div className={`clock ${whiteClockClass}`}><span role="img" aria-label="whitesymbol">⚪</span> {whiteTime}</div>
          </>
        )}
      </div>
    </div>
  );
});

Clocks.propTypes = {
  hasGameStarted: PropTypes.bool.isRequired,
  isWhiteTurn: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  timerDuration: PropTypes.number.isRequired,
};

export default Clocks;