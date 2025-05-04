export type PieceColor = 'w' | 'b';
export type PieceCode = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type SquareIdType = 'a8'| 'b8' | 'c8' | 'd8' | 'e8' | 'f8' | 'g8' | 'h8' 
                         | 'a7'| 'b7' | 'c7' | 'd7' | 'e7' | 'f7' | 'g7' | 'h7' 
                         | 'a6'| 'b6' | 'c6' | 'd6' | 'e6' | 'f6' | 'g6' | 'h6' 
                         | 'a5'| 'b5' | 'c5' | 'd5' | 'e5' | 'f5' | 'g5' | 'h5' 
                         | 'a4'| 'b4' | 'c4' | 'd4' | 'e4' | 'f4' | 'g4' | 'h4' 
                         | 'a3'| 'b3' | 'c3' | 'd3' | 'e3' | 'f3' | 'g3' | 'h3' 
                         | 'a2'| 'b2' | 'c2' | 'd2' | 'e2' | 'f2' | 'g2' | 'h2' 
                         | 'a1'| 'b1' | 'c1' | 'd1' | 'e1' | 'f1' | 'g1' | 'h1'

// Piece interface
export interface PieceType {
  type: PieceCode;
  color: PieceColor;
}

export type CastlingFlagsType = 'K' | 'Q' | 'k' | 'q';

export type BoardType = Record<SquareIdType, PieceType | null>;

export type SquareId = string;
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