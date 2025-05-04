import { SquareIds } from "../../config";
import { BoardType, PieceColor, SquareIdType } from "../../CustomTypes/CustomTypes"

export const rankTofen = (board: BoardType, rank: SquareIdType[]) => {
    let fen = "";
    let emptySquares = 0;
    for (let i = 0; i < 8; i++) {
      const piece = board[rank[i]];
      if (piece == null) {
        emptySquares++;
      } 
        
      if (piece != null) {
        if (emptySquares > 0) { 
          fen += `${emptySquares}`;
        }
        emptySquares = 0;
        fen += piece.color === "w" ? piece.type?.toUpperCase() : piece.type; 
      } else if (i == 7 && emptySquares > 0) {
        fen += `${emptySquares}`;
      }
    }
    return fen;
  }

  interface generateFENParams {
    board: BoardType,
    playerToMove: PieceColor,
    halfmoveClock: number, 
    fullmoveNumber: number, 
    whiteKingSide: boolean, 
    whiteQueenSide: boolean, 
    blackKingSide: boolean, 
    blackQueenSide: boolean
  }

    export const generateFEN = ({board, playerToMove, halfmoveClock = 0, fullmoveNumber = 1, whiteKingSide, 
        whiteQueenSide, blackKingSide, blackQueenSide}: generateFENParams) => {
      const enPassant = "-";
      let fen = "";
      const castlingRights = (whiteKingSide ? "K" : "") + (whiteQueenSide ? "Q" : "") + (blackKingSide ? "k":"") + (blackQueenSide ? "q":""); 
      const rankFenBlocks = SquareIds.map(rank => rankTofen(board, rank));
      fen += rankFenBlocks.join("/"); 
      fen += ` ${playerToMove} ${castlingRights === "" ? "-": castlingRights} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`;
      return fen;
    };