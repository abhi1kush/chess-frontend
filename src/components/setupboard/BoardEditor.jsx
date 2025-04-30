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
import CONFIG from "../../config";
import { FenToBoard } from "../../services/fen/fenParser";
import NoticeBoard from "./NoticeBoard";
import { IsValidFen } from "../../services/fen/fenValidation";
import { handleDragStart } from "./eventhandlers/PieceEventHandlers";
import { handlePaletteClick } from "./eventhandlers/PaletteEventHandlers";
import Palette from "./Palette";
import { generateFEN } from "../../services/fen/fenGenerator";
import Board from "./Board";
import { setFen } from '../../services/fen/useFEN';
import ToastIcon from "../common/buttons/ToolTipWrapper";

const BoardEditor = () => {
  const [board, setBoard] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFlipped, setIsflipped] = useState(false);
  const [playerToMove, setPlayerToMove] = useState('w');
  const [whiteKingSide, setWhiteKingSide] = useState(true);
  const [whiteQueenSide, setWhiteQueenSide] = useState(true);
  const [blackKingSide, setBlackKingSide] = useState(true);
  const [blackQueenSide, setBlackQueenSide] = useState(true);
  const count = useRef(0);
  const [isValidFen, setIsValidFen] = useState(false);
  const [fenErrorMsg, setFenErrorMsg] = useState("");
  

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
    const cleared = board.map(rank => rank.map(square => ({
      ...square,
      piece: null
    })));
    setSelectedItem(null);
    setBoard(cleared);
  };

  const resetBoard = () => {
    setSelectedItem(null);
    setPlayerToMove("w");
    setWhiteKingSide(true);
    setWhiteQueenSide(true); 
    setBlackKingSide(true);
    setBlackQueenSide(true);
    setBoardFromFEN(CONFIG.START_FEN, setBoard);
  };

  const handleFenSubmit = useCallback((fenString) => {
    console.log("Received FEN:", fenString);
    setBoardFromFEN(fenString, setBoard);
  });

  const generateFenFromBoard = useCallback((halfmoveClock = 0, fullmoveNumber = 1) => {
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
          <Board board={board} isFlipped={isFlipped} selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setBoard={setBoard}
          />
        <Palette selectedItem={selectedItem} setSelectedItem={setSelectedItem} 
        handleDragStart={handleDragStart} handlePaletteClick={handlePaletteClick}/>
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

const setBoardFromFEN = (fen, setBoard) => {
  setBoard(FenToBoard(fen));
};

