import CONFIG from "../../../config";
import { HandlePaletteClickParams } from "../../../CustomTypes/CustomTypes";

//  item type: {type: "chessPiece, name: "k", color: "b"}
export const handlePaletteClick = ({newSelectedItem , selectedItem, setSelectedItem} : HandlePaletteClickParams) => {
    // No selected Item.
    if (selectedItem == null) {
      setSelectedItem(newSelectedItem);
      return;
    }
    
    // deselect if clicked again on selected item.
    if (newSelectedItem.id === selectedItem.id) {
      setSelectedItem(null); 
      return;
    }
    
    if (selectedItem.category === CONFIG.BOARD_PIECE) {
      // Pallete selection on higher priorty.
      if (newSelectedItem.category === CONFIG.PALLETE_ITEM) {
        setSelectedItem(newSelectedItem);
      }
    } else if (selectedItem.category === CONFIG.PALLETE_ITEM && newSelectedItem.category === CONFIG.PALLETE_ITEM) { // another pallete item clicked.
      setSelectedItem(newSelectedItem);
    }
    // console.log("Palette clicked", item, selectedItem, item.id === selectedItem.id);
  };