// src/components/TopBar.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { flipBoard, resetGame } from '../redux/actions/gameActions';
import PgnUploader from './PgnUploader'; 
import CONFIG from '../config';
import NavigationBar from './NavigationBar';

const TopBar = ({ enterAnalysisMode, isAnalysis, downloadPGN }) => {
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

  const EnterAnalysisButton = () => (
    <button onClick={enterAnalysisMode} className="action-button">
      Enter Analysis Mode
    </button>
  );

  const DownloadPgnButton = () => (
    <button onClick={downloadPGN} className="action-button">
      Download PGN
    </button>
  );

  const buttons = [];
  if (!isAnalysis) {
    buttons.push(ResetButton, FlipButton);
  } else {
    buttons.push(FlipButton);
  }
  buttons.push(EnterAnalysisButton);
  if (isAnalysis) {
    buttons.push(PgnUploader);
  }
  if (!isAnalysis && downloadPGN) {
    buttons.push(DownloadPgnButton);
  }

  return <NavigationBar buttons={buttons} />;
};

TopBar.propTypes = {
  enterAnalysisMode: PropTypes.func.isRequired,
  isAnalysis: PropTypes.bool,
  downloadPGN: PropTypes.func,
};

TopBar.defaultProps = {
  isAnalysis: false,
};

export default TopBar;