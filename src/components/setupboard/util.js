export const getSquareColor = (squareID) => {
    const fileIndex = squareID[0].charCodeAt(0) - 'a'.charCodeAt(0);
    const rankIndex = squareID[1].charCodeAt(0) - '1'.charCodeAt(0);
    return (fileIndex + rankIndex) % 2 === 0 ? "dark" : "light";
  } 