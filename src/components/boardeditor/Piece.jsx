import React from "react";

const Piece = React.memo(({ piece, squareId }) => {
    const pieceNameMap = {
      p: "pawn",
      n: "knight",
      b: "bishop",
      r: "rook",
      q: "queen",
      k: "king",
      P: "pawn",
      N: "knight",
      B: "bishop",
      R: "rook",
      Q: "queen",
      K: "king",
    };
    return (
      <img
        className={"pieceimg"}
        key={squareId}
        id={`${squareId}-${piece.type}`}
        src={`pieces/svg/${piece.color}_${pieceNameMap[piece.type]}.svg`}
        alt={`${piece.color} ${piece.type}`}
        draggable
        data-type={piece.type}
        data-color={piece.color}
        data-square={squareId}
        onDragStart={(e) => handleDragStart(e, `${squareId}-${piece.type}`)}
      />
    );
  });

  export default Piece;

  const handleDragStart = (e, pieceId) => {
    e.dataTransfer.setData("text", pieceId);
  };