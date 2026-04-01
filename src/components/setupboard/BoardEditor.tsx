import React, { useEffect, useState, useCallback } from "react";
import { Chess } from "chess.js";
import DarkThemeToggle from '../common/DarkThemeToggle';
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";
import FenInputPopup from "../fen/FenInputPopup";
import FenDisplayBox from "../fen/FenDisplayBox";
import { IsValidFen } from "../../services/fen/fenValidation";
import { handleDragStart } from "./eventhandlers/PieceEventHandlers";
import { handlePaletteClick } from "./eventhandlers/PaletteEventHandlers";
import Palette from "./Palette";
import { generateFEN } from "../../services/fen/fenGenerator";
import Board from "./Board";
import { setFen } from '../../services/fen/useFEN';
import {useDispatch, useSelector} from "react-redux";
import { clearBoardAction, resetBoardAction, setupBoardWithFenAction, flipBoardAction, deselectItemAction } from "../../redux/actions/boardEditorActions";
import CastlingFlagsComponent from "./CastlingFlagsComponent";
import { selectBoardEditorProps } from "../../selector/boardEditorSelector";
import { formatEvalDisplay } from "../../utils/formatEval";
import { useBoardEditorAnalysis } from "../../hooks/useBoardEditorAnalysis";
import EvalBar from "../analysis/EvalBar";

function uciToSan(fen: string, uci: string): string {
  if (!uci || uci.length < 4) return uci;
  try {
    const game = new Chess(fen);
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    const promotion = uci.length > 4 ? (uci[4] as "q" | "r" | "b" | "n") : undefined;
    const m = game.move({ from, to, promotion });
    return m ? m.san : uci;
  } catch {
    return uci;
  }
}

const BoardEditor: React.FC = () => {
  const {
    board,
    isFlipped,
    playerToMove,
    castlingFlags,
  } = useSelector(selectBoardEditorProps);
 
  const [isValidFen, setIsValidFen] = useState<boolean>(false);
  const [fenErrorMsg, setFenErrorMsg] = useState<string>("");
  const dispatch = useDispatch();

  const clearBoard = () => {
    dispatch(deselectItemAction());
    dispatch(clearBoardAction());
  };

  const resetBoard = () => {
    dispatch(deselectItemAction());
    dispatch(resetBoardAction())
  };

  const handleFenSubmit = useCallback((fenString: string) => {
    dispatch(setupBoardWithFenAction(fenString));
  }, [dispatch]);

  const generateFenFromBoard = useCallback((halfmoveClock = 0, fullmoveNumber = 1): string => {
    return generateFEN({board: board, playerToMove: playerToMove, whiteKingSide: castlingFlags.K, 
      whiteQueenSide : castlingFlags.Q, blackKingSide: castlingFlags.k, blackQueenSide: castlingFlags.q, 
      halfmoveClock: halfmoveClock, fullmoveNumber: fullmoveNumber});
  },[board, playerToMove, castlingFlags.K, castlingFlags.k, castlingFlags.Q, castlingFlags.q]);

  useEffect(() => {
    resetBoard();
  }, []);

  useEffect(() => {
    const currentFen = generateFenFromBoard();
    const {isValid, msg } = IsValidFen(currentFen);
    setIsValidFen(prev => (prev !== isValid ? isValid : prev));
    setFenErrorMsg(prev => (prev !== msg ? msg : prev));
    setFen(currentFen);
  }, [generateFenFromBoard, board]);

  const {
    evalScore,
    bestLine,
    bestMoveUci,
    isAnalyzing,
    analysisError,
    handleAnalyse,
    handleStopAnalysis,
    fenRef,
  } = useBoardEditorAnalysis(
    isValidFen,
    generateFenFromBoard,
  );

  const bestMoveSan = bestMoveUci ? uciToSan(fenRef.current, bestMoveUci) : "";

  return (
    <div className="main-container board-editor-page">
      <div className="top-container"> 
        <nav className="top-bar">
            <button onClick={clearBoard} className="action-button">Clear</button>
            <button onClick={resetBoard} className="action-button">Reset</button>
            <button onClick={() => {dispatch(flipBoardAction())}} className="action-button">Flip</button>
            <FenInputPopup onSubmit={handleFenSubmit}/>
            <button
              type="button"
              onClick={handleAnalyse}
              disabled={!isValidFen || isAnalyzing}
              className="action-button"
              title={!isValidFen ? "Position must be legal" : "Run engine on current position"}
            >
              {isAnalyzing ? "Analysing…" : "Analyse"}
            </button>
            <button
              type="button"
              onClick={handleStopAnalysis}
              disabled={!isAnalyzing}
              className="action-button"
              title="Stop engine"
            >
              Stop
            </button>
            <DarkThemeToggle/>
        </nav>
      </div>

      <aside className="board-editor-analysis-shell" aria-label="Engine analysis">
        {analysisError ? (
          <div className="board-editor-analysis-error" role="alert">{analysisError}</div>
        ) : null}
        <div className="board-editor-analysis-panel" aria-live="polite">
          <div className="board-editor-analysis-row">
            <span className="board-editor-analysis-label">Eval (White)</span>
            <span className="board-editor-analysis-value">
              {evalScore != null ? formatEvalDisplay(evalScore) : "—"}
            </span>
          </div>
          <div className="board-editor-analysis-row">
            <span className="board-editor-analysis-label">Best move</span>
            <span className="board-editor-analysis-value">
              {bestMoveSan || bestMoveUci || "—"}
            </span>
          </div>
          <div className="board-editor-analysis-row board-editor-analysis-pv">
            <span className="board-editor-analysis-label">Principal variation</span>
            <span className="board-editor-analysis-value">{bestLine || "—"}</span>
          </div>
        </div>
      </aside>

      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="fen-chessboard-container">
        <FenDisplayBox isValid={isValidFen} fenErrorMsg={fenErrorMsg}/>
        <div className="board-editor-evalbar-board-row">
          <div className="board-editor-evalbar-wrap" aria-hidden>
            <EvalBar
              isFlipped={isFlipped}
              evalScore={evalScore}
            />
          </div>
          <div className="chessboard-container">
            <Board isFlipped={isFlipped}/>
            <Palette handleDragStart={handleDragStart} handlePaletteClick={handlePaletteClick}/>
            <CastlingFlagsComponent isValidFen={isValidFen} fenErrorMsg={fenErrorMsg}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BoardEditor;
