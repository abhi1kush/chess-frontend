// src/components/TopContainer.js
import React from 'react';
import '../styles/topContainer.css';
import Settings from './Settings';
import AnalysisTopBar from './AnalysisTopBar';

const AnalysisTopContainer = () => {
  return (
    <div className="top-container">
      <AnalysisTopBar/>
      <Settings />
    </div>
  );
};

export default AnalysisTopContainer;