// src/components/TopContainer.js
import React from 'react';
import '../styles/topContainer.css';
import Settings from './Settings';
import TopBar from './TopBar';
import PropTypes from 'prop-types';

const TopContainer = ({ enterAnalysisMode, onLoadPGN, downloadPGN }) => {
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