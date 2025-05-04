import React from 'react';
import CONFIG from '../../config';
import { selectItemAction } from '../../redux/actions/selectedItemActions';
import { eraser, pieceCharToNameMap } from "../../constants/constants";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import { HandlePaletteClickParams, PieceColor, SelectedItemType } from '../../CustomTypes/CustomTypes';
import { PieceCode } from '../../CustomTypes/CustomTypes';

interface PaletteProps {
  handleDragStart: (e: React.DragEvent<HTMLImageElement>, id: string) => void;
  handlePaletteClick: (params: HandlePaletteClickParams) => void;
}

const Palette: React.FC<PaletteProps> = React.memo(({handleDragStart, handlePaletteClick}) => {
    const pieceCodes: PieceCode[] = ['p', 'r', 'n', 'b', 'q', 'k'];
    const pieceColors: PieceColor[] = ['w', 'b'];
    const  {selectedItem} = useSelector((state: RootState) => state.selecteditem);
    const dispatch = useDispatch();
    const setSelectedItem = (item: SelectedItemType | null) => {
      dispatch(selectItemAction(item));
    };
    // console.log("+ render palette");
    return (
      <div className="palette">
        {pieceColors.map(color =>
          pieceCodes.map(pieceCode => (
            <img
            key={`${color}-${pieceCode}`}
            id={`palette-${color}-${pieceCode}`}
            src={`pieces/svg/${color}_${pieceCharToNameMap[pieceCode]}.svg`}
            alt={`${color} ${pieceCode}`}
            draggable
            data-type={pieceCode}
            data-color={color}
            data-square="palette"
            onClick={() => {handlePaletteClick({
              newSelectedItem: {
                category: CONFIG.PALLETE_ITEM, 
                id: `p-${color}-${pieceCode}`, 
                chessPiece: {type: pieceCode, color: color},
              }, 
              selectedItem: selectedItem, 
              setSelectedItem: setSelectedItem
            })}}
            onDragStart={(e) =>
              handleDragStart(e, `palette-${color}-${pieceCode}`)
            }
            className={`palette-piece ${selectedItem?.id === `p-${color}-${pieceCode.toLowerCase()}` ? 'selected' : ''}`}
              style={{order: color == "w" ? pieceCodes.indexOf(pieceCode) : pieceCodes.indexOf(pieceCode) + 7}}
          />
          ))
        )}
        <img data-square="palette" src="assets/eraser.svg"
          style={{order:6}}
          onClick={() => {handlePaletteClick({
            newSelectedItem: eraser, selectedItem: selectedItem, 
            setSelectedItem: setSelectedItem
        })}}
        className={`palette-piece eraser ${selectedItem?.id === eraser.id ? 'selected' : ''}`}
        />
      </div>)
  });

  export default Palette;