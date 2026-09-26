import { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import TopContainer from './TopContainer';
import MoveNavigation from '../../chessboard/components/BoardControls';
import MoveList from './MoveList';
import EngineSidebar from './EngineSidebar';
import BoardStage from './BoardStage';
import '../../../styles/global.css';
import '../../../styles/components/AnalysisLayout.css';
import type { RootState } from '../../../app/rootReducer';
import { useAnalysisLine } from '../hooks/useAnalysisLine';
import { usePositionAnalysis } from '../hooks/usePositionAnalysis';
import { useAnalysisBoardView } from '../hooks/useAnalysisBoardView';

const AnalysisPage = () => {
  const {
    fens,
    fromToSquares,
    moves,
    blackPlayerName,
    whitePlayerName,
    analysisData,
    reviewAnalysisComplete,
    result,
  } = useSelector((state: RootState) => state.pgn);
  const { currentMoveIndex } = useSelector((state: RootState) => state.analysis);
  const { isFlipped, theme } = useSelector((state: RootState) => state.settings);
  const enabledChessEngine = useSelector((state: RootState) => state.engine.enabled);
  const [isReviewing, setIsReviewing] = useState(false);

  const cancelManualAnalysisRef = useRef<(reason?: string) => void>(() => {});
  const isManualAnalysisActiveRef = useRef(false);
  const cancelManualAnalysis = useCallback((reason?: string) => {
    cancelManualAnalysisRef.current(reason);
  }, []);
  const isManualAnalysisActive = useCallback(() => isManualAnalysisActiveRef.current, []);

  const line = useAnalysisLine({
    fens,
    fromToSquares,
    moves,
    currentMoveIndex,
    result,
    blackPlayerName,
    whitePlayerName,
    isReviewing,
    cancelManualAnalysis,
    isManualAnalysisActive,
  });

  const analysis = usePositionAnalysis({
    position: line.position,
    currentMoveIndex,
    fensLength: fens?.length ?? 0,
    enabledChessEngine,
    isReviewing,
    reviewAnalysisComplete,
    onMainLinePosition: line.onMainLinePosition,
    analysisDataEval: analysisData?.[currentMoveIndex]?.evalScore,
  });

  cancelManualAnalysisRef.current = analysis.cancelManualAnalysis;
  isManualAnalysisActiveRef.current = analysis.manualAnalysisState.active;

  const view = useAnalysisBoardView({
    position: line.position,
    fens,
    fromToSquares,
    analysisData,
    currentMoveIndex,
    isFlipped,
    isReviewing,
    reviewAnalysisComplete,
    exploreLine: line.exploreLine,
    lineCursor: line.lineCursor,
    linePlies: line.linePlies,
    lineBranchIndex: line.lineBranchIndex,
    onMainLinePosition: line.onMainLinePosition,
    evalScore: analysis.evalScore,
    bestMoveUci: analysis.bestMoveUci,
    manualAnalysisState: analysis.manualAnalysisState,
  });

  const navigation = (
    <MoveNavigation
      onNavigatePrev={line.navigationPrev}
      onNavigateNext={line.navigationNext}
      canNavigatePrev={line.canNavigatePrev}
      canNavigateNext={line.canNavigateNext}
      onGoStart={line.navigationGoStart}
      onGoLatest={line.navigationGoLatest}
      goStartDisabled={line.goStartDisabled}
      goLatestDisabled={line.goLatestDisabled}
    />
  );

  return (
    <div className="analysis-game-page bg-transparent">
      <TopContainer fen={line.position} />
      <EngineSidebar
        displayEvalScore={view.displayEvalScore}
        moveQualityClass={view.moveQualityClass}
        moveQualityDisplayValue={view.moveQualityDisplayValue}
        bestMoveDisplayValue={view.bestMoveDisplayValue}
        reviewAnalysisComplete={reviewAnalysisComplete}
        movesLength={moves?.length ?? 0}
        analysisData={analysisData}
        whitePlayerName={whitePlayerName}
        blackPlayerName={blackPlayerName}
      />
      <div className="middle-container">
        <BoardStage
          position={line.position}
          isFlipped={isFlipped}
          theme={theme}
          whitePlayerName={whitePlayerName}
          blackPlayerName={blackPlayerName}
          topNameActive={view.topNameActive}
          bottomNameActive={view.bottomNameActive}
          displayEvalScore={view.displayEvalScore}
          lastMove={view.lastMoveForHighlight}
          lastMoveCategoryId={view.boardLastMoveCategoryId}
          moveCategoryBadge={view.moveCategoryBadge}
          handleMove={line.handleMove}
          arePiecesDraggable={!isReviewing}
          isFinalMove={!line.exploreLine && currentMoveIndex === fens.length - 1}
          result={result}
          customArrows={view.bestMoveArrows}
        >
          <div className="sidebar right-panel rounded-2xl">
            <MoveList
              onReviewingChange={setIsReviewing}
              lineBranchIndex={line.lineBranchIndex}
              linePlies={line.linePlies}
              exploreLine={line.exploreLine}
              lineCursor={line.lineCursor}
              onJumpToMainLine={line.jumpToMainLine}
              onEnterUserLine={line.enterUserLine}
              onBeginReview={line.clearUserLine}
              onAnalyzePosition={analysis.handleAnalyzeCurrentPosition}
              analyzingPosition={analysis.manualAnalysisState.active}
              mobileNavigationNode={navigation}
            />
            <div className="analysis-desktop-move-nav">{navigation}</div>
          </div>
        </BoardStage>
      </div>
    </div>
  );
};

export default AnalysisPage;
