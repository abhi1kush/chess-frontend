// src/components/AnalysisTopBar.js
import React from 'react';
import PgnUploader from './PgnUploader'; 
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';
import FlipButton from '../common/buttons/FlipButton';
import FenOverlayButton from './FenOverlayButton';
import "../../styles/components/topContainer.css"

const AnalysisTopBar = ({ fen }) => {
  return (
    <nav className="top-bar">
      <FlipButton/>
      <FenOverlayButton fen={fen} />
      <PgnUploader/>
      <DarkThemeToggle/>
      <Settings />
    </nav>
  );
};

export default AnalysisTopBar;