import React, { useEffect, useState } from "react";
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import '../../styles/components/topContainer.css';
import "../../styles/BoardEditor.css";

const pieces = [
  "pawn", "rook", "knight", "bishop", "queen", "king"
];

const generateInitialBoard = () => {
    const initialPosition = {
        0: ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
        1: ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        6: ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        7: ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
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
      return squares;
}

const BoardEditor = () => {
  const [board, setBoard] = useState([]);
  
  useEffect(() => {
    resetBoard();
  }, []);

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
  };

  console.log("Board state:", board);
  return (
    <div className="main-container">
      <div className="top-container"> 
        <nav className="top-bar">
            {/* <FlipButton/> */}
            <button onClick={resetBoard} className="action-button">Reset</button>
            <button onClick={clearBoard} className="action-button">Clear Board</button>
            <button onClick={flipBoard} className="action-button">Flip</button>
            <Settings />
            <DarkThemeToggle/>
        </nav>
      </div>
      <div className="middle-container">
      <div className="left-menu-bar"></div>
      <div className="chessboard-container">
        <div id="chessboard">
          {board.map(square => (
            <div
              key={square.id}
              className={`square ${square.color}`}
              onDragOver={allowDrop}
              onDrop={(e) => handleDrop(e, square.id)}
              onContextMenu={(e) => handleRightClick(e, square.id)}
            >
              {square.piece && renderPiece(square.piece, square.id)}
            </div>
          ))}
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
                onDragStart={(e) =>
                  handleDragStart(e, `palette-${color}-${piece}`)
                }
              />
            ))
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default BoardEditor;
