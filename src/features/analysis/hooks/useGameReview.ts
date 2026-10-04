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
import {
  classifyMove,
  playedUciFromSan,
  toUci,
  isOpeningBookMove,
} from '../services/classifyMove';
import {
  REVIEW_DEPTH,
  evalFromReviewInfo,
  runSecondReviewPass,
  shouldDeepReviewPly,
  type ReviewPlySnapshot,
} from '../services/reviewDeepPass';
import { normalizeFenKey } from '../../engine/services/stockfishFenCache';
import type { RootState } from '../../../app/rootReducer';

const REVIEW_STEP_MS = 400;

type UseGameReviewArgs = {
  onReviewingChange?: (reviewing: boolean) => void;
  onBeginReview?: () => void;
  onRefiningChange?: (refining: boolean) => void;
};

export function useGameReview({
  onReviewingChange,
  onBeginReview,
  onRefiningChange,
}: UseGameReviewArgs) {
  const reviewTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reviewSessionRef = useRef(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isRefiningReview, setIsRefiningReview] = useState(false);
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

  const setRefining = useCallback(
    (refining: boolean) => {
      setIsRefiningReview(refining);
      onRefiningChange?.(refining);
    },
    [onRefiningChange],
  );

  useEffect(() => {
    return () => {
      clearReviewSchedule();
      reviewSessionRef.current += 1;
    };
  }, [clearReviewSchedule]);

  useEffect(() => {
    reviewSessionRef.current += 1;
    setRefining(false);
  }, [fens, setRefining]);

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
    setRefining(false);

    engine.setEnabled(engineEnabled);
    engine.stopLiveAnalysis();
    engine.start();
    const rec = engine.getRecommendedConfig();
    engine.configure({ ...rec, multiPv: 1 });

    playBoardSetupSound();
    onBeginReview?.();
    dispatch(setReviewAnalysisComplete(false));
    dispatch(startPos());

    setIsReviewing(true);
    onReviewingChange?.(true);

    const runSecondPass = async (snapshots: ReviewPlySnapshot[]): Promise<void> => {
      const candidates = snapshots.filter(shouldDeepReviewPly);
      if (candidates.length) {
        setRefining(true);
      }
      try {
        await runSecondReviewPass({
          candidates,
          search: async (fensToSearch, depth) => {
            const byFen = new Map<string, ReturnType<typeof evalFromReviewInfo>>();
            await engine.reviewGame(fensToSearch, { depth }, async (index, info) => {
              if (session !== reviewSessionRef.current) {
                throw new Error('Review cancelled');
              }
              const fen = fensToSearch[index];
              byFen.set(normalizeFenKey(fen), evalFromReviewInfo(fen, info));
            });
            return byFen;
          },
          onUpdate: (index, next) => {
            dispatch(
              setPgnAnalysisAtIndex({
                index,
                evalScore: next.evalScore,
                bestMove: next.bestMove,
                moveClassification: next.label,
              }),
            );
          },
          isCancelled: () => session !== reviewSessionRef.current,
        });
      } catch (err) {
        console.log('[review] pass-2 stopped', err);
      } finally {
        if (session === reviewSessionRef.current) {
          setRefining(false);
        }
      }
    };

    const run = async () => {
      const reviewStartedAt = performance.now();
      let reviewFinished = false;
      const snapshots: ReviewPlySnapshot[] = [];
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

            const scored = evalFromReviewInfo(fens[index], info);
            const pawns = scored.pawns;
            const mate = scored.mate;

            if (index === 0) {
              dispatch(
                setPgnAnalysisAtIndex({
                  index: 0,
                  evalScore: pawns,
                  bestMove: scored.bestMoveUci,
                  moveClassification: null,
                }),
              );
              prevEval = pawns;
              prevMate = mate;
              prevBest = scored.bestMoveUci;
              prevAltEval = scored.altEval;
              prevAltMate = scored.altMate;
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
            const book = isOpeningBookMove(uciPrefix);
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
                    book,
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

            snapshots.push({
              index,
              san: moves[moveIdx] ?? '',
              playedUci,
              fenBefore: fens[moveIdx],
              fenAfter: fens[index],
              evalBefore: prevEval,
              evalAfter: pawns,
              mateBefore: prevMate,
              mateAfter: mate,
              bestMoveUci: prevBest,
              altEval: prevAltEval,
              altMate: prevAltMate,
              olderEval,
              olderMate,
              book,
              categoryId: classified?.categoryId ?? '',
              label: classified ? classified.label : null,
            });

            olderEval = prevEval;
            olderMate = prevMate;
            prevEval = pawns;
            prevMate = mate;
            prevBest = scored.bestMoveUci;
            prevAltEval = scored.altEval;
            prevAltMate = scored.altMate;

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
            `, ${engine.getKind()}, ${rec.threads ?? 1} threads, ${rec.hashMb ?? 16}MB hash` +
            `, play-through ${playMovesDuringReview ? 'on' : 'off'}`,
        );
        setIsReviewing(false);
        onReviewingChange?.(false);
        if (session === reviewSessionRef.current) {
          dispatch(setReviewAnalysisComplete(true));
          if (reviewFinished) {
            void runSecondPass(snapshots);
          }
        }
      }
    };

    void run();
  };

  return { isReviewing, isRefiningReview, handleStartReview };
}
