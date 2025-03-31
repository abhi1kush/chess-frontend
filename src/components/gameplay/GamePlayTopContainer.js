// src/components/TopContainer.js
import React from 'react';
import '../../styles/components/topContainer.css';
import Settings from '../common/Settings';
import GamePlayTopBar from './GamePlayTopBar';

const TopContainer = () => {
  return (
    <div className="top-container">
      <GamePlayTopBar/>
      <Settings />
    </div>
  );
};

export default TopContainer;