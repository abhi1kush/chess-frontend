// src/components/ChessGame.js
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece, resetGame, loadGame, updateTime, setGameOver, setGameResult, flipBoard, setTheme, setSound, setTimerDuration } from '../redux/actions/gameActions';
import Clocks from './Clocks';
import MoveHistory from './MoveHistory';
import { loadGameFromStorage, saveGameToStorage } from '../utils/storage';
import playSound from '../utils/soundUtils';
import ChessboardComponent from './ChessboardComponent';
import { getMoveType, checkGameOver } from '../utils/helpers';
import TopContainer from './TopContainer';
import '../styles/global.css';
import '../styles/pageLayout.css';
import '../styles/topContainer.css';
import { Chess } from 'chess.js';

const ChessGame = ({ onEnterAnalysis }) => {
  const dispatch = useDispatch();
  const { fen, moveHistory, whiteTime, blackTime, lastMove, gameOver, gameResult, isFlipped, theme, enableSound, timerDuration } = useSelector((state) => state.game);

  useEffect(() => {
    async function fetchData() {
      const savedData = await loadGameFromStorage();
      if (savedData) {
        dispatch(loadGame(savedData));
      }
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (moveHistory.length > 0) {
      saveGameToStorage(fen, moveHistory);
    }
  }, [moveHistory, fen]);

  const handleMove = useCallback(({ from, to }) => {
    if (gameOver) return;
    dispatch(movePiece({ from, to }));
    const game = new Chess(fen);
    const move = game.move({from, to, promotion: 'q'});
    if(enableSound && move){
      playSound(getMoveType(move, game));
    }
    checkGameOver(new Chess(fen), whiteTime, blackTime, (value) => dispatch(setGameOver(value)), (result) => dispatch(setGameResult(result)));
  }, [gameOver, enableSound, dispatch, fen, whiteTime, blackTime]);

  const resetGameHandler = (duration) => {
    dispatch(resetGame(duration));
  };

  const handleTimeUpdate = useCallback((turn, time) => {
    dispatch(updateTime(turn, time));
  }, [dispatch]);

  const handleGameOver = useCallback((winner) => {
    dispatch(setGameResult(`${winner} Won by Time`));
    dispatch(setGameOver(true));
  }, [dispatch]);

  const enterAnalysisMode = () => {
    saveGameToStorage(fen, moveHistory);
    onEnterAnalysis();
  };

  return (
    <div className="main-container">
      <TopContainer
        resetGame={() => resetGameHandler(timerDuration)}
        flipBoard={() => dispatch(flipBoard())}
        isFlipped={isFlipped}
        theme={theme}
        setTheme={(theme) => dispatch(setTheme(theme))}
        enableSound={enableSound}
        setEnableSound={(sound) => dispatch(setSound(sound))}
        enterAnalysisMode={enterAnalysisMode}
      />
      <div className="middle-container">
        <div className="left-menu-bar"><h3>Chess Game</h3></div>
        <div className={`chess-container ${theme}-theme`}>
          <div className="left-panel">
            <Clocks
              gameStarted={moveHistory.length > 0}
              gameOver={gameOver}
              setGameOver={(value) => dispatch(setGameOver(value))}
              setGameResult={(result) => dispatch(setGameResult(result))}
              getTurn={() => new Chess(fen).turn()}
              onTimeUpdate={handleTimeUpdate}
              onGameOver={handleGameOver}
              isFlipped={isFlipped}
              timerDuration={timerDuration}
            />
          </div>
          <div className="centre-area">
            <ChessboardComponent
              position={fen}
              handleMove={handleMove}
              lastMove={lastMove}
              isFlipped={isFlipped}
            />
            {gameOver && (
              <div className="game-over-overlay">
                <div className="game-over-message">
                  <p>{gameResult}</p>
                  <button className="restart-button" onClick={() => resetGameHandler(timerDuration)}>
                    Restart Game
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="right-panel">
            <MoveHistory moveHistory={moveHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;