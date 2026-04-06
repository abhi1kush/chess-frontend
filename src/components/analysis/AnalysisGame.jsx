import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Chess } from "chess.js";
import { useSelector, useDispatch } from 'react-redux';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import CONFIG from "../../config";
import Moves from "./Moves";
import '../../styles/global.css';
import AnalysisBoard from "./AnalysisBoard";
import EvalBar from "./EvalBar";
import '../../styles/components/AnalysisLayout.css';
import {onMessage} from "../../utils/onMessage";
import { formatEvalDisplay } from "../../utils/formatEval";
import { useStockfishContext } from "../../context/StockfishContext";
import EngineEnabledListener from "./EngineEnabledListener";
import { setPgnAnalysisAtIndex } from "../../redux/actions/analysisActions";
import { moveQualityClassFromLabel } from "../../utils/moveClassification";
import GameReviewSummary from "./GameReviewSummary";
import {
  bestMoveUciToCustomArrows,
  uciToArrowFromSquares,
} from "../../utils/uciArrow";
import { normalizeFenKey } from "../../engine/stockfishFenCache";

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
  } = useSelector((state) => state.pgn);
  const { currentMoveIndex} = useSelector((state) => state.analysis);
  const { result} = useSelector((state) => state.pgn);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const positionRef = useRef(position); 
  const { isFlipped, theme } = useSelector((state) => state.settings);
  const [evalScore, setEvalScore] = useState(null);
  const [bestLine, setBestLine] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);
  const enabledChessEngine = useSelector(state => state.engine.enabled);
  const analysisWriteTimerRef = useRef(null);

  const stockfishOptions = [
    { name: 'Threads', value: 1 },
    { name: 'Hash', value: 16 },
    { name: 'MultiPV', value: 1 },
  ];
  const { initEngine, setOptions, startSearch, stopSearch, setOnMessage, syncEnabledState} = useStockfishContext();
  const handleEngineMessage = useCallback((data) => {
    onMessage(data, setEvalScore, setBestLine, positionRef.current);
  }, []);

    // Permission sync
    useEffect(() => {
      syncEnabledState(enabledChessEngine);
    }, [enabledChessEngine, syncEnabledState]);

    // ✅ New: Keep positionRef up-to-date
    useEffect(() => {
      positionRef.current = position;
    }, [position]);

  const setupEngine = () => {
    initEngine();
    setOptions(stockfishOptions);
    setOnMessage(handleEngineMessage);
  };

  useEffect(() => {
    if (fens && fens.length > 0) {
      setPosition(fens[currentMoveIndex]);
    }
    // setBlackEvalBarHeight(Math. random() * (100 - 1) + 1);
  }, [currentMoveIndex, fens, fromToSquares]);

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
  const hasCachedEval =
    analysisEntry?.evalScore != null && Number.isFinite(analysisEntry.evalScore);
  const displayEvalScore = useReviewCache
    ? hasCachedEval
      ? analysisEntry.evalScore
      : null
    : evalScore;
  const displayBestMove = useReviewCache
    ? String(analysisEntry?.bestMove ?? "").trim()
    : bestMoveUci;

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

  const bestMoveArrows = useMemo(() => {
    if (!useReviewCache) {
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
  ]);

  const moveQualityClass = moveQualityClassFromLabel(analysisEntry?.moveClassification);

  const onMainLinePosition = useMemo(
    () =>
      Boolean(fens?.length && fens[currentMoveIndex] != null) &&
      normalizeFenKey(position) === normalizeFenKey(fens[currentMoveIndex]),
    [position, fens, currentMoveIndex],
  );

  const lastMoveForHighlight = useMemo(() => {
    if (!fens?.length) return null;
    if (
      currentMoveIndex <= 0 ||
      currentMoveIndex >= fens.length - 1 ||
      !fromToSquares?.length
    ) {
      return null;
    }
    return fromToSquares[currentMoveIndex - 1];
  }, [currentMoveIndex, fens?.length, fromToSquares]);

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
    if (analysisWriteTimerRef.current) clearTimeout(analysisWriteTimerRef.current);
    analysisWriteTimerRef.current = setTimeout(() => {
      dispatch(
        setPgnAnalysisAtIndex({
          index: currentMoveIndex,
          evalScore: Number.isFinite(evalScore) ? evalScore : null,
          bestMove: bestMoveUci,
        }),
      );
    }, 400);
    return () => {
      if (analysisWriteTimerRef.current) clearTimeout(analysisWriteTimerRef.current);
    };
  }, [reviewAnalysisComplete, isReviewing, enabledChessEngine, fens?.length, currentMoveIndex, evalScore, bestMoveUci, dispatch]);

  const handleMove = useCallback(({ from, to }) => {
    console.log("handleMove", from, to);
    const game = new Chess(position);
    try {
      const move = game.move({from, to, promotion: 'q'});
      if (!move) return;
      setPosition(game.fen());
      if (!enabledChessEngine) return;
      setupEngine();
      stopSearch("handleMove");
      startSearch(game.fen());
    } catch (error) {
      console.error(error);
    }
  }, [position, enabledChessEngine, startSearch, stopSearch]);

  const navigateMove = useCallback(() => {
    stopSearch("navigateMove");
    if (enabledChessEngine) {
      startSearch(positionRef.current);
    }
  }, [enabledChessEngine, startSearch, stopSearch]);

  return (
    <div className="analysis-game-page">
      <EngineEnabledListener fen={position} pauseSearch={isReviewing} />
      <AnalysisTopContainer/>
      <aside className="analysis-game-engine-shell" aria-label="Engine analysis">
        <div className="analysis-game-engine-panel" aria-live="polite">
          <div className="analysis-game-engine-row">
            <span className="analysis-game-engine-label">Eval Score</span>
            <span className="analysis-game-engine-value">{formatEvalDisplay(displayEvalScore)}</span>
          </div>
          {/** After review: hide best move at start position; show from first move onward (index ≥ 1). Live engine still shows at index 0. */}
          {(!useReviewCache || currentMoveIndex >= 1) && (
            <div className="analysis-game-engine-row">
              <span className="analysis-game-engine-label">Best Move</span>
              <span className="analysis-game-engine-value">{displayBestMove || "—"}</span>
            </div>
          )}
          {useReviewCache && currentMoveIndex >= 1 && (
            <div className="analysis-game-engine-row">
              <span className="analysis-game-engine-label">Move quality</span>
              <span
                className={
                  moveQualityClass
                    ? `analysis-game-engine-value analysis-game-move-quality analysis-game-move-quality--${moveQualityClass}`
                    : "analysis-game-engine-value"
                }
              >
                {analysisEntry?.moveClassification ?? "—"}
              </span>
            </div>
          )}
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
        <div className={`analysis-container ${theme}-theme `}>
          <div className="main-area">
          <div className="top-name">              
            <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "white-player-name" : "black-player-name"}`}>{isFlipped ? whitePlayerName : blackPlayerName}</div>
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
                  isFinalMove={currentMoveIndex === fens.length - 1}
                  result={result}
                  customArrows={bestMoveArrows}
                />
            </div>
          </div>
          <div className="bottom-name">
            <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "black-player-name" : "white-player-name"}`}>{isFlipped ? blackPlayerName : whitePlayerName}</div>
            </div>
          </div>
          </div>
         <div className="sidebar right-panel">
          <Moves moves={moves} onReviewingChange={setIsReviewing} />
          <MoveNavigation 
            setPosition={setPosition}
            handleMove={navigateMove}
            />
         </div>
         </div>
      </div>
    </div>
  );
};

export default AnalysisGame;
