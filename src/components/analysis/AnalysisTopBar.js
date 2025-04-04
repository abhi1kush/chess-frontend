// src/components/AnalysisTopBar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipBoard } from '../../redux/actions/settingsActions';
import PgnUploader from './PgnUploader'; 
import Settings from '../common/Settings';

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
      <Settings />
    </nav>
  );
};

export default AnalysisTopBar;