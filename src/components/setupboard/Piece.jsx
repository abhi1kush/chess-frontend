import React from 'react';
import CONFIG from '../../config';

const Piece = React.memo(({piece, squareId, selectedItem, setSelectedItem, 
    handleDragStart, handleBoardPieceClick}) => {
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

export default Piece;