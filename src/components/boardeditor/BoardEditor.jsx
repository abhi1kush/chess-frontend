import React, { useEffect, useState, useRef } from "react";
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";
import ToggleButton from "../common/buttons/ToggleButton";
import MoveToggle from "../common/buttons/MoveToggle";
import FenPopup from "../fen/FenPopup";
import FenDisplayBox from "../fen/FenDisplayBox";
import { Chess } from 'chess.js';
import CONFIG from "../../config";

const pieces = [
  "p", "r", "n", "b", "q", "k"
];
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
  const [currentFen, setCurrentFen] = useState(CONFIG.START_FEN);
  const [selectedPalletePiece, setSelectedPalletePiece] = useState(null);
  const [isFlipped, setIsflipped] = useState(false);
  const [playerToMove, setPlayerToMove] = useState('w');
  const [whiteKingSide, setWhiteKingSide] = useState(true);
  const [whiteQueenSide, setWhiteQueenSide] = useState(true);
  const [blackKingSide, setBlackKingSide] = useState(true);
  const [blackQueenSide, setBlackQueenSide] = useState(true);
  const count = useRef(0);

  useEffect(() => {
    resetBoard();
  }, []);

  const handlePaletteClick = (pieceType, color) => {
    setSelectedPalletePiece({ type: pieceType, color });
  };

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

  const handleFenSubmit = (fenString) => {
    console.log("Received FEN:", fenString);
    setBoardFromFEN(fenString, setBoard);
  };

  const getKingPos = (fenBlockStr) => {
    let count = 0;
    for (let i = 0; i < fenBlockStr.length; i++) {
      if (fenBlockStr[i] == 'k' || fenBlockStr[i] == 'K') {
        return count + 1;
      } else if ('1' <= fenBlockStr[i].charCodeAt(0) || fenBlockStr[i].charCodeAt(0) <= '8') {
        count += parseInt(fenBlockStr[i], 10);
      }else {
        count += 1;
      }
    }
    return count;
  }

  function generateFEN(halfmoveClock = 0, fullmoveNumber = 1) {
    const enPassant = "-";
    let fen = "";
    const castlingRights = (whiteKingSide ? "K" : "") + (whiteQueenSide ? "Q" : "") + (blackKingSide ? "k":"") + (blackQueenSide ? "q":""); 
    if (board.length == 0) {
      return "";
    }
    const rankFenBlocks = board.map(rank => rankTofen(rank));
    if (rankFenBlocks[0][0] != 'r') {
      // setWhiteKingSide(false);
    }
    if (rankFenBlocks[0][-1] != 'r') {
      // setBlackKingSide(false);
    }
    if (rankFenBlocks[7][0] != 'R') {
      // setWhiteQueenSide(false);
    }
    if (rankFenBlocks[7][-1] != 'R') {
      // setBlackKingSide(false);
    } 
    if (getKingPos(rankFenBlocks[0]) != 4) {
      // setBlackKingSide(false);
      // setBlackQueenSide(false);
    }
    if (getKingPos(rankFenBlocks[7]) != 4) {
      // setWhiteKingSide(false);
      // setWhiteQueenSide(false); 
    }
    fen += rankFenBlocks.join("/"); 
    // Append the rest of the FEN string dynamically
    fen += ` ${playerToMove} ${castlingRights === "" ? "-": castlingRights} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`;
    console.log("fen", fen);
    return fen;
  };

  console.log("Board rendered", count.current, currentFen, board);
  count.current += 1;
  return (
    <div className="main-container">
      <div className="top-container"> 
        <nav className="top-bar">
            <button onClick={clearBoard} className="action-button">Clear</button>
            <button onClick={resetBoard} className="action-button">Reset</button>
            <button onClick={() => {setIsflipped(!isFlipped)}} className="action-button">Flip</button>
            <FenPopup onSubmit={handleFenSubmit}/>
            <Settings />
            <DarkThemeToggle/>
        </nav>
      </div>
      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="fen-chessboard-container">
        <FenDisplayBox currentFen={generateFEN()} />
        <div className="chessboard-container">
          {renderBoard(board, isFlipped, selectedPalletePiece, setBoard)}
          <div className="palette">
            {["w", "b"].map(color =>
              pieces.map(piece => (
                <img
                  key={`${color}-${piece}`}
                  id={`palette-${color}-${piece}`}
                  src={`pieces/${color}_${pieceCharToNameMap[piece]}.png`}
                  alt={`${color} ${piece}`}
                  draggable
                  data-type={piece}
                  data-color={color}
                  data-square="palette"
                  onClick={() => {handlePaletteClick(piece, color)}}
                  onDragStart={(e) =>
                    handleDragStart(e, `palette-${color}-${piece}`)
                }
                className={`palette-piece ${selectedPalletePiece?.type === piece && selectedPalletePiece?.color === color ? 'selected' : ''}`}
              />
            ))
          )}
        </div>
        <div className="castling">
          <div><h3>Castling</h3></div>
          <div className="toggle-container">
            <span>To Move : </span>
            <MoveToggle playerToMove={playerToMove} setPlayerToMove={setPlayerToMove}/>
            </div> 
            <ToggleButton
              labelText={"White King-Side"}
              toggle={whiteKingSide}
              handleToggle={() => {setWhiteKingSide(!whiteKingSide);}}
            />
            <ToggleButton
              labelText={"White Queen-Side"}
              toggle={whiteQueenSide}
              handleToggle={() => {setWhiteQueenSide(!whiteQueenSide);}}
            />
            <ToggleButton
              labelText={"Black King-Side"}
              toggle={blackKingSide}
              handleToggle={() => {setBlackKingSide(!blackKingSide);}}
            />
            <ToggleButton
              labelText={"Black Queen-Side"}
              toggle={blackQueenSide}
              handleToggle={() => {setBlackQueenSide(!blackQueenSide);}}
            /> 
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
      fen += rank[i].piece.color === "w" ? rank[i].piece.type.toUpperCase() : rank[i].piece.type; 
    } else if (i == 7 && emptySquares > 0) {
      fen += `${emptySquares}`;
    }
  }
  return fen;
}

  const setBoardFromFEN = (fen, setBoard) => {
    const game = new Chess();
    game.load(fen);
    const boardArray = game.board();
    const board = boardArray.map((rank, rankIndex) => rank.map((square, fileIndex) => {
      return ({
        id: square ? square.square : `${"abcdefgh"[fileIndex]}${8 - rankIndex}`, 
        piece: square ? {type: square.type, color: square.color} : null,
      })
    }));
    setBoard(board);
  };

const allowDrop = (e) => {
  e.preventDefault();
};

const placePiece = (board, squareId, Piece, setBoard) => {
  if (!Piece) return;
  const updatedBoard = board.map(rank => rank.map(square => {
    if (square.id === squareId) {
      return { ...square, piece: Piece };
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

const renderBoard = (board, isFlipped, selectedPalletePiece, setBoard) => {
  const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
  return (<div id="chessboard">
    {visualBoard.map((row, rowIndex) => row.map((square, colIndex) => {
        const rankLabel = isFlipped ? rowIndex + 1 : (7 - rowIndex) + 1;
        const fileLabel = isFlipped ? "hgfedcba"[colIndex] : "abcdefgh"[colIndex];
        return (
        <div
          key={square.id}
          className={`square ${getSquareColor(square.id)}`}
          onDragOver={allowDrop}
          onClick={() => placePiece(board, square.id, selectedPalletePiece, setBoard)}
          onDrop={(e) => handleDrop(e, square.id, board, setBoard)}
          onContextMenu={(e) => handleRightClick(e, square.id, board, setBoard)}
        >
          { colIndex === 0 && <div className="rank-label">{rankLabel}</div>}
          { rowIndex === 7 && <div className="file-label">{fileLabel}</div>} 
          {square.piece && renderPiece(square.piece, square.id)}
        </div>
      )}))}
  </div>)
}

const getSquareColor = (squareID) => {
  const fileIndex = squareID[0].charCodeAt(0) - 'a'.charCodeAt(0);
  const rankIndex = squareID[1].charCodeAt(0) - '1'.charCodeAt(0);
  return (fileIndex + rankIndex) % 2 === 0 ? "dark" : "light";
} 