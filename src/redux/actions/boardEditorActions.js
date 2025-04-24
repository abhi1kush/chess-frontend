
export const RESET_BOARD = 'RESET_BOARD';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_BOARD_WITH_FEN = 'SET_BOARD_WITH_FEN';
export const PUT_PIECE = "PUT_PIECE";
export const MOVE_PIECE2 = "MOVE_PIECE2";

export const resetBoard = () => ({
  type: RESET_BOARD,
});

export const clearBoard = () => ({
  type: CLEAR_BOARD,
});

export const flipBoard = () => ({
    type: FLIP_BOARD,
});

export const setupBoardWithFen = (fen) => ({
    type: SET_BOARD_WITH_FEN,
    payload: fen,
});

export const putPiece = (squareId, piece) => ({
    type: PUT_PIECE,
    payload: {id: squareId, type: piece},
});

export const move_Piece = (sourceSquareId, destSquareId) => ({
    type: MOVE_PIECE2,
    payload: {sourceSquareId: sourceSquareId, destSquareId: destSquareId},
});



