export type PieceColor = 'w' | 'b';
export type PieceCode = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';

// Piece interface
export interface PieceType {
  type: PieceCode;
  color: PieceColor;
}

export type SquareId = string;
export type BoardState = {
  board: Record<string, PieceType | null>;
  // currentFen: string;
  // selectedPalettePiece: { type: string; id: string } | null;
  // isFlipped: boolean;
  // playerToMove: string;
  // castlingFlags: {
  //   K: boolean;
  //   Q: boolean;
  //   k: boolean;
  //   q: boolean;
  // };
};

// Define the message type
export interface Message {
  text: string;
  type: string; // You can narrow this down with union like: 'info' | 'error' | 'warning'
}

export interface HandlePaletteClickParams {
  newSelectedItem: SelectedItemType;
  selectedItem: SelectedItemType | null;
  setSelectedItem: (item: SelectedItemType | null) => void;
}

export interface SquareClickParams {
  squareId: string;
  squarePiece: PieceType | null;
  selectedItem: SelectedItemType | null;
  setSelectedItem: (item: SelectedItemType | null) => void;
  removePiece: (squareId: string) => void;
  putPiece: (squareId: string, piece: PieceType) => void;
  makeMove: (sourceSquareId: string, destSquareId: string) => void;
}

export interface SelectedItemType {
  category: string;
  id: string;
  chessPiece: PieceType | null;
  // Add any other properties relevant to your selected item
}