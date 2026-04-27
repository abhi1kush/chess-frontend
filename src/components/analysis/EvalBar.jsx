import React, { useEffect, useState } from 'react';
import { formatEvalDisplay } from '../../utils/formatEval';
import '../../styles/components/EvalBar.css';

/**
 * evalScore: White’s perspective in pawns, roughly -10..+10.
 * null/undefined = no engine result yet — bar shows 50/50 (neutral / “drawish” starting point).
 */
const EvalBar = ({ isFlipped, evalScore }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const media = window.matchMedia('(max-width: 768px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const evalScoreToWhiteHeight = (score) => {
    const maxEval = 10;
    const effective = score == null || Number.isNaN(score) ? 0 : score;
    const clampedScore = Math.max(-maxEval, Math.min(effective, maxEval));
    const normalized = (clampedScore + maxEval) / (2 * maxEval);
    return normalized * 100;
  };

  const label = formatEvalDisplay(evalScore);
  const mobileCompactLabel =
    evalScore == null || Number.isNaN(evalScore)
      ? "—"
      : (() => {
          const abs = Math.abs(evalScore);
          return abs > 9.9 ? String(Math.round(abs)).slice(0, 2) : abs.toFixed(1);
        })();
  const barLabel = isMobile ? mobileCompactLabel : label;

  return (
    <div className="eval-bar evalbar">
      <div className={`eval-container ${isFlipped ? 'flipped' : ''}`}>
        <div
          className="white-bar"
          style={{ height: `${evalScoreToWhiteHeight(evalScore)}%` }}
        />
        <div className="eval-bar__score-wrap" aria-label={`Evaluation ${barLabel}`}>
          <span className="eval-bar__score">{barLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default EvalBar;
