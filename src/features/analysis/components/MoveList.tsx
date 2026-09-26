import { useRef, type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/components/moveHistory.css';
import { useChessEngineContext } from '../../engine/hooks/useEngine';
import { useGameReview } from '../hooks/useGameReview';
import { useMoveListScroll } from '../hooks/useMoveListScroll';
import EngineWarmupBar from './EngineWarmupBar';
import MoveListTable from './MoveListTable';
import type { RootState } from '../../../app/rootReducer';
import type { LinePly } from '../types';

type MoveListProps = {
  onReviewingChange?: (reviewing: boolean) => void;
  lineBranchIndex?: number | null;
  linePlies?: LinePly[];
  exploreLine?: boolean;
  lineCursor?: number;
  onJumpToMainLine: (index: number) => void;
  onEnterUserLine?: () => void;
  onBeginReview?: () => void;
  mobileNavigationNode?: ReactNode | null;
  onAnalyzePosition?: React.MouseEventHandler<HTMLButtonElement>;
  analyzingPosition?: boolean;
};

const MoveList = ({
  onReviewingChange,
  lineBranchIndex = null,
  linePlies = [],
  exploreLine = false,
  lineCursor = 0,
  onJumpToMainLine,
  onEnterUserLine,
  onBeginReview,
  mobileNavigationNode = null,
  onAnalyzePosition,
  analyzingPosition = false,
}: MoveListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { moves, fens, analysisData, reviewAnalysisComplete } = useSelector(
    (state: RootState) => state.pgn,
  );
  const { currentMoveIndex } = useSelector((state: RootState) => state.analysis);
  const engineEnabled = useSelector((state: RootState) => state.engine.enabled);
  const { engineReadyOk, engineWarmupPercent } = useChessEngineContext();
  const { isReviewing, handleStartReview } = useGameReview({
    onReviewingChange,
    onBeginReview,
  });

  useMoveListScroll(scrollRef, moves, currentMoveIndex);

  const showEngineWarming = engineEnabled && !engineReadyOk;

  return (
    <div className="move-history-wrapper rounded-2xl">
      {showEngineWarming && <EngineWarmupBar percent={engineWarmupPercent} />}
      <div className="moves-mobile-action-row">
        <button
          type="button"
          className="moves-start-review-btn tracking-wide"
          onClick={handleStartReview}
          disabled={isReviewing}
          aria-busy={isReviewing}
        >
          {isReviewing ? 'Reviewing…' : 'Review'}
        </button>
        <button
          type="button"
          className="moves-mobile-analyse-btn tracking-wide"
          onClick={onAnalyzePosition}
          aria-busy={analyzingPosition}
        >
          {analyzingPosition ? 'Analysing…' : 'Analyse'}
        </button>
      </div>
      {mobileNavigationNode ? (
        <div className="analysis-mobile-move-nav">{mobileNavigationNode}</div>
      ) : null}
      <MoveListTable
        scrollRef={scrollRef}
        moves={moves}
        analysisData={analysisData}
        reviewAnalysisComplete={reviewAnalysisComplete}
        currentMoveIndex={currentMoveIndex}
        exploreLine={exploreLine}
        lineCursor={lineCursor}
        lineBranchIndex={lineBranchIndex}
        linePlies={linePlies}
        fens={fens}
        onJumpToMainLine={onJumpToMainLine}
        onEnterUserLine={onEnterUserLine}
      />
    </div>
  );
};

export default MoveList;
