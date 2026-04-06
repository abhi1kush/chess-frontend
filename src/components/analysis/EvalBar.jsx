import React from 'react';
import { formatEvalDisplay } from '../../utils/formatEval';
import '../../styles/components/EvalBar.css';

/**
 * evalScore: White’s perspective in pawns, roughly -10..+10.
 * null/undefined = no engine result yet — bar shows 50/50 (neutral / “drawish” starting point).
 */
const EvalBar = ({ isFlipped, evalScore }) => {
  const evalScoreToWhiteHeight = (score) => {
    const maxEval = 10;
    const effective = score == null || Number.isNaN(score) ? 0 : score;
    const clampedScore = Math.max(-maxEval, Math.min(effective, maxEval));
    const normalized = (clampedScore + maxEval) / (2 * maxEval);
    return normalized * 100;
  };

  const label = formatEvalDisplay(evalScore);

  return (
    <div className="eval-bar evalbar">
      <div className={`eval-container ${isFlipped ? 'flipped' : ''}`}>
        <div
          className="white-bar"
          style={{ height: `${evalScoreToWhiteHeight(evalScore)}%` }}
        />
        <div className="eval-bar__score-wrap" aria-label={`Evaluation ${label}`}>
          <span className="eval-bar__score">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default EvalBar;
