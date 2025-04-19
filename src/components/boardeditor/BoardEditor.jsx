import React, { useEffect, useState } from "react";
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";
import ToggleButton from "../common/buttons/ToggleButton";
import MoveToggle from "../common/buttons/MoveToggle";

const pieces = [
  "pawn", "rook", "knight", "bishop", "queen", "king"
];

const BoardEditor = () => {
  const [board, setBoard] = useState([]);
  const [showFenPopup, setShowFenPopup] = useState(false);
  const [fenInput, setFenInput] = useState("");
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [isFlipped, setIsflipped] = useState(false);
  const [whiteKingSide, setWhiteKingSide] = useState(true);
  const [whiteQueenSide, setWhiteQueenSide] = useState(true);
  const [blackKingSide, setBlackKingSide] = useState(true);
  const [blackQueenSide, setBlackQueenSide] = useState(true);

  useEffect(() => {
    resetBoard();
  }, []);

  const handlePaletteClick = (pieceType, color) => {
    console.log("Palette clicked:", pieceType, color);
    setSelectedPiece({ type: pieceType, color });
  };

  const handleDragStart = (e, pieceId) => {
    e.dataTransfer.setData("text", pieceId);
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("text");
    const sourcePiece = document.getElementById(pieceId);

    const updatedBoard = board.map(square => {
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
    });

    setBoard(updatedBoard);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const renderPiece = (piece, squareId) => {
    return (
      <img
        className={"pieceimg"}
        key={squareId}
        id={`${squareId}-${piece.type}`}
        src={`pieces/${piece.color}_${piece.type}.png`}
        alt={`${piece.color} ${piece.type}`}
        draggable
        data-type={piece.type}
        data-color={piece.color}
        data-square={squareId}
        onDragStart={(e) => handleDragStart(e, `${squareId}-${piece.type}`)}
      />
    );
  };

  const handleRightClick = (e, squareId) => {
    e.preventDefault();  // Prevent browser's context menu
  
    const updatedBoard = board.map(square => {
      if (square.id === squareId) {
        return {
          ...square,
          piece: null  // Remove the piece
        };
      }
      return square;
    });
  
    setBoard(updatedBoard);
  };

  const clearBoard = () => {
    const cleared = board.map(square => ({
      ...square,
      piece: null
    }));
    setBoard(cleared);
  };

  const resetBoard = () => {
    setBoard(generateInitialBoard());
  };

  const flipBoard = () => {
    const flipped = [...board].reverse();
    setBoard(flipped);
    setIsflipped(!isFlipped);
  };

  const generateFEN = () => {
    let fen = "";
    for (let row = 0; row < 8; row++) {
      let emptyCount = 0;
      for (let col = 0; col < 8; col++) {
        const square = board.find(sq => sq.id === `${row}-${col}`);
        if (square.piece) {
          if (emptyCount > 0) {
            fen += emptyCount;
            emptyCount = 0;
          }
          const pieceChar = getFENChar(square.piece);
          fen += pieceChar;
        } else {
          emptyCount++;
        }
      }
      if (emptyCount > 0) {
        fen += emptyCount;
      }
      if (row !== 7) fen += "/";
    }
  
    // Add dummy placeholders for the rest of the FEN fields for now:
    fen += " w - - 0 1";  // active color, castling, en passant, halfmove, fullmove
  
    console.log("FEN String:", fen);
    alert("FEN: " + fen);
  };

  const setBoardFromFEN = (fen) => {
    const [position] = fen.split(" ");
    const rows = position.split("/");
    if (rows.length !== 8) {
      alert("Invalid FEN string!");
      return;
    }
  
    const newSquares = [];
    rows.forEach((rowString, rowIdx) => {
      let colIdx = 0;
      for (const char of rowString) {
        if (isNaN(char)) {
          const pieceInfo = getPieceFromFENChar(char);
          newSquares.push({
            id: `${rowIdx}-${colIdx}`,
            color: (rowIdx + colIdx) % 2 === 0 ? "light" : "dark",
            piece: pieceInfo
          });
          colIdx++;
        } else {
          const emptySquares = parseInt(char);
          for (let i = 0; i < emptySquares; i++) {
            newSquares.push({
              id: `${rowIdx}-${colIdx}`,
              color: (rowIdx + colIdx) % 2 === 0 ? "light" : "dark",
              piece: null
            });
            colIdx++;
          }
        }
      }
    });
  
    setBoard(newSquares);
  };

  const handleSquareClick = (squareId) => {
    if (!selectedPiece) return;
  
    const updatedBoard = board.map(square => {
      if (square.id === squareId) {
        return { ...square, piece: selectedPiece };
      }
      return square;
    });
  
    setBoard(updatedBoard);
  };

  return (
    <div className="main-container">
      <div className="top-container"> 
        <nav className="top-bar">
            {/* <FlipButton/> */}
            <button onClick={clearBoard} className="action-button">Clear</button>
            <button onClick={resetBoard} className="action-button">Reset</button>
            <button onClick={flipBoard} className="action-button">Flip</button>
            <button onClick={generateFEN} className="action-button">Generate FEN</button>
            <button onClick={() => setShowFenPopup(true)} className="action-button">Set FEN</button>
            <Settings />
            <DarkThemeToggle/>
        </nav>
      </div>
      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="chessboard-container">
        <div id="chessboard">
          {board.map(square => {
            const splited = square.id.split("-");
            const row = splited[0];
            const col = splited[1];
            const showRank = col === (isFlipped ? "0" : "7");
            const showFile = row === (isFlipped ? "7" : "0");
            const rankLabel = parseInt(row, 10) + 1;
            const colLabel = "abcdefgh"[-(parseInt(col, 10) - 7)];
            return (
            <div
              key={square.id}
              className={`square ${square.color}`}
              onDragOver={allowDrop}
              onClick={() => handleSquareClick(square.id)}
              onDrop={(e) => handleDrop(e, square.id)}
              onContextMenu={(e) => handleRightClick(e, square.id)}
            >
              { showRank && <div className="rank-label">{rankLabel}</div>}
              { showFile && <div className="file-label">{colLabel}</div>}
              {square.piece && renderPiece(square.piece, square.id)}
            </div>
          )})}
        </div>

        {/* Side palette */}
        <div className="palette">
          {["w", "b"].map(color =>
            pieces.map(piece => (
              <img
                key={`${color}-${piece}`}
                id={`palette-${color}-${piece}`}
                src={`pieces/${color}_${piece}.png`}
                alt={`${color} ${piece}`}
                draggable
                data-type={piece}
                data-color={color}
                data-square="palette"
                onClick={() => {handlePaletteClick(piece, color)}}
                onDragStart={(e) =>
                  handleDragStart(e, `palette-${color}-${piece}`)
                }
                className={`palette-piece ${selectedPiece?.type === piece && selectedPiece?.color === color ? 'selected' : ''}`}
              />
            ))
          )}
        </div>
        <div className="castling">
                <div><h3>Castling</h3></div>
                <div className="toggle-container">
                  <span>To Move : </span>
                  <MoveToggle/>
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
      {showFenPopup && (
      <div className="fen-popup">
       <div className="fen-popup-content">
       <h3>Enter FEN String:</h3>
       <textarea
        value={fenInput}
        onChange={(e) => setFenInput(e.target.value)}
        rows="3"
        cols="40"
        placeholder="e.g. rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
      />
      <div className="fen-popup-buttons">
        <button onClick={() => {
          setBoardFromFEN(fenInput);
          setShowFenPopup(false);
        }}>Set Board</button>
        <button onClick={() => setShowFenPopup(false)}>Cancel</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default BoardEditor;

const getPieceFromFENChar = (char) => {
    const isWhite = char === char.toUpperCase();
    const typeMap = {
      p: "pawn",
      n: "knight",
      b: "bishop",
      r: "rook",
      q: "queen",
      k: "king"
    };
    const type = typeMap[char.toLowerCase()];
    if (!type) {
      console.warn(`Unknown FEN character: ${char}`);
      return null;
    }
    return { type, color: isWhite ? "w" : "b" };
  };

  const generateInitialBoard = () => {
    const initialPosition = {
        0: ["rook", "knight", "bishop", "king", "queen", "bishop", "knight", "rook"],
        1: ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        6: ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        7: ["rook", "knight", "bishop", "king", "queen", "bishop", "knight", "rook"]
      };
  
      const squares = [];
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const piece = initialPosition[row]?.[col] || null;
          const color = row < 2 ? "w" : row > 5 ? "b" : null;
          squares.push({
            id: `${row}-${col}`,
            color: (row + col) % 2 === 0 ? "light" : "dark",
            piece: piece ? { type: piece, color } : null
          });
        }
      }
      return squares.reverse();
}

const getFENChar = (piece) => {
    const map = {
      pawn: "p",
      knight: "n",
      bishop: "b",
      rook: "r",
      queen: "q",
      king: "k"
    };
    const char = map[piece.type];
    return piece.color === "w" ? char.toUpperCase() : char;
  };