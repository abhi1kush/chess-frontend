import CONFIG from "../../../config";

//  item type: {type: "chessPiece, name: "k", color: "b"}
export const handlePaletteClick = ({item, selectedItem, setSelectedItem}) => {
    // No selected Item.
    if (selectedItem == null) {
      setSelectedItem(item);
      return;
    }
    
    // deselect if clicked again on selected item.
    if (item.id === selectedItem.id) {
      setSelectedItem(null); 
      return;
    }
    
  
    if (selectedItem.type === CONFIG.BOARD_PIECE) {
      // Pallete selection on higher priorty.
      if (item.type === CONFIG.PALLETE_PIECE) {
        setSelectedItem(item);
      }
    } else if (selectedItem.type === CONFIG.PALLETE_PIECE && item.type === selectedItem.type) { // another pallete item clicked.
      setSelectedItem(item);
    }
    // console.log("Palette clicked", item, selectedItem, item.id === selectedItem.id);
  };