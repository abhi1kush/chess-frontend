import CONFIG from "../../../config";
import { PieceCode, PieceColor, PieceType, SquareClickParams } from "../../../CustomTypes/CustomTypes";

export const allowDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };
  
export const handleSquareClick = ({
  squareId, 
  squarePiece, 
  selectedItem, 
  setSelectedItem, 
  removePiece, 
  putPiece,
  makeMove
} : SquareClickParams): void => {
    // if nothing selected select it.
    if (!selectedItem) {
      if (squarePiece != null) {
        setSelectedItem({
          category: CONFIG.BOARD_PIECE, id: 
          `${squareId}-${squarePiece.color}-${squarePiece.type}`, 
          chessPiece: squarePiece,
        });
      }
      return;
    }

    // deslect if clicked again on same piece.
    if (squarePiece != null && selectedItem.id === `${squareId}-${squarePiece.color}-${squarePiece.type}`) {
      setSelectedItem(null);
      return;
    }

    if (selectedItem.id === CONFIG.ERASER_ID) {
      removePiece(squareId);
      return;
    } 
    
    if (selectedItem.chessPiece == null) {
      console.error("Error: selectedItem chessPiece is null and its not eraser", selectedItem);
      return;
    }
    if (selectedItem.category === CONFIG.PALLETE_ITEM) { // pallete chess piece.
      putPiece(squareId, selectedItem.chessPiece);
      return;
    }

    if (selectedItem.category === CONFIG.BOARD_PIECE) {    
      const sourceSquareId = selectedItem.id.split("-")[0];
      makeMove(sourceSquareId, squareId);
      setSelectedItem(null); // Deselect the piece
    }
  };
  
export const handleDrop = (
  e: React.DragEvent<HTMLDivElement>, 
  targetId: string, 
  makeMove: (sourceId: string, targetId: string) => void): void => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("text");
    const sourcePiece = document.getElementById(pieceId);
    if (!sourcePiece) return;

    const sourceSquareId = sourcePiece.dataset.square!;
    // console.log(`handleDrop, targetId: ${targetId}, pieceID: ${pieceId}, sourcePiece`, sourcePiece);
    makeMove(sourceSquareId, targetId);
  };
  