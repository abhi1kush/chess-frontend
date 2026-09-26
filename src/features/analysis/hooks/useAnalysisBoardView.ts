import { useMemo } from 'react';
import { moveQualityClassFromLabel } from '../services/classifyMove';
import { getPromotionDetails } from '../../chessboard/services/piecePromotion';
import {
  bestMoveUciToCustomArrows,
  uciToArrowFromSquares,
} from '../../chessboard/services/uciArrow';
import { normalizeFenKey } from '../../engine/services/stockfishFenCache';
import type { FromToSquare } from '../../../shared/types/AnalysisTypes';
import type { AnalysisPly } from '../types';
import type { Arrow } from 'react-chessboard/dist/chessboard/types';
import type { AnalysisDataRow } from '../../pgn/redux/pgnSlice';

const stripEmoji = (value: string | null | undefined) =>
  String(value ?? '')
    .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '')
    .trim();

type UseAnalysisBoardViewArgs = {
  position: string;
  fens: string[];
  fromToSquares: FromToSquare[];
  analysisData: AnalysisDataRow[];
  currentMoveIndex: number;
  isFlipped: boolean;
  isReviewing: boolean;
  reviewAnalysisComplete: boolean;
  exploreLine: boolean;
  lineCursor: number;
  linePlies: AnalysisPly[];
  lineBranchIndex: number | null;
  onMainLinePosition: boolean;
  evalScore: number | null;
  bestMoveUci: string;
  manualAnalysisState: { active: boolean; fenKey: string };
};

export function useAnalysisBoardView({
  position,
  fens,
  fromToSquares,
  analysisData,
  currentMoveIndex,
  isFlipped,
  isReviewing,
  reviewAnalysisComplete,
  exploreLine,
  lineCursor,
  linePlies,
  lineBranchIndex,
  onMainLinePosition,
  evalScore,
  bestMoveUci,
  manualAnalysisState,
}: UseAnalysisBoardViewArgs) {
  const useReviewCache = reviewAnalysisComplete && !isReviewing;
  const analysisEntry = analysisData?.[currentMoveIndex];
  const boardFenKey = normalizeFenKey(position);
  const reviewedIndex = fens?.findIndex((fen) => normalizeFenKey(fen) === boardFenKey) ?? -1;
  const currentPositionReview = reviewedIndex >= 0 ? analysisData?.[reviewedIndex] : undefined;
  const currentPositionEval = currentPositionReview?.evalScore;
  const hasCurrentPositionEval =
    currentPositionEval != null && Number.isFinite(currentPositionEval);
  const analyseMatchesBoard =
    manualAnalysisState.fenKey !== '' && manualAnalysisState.fenKey === boardFenKey;
  const liveEval =
    analyseMatchesBoard && evalScore != null && Number.isFinite(evalScore) ? evalScore : null;
  const displayEvalScore =
    liveEval != null
      ? liveEval
      : useReviewCache && hasCurrentPositionEval
        ? currentPositionEval
        : null;
  const displayBestMove = analyseMatchesBoard
    ? bestMoveUci
    : useReviewCache && reviewedIndex >= 0
      ? String(analysisData?.[reviewedIndex]?.bestMove ?? '').trim()
      : useReviewCache
        ? ''
        : bestMoveUci;
  const shouldShowBestMove = !useReviewCache || currentMoveIndex >= 1;
  const bestMoveDisplayValue = shouldShowBestMove ? displayBestMove || '—' : '—';
  const moveQualityDisplayValue =
    useReviewCache && currentMoveIndex >= 1 && !manualAnalysisState.active
      ? stripEmoji(analysisEntry?.moveClassification) || '—'
      : '—';
  const moveQualityClass = moveQualityClassFromLabel(analysisEntry?.moveClassification);

  const comparisonArrowUci = useMemo(() => {
    if (!useReviewCache || !analysisData?.length) return '';
    const k = currentMoveIndex;
    if (k < 1) return '';
    return String(analysisData[k]?.bestMove ?? '').trim();
  }, [useReviewCache, analysisData, currentMoveIndex]);

  const sideToMove = useMemo(() => {
    const t = position.split(/\s+/)[1];
    return t === 'b' ? 'b' : 'w';
  }, [position]);

  const bestMoveArrows = useMemo((): Arrow[] => {
    if (!useReviewCache || exploreLine || !onMainLinePosition) {
      return bestMoveUciToCustomArrows(position, bestMoveUci);
    }
    const uci = comparisonArrowUci;
    if (!uci) return [];
    const k = currentMoveIndex;
    if (k < 1) return [];
    const parentFen = fens?.[k - 1];
    const onParent =
      parentFen && normalizeFenKey(position) === normalizeFenKey(parentFen);
    if (onParent && parentFen) {
      return bestMoveUciToCustomArrows(parentFen, uci);
    }
    return uciToArrowFromSquares(uci);
  }, [
    useReviewCache,
    position,
    fens,
    currentMoveIndex,
    comparisonArrowUci,
    bestMoveUci,
    exploreLine,
    onMainLinePosition,
  ]);

  const lastMoveForHighlight = useMemo((): FromToSquare | undefined => {
    if (exploreLine && lineCursor > 0 && linePlies[lineCursor - 1]) {
      const p = linePlies[lineCursor - 1];
      if (p.from && p.to) {
        return {
          from: p.from,
          to: p.to,
          promotion: getPromotionDetails(p.san).promotedPiece,
        };
      }
    }
    if (
      exploreLine &&
      lineCursor === 0 &&
      lineBranchIndex != null &&
      lineBranchIndex > 0 &&
      fromToSquares?.[lineBranchIndex - 1]
    ) {
      return fromToSquares[lineBranchIndex - 1];
    }
    if (!fens?.length) return undefined;
    if (currentMoveIndex <= 0 || currentMoveIndex >= fens.length - 1 || !fromToSquares?.length) {
      return undefined;
    }
    return fromToSquares[currentMoveIndex - 1];
  }, [
    exploreLine,
    lineCursor,
    linePlies,
    lineBranchIndex,
    currentMoveIndex,
    fens?.length,
    fromToSquares,
  ]);

  const boardLastMoveCategoryId =
    useReviewCache && onMainLinePosition ? moveQualityClass : '';
  const moveCategoryBadge = useMemo(() => {
    if (!boardLastMoveCategoryId || !lastMoveForHighlight?.to) return null;
    return {
      toSquare: lastMoveForHighlight.to,
      categoryId: boardLastMoveCategoryId,
    };
  }, [boardLastMoveCategoryId, lastMoveForHighlight]);

  return {
    displayEvalScore,
    bestMoveDisplayValue,
    moveQualityDisplayValue,
    moveQualityClass,
    bestMoveArrows,
    lastMoveForHighlight,
    boardLastMoveCategoryId,
    moveCategoryBadge,
    topNameActive: (isFlipped && sideToMove === 'w') || (!isFlipped && sideToMove === 'b'),
    bottomNameActive: (isFlipped && sideToMove === 'b') || (!isFlipped && sideToMove === 'w'),
  };
}
