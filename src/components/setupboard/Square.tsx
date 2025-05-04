import React from 'react';
import Piece from './Piece';
import { getSquareColor } from './utils/util';
import { selectItemAction } from '../../redux/actions/boardEditorActions';
import { useSelector, useDispatch } from 'react-redux';
import { putPieceAction, removePieceAction, movePieceAction} from '../../redux/actions/boardEditorActions';
import { PieceType } from '../../CustomTypes/CustomTypes';
import { SelectedItemType } from '../../CustomTypes/CustomTypes';
import { RootState } from '../../redux/reducers/reducers';

interface SquareProps {
  showRankLabel: boolean;
  showFileLabel: boolean;
  squareId: string;
  squarePiece: PieceType | null;
  handleSquareClick: (params: {
    squareId: string;
    squarePiece: PieceType | null;
    selectedItem: SelectedItemType | null;
    setSelectedItem: (item: SelectedItemType | null) => void;
    removePiece: (squareId: string) => void;
    putPiece: (squareId: string, piece: PieceType) => void;
    makeMove: (sourceSquareId: string, destSquareId: string) => void;
  }) => void;
  handleDrop: (
    event: React.DragEvent<HTMLDivElement>,
    targetSquareId: string,
    makeMove: (sourceSquareId: string, targetSquareId: string) => void
  ) => void;
  allowDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (event: React.DragEvent<HTMLImageElement>, id: string) => void;
  handleBoardPieceClick: (
    squareId: string,
    piece: PieceType,
    selectedItem: SelectedItemType | null,
    setSelectedItem: (item: SelectedItemType | null) => void
  ) => void;
}

const Square: React.FC<SquareProps> = React.memo(
  ({
    showRankLabel, 
    showFileLabel, 
    squareId, 
    squarePiece,  
    handleSquareClick, 
    handleDrop, 
    allowDrop, 
    handleDragStart, 
    handleBoardPieceClick
  }) => {
    const  selectedItem = useSelector((state: RootState) => state.boardeditor.selectedItem as SelectedItemType);
    const dispatch = useDispatch();

    const setSelectedItem = (item: SelectedItemType | null) => {
      dispatch(selectItemAction(item));
    } 
    const removePiece = (squareId: string) => {
      dispatch(removePieceAction(squareId));
    }

    const putPiece = (squareId: string, piece: PieceType) => {
      dispatch(putPieceAction(squareId, piece));
    }

    const makeMove = (sourceSquareId: string, targetSquareId: string): void => {
      dispatch(movePieceAction(sourceSquareId, targetSquareId));
    }

    // console.log("render square", squareId);
    return (
      <div
      id={squareId}
      className={`square ${getSquareColor(squareId)}`}
      onDragOver={allowDrop}
      // squareId, squarePiece, selectedItem, setSelectedItem, removePiece, putPiece
      onClick={() => handleSquareClick({
        squareId: squareId, squarePiece: squarePiece, 
        selectedItem: selectedItem, setSelectedItem: setSelectedItem, 
        removePiece: removePiece, putPiece: putPiece, makeMove})}
        onDrop={(e) => handleDrop(e, squareId, makeMove)}
      >
          { showRankLabel && <div className="rank-label">{squareId[1]}</div>}
          { showFileLabel && <div className="file-label">{squareId[0]}</div>} 
          {squarePiece && <Piece piece={squarePiece} squareId={squareId} 
          handleDragStart={handleDragStart} handleBoardPieceClick={handleBoardPieceClick}/>}
      </div>
    );
  });

  export default Square;