// src/components/AnalysisTopContainer.js
import React from 'react';
import '../../../styles/components/topContainer.css';
import AnalysisTopBar from './AnalysisTopBar';

const AnalysisTopContainer = ({ fen }: {fen: string}) => {
  return (
    <div className="top-container">
      <AnalysisTopBar fen={fen} />
    </div>
  );
};

export default AnalysisTopContainer;