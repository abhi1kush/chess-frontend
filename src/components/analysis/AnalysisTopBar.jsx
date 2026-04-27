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
      <div className="top-bar-brand">
        <span className="top-bar-brand-icon" aria-hidden>♞</span>
        <div className="top-bar-brand-copy">
          <span className="top-bar-brand-title">Chess Review Unlimited</span>
          <span className="top-bar-brand-subtitle">Game Analysis</span>
        </div>
      </div>
      <div className="top-bar-actions">
        <FlipButton/>
        <FenOverlayButton fen={fen} />
        <PgnUploader/>
        <DarkThemeToggle/>
        <Settings />
      </div>
    </nav>
  );
};

export default AnalysisTopBar;