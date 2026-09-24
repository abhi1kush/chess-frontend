// src/components/AnalysisTopContainer.js
import React from 'react';
import '../../../styles/components/topContainer.css';
import TopBar from './TopBar';

const TopContainer = ({ fen }: {fen: string}) => {
  return (
    <div className="top-container">
      <TopBar fen={fen} />
    </div>
  );
};

export default TopContainer;