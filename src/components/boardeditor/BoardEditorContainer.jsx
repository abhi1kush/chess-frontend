import React, { useEffect, useState, useRef, useCallback } from "react";
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";
import FenDisplayBox from "../fen/FenDisplayBox";
import CONFIG from "../../config";
import { FenToBoard } from "../../services/fen/fenParser";
import { getSquareColor } from "./util";
import { IsValidFen } from "../../services/fen/fenValidation";
import { useSelector } from "react-redux";
import CastlingFlagsComponent from "./CastlingFlagsComponent";
import { resetBoard } from "../../redux/actions/boardEditorActions";
import { useDispatch } from "react-redux";

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
  const [selectedPalletePiece, setSelectedPalletePiece] = useState(null);
  const {isFlipped } = useSelector((state) => state.boardeditor);
  const count = useRef(0);
  const fen = useRef("");
  const [isValidFen, setIsValidFen] = useState(false);
//   const [fenErrorMsg, setFenErrorMsg] = useState("");
  const {playerToMove, CastlingFlags} = useSelector((state) => state.boardeditor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetBoard());
  }, []);

//   const handleFenSubmit = useCallback((fenString, setBoard) => {
//     // console.log("Received FEN:", fenString);
//     setBoardFromFEN(fenString, setBoard);
//   });

  const generateFEN = useCallback((halfmoveClock = 0, fullmoveNumber = 1) => {
    const enPassant = "-";
    let fen = "";
    const castlingRights = (CastlingFlags.K ? "K" : "") + (CastlingFlags.Q ? "Q" : "") + (CastlingFlags.k ? "k":"") + (CastlingFlags.q ? "q":""); 
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
//   useEffect(() => {
//     const currentFen = generateFEN();
//     const {isValid, msg } = IsValidFen(currentFen);
//     setIsValidFen(prev => (prev !== isValid ? isValid : prev));
//     setFenErrorMsg(prev => (prev !== msg ? msg : prev));
//     fen.current = currentFen;
//   }, [generateFEN, board]);

  return (
      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="fen-chessboard-container">
        <FenDisplayBox currentFen={fen.current} isValid={isValidFen}/>
        <div className="chessboard-container">
          <Board board={board} isFlipped={isFlipped} selectedPalletePiece={selectedPalletePiece}
          setBoard={setBoard}
          />
        <PiecePallete selectedPalletePiece={selectedPalletePiece} setSelectedPalletePiece={setSelectedPalletePiece}/>
        <CastlingFlagsComponent/>
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
    setBoard(FenToBoard(fen));
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

const Board = React.memo(({ board, isFlipped, selectedPalletePiece, setBoard }) => {
  const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
  // console.log("* render board");
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
                onClick={() => placePiece(board, square.id, selectedPalletePiece, setBoard)}
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

const handlePaletteClick = (pieceType, color, selectedPalletePiece, setSelectedPalletePiece) => {
  if (selectedPalletePiece != null && pieceType == selectedPalletePiece.type && color == selectedPalletePiece.color) {
    setSelectedPalletePiece(null); 
  } else {
    setSelectedPalletePiece({ type: pieceType, color });
  }
};

const PiecePallete = React.memo(({selectedPalletePiece, setSelectedPalletePiece}) => {
  const pieces = [
    "p", "r", "n", "b", "q", "k"
  ];
  // console.log("+ render palette");
  return (
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
          onClick={() => {handlePaletteClick(piece, color, selectedPalletePiece, setSelectedPalletePiece)}}
          onDragStart={(e) =>
            handleDragStart(e, `palette-${color}-${piece}`)
          }
          className={`palette-piece ${selectedPalletePiece?.type === piece 
            && selectedPalletePiece?.color === color ? 'selected' : ''}`}
        />
        ))
      )}
    </div>)
});