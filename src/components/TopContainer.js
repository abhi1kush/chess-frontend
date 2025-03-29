// src/components/TopContainer.js
import React from 'react';
import '../styles/topContainer.css';
import Settings from './Settings';
import TopBar from './TopBar';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CONFIG from '../config';

const TopContainer = ({ enterAnalysisMode, onLoadPGN, downloadPGN }) => {
  const { theme, enableSound } = useSelector((state) => state.settings);

  return (
    <div className="top-container">
      <TopBar
        enterAnalysisMode={enterAnalysisMode}
        onLoadPGN={onLoadPGN}
        downloadPGN={downloadPGN}
      />
      <Settings />
    </div>
  );
};

TopContainer.propTypes = {
  enterAnalysisMode: PropTypes.func.isRequired,
  onLoadPGN: PropTypes.func,
  downloadPGN: PropTypes.func,
};

export default TopContainer;