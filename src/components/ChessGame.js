// src/components/ChessGame.js
import React, {useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece, resetGame, setGameOver} from '../redux/actions/gameActions';
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
import CONFIG from '../config';

const ChessGame = ({ onEnterAnalysis }) => {
  const dispatch = useDispatch();
  const { fen, moveHistory, lastMove, isGameOver, gameResult, timerDuration, isWhiteTurn} = useSelector((state) => state.game);
  const { isFlipped, theme, enableSound } = useSelector((state) => state.settings);

  const handleMove = useCallback(({ from, to }) => {
    if (isGameOver) return;
    const game = new Chess(fen);
    try {
      const move = game.move({from, to, promotion: 'q'});
      if (!move) return;
      dispatch(movePiece({ from: from, to: to, promotionPiece: 'q'}));
      enableSound && playSound(getMoveType(move, game));
      const {isGameOver, gameResult } = checkGameOver(game);
      isGameOver && dispatch(setGameOver(isGameOver, gameResult))
    } catch (error) {
      console.error(error);
    }
  }, [isGameOver, dispatch, fen, enableSound]);

  const resetGameHandler = (duration) => {
    dispatch(resetGame(duration));
  };

  const handleGameOver = useCallback((winner) => {
    dispatch(setGameOver(true, `${winner} Won by Time`));
  }, [dispatch]);

  const enterAnalysisMode = () => {
    onEnterAnalysis();
  };

  return (
    <div className="main-container">
      <TopContainer
        enterAnalysisMode={enterAnalysisMode}
        // Pass onLoadPGN and downloadPGN if needed
      />
      <div className="middle-container">
        <div className="left-menu-bar"><h3>Chess Game</h3></div>
        <div className={`chess-container ${theme}-theme`}>
          <div className="left-panel">
            <Clocks
              hasGameStarted={fen !== CONFIG.START_FEN}
              isGameOver={isGameOver}
              isWhiteTurn={isWhiteTurn}
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
              isGameOver && <GameOverComponent
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