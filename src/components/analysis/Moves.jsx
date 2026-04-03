// src/components/MoveHistory.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/components/moveHistory.css';
import {
  jumpToMove,
  startPos,
  setPgnAnalysisAtIndex,
  setReviewAnalysisComplete,
} from '../../redux/actions/analysisActions';
import { playBoardSetupSound } from '../../utils/soundUtils';
import { useStockfishContext } from '../../context/StockfishContext';
import { formatEvalDisplay } from '../../utils/formatEval';
import {
  classifyMove,
  playedUciFromSan,
  toUci,
} from '../../utils/moveClassification';

const REVIEW_STEP_MS = 400;
/** Fast first result, then refine (depth 8 → 12 → 16). */
const REVIEW_PROGRESSIVE_DEPTHS = [8, 12, 16];
const REVIEW_QUICK_TIMEOUT_MS = 120000;

const Moves = ({ onReviewingChange }) => {
  const scrollRef = useRef(null);
  const reviewTimeoutRef = useRef(null);
  const reviewSessionRef = useRef(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const { moves, termination, fens, fromToSquares } = useSelector((state) => state.pgn);
  const { currentMoveIndex, fenLength } = useSelector((state) => state.analysis);
  const engineEnabled = useSelector((state) => state.engine.enabled);
  const dispatch = useDispatch();
  const { quickAnalyzeFen, syncEnabledState, engineReadyOk } =
    useStockfishContext();

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

  useEffect(() => {
    if (scrollRef.current && moves?.length) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moves]);

  /** Row `<tr>` uses `move-row-${index}` for map index 0,2,4,… — not `currentMoveIndex`. */
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    if (currentMoveIndex <= 0) {
      scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const rowAnchor =
      currentMoveIndex >= 1
        ? 2 * Math.floor((currentMoveIndex - 1) / 2)
        : 0;
    const row = scrollEl.querySelector(`.move-row-${rowAnchor}`);
    if (!row) return;

    const scrollRowIntoView = () => {
      const thead = scrollEl.querySelector('thead');
      const stickyHeaderH = thead ? thead.offsetHeight : 0;
      const pad = 2;
      const rowTop =
        row.getBoundingClientRect().top -
        scrollEl.getBoundingClientRect().top +
        scrollEl.scrollTop;
      const targetTop = Math.max(0, rowTop - stickyHeaderH - pad);
      scrollEl.scrollTo({ top: targetTop, behavior: 'smooth' });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollRowIntoView);
    });
  }, [currentMoveIndex]);

  const handleMoveClick = (index) => {
    playBoardSetupSound();
    dispatch(jumpToMove(index));
  };

  const handleStartReview = () => {
    if (isReviewing) return;
    if (!moves?.length) {
      console.warn('[Review] No moves to replay. Load a PGN first.');
      return;
    }
    if (!fens?.length || fens.length !== moves.length + 1) {
      console.warn(
        '[Review] Stored FENs are missing or do not match moves (expected fens.length === moves.length + 1).',
      );
      return;
    }

    clearReviewSchedule();
    reviewSessionRef.current += 1;
    const session = reviewSessionRef.current;

    syncEnabledState(engineEnabled);

    playBoardSetupSound();
    dispatch(setReviewAnalysisComplete(false));
    dispatch(startPos());

    setIsReviewing(true);
    onReviewingChange?.(true);

    const run = async () => {
      const quickOpts = {
        progressiveDepths: REVIEW_PROGRESSIVE_DEPTHS,
        timeoutMs: REVIEW_QUICK_TIMEOUT_MS,
      };

      const analyzeFen = async (fen) => {
        if (!engineEnabled || typeof quickAnalyzeFen !== 'function') return null;
        try {
          return await quickAnalyzeFen(fen, quickOpts);
        } catch (err) {
          console.warn('[Review] Engine analysis failed:', err?.message ?? err);
          return null;
        }
      };

      try {
        if (!engineEnabled) {
          console.warn('[Review] Enable engine in settings to analyze and classify moves.');
        }

        const r0 = await analyzeFen(fens[0]);
        if (session !== reviewSessionRef.current) return;
        if (r0) {
          const evalPawns =
            r0.evalScore != null && Number.isFinite(r0.evalScore) ? r0.evalScore : null;
          dispatch(
            setPgnAnalysisAtIndex({
              index: 0,
              evalScore: evalPawns,
              bestMove: r0.bestMoveUci ?? '',
              moveClassification: null,
            }),
          );
          console.log('[Review] ply 0 (start)', {
            fen: fens[0],
            evalScore: formatEvalDisplay(r0.evalScore),
            bestMove: r0.bestMoveUci ?? '—',
          });
        }

        let prevEval =
          r0?.evalScore != null && Number.isFinite(r0.evalScore) ? r0.evalScore : null;
        let prevBest = r0?.bestMoveUci ?? '';

        for (let i = 0; i < moves.length; i++) {
          if (session !== reviewSessionRef.current) return;
          await new Promise((resolve) => {
            reviewTimeoutRef.current = setTimeout(resolve, REVIEW_STEP_MS);
          });
          if (session !== reviewSessionRef.current) return;
          dispatch(jumpToMove(i + 1));

          const r = await analyzeFen(fens[i + 1]);
          if (session !== reviewSessionRef.current) return;

          let playedUci = playedUciFromSan(fens[i], moves[i]);
          if (!playedUci && fromToSquares?.[i]) {
            playedUci = toUci(fromToSquares[i]);
          }

          const evalAfter =
            r?.evalScore != null && Number.isFinite(r.evalScore) ? r.evalScore : null;
          const classified =
            prevEval != null && evalAfter != null
              ? classifyMove({
                  evalBefore: prevEval,
                  evalAfter,
                  bestMoveUci: prevBest,
                  playedUci,
                  fenBefore: fens[i],
                  fenAfter: fens[i + 1],
                })
              : null;

          dispatch(
            setPgnAnalysisAtIndex({
              index: i + 1,
              evalScore: evalAfter,
              bestMove: r?.bestMoveUci ?? '',
              moveClassification: classified ? classified.label : null,
            }),
          );

          console.log(`[Review] ply ${i + 1} (${moves[i]})`, {
            fen: fens[i + 1],
            previousMove: moves[i],
            evalScore: r ? formatEvalDisplay(r.evalScore) : '—',
            bestMove: r?.bestMoveUci ?? '—',
            classification: classified?.label ?? '—',
          });

          prevEval = evalAfter;
          prevBest = r?.bestMoveUci ?? '';
        }
      } finally {
        setIsReviewing(false);
        onReviewingChange?.(false);
        if (session === reviewSessionRef.current) {
          dispatch(setReviewAnalysisComplete(true));
        }
      }
    };

    void run();
  };

  const showEngineWarming = engineEnabled && !engineReadyOk;

  return (
    <div className="move-history-wrapper">
      {showEngineWarming && (
        <div className="moves-engine-warming" role="status" aria-live="polite">
          Engine warming up…
        </div>
      )}
      <button
        type="button"
        className="moves-start-review-btn"
        onClick={handleStartReview}
        disabled={isReviewing}
        aria-busy={isReviewing}
      >
        {isReviewing ? 'Reviewing…' : 'Start Review'}
      </button>
      {currentMoveIndex == fenLength - 1 && <div className='termination-msg'>{termination}</div>}
    <div className="move-history">
      <div className="move-history-scroll" ref={scrollRef}>
        <table className="move-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>White</th>
              <th>Black</th>
            </tr>
          </thead>
          <tbody>
            {moves && moves.map((move, index) =>
              index % 2 === 0 ? (
                <tr key={index / 2} className={`move-row-${index}`}>
                  <td>{Math.floor(index / 2) + 1}.</td>
                  <td className="clickable" style={{backgroundColor: index + 1 === currentMoveIndex ? 'lightblue' : 'transparent'}} 
                  onClick={() => handleMoveClick(index + 1)}
                  >
                    {move}
                  </td>
                  <td className="clickable" style={{backgroundColor: index + 2 === currentMoveIndex ? 'lightblue' : 'transparent'}}
                  onClick={() => handleMoveClick(index + 2)}
                  >
                    {moves[index + 1] || ''}
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Moves;