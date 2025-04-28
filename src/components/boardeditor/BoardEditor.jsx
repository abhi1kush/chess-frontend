import React, { useEffect, useState, useRef, useCallback } from "react";
import Settings from '../common/Settings';
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
import { getSquareColor } from "./util";
import NoticeBoard from "./NoticeBoard";
import { IsValidFen } from "../../services/fen/fenValidation";
import Square from "./Square";
import {produce} from 'immer';

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
// piece type: {type: "chessPiece" name: "k", color: "b"}
const eraser = {type: CONFIG.ERASER, name: "eraserImage", color: ""};
const pieceCharToNameMap = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
};

const clearChessBoard = {
  a8: null,
  b8: null,
  c8: null, 
  d8: null,
  e8: null,
  f8: null,
  g8: null,
  h8: null,
  a7: null,
  b7: null,
  c7: null,
  d7: null,
  e7: null,
  f7: null,
  g7: null,
  h7: null,
  a6: null,
  b6: null,
  c6: null,
  d6: null,
  e6: null,
  f6: null,
  g6: null,
  h6: null,    
  a5: null,
  b5: null,
  c5: null,
  d5: null,
  e5: null,
  f5: null,
  g5: null,
  h5: null,
  a4: null,
  b4: null,
  c4: null,
  d4: null,
  e4: null,
  f4: null,
  g4: null,
  h4: null,
  a3: null,
  b3: null,
  c3: null,
  d3: null,
  e3: null,
  f3: null,
  g3: null,
  h3: null,
  a2: null,
  b2: null,
  c2: null,
  d2: null,
  e2: null,
  f2: null,
  g2: null,
  h2: null,
  a1: null, 
  b1: null,
  c1: null,
  d1: null,
  e1: null,
  f1: null,
  g1: null,
  h1: null
};

const intialBoard = {
  a8: {type: 'r', color: 'b'},
  b8: {type: 'n', color: 'b'},
  c8: {type: 'b', color: 'b'}, 
  d8: {type: 'q', color: 'b'},
  e8: {type: 'k', color: 'b'},
  f8: {type: 'b', color: 'b'},
  g8: {type: 'n', color: 'b'},
  h8: {type: 'r', color: 'b'},
  a7: {type: 'p', color: 'b'},
  b7: {type: 'p', color: 'b'},
  c7: {type: 'p', color: 'b'},
  d7: {type: 'p', color: 'b'},
  e7: {type: 'p', color: 'b'},
  f7: {type: 'p', color: 'b'},
  g7: {type: 'p', color: 'b'},
  h7: {type: 'p', color: 'b'},
  a6: null,
  b6: null,
  c6: null,
  d6: null,
  e6: null,
  f6: null,
  g6: null,
  h6: null,    
  a5: null,
  b5: null,
  c5: null,
  d5: null,
  e5: null,
  f5: null,
  g5: null,
  h5: null,
  a4: null,
  b4: null,
  c4: null,
  d4: null,
  e4: null,
  f4: null,
  g4: null,
  h4: null,
  a3: null,
  b3: null,
  c3: null,
  d3: null,
  e3: null,
  f3: null,
  g3: null,
  h3: null,
  a2: {type: 'P', color: 'w'},
  b2: {type: 'P', color: 'w'},
  c2: {type: 'P', color: 'w'},
  d2: {type: 'P', color: 'w'},
  e2: {type: 'P', color: 'w'},
  f2: {type: 'P', color: 'w'},
  g2: {type: 'P', color: 'w'},
  h2: {type: 'P', color: 'w'},
  a1: {type: 'R', color: 'w'}, 
  b1: {type: 'N', color: 'w'},
  c1: {type: 'B', color: 'w'},
  d1: {type: 'Q', color: 'w'},
  e1: {type: 'K', color: 'w'},
  f1: {type: 'B', color: 'w'},
  g1: {type: 'N', color: 'w'},
  h1: {type: 'R', color: 'w'}
};

const BoardEditor = () => {
  const [chessBoard, setChessBoard] = useState(intialBoard);
  const [selectedPalleteItem, setselectedPalleteItem] = useState(null);
  const [isFlipped, setIsflipped] = useState(false);
  const [playerToMove, setPlayerToMove] = useState('w');
  const [whiteKingSide, setWhiteKingSide] = useState(true);
  const [whiteQueenSide, setWhiteQueenSide] = useState(true);
  const [blackKingSide, setBlackKingSide] = useState(true);
  const [blackQueenSide, setBlackQueenSide] = useState(true);
  const count = useRef(0);
  const fen = useRef("");
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
    setChessBoard(clearChessBoard);
  };

  const resetBoard = () => {
    setPlayerToMove("w");
    setWhiteKingSide(true);
    setWhiteQueenSide(true); 
    setBlackKingSide(true);
    setBlackQueenSide(true);
    setChessBoard(intialBoard);
  };

  const handleFenSubmit = useCallback((fenString, setBoard) => {
    // console.log("Received FEN:", fenString);
    setBoardFromFEN(fenString, setBoard);
  });

  // const generateFEN = useCallback((halfmoveClock = 0, fullmoveNumber = 1) => {
  //   const enPassant = "-";
  //   let fen = "";
  //   const castlingRights = (whiteKingSide ? "K" : "") + (whiteQueenSide ? "Q" : "") + (blackKingSide ? "k":"") + (blackQueenSide ? "q":""); 
  //   if (board.length === 0) {
  //     return "";
  //   }
  //   const rankFenBlocks = board.map(rank => rankTofen(rank));
  //   fen += rankFenBlocks.join("/"); 
  //   fen += ` ${playerToMove} ${castlingRights === "" ? "-": castlingRights} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`;
  //   return fen;
  // });

  console.log("--- BoardEditor rendered", count.current);
  count.current += 1;
  // useEffect(() => {
  //   const currentFen = generateFEN();
  //   const {isValid, msg } = IsValidFen(currentFen);
  //   setIsValidFen(prev => (prev !== isValid ? isValid : prev));
  //   setFenErrorMsg(prev => (prev !== msg ? msg : prev));
  //   fen.current = currentFen;
  // }, [generateFEN, board]);

  const handleSquareClick = (squareId, selectedPaletteItem, currentPiece) => {
    if (selectedPaletteItem == null) {
      return
    }
    setChessBoard(prev => 
      produce (prev, draft => {
      if (selectedPaletteItem.type === CONFIG.ERASER) {
        draft[squareId] = null;
      } else {
        draft[squareId] = {type: selectedPaletteItem.name, color: selectedPaletteItem.color};
      }
    }));
  };

  return (
    <div className="main-container">
      <div className="top-container"> 
        <nav className="top-bar">
            <button onClick={clearBoard} className="action-button">Clear</button>
            <button onClick={resetBoard} className="action-button">Reset</button>
            <button onClick={() => {setIsflipped(!isFlipped)}} className="action-button">Flip</button>
            <FenInputPopup onSubmit={handleFenSubmit}/>
            <DarkThemeToggle/>
            <Settings />
        </nav>
      </div>
      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="fen-chessboard-container">
        <FenDisplayBox currentFen={fen.current} isValid={isValidFen}/>
        <div className="chessboard-container">
          <Board board={chessBoard} isFlipped={isFlipped} selectedPalleteItem={selectedPalleteItem}
          setBoard={setChessBoard} handleSquareClick={handleSquareClick}
          />
        <PiecePallete selectedPalleteItem={selectedPalleteItem} setselectedPalleteItem={setselectedPalleteItem}/>
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
  
const handleDragStart = (e, pieceId) => {
  e.dataTransfer.setData("text", pieceId);
};

// const rankTofen = (rank) => {
//   let fen = "";
//   let emptySquares = 0;
//   for (let i = 0; i < 8; i++) {
//     if (rank[i].piece == null) {
//       emptySquares++;
//     } 
      
//     if (rank[i].piece != null) {
//       if (emptySquares > 0) { 
//         fen += `${emptySquares}`;
//       }
//       emptySquares = 0;
//       fen += rank[i].piece.color === "w" ? rank[i].piece.type?.toUpperCase() : rank[i].piece.type; 
//     } else if (i == 7 && emptySquares > 0) {
//       fen += `${emptySquares}`;
//     }
//   }
//   return fen;
// }

  const setBoardFromFEN = (fen, setBoard) => {
    setBoard(FenToBoard(fen));
  };

// const allowDrop = (e) => {
//   e.preventDefault();
// };

// const handleRightClick = (e, squareId, board, setBoard) => {
//   e.preventDefault();  // Prevent browser's context menu
//   const updatedBoard = board.map(rank => rank.map(square => {
//     if (square.id === squareId) {
//       return {
//         ...square,
//         piece: null  // Remove the piece
//       };
//     }
//     return square;
//   }));
//   setBoard(updatedBoard);
// };

// const handleDrop = (e, targetId, board, setBoard) => {
//   e.preventDefault();
//   const pieceId = e.dataTransfer.getData("text");
//   const sourcePiece = document.getElementById(pieceId);

//   const updatedBoard = board.map(rank => rank.map(square => {
//     if (square.id === targetId) {
//       return {
//         ...square,
//         piece: {
//           type: sourcePiece.dataset.type,
//           color: sourcePiece.dataset.color
//         }
//       };
//     } else if (square.id === sourcePiece.dataset.square) {
//       return {
//         ...square,
//         piece: null
//       };
//     } else {
//       return square;
//     }
//   }));

//   setBoard(updatedBoard);
// };

// const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
// const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
// const files = ["h", "g", "f", "e", "d", "c", "b", "a"]


const Board = React.memo(({ board, isFlipped, selectedPalleteItem, handleSquareClick}) => {
  // const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
  console.log("* render board");
  // const visualRanks = true ? [...ranks].reverse() : ranks;
  const visualRanks = isFlipped ? [1, 2, 3, 4, 5, 6, 7, 8] : ranks;
  const visualFiles = isFlipped ? ["h", "g", "f", "e", "d", "c", "b", "a"] : files;
  return (
    <div id="chessboard">
        {
          visualRanks.map(rank =>
            visualFiles.map(file => {
              const squareId = `${file}${rank}`;
              const piece = board[squareId];
            return (
              <Square
                key={squareId}
                rank={rank}
                file={file}
                piece={piece}
                selectedPalleteItem={selectedPalleteItem}
                onSquareClick={handleSquareClick}
              />
            );
          })
        )}
  </div>)
});

//  item type: {type: "chessPiece, name: "k", color: "b"}
const handlePaletteClick = ({item, selectedPalleteItem, setselectedPalleteItem}) => {
  if (selectedPalleteItem != null 
    && item.type === selectedPalleteItem.type 
    && item.name === selectedPalleteItem.name
    && item.color === selectedPalleteItem.color) {
    setselectedPalleteItem(null); 
  } else {
    setselectedPalleteItem(item);
  }
};

const PiecePallete = React.memo(({selectedPalleteItem, setselectedPalleteItem}) => {
  const pieceCodes = [
    "p", "r", "n", "b", "q", "k"
  ];
  console.log("+ render palette");
  return (
    <div className="palette">
      {["w", "b"].map(color =>
        pieceCodes.map(pieceCode => (
          <img
          key={`${color}-${pieceCode}`}
          id={`palette-${color}-${pieceCode}`}
          src={`pieces/svg/${color}_${pieceCharToNameMap[pieceCode]}.svg`}
          alt={`${color} ${pieceCode}`}
          draggable
          data-type={pieceCode}
          data-color={color}
          data-square="palette"
          onClick={() => {handlePaletteClick({
            item: {type: CONFIG.CHESS_PIECE, name: pieceCode, color: color}, selectedPalleteItem: selectedPalleteItem, 
            setselectedPalleteItem: setselectedPalleteItem
          })}}
          onDragStart={(e) =>
            handleDragStart(e, `palette-${color}-${pieceCode}`)
          }
          className={`palette-piece ${selectedPalleteItem?.type === CONFIG.CHESS_PIECE 
            && selectedPalleteItem?.name === pieceCode 
            && selectedPalleteItem?.color === color ? 'selected' : ''}`}
            style={{order: color == "w" ? pieceCodes.indexOf(pieceCode) : pieceCodes.indexOf(pieceCode) + 7}}
        />
        ))
      )}
      <img data-square="palette" src="assets/eraser.png"
        style={{order:6}}
        onClick={() => {handlePaletteClick({
          item: eraser, selectedPalleteItem: selectedPalleteItem, 
          setselectedPalleteItem: setselectedPalleteItem
      })}}
      className={`palette-piece eraser ${selectedPalleteItem?.type === eraser.type ? 'selected' : ''}`}
      />
    </div>)
});