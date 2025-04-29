import CONFIG from "../../../config";

export const allowDrop = (e) => {
    e.preventDefault();
  };
  
export const handleSquareClick = ({board, squareId, squarePiece, selectedItem, setSelectedItem, setBoard}) => {
    if (!selectedItem) {
      if (squarePiece != null) {
        setSelectedItem({type: CONFIG.BOARD_PIECE, id: `${squareId}-${squarePiece.color}-${squarePiece.type}`});
      }
      return;
    }
    // deslect if clicked again on same piece.
    if (squarePiece != null && selectedItem.id === `${squareId}-${squarePiece.color}-${squarePiece.type}`) {
      setSelectedItem(null);
      return;
    }
  
    const sourceSquare = selectedItem.id.split("-")[0];
    const updatedBoard = board.map(rank => rank.map(square => {
      if (square.id === squareId) {
        if (selectedItem.id === CONFIG.ERASER_ID) {
          return { ...square, piece: null };  // Remove the piece
        }
        const splittedId = selectedItem.id.split("-");
        return {
          ...square, 
          piece: {type: splittedId[2], color: splittedId[1]} }; // Place the piece
      } else if (selectedItem.type === CONFIG.BOARD_PIECE && square.id === sourceSquare) {
        setSelectedItem(null);  // Deselect the piece
        return { ...square, piece: null };  // Remove the piece from source square
      }
      return square;
    }));
    setBoard(updatedBoard);
  };
  
export const handleDrop = (e, targetId, board, setBoard) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("text");
    const sourcePiece = document.getElementById(pieceId);
    // console.log(`handleDrop, targetId: ${targetId}, pieceID: ${pieceId}, sourcePiece`, sourcePiece);
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
  