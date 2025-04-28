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
const eraser = {type: CONFIG.PALLETE_PIECE, id: CONFIG.ERASER_ID};
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
  const [selectedItem, setSelectedItem] = useState(null);
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

  // console.log("--- BoardEditor rendered", count.current);
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
          <Board board={board} isFlipped={isFlipped} selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setBoard={setBoard}
          />
        <PiecePallete selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
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

const handleBoardPieceClick = (squareId, piece, selectedItem, setSelectedItem) => {
  if (piece == null) return;
  if (selectedItem == null) {
    setSelectedItem({type: CONFIG.BOARD_PIECE, id: `${squareId}-${piece.color}-${piece.type}`});
  }
  // console.log("Piece clicked", squareId, piece);
}


const Piece = React.memo(({piece, squareId, selectedItem, setSelectedItem}) => {
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
      className={`pieceimg ${selectedItem != null && selectedItem?.type === CONFIG.BOARD_PIECE 
        && selectedItem?.id === `${squareId}-${piece.color}-${piece.type}` ? 'selected' : ''}`}
      key={squareId}
      id={`${squareId}-${piece.color}-${piece.type.toLowerCase()}`}
      src={`pieces/svg/${piece.color}_${pieceNameMap[piece.type]}.svg`}
      alt={`${piece.color} ${piece.type}`}
      draggable
      data-type={piece.type}
      data-color={piece.color}
      data-square={squareId}
      onDragStart={(e) => handleDragStart(e, `${squareId}-${piece.color}-${piece.type}`)}
      onClick={() => handleBoardPieceClick(squareId, piece, selectedItem, setSelectedItem)}
    />
  );
});

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

const handleSquareClick = ({board, squareId, squarePiece, selectedItem, setSelectedItem, setBoard}) => {
  if (!selectedItem) {
    if (squarePiece != null) {
      setSelectedItem({type: CONFIG.BOARD_PIECE, id: `${squareId}-${squarePiece.color}-${squarePiece.type}`});
    }
    return;
  }
  // deslect if clicked again on same piece.
  if (squarePiece != null && selectedItem.id === `${squareId}-${squarePiece.color}-${squarePiece.type}`) {
    setSelectedItem(null);
    return;
  }

  const sourceSquare = selectedItem.id.split("-")[0];
  const updatedBoard = board.map(rank => rank.map(square => {
    if (square.id === squareId) {
      if (selectedItem.id === CONFIG.ERASER_ID) {
        return { ...square, piece: null };  // Remove the piece
      }
      const splittedId = selectedItem.id.split("-");
      return {
        ...square, 
        piece: {type: splittedId[2], color: splittedId[1]} }; // Place the piece
    } else if (selectedItem.type === CONFIG.BOARD_PIECE && square.id === sourceSquare) {
      setSelectedItem(null);  // Deselect the piece
      return { ...square, piece: null };  // Remove the piece from source square
    }
    return square;
  }));
  setBoard(updatedBoard);
};

const handleDrop = (e, targetId, board, setBoard) => {
  e.preventDefault();
  const pieceId = e.dataTransfer.getData("text");
  const sourcePiece = document.getElementById(pieceId);
  // console.log(`handleDrop, targetId: ${targetId}, pieceID: ${pieceId}, sourcePiece`, sourcePiece);
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

const Board = React.memo(({ board, isFlipped, selectedItem, setSelectedItem, setBoard}) => {
  const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
  // console.log("* render board");
  return (
    <div id="chessboard">
        {visualBoard.map((row, rowIndex) => row.map((square, colIndex) => {
            return (
                <Square
                  showRankLabel={colIndex === 0}
                  showFileLabel={rowIndex === 7}
                  board={board}
                  setBoard={setBoard}
                  square={square}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
            )
        }))}
  </div>)
});

const Square = React.memo(({showRankLabel, showFileLabel, board, setBoard, square, selectedItem, setSelectedItem}) => {
  return (
    <div
    className={`square ${getSquareColor(square.id)}`}
    onDragOver={allowDrop}
    onClick={() => handleSquareClick({
      board: board, squareId: square.id, squarePiece: square.piece, 
      selectedItem: selectedItem, setSelectedItem: setSelectedItem, setBoard: setBoard})}
      onDrop={(e) => handleDrop(e, square.id, board, setBoard)}
    >
        { showRankLabel && <div className="rank-label">{square.id[0]}</div>}
        { showFileLabel && <div className="file-label">{square.id[1]}</div>} 
        {square.piece && <Piece piece={square.piece} squareId={square.id} 
        selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
    </div>
  );
});


//  item type: {type: "chessPiece, name: "k", color: "b"}
const handlePaletteClick = ({item, selectedItem, setSelectedItem}) => {
  // No selected Item.
  if (selectedItem == null) {
    setSelectedItem(item);
    return;
  }
  
  // deselect if clicked again on selected item.
  if (item.id === selectedItem.id) {
    setSelectedItem(null); 
    return;
  }
  

  if (selectedItem.type === CONFIG.BOARD_PIECE) {
    // Pallete selection on higher priorty.
    if (item.type === CONFIG.PALLETE_PIECE) {
      setSelectedItem(item);
    }
  } else if (selectedItem.type === CONFIG.PALLETE_PIECE && item.type === selectedItem.type) { // another pallete item clicked.
    setSelectedItem(item);
  }
  // console.log("Palette clicked", item, selectedItem, item.id === selectedItem.id);
};

const PiecePallete = React.memo(({selectedItem, setSelectedItem}) => {
  const pieceCodes = [
    "p", "r", "n", "b", "q", "k"
  ];
  // console.log("+ render palette");
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
            item: {type: CONFIG.PALLETE_PIECE, id: `p-${color}-${pieceCode}`}, selectedItem: selectedItem, 
            setSelectedItem: setSelectedItem
          })}}
          onDragStart={(e) =>
            handleDragStart(e, `palette-${color}-${pieceCode}`)
          }
          className={`palette-piece ${selectedItem?.type === CONFIG.PALLETE_PIECE 
            && selectedItem?.id === `p-${color}-${pieceCode.toLowerCase()}` ? 'selected' : ''}`}
            style={{order: color == "w" ? pieceCodes.indexOf(pieceCode) : pieceCodes.indexOf(pieceCode) + 7}}
        />
        ))
      )}
      <img data-square="palette" src="assets/eraser.svg"
        style={{order:6}}
        onClick={() => {handlePaletteClick({
          item: eraser, selectedItem: selectedItem, 
          setSelectedItem: setSelectedItem
      })}}
      className={`palette-piece eraser ${selectedItem?.id === eraser.id ? 'selected' : ''}`}
      />
    </div>)
});