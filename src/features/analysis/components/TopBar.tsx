// src/components/AnalysisTopBar.js
import React from 'react';
import PgnUploader from '../../pgn/components/PgnUploader'; 
import Settings from '../../settings/components/Settings';
import DarkThemeToggle from '../../settings/components/DarkThemeToggle';
import FlipButton from '../../chessboard/components/FlipButton';
import FenOverlayButton from './FenOverlayButton';
import "../../../styles/components/topContainer.css"

const TopBar = ({ fen }: {fen : string}) => {
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
        <FenOverlayButton fen={fen}/>
        <PgnUploader/>
        <DarkThemeToggle/>
        <Settings/>
      </div>
    </nav>
  );
};

export default TopBar;