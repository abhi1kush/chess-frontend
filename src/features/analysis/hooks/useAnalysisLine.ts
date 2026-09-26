import { useCallback, useEffect, useMemo, useState } from 'react';
import { Chess } from 'chess.js';
import { useDispatch } from 'react-redux';
import {
  jumpToMove,
  startPos,
  finalPosition,
  loadPgn,
} from '../redux/analysisActions';
import { normalizeFenKey } from '../../engine/services/stockfishFenCache';
import type { FromToSquare } from '../../../shared/types/AnalysisTypes';
import type { AnalysisPly } from '../types';
import CONFIG from '../../../config';

type UseAnalysisLineArgs = {
  fens: string[];
  fromToSquares: FromToSquare[];
  moves: string[];
  currentMoveIndex: number;
  result: string;
  blackPlayerName: string;
  whitePlayerName: string;
  isReviewing: boolean;
  cancelManualAnalysis: (reason?: string) => void;
  isManualAnalysisActive: () => boolean;
};

export function useAnalysisLine({
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
}: UseAnalysisLineArgs) {
  const dispatch = useDispatch();
  const [position, setPosition] = useState(fens?.[0] ?? CONFIG.START_FEN);
  const [lineBranchIndex, setLineBranchIndex] = useState<number | null>(null);
  const [linePlies, setLinePlies] = useState<AnalysisPly[]>([]);
  const [lineCursor, setLineCursor] = useState(0);
  const [exploreLine, setExploreLine] = useState(false);

  const clearUserLine = useCallback(() => {
    setLineBranchIndex(null);
    setLinePlies([]);
    setLineCursor(0);
    setExploreLine(false);
  }, []);

  useEffect(() => {
    clearUserLine();
  }, [fens?.[0], moves?.length, clearUserLine]);

  useEffect(() => {
    if (!fens?.length) return;
    if (exploreLine && lineBranchIndex != null && linePlies.length > 0) {
      if (lineCursor === 0) {
        setPosition(fens[lineBranchIndex]);
      } else {
        setPosition(linePlies[lineCursor - 1].fenAfter);
      }
    } else {
      setPosition(fens[currentMoveIndex]);
    }
  }, [
    currentMoveIndex,
    fens,
    fromToSquares,
    exploreLine,
    lineBranchIndex,
    linePlies,
    lineCursor,
  ]);

  const onMainLinePosition = useMemo(() => {
    if (!fens?.length || fens[currentMoveIndex] == null) return false;
    if (exploreLine) return false;
    return normalizeFenKey(position) === normalizeFenKey(fens[currentMoveIndex]);
  }, [position, fens, currentMoveIndex, exploreLine]);

  const handleMove = useCallback(
    ({ from, to, promotion }: FromToSquare): boolean => {
      if (isReviewing) return false;
      const game = new Chess(position);
      let move;
      try {
        move = game.move({ from, to, promotion: promotion ? String(promotion) : undefined });
      } catch {
        return false;
      }
      if (!move) return false;

      const newFen = game.fen();
      const ply: AnalysisPly = {
        san: move.san,
        fenAfter: newFen,
        from: move.from,
        to: move.to,
        color: move.color,
      };

      const matchesMainNext =
        !exploreLine &&
        currentMoveIndex < (fens?.length ?? 0) - 1 &&
        normalizeFenKey(newFen) === normalizeFenKey(fens[currentMoveIndex + 1]);

      if (matchesMainNext) {
        dispatch(jumpToMove(currentMoveIndex + 1));
        clearUserLine();
        setPosition(newFen);
        if (isManualAnalysisActive()) cancelManualAnalysis('handleMove');
        return true;
      }

      const atFenGameEnd =
        !exploreLine &&
        currentMoveIndex === (fens?.length ?? 0) - 1 &&
        ((moves?.length ?? 0) === 0 || result === '*');
      if (atFenGameEnd) {
        const nextFens = [...(fens ?? []), newFen];
        dispatch(
          loadPgn({
            finalPos: newFen,
            moves: [...(moves ?? []), move.san],
            fens: nextFens,
            fromToSquares: [
              ...(fromToSquares ?? []),
              { from: move.from, to: move.to, promotion },
            ],
            termination: '',
            result: '*',
            blackPlayerName,
            whitePlayerName,
          }),
        );
        dispatch(jumpToMove(nextFens.length - 1));
        clearUserLine();
        setPosition(newFen);
        if (isManualAnalysisActive()) cancelManualAnalysis('handleMove');
        return true;
      }

      if (!exploreLine) {
        setLineBranchIndex(currentMoveIndex);
        setLinePlies([ply]);
        setLineCursor(1);
        setExploreLine(true);
        setPosition(newFen);
        if (isManualAnalysisActive()) cancelManualAnalysis('handleMove');
        return true;
      }

      const nextPlies = [...linePlies.slice(0, lineCursor), ply];
      setLinePlies(nextPlies);
      setLineCursor(nextPlies.length);
      setExploreLine(true);
      setPosition(newFen);
      if (isManualAnalysisActive()) cancelManualAnalysis('handleMove');
      return true;
    },
    [
      isReviewing,
      position,
      exploreLine,
      linePlies,
      lineCursor,
      currentMoveIndex,
      fens,
      moves,
      fromToSquares,
      blackPlayerName,
      whitePlayerName,
      result,
      isManualAnalysisActive,
      dispatch,
      cancelManualAnalysis,
      clearUserLine,
    ],
  );

  const navigateMove = useCallback(() => {
    if (isManualAnalysisActive()) {
      cancelManualAnalysis('navigateMove');
    }
  }, [isManualAnalysisActive, cancelManualAnalysis]);

  const navigationPrev = useCallback(() => {
    if (exploreLine && linePlies.length && lineBranchIndex != null) {
      if (lineCursor > 0) {
        setLineCursor((c) => c - 1);
        navigateMove();
        return;
      }
      setExploreLine(false);
      setLineCursor(0);
      if (lineBranchIndex > 0) {
        dispatch(jumpToMove(lineBranchIndex - 1));
      }
      navigateMove();
      return;
    }
    if (currentMoveIndex > 0) {
      setLineCursor(0);
      dispatch(jumpToMove(currentMoveIndex - 1));
      navigateMove();
    }
  }, [
    exploreLine,
    linePlies.length,
    lineBranchIndex,
    lineCursor,
    currentMoveIndex,
    dispatch,
    navigateMove,
  ]);

  const navigationNext = useCallback(() => {
    const flen = fens?.length ?? 0;
    if (exploreLine && linePlies.length && lineBranchIndex != null) {
      if (lineCursor < linePlies.length) {
        setLineCursor((c) => c + 1);
        navigateMove();
        return;
      }
      if (lineBranchIndex < flen - 1) {
        setExploreLine(false);
        setLineCursor(0);
        dispatch(jumpToMove(lineBranchIndex + 1));
        navigateMove();
      }
      return;
    }
    if (currentMoveIndex < flen - 1) {
      setLineCursor(0);
      dispatch(jumpToMove(currentMoveIndex + 1));
      navigateMove();
    }
  }, [
    exploreLine,
    linePlies.length,
    lineBranchIndex,
    lineCursor,
    currentMoveIndex,
    fens?.length,
    dispatch,
    navigateMove,
  ]);

  const canNavigatePrev = useMemo(() => {
    if (exploreLine && linePlies.length && lineBranchIndex != null) {
      if (lineCursor > 0) return true;
      return lineBranchIndex > 0;
    }
    return currentMoveIndex > 0;
  }, [exploreLine, linePlies.length, lineBranchIndex, lineCursor, currentMoveIndex]);

  const canNavigateNext = useMemo(() => {
    const flen = fens?.length ?? 0;
    if (exploreLine && linePlies.length && lineBranchIndex != null) {
      if (lineCursor < linePlies.length) return true;
      return lineBranchIndex < flen - 1;
    }
    return currentMoveIndex < flen - 1;
  }, [exploreLine, linePlies.length, lineBranchIndex, lineCursor, currentMoveIndex, fens?.length]);

  const jumpToMainLine = useCallback(
    (index: number) => {
      setExploreLine(false);
      setLineCursor(0);
      dispatch(jumpToMove(index));
    },
    [dispatch],
  );

  const enterUserLine = useCallback(() => {
    if (!linePlies.length || lineBranchIndex == null) return;
    setExploreLine(true);
    setLineCursor(1);
  }, [linePlies.length, lineBranchIndex]);

  const navigationGoStart = useCallback(() => {
    setExploreLine(false);
    setLineCursor(0);
    dispatch(startPos());
    navigateMove();
  }, [dispatch, navigateMove]);

  const navigationGoLatest = useCallback(() => {
    setExploreLine(false);
    setLineCursor(0);
    dispatch(finalPosition());
    navigateMove();
  }, [dispatch, navigateMove]);

  return {
    position,
    lineBranchIndex,
    linePlies,
    lineCursor,
    exploreLine,
    onMainLinePosition,
    handleMove,
    jumpToMainLine,
    enterUserLine,
    clearUserLine,
    navigationPrev,
    navigationNext,
    canNavigatePrev,
    canNavigateNext,
    navigationGoStart,
    navigationGoLatest,
    goStartDisabled: currentMoveIndex === 0 && !exploreLine,
    goLatestDisabled:
      Boolean(fens?.length) && currentMoveIndex >= fens.length - 1 && !exploreLine,
  };
}
