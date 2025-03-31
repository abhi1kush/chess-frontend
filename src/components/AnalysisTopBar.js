// src/components/TopBar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipBoard } from '../redux/actions/gameActions';
import PgnUploader from './PgnUploader'; 

const AnalysisTopBar = () => {
  const dispatch = useDispatch();
  const { isFlipped } = useSelector((state) => state.game);

  const FlipButton = () => (
    <button onClick={() => dispatch(flipBoard())} className="action-button">
      {isFlipped ? 'Unflip Board' : 'Flip Board'}
    </button>
  );

  return (
    <nav className="top-bar">
      <FlipButton/>
      <PgnUploader/>
    </nav>
  );
};

export default AnalysisTopBar;