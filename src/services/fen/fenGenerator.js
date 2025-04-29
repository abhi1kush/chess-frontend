export const rankTofen = (rank) => {
    let fen = "";
    let emptySquares = 0;
    for (let i = 0; i < 8; i++) {
      if (rank[i].piece == null) {
        emptySquares++;
      } 
        
      if (rank[i].piece != null) {
        if (emptySquares > 0) { 
          fen += `${emptySquares}`;
        }
        emptySquares = 0;
        fen += rank[i].piece.color === "w" ? rank[i].piece.type?.toUpperCase() : rank[i].piece.type; 
      } else if (i == 7 && emptySquares > 0) {
        fen += `${emptySquares}`;
      }
    }
    return fen;
  }

    export const generateFEN = ({board, playerToMove, halfmoveClock = 0, fullmoveNumber = 1, whiteKingSide, 
        whiteQueenSide, blackKingSide, blackQueenSide}) => {
      const enPassant = "-";
      let fen = "";
      const castlingRights = (whiteKingSide ? "K" : "") + (whiteQueenSide ? "Q" : "") + (blackKingSide ? "k":"") + (blackQueenSide ? "q":""); 
      if (board.length === 0) {
        return "";
      }
      const rankFenBlocks = board.map(rank => rankTofen(rank));
      fen += rankFenBlocks.join("/"); 
      fen += ` ${playerToMove} ${castlingRights === "" ? "-": castlingRights} ${enPassant} ${halfmoveClock} ${fullmoveNumber}`;
      return fen;
    };