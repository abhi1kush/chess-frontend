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

const BoardEditor = () => {
  const [board, setBoard] = useState([]);
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
    const cleared = board.map(rank => rank.map(square => ({
      ...square,
      piece: null
    })));
    setBoard(cleared);
  };

  const resetBoard = () => {
    setPlayerToMove("w");
    setWhiteKingSide(true);
    setWhiteQueenSide(true); 
    setBlackKingSide(true);
    setBlackQueenSide(true);
    setBoardFromFEN(CONFIG.START_FEN, setBoard);
  };

  const handleFenSubmit = useCallback((fenString, setBoard) => {
    // console.log("Received FEN:", fenString);
    setBoardFromFEN(fenString, setBoard);
  });

  const generateFEN = useCallback((halfmoveClock = 0, fullmoveNumber = 1) => {
    const enPassant = "-";
    let fen = "";
    const castlingRights = (whiteKingSide ? "K" : "") + (whiteQueenSide ? "Q" : "") + (blackKingSide ? "k":"") + (blackQueenSide ? "q":""); 
    if (board.length === 0) {
      return "";
    }
    const rankFenBlocks = board.map(rank => rankTofen(rank));
    fen += rankFenBlocks.join("/"); 
    fen += ` ${playerToMove} ${castlingRights === "" ? "-": castlingRights} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`;
    return fen;
  });

  console.log("--- BoardEditor rendered", count.current);
  count.current += 1;
  useEffect(() => {
    const currentFen = generateFEN();
    const {isValid, msg } = IsValidFen(currentFen);
    setIsValidFen(prev => (prev !== isValid ? isValid : prev));
    setFenErrorMsg(prev => (prev !== msg ? msg : prev));
    fen.current = currentFen;
  }, [generateFEN, board]);

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
          <Board board={board} isFlipped={isFlipped} selectedPalleteItem={selectedPalleteItem}
          setBoard={setBoard}
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

const renderPiece = (piece, squareId) => {
  const pieceNameMap = {
    p: "pawn",
    n: "knight",
    b: "bishop",
    r: "rook",
    q: "queen",
    k: "king", 
  }
  return (
    <img
      className={"pieceimg"}
      key={squareId}
      id={`${squareId}-${piece.type}`}
      src={`pieces/${piece.color}_${pieceNameMap[piece.type]}.png`}
      alt={`${piece.color} ${piece.type}`}
      draggable
      data-type={piece.type}
      data-color={piece.color}
      data-square={squareId}
      onDragStart={(e) => handleDragStart(e, `${squareId}-${piece.type}`)}
    />
  );
};

const rankTofen = (rank) => {
  let fen = "";
  let emptySquares = 0;
  for (let i = 0; i < 8; i++) {
    if (rank[i].piece == null) {
      emptySquares++;
    } 
      
    if (rank[i].piece != null) {
      if (emptySquares > 0) { 
        fen += `${emptySquares}`;
      }
      emptySquares = 0;
      fen += rank[i].piece.color === "w" ? rank[i].piece.type?.toUpperCase() : rank[i].piece.type; 
    } else if (i == 7 && emptySquares > 0) {
      fen += `${emptySquares}`;
    }
  }
  return fen;
}

  const setBoardFromFEN = (fen, setBoard) => {
    setBoard(FenToBoard(fen));
  };



const allowDrop = (e) => {
  e.preventDefault();
};

const handleSquareClick = (board, squareId, selectedItem, setBoard) => {
  if (!selectedItem) return;
  const updatedBoard = board.map(rank => rank.map(square => {
    if (square.id === squareId) {
      if (selectedItem.type === CONFIG.ERASER) {
        return { ...square, piece: null };  // Remove the piece
      }
      return {
        ...square, 
        piece: {type: selectedItem.name, color: selectedItem.color} }; // Place the piece
    }
    return square;
  }));
  setBoard(updatedBoard);
};

const handleRightClick = (e, squareId, board, setBoard) => {
  e.preventDefault();  // Prevent browser's context menu
  const updatedBoard = board.map(rank => rank.map(square => {
    if (square.id === squareId) {
      return {
        ...square,
        piece: null  // Remove the piece
      };
    }
    return square;
  }));
  setBoard(updatedBoard);
};

const handleDrop = (e, targetId, board, setBoard) => {
  e.preventDefault();
  const pieceId = e.dataTransfer.getData("text");
  const sourcePiece = document.getElementById(pieceId);

  const updatedBoard = board.map(rank => rank.map(square => {
    if (square.id === targetId) {
      return {
        ...square,
        piece: {
          type: sourcePiece.dataset.type,
          color: sourcePiece.dataset.color
        }
      };
    } else if (square.id === sourcePiece.dataset.square) {
      return {
        ...square,
        piece: null
      };
    } else {
      return square;
    }
  }));

  setBoard(updatedBoard);
};

const Board = React.memo(({ board, isFlipped, selectedPalleteItem, setBoard }) => {
  const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
  console.log("* render board");
  return (
    <div id="chessboard">
        {visualBoard.map((row, rowIndex) => row.map((square, colIndex) => {
            const rankLabel = isFlipped ? rowIndex + 1 : (7 - rowIndex) + 1;
            const fileLabel = isFlipped ? "hgfedcba"[colIndex] : "abcdefgh"[colIndex];
            return (
                <div
                key={square.id}
                className={`square ${getSquareColor(square.id)}`}
                onDragOver={allowDrop}
                onClick={() => handleSquareClick(board, square.id, selectedPalleteItem, setBoard)}
                onDrop={(e) => handleDrop(e, square.id, board, setBoard)}
                onContextMenu={(e) => handleRightClick(e, square.id, board, setBoard)}
                >
                    { colIndex === 0 && <div className="rank-label">{rankLabel}</div>}
                    { rowIndex === 7 && <div className="file-label">{fileLabel}</div>} 
                    {square.piece && renderPiece(square.piece, square.id)}
                </div>
            )
        }))}
  </div>)
});

//  item type: {type: "chessPiece, name: "k", color: "b"}
const handlePaletteClick = ({item, selectedPalleteItem, setselectedPalleteItem}) => {
  if (selectedPalleteItem != null 
    && item.type == selectedPalleteItem.type 
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
          src={`pieces/${color}_${pieceCharToNameMap[pieceCode]}.png`}
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