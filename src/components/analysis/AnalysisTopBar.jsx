// src/components/AnalysisTopBar.js
import React from 'react';
import PgnUploader from './PgnUploader'; 
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';
import FlipButton from '../common/buttons/FlipButton';
import "../../styles/components/topContainer.css"

const AnalysisTopBar = () => {
  return (
    <nav className="top-bar">
      <FlipButton/>
      <PgnUploader/>
      <Settings />
      <DarkThemeToggle/>
    </nav>
  );
};

export default AnalysisTopBar;