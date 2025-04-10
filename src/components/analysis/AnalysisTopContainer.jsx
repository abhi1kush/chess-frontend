// src/components/AnalysisTopContainer.js
import React from 'react';
import '../../styles/components/topContainer.css';
import AnalysisTopBar from './AnalysisTopBar';

const AnalysisTopContainer = () => {
  return (
    <div className="top-container">
      <AnalysisTopBar/>
    </div>
  );
};

export default AnalysisTopContainer;