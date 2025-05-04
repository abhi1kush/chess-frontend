import CONFIG from "../../../config";
import { PieceType } from "../../../CustomTypes/CustomTypes";
import { SelectedItemType } from "../../../CustomTypes/CustomTypes";

export const handleDragStart = (e :React.DragEvent<HTMLImageElement>, pieceId: string) => {
  e.dataTransfer.setData("text", pieceId);
};

export const handleBoardPieceClick = (
  squareId: string, 
  piece: PieceType | null, 
  selectedItem: SelectedItemType | null, 
  setSelectedItem: (item: SelectedItemType) => void
): void => {
  if (piece == null) return;
  if (selectedItem == null) {
    setSelectedItem({
      category: CONFIG.BOARD_PIECE, 
      id: `${squareId}-${piece.color}-${piece.type}`,
      chessPiece: piece,
    });
  }
  // console.log("Piece clicked", squareId, piece);
}