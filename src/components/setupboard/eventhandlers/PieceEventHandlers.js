import CONFIG from "../../../config";

export const handleDragStart = (e, pieceId) => {
  e.dataTransfer.setData("text", pieceId);
};

export const handleBoardPieceClick = (squareId, piece, selectedItem, setSelectedItem) => {
  if (piece == null) return;
  if (selectedItem == null) {
    setSelectedItem({type: CONFIG.BOARD_PIECE, id: `${squareId}-${piece.color}-${piece.type}`});
  }
  // console.log("Piece clicked", squareId, piece);
}