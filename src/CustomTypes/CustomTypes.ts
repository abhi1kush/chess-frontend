import { Square } from "chess.js";

export type PieceColor = 'w' | 'b';
export type PieceCode = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';

// Piece interface
export type PieceType = {
  type: PieceCode;
  color: PieceColor;
}

export type CastlingFlagsType = 'K' | 'Q' | 'k' | 'q';

export type BoardType = Record<Square, PieceType | null>;

export type BoardState = {
  board: BoardType;
  // currentFen: string;
  selectedItem: SelectedItemType | null;
  isFlipped: boolean;
  playerToMove: PieceColor;
  castlingFlags: {
    K: boolean;
    Q: boolean;
    k: boolean;
    q: boolean;
  };
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