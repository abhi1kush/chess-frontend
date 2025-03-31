// src/components/TopBar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipBoard, resetGame } from '../redux/actions/gameActions';

const GamePlayTopBar = () => {
  const dispatch = useDispatch();
  const { isFlipped, timerDuration } = useSelector((state) => state.game);

  const ResetButton = () => (
    <button onClick={() => dispatch(resetGame(timerDuration))} className="action-button">
      Reset Board
    </button>
  );

  const FlipButton = () => (
    <button onClick={() => dispatch(flipBoard())} className="action-button">
      {isFlipped ? 'Unflip Board' : 'Flip Board'}
    </button>
  );

  const downloadPGN = () => {
    console.log("downloadPGN TODO")
  }

  const DownloadPgnButton = () => (
    <button onClick={downloadPGN} className="action-button">
      Download PGN
    </button>
  );

  const buttons = [];
  buttons.push(ResetButton, FlipButton);
  buttons.push(DownloadPgnButton);
  return (
    <nav className="top-bar">
      <ResetButton/>
      <FlipButton/>
      <DownloadPgnButton/>
    </nav>
  );
};

export default GamePlayTopBar;