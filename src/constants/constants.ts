import CONFIG from "../config";
import { SelectedItemType } from "../CustomTypes/CustomTypes";

// piece type: {type: "chessPiece" name: "k", color: "b"}
export const eraser: SelectedItemType = {
  category: CONFIG.PALLETE_ITEM,
  id: CONFIG.ERASER_ID,
  chessPiece: null,
};

export const pieceCharToNameMap: Record<string, string> = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
};