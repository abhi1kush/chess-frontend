import React from 'react';
import Piece from './Piece';
import { getSquareColor } from './utils/util';

const Square = React.memo(({showRankLabel, showFileLabel, board, setBoard, square, selectedItem, setSelectedItem,  
    handleSquareClick, handleDrop, allowDrop, handleDragStart, handleBoardPieceClick}) => {
    return (
      <div
      id={square.id}
      className={`square ${getSquareColor(square.id)}`}
      onDragOver={allowDrop}
      onClick={() => handleSquareClick({
        board: board, squareId: square.id, squarePiece: square.piece, 
        selectedItem: selectedItem, setSelectedItem: setSelectedItem, setBoard: setBoard})}
        onDrop={(e) => handleDrop(e, square.id, board, setBoard)}
      >
          { showRankLabel && <div className="rank-label">{square.id[1]}</div>}
          { showFileLabel && <div className="file-label">{square.id[0]}</div>} 
          {square.piece && <Piece piece={square.piece} squareId={square.id} 
          selectedItem={selectedItem} setSelectedItem={setSelectedItem}
          handleDragStart={handleDragStart} handleBoardPieceClick={handleBoardPieceClick}/>}
      </div>
    );
  });

  export default Square;