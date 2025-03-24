// src/components/ChessGame.js
import React, {useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece, resetGame, setGameOver, setGameResult } from '../redux/actions/gameActions';
import { flipBoard, setTheme, setSound } from '../redux/actions/gameActions';
import Clocks from './Clocks';
import MoveHistory from './MoveHistory';
import playSound from '../utils/soundUtils';
import ChessboardComponent from './ChessboardComponent';
import { getMoveType, checkGameOver } from '../utils/helpers';
import TopContainer from './TopContainer';
import GameOverComponent from './GameOverOverlay';
import '../styles/global.css';
import '../styles/pageLayout.css';
import '../styles/topContainer.css';
import { Chess } from 'chess.js';

const ChessGame = ({ onEnterAnalysis }) => {
  const dispatch = useDispatch();
  const { fen, moveHistory, lastMove, gameOver, gameResult, timerDuration } = useSelector((state) => state.game);
  const { isFlipped, theme, enableSound } = useSelector((state) => state.settings);
  // const gameRef = useRef(fen);

  const handleMove = useCallback(({ from, to }) => {
    if (gameOver) return;
    const game = new Chess(fen);
    try {
      const move = game.move({from, to, promotion: 'q'});
      if (!move) return;
      dispatch(movePiece({ from, to }));
      enableSound && playSound(getMoveType(move, game));
      checkGameOver(game, (value) => dispatch(setGameOver(value)), (result) => dispatch(setGameResult(result)));
    } catch (error) {
      console.error(error);
    }
  }, [gameOver, dispatch, fen, enableSound]);

  const resetGameHandler = (duration) => {
    dispatch(resetGame(duration));
  };

  const handleGameOver = useCallback((winner) => {
    dispatch(setGameResult(`${winner} Won by Time`));
    dispatch(setGameOver(true));
  }, [dispatch]);

  const enterAnalysisMode = () => {
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
              onGameOver={handleGameOver}
              isFlipped={isFlipped}
              timerDuration={timerDuration}
            />
          </div>
          <div className="centre-area">
            <ChessboardComponent
              isAnalysis={false}
              fen={fen}
              handleMove={handleMove}
              lastMove={lastMove}
              isFlipped={isFlipped}
            />
            {
              gameOver && <GameOverComponent
              resetGameHandler={resetGameHandler}
              timerDuration={timerDuration}
              gameResult={gameResult}
              />
            }
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