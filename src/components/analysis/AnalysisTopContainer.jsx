// src/components/AnalysisTopContainer.js
import React from 'react';
import '../../styles/components/topContainer.css';
import AnalysisTopBar from './AnalysisTopBar';

const AnalysisTopContainer = ({ fen, onAnalyzePosition, analyzingPosition }) => {
  return (
    <div className="top-container">
      <AnalysisTopBar
        fen={fen}
        onAnalyzePosition={onAnalyzePosition}
        analyzingPosition={analyzingPosition}
      />
    </div>
  );
};

export default AnalysisTopContainer;