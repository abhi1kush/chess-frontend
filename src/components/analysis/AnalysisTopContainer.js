// src/components/AnalysisTopContainer.js
import React from 'react';
import '../../styles/components/topContainer.css';
import Settings from '../common/Settings';
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