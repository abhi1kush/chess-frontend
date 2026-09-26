import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  jumpToMove,
  startPos,
  setPgnAnalysisAtIndex,
  setReviewAnalysisComplete,
} from '../redux/analysisActions';
import { playBoardSetupSound } from '../../../shared/utils/soundUtils';
import { useChessEngineContext } from '../../engine/hooks/useEngine';
import { scoreForTerminalPosition } from '../domain';
import {
  classifyMove,
  playedUciFromSan,
  toUci,
  isOpeningBookMove,
} from '../services/classifyMove';
import type { RootState } from '../../../app/rootReducer';

const REVIEW_STEP_MS = 400;
/** Batch review: one depth-16 search per ply. */
const REVIEW_DEPTH = 16;

type UseGameReviewArgs = {
  onReviewingChange?: (reviewing: boolean) => void;
  onBeginReview?: () => void;
};

export function useGameReview({ onReviewingChange, onBeginReview }: UseGameReviewArgs) {
  const reviewTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reviewSessionRef = useRef(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const { moves, fens, fromToSquares } = useSelector((state: RootState) => state.pgn);
  const engineEnabled = useSelector((state: RootState) => state.engine.enabled);
  const playMovesDuringReview = useSelector(
    (state: RootState) => state.settings.playMovesDuringReview !== false,
  );
  const dispatch = useDispatch();
  const { engine } = useChessEngineContext();

  const clearReviewSchedule = useCallback(() => {
    if (reviewTimeoutRef.current !== null) {
      clearTimeout(reviewTimeoutRef.current);
      reviewTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearReviewSchedule();
      reviewSessionRef.current += 1;
    };
  }, [clearReviewSchedule]);

  const handleStartReview = () => {
    if (isReviewing) return;
    if (!moves?.length) {
      return;
    }
    if (!fens?.length || fens.length !== moves.length + 1) {
      return;
    }

    clearReviewSchedule();
    reviewSessionRef.current += 1;
    const session = reviewSessionRef.current;

    engine.setEnabled(engineEnabled);
    engine.stopLiveAnalysis();
    engine.start();
    engine.configure({ threads: 1, multiPv: 1 });

    playBoardSetupSound();
    onBeginReview?.();
    dispatch(setReviewAnalysisComplete(false));
    dispatch(startPos());

    setIsReviewing(true);
    onReviewingChange?.(true);

    const run = async () => {
      const reviewStartedAt = performance.now();
      let reviewFinished = false;
      try {
        let prevEval: number | null = null;
        let prevMate: number | null = null;
        let prevBest = '';
        let prevAltEval: number | null = null;
        let prevAltMate: number | null = null;
        let olderEval: number | null = null;
        let olderMate: number | null = null;

        await engine.reviewGame(
          fens,
          { depth: REVIEW_DEPTH },
          async (index, info) => {
            if (session !== reviewSessionRef.current) {
              throw new Error('Review cancelled');
            }

            const terminal = scoreForTerminalPosition(fens[index]);
            const pawns = terminal
              ? terminal.value > 0
                ? 10
                : -10
              : info.eval?.pawns != null && Number.isFinite(info.eval.pawns)
                ? info.eval.pawns
                : null;
            const mate = terminal ? terminal.value : (info.eval?.mate ?? null);

            if (index === 0) {
              dispatch(
                setPgnAnalysisAtIndex({
                  index: 0,
                  evalScore: pawns,
                  bestMove: info.bestMoveUci ?? '',
                  moveClassification: null,
                }),
              );
              prevEval = pawns;
              prevMate = mate;
              prevBest = info.bestMoveUci ?? '';
              prevAltEval =
                info.secondEval?.pawns != null && Number.isFinite(info.secondEval.pawns)
                  ? info.secondEval.pawns
                  : null;
              prevAltMate = info.secondEval?.mate ?? null;
              return;
            }

            const plyStartedAt = performance.now();
            if (playMovesDuringReview) {
              dispatch(jumpToMove(index));
            }

            const moveIdx = index - 1;
            let playedUci = playedUciFromSan(fens[moveIdx], moves[moveIdx]);
            if (!playedUci && fromToSquares?.[moveIdx]) {
              playedUci = toUci(fromToSquares[moveIdx]);
            }

            const uciPrefix = [];
            for (let p = 0; p <= moveIdx; p++) {
              const u = playedUciFromSan(fens[p], moves[p]) || (fromToSquares?.[p] ? toUci(fromToSquares[p]) : '');
              if (u) uciPrefix.push(u);
            }
            const classified =
              prevEval != null && pawns != null
                ? classifyMove({
                    evalBefore: prevEval,
                    evalAfter: pawns,
                    bestMoveUci: prevBest,
                    playedUci,
                    fenBefore: fens[moveIdx],
                    fenAfter: fens[index],
                    altEval: prevAltEval,
                    scoreBeforeOpponent: olderEval,
                    mateBefore: prevMate,
                    mateAfter: mate,
                    mateBeforeOpponent: olderMate,
                    mateSecond: prevAltMate,
                    book: isOpeningBookMove(uciPrefix),
                  })
                : null;

            dispatch(
              setPgnAnalysisAtIndex({
                index,
                evalScore: pawns,
                bestMove: prevBest,
                moveClassification: classified ? classified.label : null,
              }),
            );

            olderEval = prevEval;
            olderMate = prevMate;
            prevEval = pawns;
            prevMate = mate;
            prevBest = info.bestMoveUci ?? '';
            prevAltEval =
              info.secondEval?.pawns != null && Number.isFinite(info.secondEval.pawns)
                ? info.secondEval.pawns
                : null;
            prevAltMate = info.secondEval?.mate ?? null;

            if (playMovesDuringReview) {
              const remainingMs = REVIEW_STEP_MS - (performance.now() - plyStartedAt);
              if (remainingMs > 0) {
                await new Promise((resolve) => {
                  reviewTimeoutRef.current = setTimeout(resolve as () => void, remainingMs);
                });
              }
            }
          },
        );
        reviewFinished = true;
      } catch {
        /* cancelled or engine error — complete flag handled in finally */
      } finally {
        const elapsedMs = performance.now() - reviewStartedAt;
        const plyCount = fens.length;
        console.log(
          `[review] ${reviewFinished ? 'complete' : 'stopped'} in ${(elapsedMs / 1000).toFixed(2)}s` +
            ` (${Math.round(elapsedMs)}ms) — ${plyCount} positions, depth ${REVIEW_DEPTH}` +
            `, play-through ${playMovesDuringReview ? 'on' : 'off'}`,
        );
        setIsReviewing(false);
        onReviewingChange?.(false);
        if (session === reviewSessionRef.current) {
          dispatch(setReviewAnalysisComplete(true));
        }
      }
    };

    void run();
  };

  return { isReviewing, handleStartReview };
}
