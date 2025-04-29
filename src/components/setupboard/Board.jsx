import React from 'react';

import { allowDrop, handleSquareClick, handleDrop} from "./eventhandlers/SquareEventHandlers";
import { handleDragStart, handleBoardPieceClick } from "./eventhandlers/PieceEventHandlers";
import Square from './Square';

const Board = React.memo(({ board, isFlipped, selectedItem, setSelectedItem, setBoard}) => {
    const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
    // console.log("* render board");
    return (
      <div id="chessboard">
          {visualBoard.map((row, rowIndex) => row.map((square, colIndex) => {
              return (
                  <Square
                    key={square.id}
                    showRankLabel={colIndex === 0}
                    showFileLabel={rowIndex === 7}
                    board={board}
                    setBoard={setBoard}
                    square={square}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    handleSquareClick={handleSquareClick}
                    handleDrop={handleDrop}
                    allowDrop={allowDrop}
                    handleDragStart={handleDragStart}
                    handleBoardPieceClick={handleBoardPieceClick}
                  />
              )
          }))}
    </div>)
  });

export default Board;