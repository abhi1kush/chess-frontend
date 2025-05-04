import React from 'react';
import { useSelector } from 'react-redux';
import { allowDrop, handleSquareClick, handleDrop} from "./eventhandlers/SquareEventHandlers";
import { handleDragStart, handleBoardPieceClick } from "./eventhandlers/PieceEventHandlers";
import Square from './Square';
import {FlippedSquareIds, SquareIds} from '../../config';
import { RootState } from '../../redux/reducers/reducers';
import { PieceType } from '../../CustomTypes/CustomTypes';

interface BoardProps {
  isFlipped: boolean;
}

const Board: React.FC<BoardProps> = React.memo(({ isFlipped }) => {
    const visualBoard = isFlipped ? FlippedSquareIds : SquareIds;
    const board = useSelector((state: RootState) => state.boardeditor.board);

    return (
      <div id="chessboard">
          {visualBoard.map((row, rowIndex) => row.map((squareId, colIndex) => {
              return (
                  <Square
                    key={squareId}
                    showRankLabel={colIndex === 0}
                    showFileLabel={rowIndex === 7}
                    squareId={squareId}
                    squarePiece={board[squareId]}
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