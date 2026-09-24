import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Chess, Square, Color } from "chess.js";
import { useSelector, useDispatch } from 'react-redux';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "../../chessboard/components/BoardControls";
import CONFIG from "../../../config";
import Moves from "./MoveList";
import '../../../styles/global.css';
import AnalysisBoard from "../../chessboard/components/ChessBoard";
import EvalBar from "./EvaluationBar";
import '../../../styles/components/AnalysisLayout.css';
import { formatEvalDisplay } from "../../../shared/utils/formatEval";
import { useChessEngineContext } from "../../engine/hooks/useEngine";
import {
  setPgnAnalysisAtIndex,
  jumpToMove,
  startPos,
  finalPosition,
} from "../redux/analysisActions";
import { moveQualityClassFromLabel } from "../services/classifyMove";
import GameReviewSummary from "./GameReviewSummary";
import { MoveCategoryBoardIcon } from "./MoveCategoryBadge";
import {
  bestMoveUciToCustomArrows,
  uciToArrowFromSquares,
} from "../../chessboard/services/uciArrow";
import { normalizeFenKey } from "../../engine/services/stockfishFenCache";
import type { PromotionPiece } from "../../../shared/types/AnalysisTypes";
import type { RootState } from "../../../app/rootReducer";
import type { FromToSquare } from "../../../shared/types/AnalysisTypes";
import { getPromotionDetails } from "../../chessboard/services/piecePromotion";
import { Arrow } from "react-chessboard/dist/chessboard/types";

const ANALYSIS_ENGINE_CONFIG = {
  threads: 1,
  hashMb: 16,
  multiPv: 1,
};

type Ply = {
  san: string;
  fenAfter: string;
  from: Square;
  to: Square;
  color: Color;
};

const stripEmoji = (value : string | null) =>
  String(value ?? "")
    .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, "")
    .trim();

const AnalysisGame = () => {
  const dispatch = useDispatch();
  const {
    fens,
    fromToSquares,
    moves,
    blackPlayerName,
    whitePlayerName,
    analysisData,
    reviewAnalysisComplete,
  } = useSelector((state : RootState) => state.pgn);
  const { currentMoveIndex} = useSelector((state: RootState) => state.analysis);
  const { result} = useSelector((state: RootState) => state.pgn);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const positionRef = useRef(position); 
  const { isFlipped, theme } = useSelector((state: RootState) => state.settings);
  const [evalScore, setEvalScore] = useState<number | null>(null);
  const [bestLine, setBestLine] = useState("");
  const [bestMove, setBestMove] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);
  /** User try-line: fork at main-line index `branchIndex`, half-moves in `plies`, cursor = plies entered (0..plies.length). */
  const [lineBranchIndex, setLineBranchIndex] = useState<number | null>(null);
  const [linePlies, setLinePlies] = useState<Ply[]>([]);
  const [lineCursor, setLineCursor] = useState(0);
  /** When true, prev/next walk `lineCursor`; when false, only `currentMoveIndex` drives the board (skips user line). */
  const [exploreLine, setExploreLine] = useState(false);
  const enabledChessEngine = useSelector((state: RootState) => state.engine.enabled);
  const analysisWriteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [manualAnalysisState, setManualAnalysisState] = useState({
    active: false,
    fenKey: "",
  });

  const { engine } = useChessEngineContext();
  const manualAnalysisActiveRef = useRef(false);

  useEffect(() => {
    return engine.subscribe((event) => {
      if (!manualAnalysisActiveRef.current) {
        return;
      }
      if (event.type === 'info') {
        if (event.info.eval) {
          setEvalScore(event.info.eval.pawns);
        }
        if (event.info.pvUci) {
          setBestLine(event.info.pvUci.join(' '));
        }
        if (event.info.bestMoveUci) {
          setBestMove(event.info.bestMoveUci);
        }
      }
      if (event.type === 'bestMove') {
        setBestMove(event.bestMoveUci);
      }
    });
  }, [engine]);

    // Permission sync
    useEffect(() => {
      engine.setEnabled(enabledChessEngine);
    }, [enabledChessEngine, engine]);

    // ✅ New: Keep positionRef up-to-date
    useEffect(() => {
      positionRef.current = position;
    }, [position]);

  const setupEngine = useCallback(() => {
    engine.start();
    engine.configure(ANALYSIS_ENGINE_CONFIG);
  }, [engine]);

  /** Reset user line when loading a new game. */
  useEffect(() => {
    setLineBranchIndex(null);
    setLinePlies([]);
    setLineCursor(0);
    setExploreLine(false);
  }, [fens?.[0], moves?.length]);

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

  /** After Start Review finishes, UI reads only from `analysisData` (live engine must not overwrite Redux). */
  const useReviewCache = reviewAnalysisComplete && !isReviewing;

  /** Clear live engine state when navigating (only before review cache is active). */
  useEffect(() => {
    if (isReviewing || reviewAnalysisComplete) return;
    const row = analysisData?.[currentMoveIndex];
    if (!(row?.evalScore != null && Number.isFinite(row.evalScore))) {
      setEvalScore(null);
      setBestLine("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only when index or review phase changes
  }, [currentMoveIndex, isReviewing, reviewAnalysisComplete]);

  const bestMoveUci = bestLine.trim().split(/\s+/).filter(Boolean)[0] ?? "";

  const analysisEntry = analysisData?.[currentMoveIndex];
  const boardFenKey = normalizeFenKey(position);
  /** Review rows follow `fens`, not `currentMoveIndex` (that index stays on the branch ply). */
  const reviewedIndex = fens?.findIndex((fen) => normalizeFenKey(fen) === boardFenKey) ?? -1;
  const currentPositionReview =
    reviewedIndex >= 0 ? analysisData?.[reviewedIndex] : undefined;
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
      ? String(analysisData?.[reviewedIndex]?.bestMove ?? "").trim()
      : useReviewCache
        ? ""
        : bestMoveUci;
  const shouldShowBestMove = !useReviewCache || currentMoveIndex >= 1;
  const bestMoveDisplayValue = shouldShowBestMove ? (displayBestMove || "—") : "—";
  const moveQualityDisplayValue =
    useReviewCache && currentMoveIndex >= 1 && !manualAnalysisState.active
      ? (stripEmoji(analysisEntry?.moveClassification) || "—")
      : "—";

  /**
   * Green arrow: engine best **from the position before the move that reached here** vs the move
   * actually played — `analysisData[k].bestMove` for `fens[k]` (k ≥ 1). Not the “next move” hint.
   * That UCI is legal on `fens[k-1]`; on `fens[k]` we draw by squares only.
   */
  const comparisonArrowUci = useMemo(() => {
    if (!useReviewCache || !analysisData?.length) return '';
    const k = currentMoveIndex;
    if (k < 1) return '';
    const row = analysisData[k];
    return String(row?.bestMove ?? '').trim();
  }, [useReviewCache, analysisData, currentMoveIndex]);

  const sideToMove = useMemo(() => {
    const t = position.split(/\s+/)[1];
    return t === "b" ? "b" : "w";
  }, [position]);

  const topNameActive =
    (isFlipped && sideToMove === "w") || (!isFlipped && sideToMove === "b");
  const bottomNameActive =
    (isFlipped && sideToMove === "b") || (!isFlipped && sideToMove === "w");

  const onMainLinePosition = useMemo(() => {
    if (!fens?.length || fens[currentMoveIndex] == null) return false;
    if (exploreLine) return false;
    return normalizeFenKey(position) === normalizeFenKey(fens[currentMoveIndex]);
  }, [position, fens, currentMoveIndex, exploreLine]);

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
      parentFen &&
      normalizeFenKey(position) === normalizeFenKey(parentFen);

    if (onParent && parentFen) {
      return bestMoveUciToCustomArrows(parentFen, uci);
    }
    /** Current board is after the move (or a try-line): keep from→to for comparison. */
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

  const moveQualityClass = moveQualityClassFromLabel(analysisEntry?.moveClassification);

  const lastMoveForHighlight = useMemo(():FromToSquare | undefined => {
    if (exploreLine && lineCursor > 0 && linePlies[lineCursor - 1]) {
      const p = linePlies[lineCursor - 1];
      if (p.from && p.to) return { 
        from: p.from, 
        to: p.to, 
        promotion: getPromotionDetails(p.san).promotedPiece 
      };
    }
    if (
      exploreLine 
      && lineCursor === 0 
      && lineBranchIndex != null 
      && lineBranchIndex > 0 
      && fromToSquares?.[lineBranchIndex - 1]
    ) {
      return fromToSquares[lineBranchIndex - 1];
    }
    if (!fens?.length) return undefined;
    if (
      currentMoveIndex <= 0 ||
      currentMoveIndex >= fens.length - 1 ||
      !fromToSquares?.length
    ) {
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

  /** Tint from/to by review category on the main line; variations keep default last-move colors. */
  const boardLastMoveCategoryId =
    useReviewCache && onMainLinePosition ? moveQualityClass : '';

  const moveCategoryBadge = useMemo(() => {
    if (!boardLastMoveCategoryId || !lastMoveForHighlight?.to) return null;
    return {
      toSquare: lastMoveForHighlight.to,
      categoryId: boardLastMoveCategoryId,
    };
  }, [boardLastMoveCategoryId, lastMoveForHighlight]);

  useEffect(() => {
    if (reviewAnalysisComplete || isReviewing) return;
    if (!enabledChessEngine || !fens?.length) return;
    if (!onMainLinePosition) return;
    if (analysisWriteTimerRef.current) clearTimeout(analysisWriteTimerRef.current);
    if (evalScore == null || !Number.isFinite(evalScore)) return;
    analysisWriteTimerRef.current = setTimeout(() => {
      dispatch(
        setPgnAnalysisAtIndex({
          index: currentMoveIndex,
          evalScore,
          bestMove: bestMoveUci,
        }),
      );
    }, 400);
    return () => {
      if (analysisWriteTimerRef.current) clearTimeout(analysisWriteTimerRef.current);
    };
  }, [
    reviewAnalysisComplete,
    isReviewing,
    enabledChessEngine,
    fens?.length,
    currentMoveIndex,
    evalScore,
    bestMoveUci,
    dispatch,
    onMainLinePosition,
  ]);

  const cancelManualAnalysis = useCallback((_reason?: string) => {
    engine.stopLiveAnalysis();
    manualAnalysisActiveRef.current = false;
    setManualAnalysisState({ active: false, fenKey: "" });
  }, [engine]);

  const handleAnalyzeCurrentPosition = useCallback(() => {
    if (!enabledChessEngine) return;
    const fenToAnalyze = positionRef.current;
    const fenKey = normalizeFenKey(fenToAnalyze);
    setEvalScore(null);
    setBestLine("");
    setupEngine();
    manualAnalysisActiveRef.current = true;
    setManualAnalysisState({ active: true, fenKey });
    void engine
      .analyzePosition(fenToAnalyze, { skipCache: true })
      .then((info) => {
        if (normalizeFenKey(positionRef.current) !== fenKey) return;
        if (info.eval && Number.isFinite(info.eval.pawns)) {
          setEvalScore(info.eval.pawns);
        }
        if (info.pvUci?.length) {
          setBestLine(info.pvUci.join(' '));
        }
        if (info.bestMoveUci) {
          setBestMove(info.bestMoveUci);
        }
      })
      .catch(() => undefined)
      .finally(() => {
        if (normalizeFenKey(positionRef.current) !== fenKey) {
          return;
        }
        manualAnalysisActiveRef.current = false;
        setManualAnalysisState({ active: false, fenKey });
      });
  }, [enabledChessEngine, setupEngine, engine]);

  useEffect(() => {
    if (!manualAnalysisState.fenKey) return;
    if (normalizeFenKey(position) === manualAnalysisState.fenKey) return;
    if (manualAnalysisState.active) {
      cancelManualAnalysis("position changed during manual analysis");
    } else {
      setManualAnalysisState({ active: false, fenKey: "" });
    }
    setEvalScore(null);
    setBestLine("");
  }, [position, manualAnalysisState.fenKey, manualAnalysisState.active, cancelManualAnalysis]);

  useEffect(() => {
    if (!enabledChessEngine && manualAnalysisState.active) {
      cancelManualAnalysis("engine disabled");
    }
  }, [enabledChessEngine, manualAnalysisState.active, cancelManualAnalysis]);

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
      const ply: Ply = {
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
        setExploreLine(false);
        setLineBranchIndex(null);
        setLinePlies([]);
        setLineCursor(0);
        setPosition(newFen);
        if (manualAnalysisState.active) cancelManualAnalysis('handleMove');
        return true;
      }

      if (!exploreLine) {
        setLineBranchIndex(currentMoveIndex);
        setLinePlies([ply]);
        setLineCursor(1);
        setExploreLine(true);
        setPosition(newFen);
        if (manualAnalysisState.active) cancelManualAnalysis('handleMove');
        return true;
      }

      const nextPlies = [...linePlies.slice(0, lineCursor), ply];
      setLinePlies(nextPlies);
      setLineCursor(nextPlies.length);
      setExploreLine(true);
      setPosition(newFen);
      if (manualAnalysisState.active) cancelManualAnalysis('handleMove');
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
      manualAnalysisState.active,
      dispatch,
      cancelManualAnalysis,
    ],
  );

  const navigateMove = useCallback(() => {
    if (manualAnalysisState.active) {
      cancelManualAnalysis("navigateMove");
    }
  }, [manualAnalysisState.active, cancelManualAnalysis]);

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
  }, [
    exploreLine,
    linePlies.length,
    lineBranchIndex,
    lineCursor,
    currentMoveIndex,
  ]);

  const canNavigateNext = useMemo(() => {
    const flen = fens?.length ?? 0;
    if (exploreLine && linePlies.length && lineBranchIndex != null) {
      if (lineCursor < linePlies.length) return true;
      return lineBranchIndex < flen - 1;
    }
    return currentMoveIndex < flen - 1;
  }, [
    exploreLine,
    linePlies.length,
    lineBranchIndex,
    lineCursor,
    currentMoveIndex,
    fens?.length,
  ]);

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

  const clearUserLine = useCallback(() => {
    setLineBranchIndex(null);
    setLinePlies([]);
    setLineCursor(0);
    setExploreLine(false);
  }, []);

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

  const goStartDisabled =
    currentMoveIndex === 0 && !exploreLine;
  const goLatestDisabled =
    Boolean(fens?.length) &&
    currentMoveIndex >= fens.length - 1 &&
    !exploreLine;

  return (
    <div className="analysis-game-page bg-transparent">
      <AnalysisTopContainer fen={position} />
      <aside className="analysis-game-engine-shell rounded-2xl" aria-label="Engine analysis">
        <div className="analysis-game-engine-panel" aria-live="polite">
          <div className="analysis-game-engine-panel-head">
            <span className="analysis-game-engine-panel-icon" aria-hidden>⚡</span>
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
                  moveQualityClass && moveQualityDisplayValue !== "—"
                    ? `analysis-game-engine-value analysis-game-move-quality analysis-game-move-quality--${moveQualityClass}`
                    : "analysis-game-engine-value"
                }
              >
                {moveQualityClass && moveQualityDisplayValue !== "—" ? (
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
            <span className="analysis-game-insight-icon" aria-hidden>🧠</span>
              <span className="analysis-game-insight-title">Analysis Updates</span>
          </div>
          <p className="analysis-game-insight-text">
            {reviewAnalysisComplete
              ? "Review complete. Check detailed move-quality stats in the panel below."
              : "Upload your chess game PGN file to review it here."}
          </p>
        </div>
        {reviewAnalysisComplete && moves?.length > 0 && (
          <GameReviewSummary
            analysisData={analysisData}
            numMoves={moves.length}
            whitePlayerName={whitePlayerName}
            blackPlayerName={blackPlayerName}
          />
        )}
      </aside>
      <div className='middle-container'>
        <div className={`analysis-container ${theme}-theme rounded-2xl`}>
          <div className="main-area">
          <div className="top-name">              
            <div className="player-names-wrapper">
                  <span
                    className={`player-side-avatar ${isFlipped ? "player-side-avatar--white" : "player-side-avatar--black"}`}
                    aria-hidden
                  >
                    👤
                  </span>
                  <div
                    className={`player-name player-pill ${isFlipped ? "white-player-name" : "black-player-name"}${topNameActive ? " player-name--active" : ""}`}
                  >
                    {isFlipped ? whitePlayerName : blackPlayerName}
                  </div>
            </div>
          </div>
          <div className='evalbar-board-container'>
              <EvalBar
                isFlipped={isFlipped}
                evalScore={displayEvalScore}
              />
            <div className="board-wrapper">
                  <AnalysisBoard
                  className={'board'}
                  fen={position}
                  isFlipped={isFlipped}
                  lastMove={lastMoveForHighlight}
                  lastMoveCategoryId={boardLastMoveCategoryId}
                  moveCategoryBadge={moveCategoryBadge}
                  handleMove={handleMove}
                  arePiecesDraggable={!isReviewing}
                  isFinalMove={
                    !exploreLine && currentMoveIndex === fens.length - 1
                  }
                  result={result}
                  customArrows={bestMoveArrows}
                />
            </div>
          </div>
          <div className="bottom-name">
            <div className="player-names-wrapper">
                  <span
                    className={`player-side-avatar ${isFlipped ? "player-side-avatar--black" : "player-side-avatar--white"}`}
                    aria-hidden
                  >
                    👤
                  </span>
                  <div
                    className={`player-name player-pill ${isFlipped ? "black-player-name" : "white-player-name"}${bottomNameActive ? " player-name--active" : ""}`}
                  >
                    {isFlipped ? blackPlayerName : whitePlayerName}
                  </div>
            </div>
          </div>
          </div>
         <div className="sidebar right-panel rounded-2xl">
          <Moves
            // moves={moves}
            onReviewingChange={setIsReviewing}
            lineBranchIndex={lineBranchIndex}
            linePlies={linePlies}
            exploreLine={exploreLine}
            lineCursor={lineCursor}
            onJumpToMainLine={jumpToMainLine}
            onEnterUserLine={enterUserLine}
            onBeginReview={clearUserLine}
            onAnalyzePosition={handleAnalyzeCurrentPosition}
            analyzingPosition={manualAnalysisState.active}
            mobileNavigationNode={
              <MoveNavigation
                onNavigatePrev={navigationPrev}
                onNavigateNext={navigationNext}
                canNavigatePrev={canNavigatePrev}
                canNavigateNext={canNavigateNext}
                onGoStart={navigationGoStart}
                onGoLatest={navigationGoLatest}
                goStartDisabled={goStartDisabled}
                goLatestDisabled={goLatestDisabled}
              />
            }
          />
          <div className="analysis-desktop-move-nav">
            <MoveNavigation
              onNavigatePrev={navigationPrev}
              onNavigateNext={navigationNext}
              canNavigatePrev={canNavigatePrev}
              canNavigateNext={canNavigateNext}
              onGoStart={navigationGoStart}
              onGoLatest={navigationGoLatest}
              goStartDisabled={goStartDisabled}
              goLatestDisabled={goLatestDisabled}
            />
          </div>
         </div>
         </div>
      </div>
    </div>
  );
};

export default AnalysisGame;
