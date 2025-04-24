const Board = React.memo(({ board, isFlipped, selectedPalletePiece, setBoard }) => {
  const visualBoard = isFlipped ? [...board].reverse().map(row => ([...row].reverse())) : board;
  console.log("* render board");
  return (
    <div id="chessboard">
        {visualBoard.map((row, rowIndex) => row.map((square, colIndex) => {
            const rankLabel = isFlipped ? rowIndex + 1 : (7 - rowIndex) + 1;
            const fileLabel = isFlipped ? "hgfedcba"[colIndex] : "abcdefgh"[colIndex];
            return (
                <div
                key={square.id}
                className={`square ${getSquareColor(square.id)}`}
                onDragOver={allowDrop}
                onClick={() => placePiece(board, square.id, selectedPalletePiece, setBoard)}
                onDrop={(e) => handleDrop(e, square.id, board, setBoard)}
                onContextMenu={(e) => handleRightClick(e, square.id, board, setBoard)}
                >
                    { colIndex === 0 && <div className="rank-label">{rankLabel}</div>}
                    { rowIndex === 7 && <div className="file-label">{fileLabel}</div>} 
                    {square.piece && renderPiece(square.piece, square.id)}
                </div>
            )
        }))}
  </div>)
});