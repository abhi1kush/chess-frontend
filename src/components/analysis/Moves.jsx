// src/components/MoveHistory.js
import React, { useEffect, useRef, useState, useCallback, Fragment } from 'react';
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
import {
  classifyMove,
  playedUciFromSan,
  toUci,
  moveQualityClassFromLabel,
} from '../../utils/moveClassification';
import { sanToFigurineDisplay } from '../../utils/sanFigurine';
import { MoveCategoryBoardIcon } from './MoveCategoryBoardIcons';

const REVIEW_STEP_MS = 400;

/** SAN text uses category hue only for these (rest stay theme foreground). */
const SAN_TEXT_CATEGORY_ACCENTS = new Set(['brilliant', 'great', 'blunder']);

/**
 * `moves[moveIdx]` matches `analysisData[moveIdx + 1]` (position after that ply).
 */
function renderMoveCell({ san, isWhite, moveIdx, reviewComplete, analysisData }) {
  if (san == null || String(san).trim() === '') return null;
  const figurine = sanToFigurineDisplay(san, isWhite);
  const categoryId =
    reviewComplete && analysisData?.[moveIdx + 1]
      ? moveQualityClassFromLabel(analysisData[moveIdx + 1].moveClassification)
      : '';

  const blackSideClass = !isWhite ? ' move-history-san--black-side' : '';

  if (!reviewComplete || !categoryId) {
    return (
      <span className={`move-history-move-btn move-history-san--figurine${blackSideClass}`}>{figurine}</span>
    );
  }

  const accentClass = SAN_TEXT_CATEGORY_ACCENTS.has(categoryId)
    ? ` move-history-san--accent-${categoryId}`
    : '';

  return (
    <span className="move-history-move-with-review move-history-move-btn">
      <span className="move-history-move-review-icon" aria-hidden>
        <MoveCategoryBoardIcon categoryId={categoryId} size={16} />
      </span>
      <span
        className={`move-history-san--figurine move-history-san--review${accentClass}${blackSideClass}`}
      >
        {figurine}
      </span>
    </span>
  );
}
/** Fast first result, then refine (depth 8 → 12 → 16). */
const REVIEW_PROGRESSIVE_DEPTHS = [8, 12, 16];
const REVIEW_QUICK_TIMEOUT_MS = 120000;

function isMainLineCellCurrent(clickIndex, currentMoveIndex, exploreLine, lineCursor, lineBranchIndex) {
  if (exploreLine && lineCursor > 0) return false;
  if (exploreLine && lineCursor === 0 && lineBranchIndex != null) {
    return clickIndex === lineBranchIndex;
  }
  return !exploreLine && clickIndex === currentMoveIndex;
}

/**
 * Numbered user line from the fork FEN (fullmove + side to move).
 * Segments are one White–Black pair each, joined with ", ".
 * Incomplete tail: "N. san" (only White).
 * If the first try-move is Black (fork with Black to move), "N. — san" (placeholder White
 * slot, em dash) so the pair shape matches White-first rows.
 */
function formatUserLineWithNumbers(fenAtBranch, plies) {
  if (!plies?.length || !fenAtBranch) return '';
  const parts = fenAtBranch.trim().split(/\s+/);
  let fullmove = parseInt(parts[5] || '1', 10);
  if (!Number.isFinite(fullmove) || fullmove < 1) fullmove = 1;

  const segments = [];
  /** @type {{ fullmove: number; fig: string } | null} */
  let pendingWhite = null;

  for (let i = 0; i < plies.length; i++) {
    const p = plies[i];
    const isW = p.color === 'w';
    const fig = sanToFigurineDisplay(p.san, isW);

    if (isW) {
      pendingWhite = { fullmove, fig };
    } else if (pendingWhite) {
      segments.push(`${pendingWhite.fullmove}. ${pendingWhite.fig} ${fig}`);
      fullmove = pendingWhite.fullmove + 1;
      pendingWhite = null;
    } else {
      /** Black to move at fork: show numbered white slot + black so pairs stay “W B”. */
      segments.push(`${fullmove}. — ${fig}`);
      fullmove += 1;
    }
  }

  if (pendingWhite) {
    segments.push(`${pendingWhite.fullmove}. ${pendingWhite.fig}`);
  }

  return segments.join(', ');
}

const Moves = ({
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
}) => {
  const scrollRef = useRef(null);
  const reviewTimeoutRef = useRef(null);
  const reviewSessionRef = useRef(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const { moves, termination, fens, fromToSquares, analysisData, reviewAnalysisComplete } =
    useSelector((state) => state.pgn);
  const { currentMoveIndex, fenLength } = useSelector((state) => state.analysis);
  const engineEnabled = useSelector((state) => state.engine.enabled);
  const dispatch = useDispatch();
  const {
    quickAnalyzeFen,
    syncEnabledState,
    engineReadyOk,
    engineWarmupPercent,
  } = useStockfishContext();

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
    onJumpToMainLine(index);
  };

  const userLineInsertAfterRowStart =
    lineBranchIndex != null && lineBranchIndex >= 1
      ? 2 * Math.floor((lineBranchIndex - 1) / 2)
      : null;

  const fenAtBranch =
    lineBranchIndex != null && fens?.[lineBranchIndex] != null
      ? fens[lineBranchIndex]
      : '';

  const userLineText =
    linePlies.length > 0 && fenAtBranch
      ? formatUserLineWithNumbers(fenAtBranch, linePlies)
      : '';

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

    syncEnabledState(engineEnabled);

    playBoardSetupSound();
    onBeginReview?.();
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
        } catch {
          return null;
        }
      };

      try {
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

          /** Best move from the position before this ply (fens[i]) — matches classifyMove / on-screen comparison vs played move. */
          const bestMoveForComparison = prevBest;

          dispatch(
            setPgnAnalysisAtIndex({
              index: i + 1,
              evalScore: evalAfter,
              bestMove: bestMoveForComparison,
              moveClassification: classified ? classified.label : null,
            }),
          );

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

  const renderUserLineRow = (key) => {
    if (!linePlies.length) return null;
    const active = exploreLine && lineCursor > 0;
    return (
      <tr key={key} className="move-history-user-line-row">
        <td />
        <td colSpan={2} className="move-history-user-line-cell">
          <button
            type="button"
            className={`move-history-user-line-btn${active ? ' move-history-user-line-btn--current' : ''}`}
            onClick={() => onEnterUserLine?.()}
          >
            {userLineText}
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="move-history-wrapper rounded-2xl">
      {showEngineWarming && (
        <div
          className="moves-engine-warming"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={engineWarmupPercent}
          aria-label="Engine loading"
        >
          <div className="moves-engine-warming-header">
            <span className="moves-engine-warming-label">Engine warming up…</span>
            <span className="moves-engine-warming-pct">{engineWarmupPercent}%</span>
          </div>
          <div className="moves-engine-warming-track">
            <div
              className="moves-engine-warming-fill"
              style={{ width: `${engineWarmupPercent}%` }}
            />
          </div>
        </div>
      )}
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
      <div className="move-history rounded-xl">
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
              {lineBranchIndex === 0 && linePlies.length > 0 ? renderUserLineRow('user-line-0') : null}
              {moves &&
                moves.map((move, index) =>
                  index % 2 === 0 ? (
                    <Fragment key={index}>
                      <tr className={`move-row-${index}`}>
                        <td>{Math.floor(index / 2) + 1}.</td>
                        <td
                          className={`clickable${
                            isMainLineCellCurrent(
                              index + 1,
                              currentMoveIndex,
                              exploreLine,
                              lineCursor,
                              lineBranchIndex,
                            )
                              ? ' move-history-cell--current'
                              : ''
                          }`}
                          onClick={() => handleMoveClick(index + 1)}
                        >
                          {renderMoveCell({
                            san: move,
                            isWhite: true,
                            moveIdx: index,
                            reviewComplete: reviewAnalysisComplete,
                            analysisData,
                          })}
                        </td>
                        <td
                          className={`clickable${
                            isMainLineCellCurrent(
                              index + 2,
                              currentMoveIndex,
                              exploreLine,
                              lineCursor,
                              lineBranchIndex,
                            )
                              ? ' move-history-cell--current'
                              : ''
                          }`}
                          onClick={() => handleMoveClick(index + 2)}
                        >
                          {renderMoveCell({
                            san: moves[index + 1],
                            isWhite: false,
                            moveIdx: index + 1,
                            reviewComplete: reviewAnalysisComplete,
                            analysisData,
                          })}
                        </td>
                      </tr>
                      {userLineInsertAfterRowStart === index && linePlies.length > 0
                        ? renderUserLineRow(`user-line-${lineBranchIndex}`)
                        : null}
                    </Fragment>
                  ) : null,
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Moves;
