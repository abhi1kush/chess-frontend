export const getSquareColor = (squareID) => {
    const fileIndex = squareID[0].charCodeAt(0) - 'a'.charCodeAt(0);
    const rankIndex = squareID[1].charCodeAt(0) - '1'.charCodeAt(0);
    return (fileIndex + rankIndex) % 2 === 0 ? "dark" : "light";
  } 

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