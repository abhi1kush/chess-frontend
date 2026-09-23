import React, { useEffect, useState } from 'react';
import { formatEvalDisplay } from '../../utils/formatEval';
import '../../styles/components/EvalBar.css';

/**
 * evalScore: White’s perspective in pawns, roughly -10..+10.
 * null = not calculated. The bar stays empty so 0 is not read as an equal position.
 */
interface EvalBarProps {
  isFlipped: boolean;
  evalScore: number | null;
}

const EvalBar = ({ isFlipped, evalScore }: EvalBarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const media = window.matchMedia('(max-width: 768px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const unavailable = evalScore == null || Number.isNaN(evalScore);

  const evalScoreToWhiteHeight = (score: number) => {
    const maxEval = 10;
    const clampedScore = Math.max(-maxEval, Math.min(score, maxEval));
    const normalized = (clampedScore + maxEval) / (2 * maxEval);
    return normalized * 100;
  };

  const label = formatEvalDisplay(evalScore);
  const mobileCompactLabel = unavailable
    ? "Analyse"
    : (() => {
        const abs = Math.abs(evalScore as number);
        return abs > 9.9 ? String(Math.round(abs)).slice(0, 2) : abs.toFixed(1);
      })();
  const barLabel = unavailable ? "Analyse" : isMobile ? mobileCompactLabel : label;

  return (
    <div className="eval-bar evalbar">
      <div
        className={`eval-container ${isFlipped ? 'flipped' : ''}${unavailable ? ' eval-container--unavailable' : ''}`}
      >
        {!unavailable && (
          <div
            className="white-bar"
            style={{ height: `${evalScoreToWhiteHeight(evalScore as number)}%` }}
          />
        )}
        <div
          className="eval-bar__score-wrap"
          aria-label={unavailable ? "Evaluation not available. Click Analyse." : `Evaluation ${barLabel}`}
        >
          <span className={unavailable ? "eval-bar__unavailable" : "eval-bar__score"}>{barLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default EvalBar;
