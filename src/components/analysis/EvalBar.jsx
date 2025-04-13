import React, { useState } from 'react';
import '../../styles/components/EvalBar.css'; // Import the CSS file

const EvalBar = ({isFlipped, evalScore}) => {
  const evalScoreToWhiteHeight = (evalScore) => {
    const maxEval = 10; // 10 pawns = full bar
    const clampedScore = Math.max(-maxEval, Math.min(evalScore, maxEval));
  
    // Normalize from -10 to +10 → 0 to 100%
    const normalized = (clampedScore + maxEval) / (2 * maxEval);
  
    // Convert to percentage (white is on top)
    return normalized * 100;
  }
  return (
      <div className={`eval-bar eval-container ${isFlipped ? 'flipped' : ''}`}>
        <div
          className="white-bar"
          style={{ height: `${evalScoreToWhiteHeight(evalScore)}%` }}
        />
      </div>
  );
};

export default EvalBar;
