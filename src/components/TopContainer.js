// src/components/TopContainer.js
import React from 'react';
import '../styles/topContainer.css';
import Settings from './Settings';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { flipBoard, setTheme, setSound, resetGame } from '../redux/actions/gameActions';

const TopContainer = ({ enterAnalysisMode, isAnalysis, onLoadPGN, downloadPGN }) => {
  const dispatch = useDispatch();
  const { isFlipped, theme, enableSound, timerDuration } = useSelector((state) => state.game);

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

TopContainer.propTypes = {
  enterAnalysisMode: PropTypes.func.isRequired,
  isAnalysis: PropTypes.bool,
  onLoadPGN: PropTypes.func,
  downloadPGN: PropTypes.func,
};

export default TopContainer;