import { formatEvalDisplay } from '../../../shared/utils/formatEval';
import GameReviewSummary from './GameReviewSummary';
import { MoveCategoryBoardIcon } from './MoveCategoryBadge';
import type { AnalysisDataRow } from '../../pgn/redux/pgnSlice';

type EngineSidebarProps = {
  displayEvalScore: number | null;
  moveQualityClass: string;
  moveQualityDisplayValue: string;
  bestMoveDisplayValue: string;
  reviewAnalysisComplete: boolean;
  movesLength: number;
  analysisData: AnalysisDataRow[];
  whitePlayerName: string;
  blackPlayerName: string;
};

export default function EngineSidebar({
  displayEvalScore,
  moveQualityClass,
  moveQualityDisplayValue,
  bestMoveDisplayValue,
  reviewAnalysisComplete,
  movesLength,
  analysisData,
  whitePlayerName,
  blackPlayerName,
}: EngineSidebarProps) {
  return (
    <aside className="analysis-game-engine-shell rounded-2xl" aria-label="Engine analysis">
      <div className="analysis-game-engine-panel" aria-live="polite">
        <div className="analysis-game-engine-panel-head">
          <span className="analysis-game-engine-panel-icon" aria-hidden>
            ⚡
          </span>
          <div className="analysis-game-engine-panel-title-wrap">
            <span className="analysis-game-engine-panel-title">Engine Evaluation</span>
            <span className="analysis-game-engine-panel-subtitle">Stockfish analysis</span>
          </div>
        </div>
        <div className="analysis-game-engine-metrics">
          <div className="analysis-game-engine-metric">
            <span className="analysis-game-engine-label">Score</span>
            <span className="analysis-game-engine-value">{formatEvalDisplay(displayEvalScore)}</span>
          </div>
          <div className="analysis-game-engine-metric">
            <span className="analysis-game-engine-label">Move Quality</span>
            <span
              className={
                moveQualityClass && moveQualityDisplayValue !== '—'
                  ? `analysis-game-engine-value analysis-game-move-quality analysis-game-move-quality--${moveQualityClass}`
                  : 'analysis-game-engine-value'
              }
            >
              {moveQualityClass && moveQualityDisplayValue !== '—' ? (
                <span className="move-history-move-with-review">
                  <span className="move-history-move-review-icon" aria-hidden>
                    <MoveCategoryBoardIcon categoryId={moveQualityClass} size={16} />
                  </span>
                  <span>{moveQualityDisplayValue}</span>
                </span>
              ) : (
                moveQualityDisplayValue
              )}
            </span>
          </div>
          <div className="analysis-game-engine-metric">
            <span className="analysis-game-engine-label">Best Move</span>
            <span className="analysis-game-engine-value">{bestMoveDisplayValue}</span>
          </div>
        </div>
      </div>
      <div className="analysis-game-insight-panel">
        <div className="analysis-game-insight-title-wrap">
          <span className="analysis-game-insight-icon" aria-hidden>
            🧠
          </span>
          <span className="analysis-game-insight-title">Analysis Updates</span>
        </div>
        <p className="analysis-game-insight-text">
          {reviewAnalysisComplete
            ? 'Review complete. Check detailed move-quality stats in the panel below.'
            : 'Upload your chess game PGN file to review it here.'}
        </p>
      </div>
      {reviewAnalysisComplete && movesLength > 0 && (
        <GameReviewSummary
          analysisData={analysisData}
          numMoves={movesLength}
          whitePlayerName={whitePlayerName}
          blackPlayerName={blackPlayerName}
        />
      )}
    </aside>
  );
}
