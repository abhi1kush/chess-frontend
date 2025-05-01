import React, { useEffect, useState, useRef, useCallback } from "react";
import DarkThemeToggle from '../common/DarkThemeToggle';
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";
import ToggleButton from "../common/buttons/ToggleButton";
import MoveToggle from "../common/buttons/MoveToggle";
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
import { deselectItemAction } from "../../redux/actions/selectedItemActions";
import { clearBoardAction, resetBoardAction, setupBoardWithFenAction } from "../../redux/actions/boardEditorActions";
import { RootState } from "../../redux/reducers/reducers";

const BoardEditor: React.FC = () => {
  const { board } = useSelector((state: RootState) => state.boardeditor)
  const [isFlipped, setIsflipped] = useState<boolean>(false);
  const [playerToMove, setPlayerToMove] = useState<'w' | 'b'>('w');
  const [whiteKingSide, setWhiteKingSide] = useState<boolean>(true);
  const [whiteQueenSide, setWhiteQueenSide] = useState<boolean>(true);
  const [blackKingSide, setBlackKingSide] = useState<boolean>(true);
  const [blackQueenSide, setBlackQueenSide] = useState<boolean>(true);
  const count = useRef(0);
  const [isValidFen, setIsValidFen] = useState<boolean>(false);
  const [fenErrorMsg, setFenErrorMsg] = useState<string>("");
  const dispatch = useDispatch();
  

  const castlingFlags = [
    { label: "White King-Side", state: whiteKingSide, setState: setWhiteKingSide },
    { label: "White Queen-Side", state: whiteQueenSide, setState: setWhiteQueenSide },
    { label: "Black King-Side", state: blackKingSide, setState: setBlackKingSide },
    { label: "Black Queen-Side", state: blackQueenSide, setState: setBlackQueenSide },
   ];

  useEffect(() => {
    resetBoard();
  }, []);

  const clearBoard = () => {
    dispatch(deselectItemAction());
    dispatch(clearBoardAction());
  };

  const resetBoard = () => {
    dispatch(deselectItemAction());
    setPlayerToMove("w");
    setWhiteKingSide(true);
    setWhiteQueenSide(true); 
    setBlackKingSide(true);
    setBlackQueenSide(true);
    dispatch(resetBoardAction())
  };

  const handleFenSubmit = useCallback((fenString: string) => {
    console.log("Received FEN:", fenString);
    dispatch(setupBoardWithFenAction(fenString));
  }, [dispatch]);

  const generateFenFromBoard = useCallback((halfmoveClock = 0, fullmoveNumber = 1): string => {
    return generateFEN({board: board, playerToMove: playerToMove, whiteKingSide: whiteKingSide, 
      whiteQueenSide : whiteQueenSide, blackKingSide: blackKingSide, blackQueenSide: blackQueenSide, 
      halfmoveClock: halfmoveClock, fullmoveNumber: fullmoveNumber});
  },[board, playerToMove, whiteKingSide, whiteQueenSide, blackKingSide, blackQueenSide]);

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
            <button onClick={() => {setIsflipped(!isFlipped)}} className="action-button">Flip</button>
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
        <div className="castling">
          {/* <div><h3>Castling</h3></div> */}
          <div className="toggle-container">
            <span>To Move : </span>
            <MoveToggle playerToMove={playerToMove} setPlayerToMove={setPlayerToMove}/>
            </div> 
            {
              castlingFlags.map(({label, state, setState}) => (
              <ToggleButton 
                key={label}
                labelText={label} 
                toggle={state} 
                handleToggle={() => {setState(!state)}}
              />))
            }
            <NoticeBoard messages={[{type: isValidFen ? "ok" : "error", text: fenErrorMsg}]} isValid={isValidFen}/>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default BoardEditor;

