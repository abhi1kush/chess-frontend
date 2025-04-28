import React from 'react';
import Piece from './Piece';

const fileLabelMap = new Set(['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']);
const rankLabelMap = new Set(['a8', 'a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1']);
let sourceSquare = null;
// rank values from 1 to 8 int
// file values from a to h char
const Square = React.memo(({ rank, file, piece, selectedPalleteItem, onSquareClick}) => {
    const fileIndex = file.charCodeAt(0) - 'a'.charCodeAt(0);
    const squareColor = (fileIndex + rank) % 2 === 0 ? "light" : "dark";
    const squareId = `${file}${rank}`

    const handleClick = () => {
        onSquareClick(squareId, selectedPalleteItem, piece);
      };
  return (
    <div
        id={squareId}
        className={`square ${squareColor}`}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleClick}
        onDrop={(e) => handleDrop(e, squareId)}
        onTouchStart={handleClick}
        >
            { rankLabelMap.has(squareId) && <div className="rank-label">{rank}</div>}
            { fileLabelMap.has(squareId) && <div className="file-label">{file}</div>} 
            {piece && <Piece piece={piece} squareId={squareId} />}
        </div>
  ); 
});

export default React.memo(Square, (prevProps, nextProps) => {
    return (
      prevProps.piece === nextProps.piece &&
      prevProps.selectedPalleteItem === nextProps.selectedPalleteItem
    );
  });

const handleDrop = (e, squareId) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("text");
    console.log(`Dropped piece: ${pieceId} on square: ${squareId}`);
};

const handleTouchEnd = (e, squareId) => {
  e.preventDefault();
  console.log(`handleTouchEnd: sourceSquare ${sourceSquare}, end on square: ${squareId}`);
};

const handleTouchStart = (e, squareId) => {
  sourceSquare = squareId;
  console.log(`handleTouchStart on square: ${squareId}`);
};
