import CONFIG from "../../../config";

// piece type: {type: "chessPiece" name: "k", color: "b"}
export const eraser = {type: CONFIG.PALLETE_PIECE, id: CONFIG.ERASER_ID};
export const pieceCharToNameMap = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
};