// src/components/TopBar.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { flipBoard, resetGame } from '../redux/actions/gameActions';
import PgnUploader from './PgnUploader'; 
import CONFIG from '../config';
import NavigationBar from './NavigationBar';

const AnalysisTopBar = () => {
  const dispatch = useDispatch();
  const { isFlipped, timerDuration } = useSelector((state) => state.game);

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