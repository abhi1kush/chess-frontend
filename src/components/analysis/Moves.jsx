// src/components/MoveHistory.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Chess } from 'chess.js';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/components/moveHistory.css';
import { jumpToMove, startPos } from '../../redux/actions/analysisActions';
import { playBoardSetupSound } from '../../utils/soundUtils';
import CONFIG from '../../config';
import { useStockfishContext } from '../../context/StockfishContext';
import { formatEvalDisplay } from '../../utils/formatEval';

const REVIEW_STEP_MS = 400;

const Moves = () => {
  const scrollRef = useRef(null);
  const reviewTimeoutRef = useRef(null);
  const reviewSessionRef = useRef(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const { moves, termination} = useSelector((state) => state.pgn);
  const { currentMoveIndex, fenLength } = useSelector((state) => state.analysis);
  const engineEnabled = useSelector((state) => state.engine.enabled);
  const dispatch = useDispatch();
  const { quickAnalyzeFen, syncEnabledState } = useStockfishContext();

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

    clearReviewSchedule();
    reviewSessionRef.current += 1;
    const session = reviewSessionRef.current;

    syncEnabledState(engineEnabled);

    playBoardSetupSound();
    dispatch(startPos());

    setIsReviewing(true);

    const run = async () => {
      /** SAN of the move that produced this position (none at start). */
      const logPly = async (ply, sanLabel, currentFen, previousMoveSan) => {
        let evalScoreStr = '—';
        let bestMove = '—';
        const prevMoveDisplay =
          previousMoveSan != null && previousMoveSan !== ''
            ? previousMoveSan
            : '—';
        if (!engineEnabled) {
          console.log(`[Review] ply ${ply} (${sanLabel})`, {
            fen: currentFen,
            previousMove: prevMoveDisplay,
            evalScore: '(enable engine in settings)',
            bestMove: '(enable engine in settings)',
          });
          return;
        }
        if (typeof quickAnalyzeFen !== 'function') {
          console.error('[Review] quickAnalyzeFen is not available (Stockfish context).');
          console.log(`[Review] ply ${ply} (${sanLabel})`, {
            fen: currentFen,
            previousMove: prevMoveDisplay,
            evalScoreStr,
            bestMove,
          });
          return;
        }
        try {
          const r = await quickAnalyzeFen(currentFen);
          evalScoreStr = formatEvalDisplay(r?.evalScore);
          bestMove = r?.bestMoveUci ? r.bestMoveUci : '—';
        } catch (err) {
          console.warn('[Review] Engine analysis failed:', err?.message ?? err);
        }
        console.log(`[Review] ply ${ply} (${sanLabel})`, {
          fen: currentFen,
          previousMove: prevMoveDisplay,
          evalScore: evalScoreStr,
          bestMove,
        });
      };

      try {
        const game = new Chess(CONFIG.START_FEN);
        await logPly(0, 'start', game.fen(), null);

        for (let i = 0; i < moves.length; i++) {
          if (session !== reviewSessionRef.current) return;
          await new Promise((resolve) => {
            reviewTimeoutRef.current = setTimeout(resolve, REVIEW_STEP_MS);
          });
          if (session !== reviewSessionRef.current) return;
          const san = moves[i];
          const result = game.move(san);
          if (!result) {
            console.error('[Review] Illegal move:', san, 'at index', i);
            return;
          }
          dispatch(jumpToMove(i + 1));
          await logPly(i + 1, san, game.fen(), san);
        }
      } finally {
        if (session === reviewSessionRef.current) {
          setIsReviewing(false);
        }
      }
    };

    void run();
  };

  return (
    <div className="move-history-wrapper">
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