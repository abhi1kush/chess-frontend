import React, { useEffect, useState, useRef, useCallback } from "react";
import DarkThemeToggle from '../common/DarkThemeToggle';
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";
import FenInputPopup from "../fen/FenInputPopup";
import FenDisplayBox from "../fen/FenDisplayBox";
import NoticeBoard from "./NoticeBoard";
import { IsValidFen } from "../../services/fen/fenValidation";
import { handleDragStart } from "./eventhandlers/PieceEventHandlers";
import { handlePaletteClick } from "./eventhandlers/PaletteEventHandlers";
import Palette from "./Palette";
import { generateFEN } from "../../services/fen/fenGenerator";
import Board from "./Board";
import { setFen } from '../../services/fen/useFEN';
import {useDispatch, useSelector} from "react-redux";
import { clearBoardAction, resetBoardAction, setupBoardWithFenAction, flipBoardAction, deselectItemAction } from "../../redux/actions/boardEditorActions";
import { RootState } from "../../redux/reducers/reducers";
import { BoardState } from "../../CustomTypes/CustomTypes";
import CastlingFlagsComponent from "./CastlingFlagsComponent";

const BoardEditor: React.FC = () => {
  const {
    board,
    isFlipped,
    playerToMove,
    castlingFlags,
  } = useSelector((state: RootState) => ({
    board: state.boardeditor.board,
    isFlipped: state.boardeditor.isFlipped,
    playerToMove: state.boardeditor.playerToMove,
    castlingFlags: state.boardeditor.castlingFlags,
  }) as BoardState);
  
  const count = useRef(0);
  const [isValidFen, setIsValidFen] = useState<boolean>(false);
  const [fenErrorMsg, setFenErrorMsg] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    resetBoard();
  }, []);

  const clearBoard = () => {
    dispatch(deselectItemAction());
    dispatch(clearBoardAction());
  };

  const resetBoard = () => {
    dispatch(deselectItemAction());
    dispatch(resetBoardAction())
  };

  const handleFenSubmit = useCallback((fenString: string) => {
    console.log("Received FEN:", fenString);
    dispatch(setupBoardWithFenAction(fenString));
  }, [dispatch]);

  const generateFenFromBoard = useCallback((halfmoveClock = 0, fullmoveNumber = 1): string => {
    return generateFEN({board: board, playerToMove: playerToMove, whiteKingSide: castlingFlags.K, 
      whiteQueenSide : castlingFlags.Q, blackKingSide: castlingFlags.k, blackQueenSide: castlingFlags.q, 
      halfmoveClock: halfmoveClock, fullmoveNumber: fullmoveNumber});
  },[board, playerToMove, castlingFlags.K, castlingFlags.k, castlingFlags.Q, castlingFlags.q]);

  // console.log("--- BoardEditor rendered", count.current);
  count.current += 1;
  useEffect(() => {
    const currentFen = generateFenFromBoard();
    const {isValid, msg } = IsValidFen(currentFen);
    setIsValidFen(prev => (prev !== isValid ? isValid : prev));
    setFenErrorMsg(prev => (prev !== msg ? msg : prev));
    setFen(currentFen);
  }, [generateFenFromBoard, board]);
  console.log("board editor rendered", count.current);
  return (
    <div className="main-container">
      <div className="top-container"> 
        <nav className="top-bar">
            <button onClick={clearBoard} className="action-button">Clear</button>
            <button onClick={resetBoard} className="action-button">Reset</button>
            <button onClick={() => {dispatch(flipBoardAction())}} className="action-button">Flip</button>
            <FenInputPopup onSubmit={handleFenSubmit}/>
            <DarkThemeToggle/>
            {/* <Settings /> */}
        </nav>
      </div>
      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="fen-chessboard-container">
        <FenDisplayBox isValid={isValidFen} fenErrorMsg={fenErrorMsg}/>
        <div className="chessboard-container">
          <Board isFlipped={isFlipped}/>
        <Palette handleDragStart={handleDragStart} handlePaletteClick={handlePaletteClick}/>
        <CastlingFlagsComponent isValidFen={isValidFen} fenErrorMsg={fenErrorMsg}/>
        <NoticeBoard messages={[{type: isValidFen ? "ok" : "error", text: fenErrorMsg}]} isValid={isValidFen}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BoardEditor;

