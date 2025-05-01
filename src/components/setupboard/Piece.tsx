import React from 'react';
import CONFIG from '../../config';
import {useSelector, useDispatch} from "react-redux";
import { selectItemAction } from '../../redux/actions/selectedItemActions';
import { PieceType } from '../../CustomTypes/CustomTypes';
import { RootState } from '../../redux/reducers/reducers';

interface PieceProps {
  piece: PieceType | null;
  squareId: string;
  handleDragStart: (e: React.DragEvent<HTMLImageElement>, id: string) => void;
  handleBoardPieceClick: (
    squareId: string,
    piece: PieceType,
    selectedItem: any,
    setSelectedItem: (item: any) => void
  ) => void;
}

const Piece: React.FC<PieceProps> = React.memo(({piece, squareId, 
    handleDragStart, handleBoardPieceClick}) => {
    const { selectedItem } = useSelector((state: RootState) => state.selecteditem);
    const dispatch = useDispatch();
    if (piece == null || piece === undefined || !squareId || squareId === "" || !piece.type) {
      console.log("render piece", squareId, piece, {...piece});
      return null;
    } else{
      // console.log("render piece", squareId, piece);
    }

  
    const setSelectedItem = (item: any) => {
      dispatch(selectItemAction(item));
    } 
    const pieceNameMap: Record<string, string> = {
      p: "pawn",
      n: "knight",
      b: "bishop",
      r: "rook",
      q: "queen",
      k: "king", 
    }
    return (
      <img
        className={`pieceimg ${selectedItem != null && selectedItem?.id === `${squareId}-${piece.color}-${piece.type}` ? 'selected' : ''}`}
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