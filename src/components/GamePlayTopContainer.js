// src/components/TopContainer.js
import React from 'react';
import '../styles/topContainer.css';
import Settings from './Settings';
import GamePlayTopBar from './GamePlayTopBar';
import PropTypes from 'prop-types';

const TopContainer = () => {
  return (
    <div className="top-container">
      <GamePlayTopBar/>
      <Settings />
    </div>
  );
};

export default TopContainer;