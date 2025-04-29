import React from 'react';
import CONFIG from '../../config';
import { eraser, pieceCharToNameMap } from "./constants/constants";

const Palette = React.memo(({selectedItem, setSelectedItem, handleDragStart, handlePaletteClick}) => {
    const pieceCodes = [
      "p", "r", "n", "b", "q", "k"
    ];
    // console.log("+ render palette");
    return (
      <div className="palette">
        {["w", "b"].map(color =>
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
              item: {type: CONFIG.PALLETE_PIECE, id: `p-${color}-${pieceCode}`}, selectedItem: selectedItem, 
              setSelectedItem: setSelectedItem
            })}}
            onDragStart={(e) =>
              handleDragStart(e, `palette-${color}-${pieceCode}`)
            }
            className={`palette-piece ${selectedItem?.type === CONFIG.PALLETE_PIECE 
              && selectedItem?.id === `p-${color}-${pieceCode.toLowerCase()}` ? 'selected' : ''}`}
              style={{order: color == "w" ? pieceCodes.indexOf(pieceCode) : pieceCodes.indexOf(pieceCode) + 7}}
          />
          ))
        )}
        <img data-square="palette" src="assets/eraser.svg"
          style={{order:6}}
          onClick={() => {handlePaletteClick({
            item: eraser, selectedItem: selectedItem, 
            setSelectedItem: setSelectedItem
        })}}
        className={`palette-piece eraser ${selectedItem?.id === eraser.id ? 'selected' : ''}`}
        />
      </div>)
  });

  export default Palette;