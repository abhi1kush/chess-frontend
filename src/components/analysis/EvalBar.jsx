import React, { useState } from 'react';
import '../../styles/components/EvalBar.css'; // Import the CSS file

const EvalBar = ({isFlipped, blackHeight, setBlackHeight}) => {
  const updateWhiteEval = (whitePercent) => {
    updateBlackEval(100 - whitePercent);
  };

  const updateBlackEval = (blackPercent) => {
    setBlackHeight(blackPercent);
  }

  return (
      <div className={`eval-bar eval-container ${isFlipped ? 'flipped' : ''}`}>
        <div
          className="black-bar"
          style={{ height: `${blackHeight}%` }}
        />
      </div>
  );
};

export default EvalBar;
