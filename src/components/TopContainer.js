// src/components/TopContainer.js
import React from 'react';
import '../styles/topContainer.css';
import Settings from './Settings';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { flipBoard, setTheme, setSound, resetGame } from '../redux/actions/gameActions';
import CONFIG from '../config';

const TopContainer = ({ enterAnalysisMode, isAnalysis, onLoadPGN, downloadPGN, isFlipped, enableSound, theme, timerDuration}) => {
  const dispatch = useDispatch();
  return (
    <div className="top-container">
      <TopBar
        resetGame={() => dispatch(resetGame(timerDuration))}
        flipBoard={() => dispatch(flipBoard())}
        isFlipped={isFlipped}
        enterAnalysisMode={enterAnalysisMode}
        isAnalysis={isAnalysis}
        onLoadPGN={onLoadPGN}
        downloadPGN={downloadPGN}
      />
      <Settings
        theme={theme}
        setTheme={(theme) => dispatch(setTheme(theme))}
        enableSound={enableSound}
        setEnableSound={(sound) => dispatch(setSound(sound))}
      />
    </div>
  );
};

TopContainer.defaultProps = {
  isFlipped: false,
  theme: 'classic',
  enableSound: true,
  timerDuration: CONFIG.TIMER_DURATION,
};

TopContainer.propTypes = {
  enterAnalysisMode: PropTypes.func.isRequired,
  isAnalysis: PropTypes.bool.isRequired,
  onLoadPGN: PropTypes.func,
  downloadPGN: PropTypes.func,
  isFlipped: PropTypes.bool, 
  theme: PropTypes.string, 
  enableSound: PropTypes.string, 
  timerDuration: PropTypes.number.isRequired, 
};

export default TopContainer;