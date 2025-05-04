import { PieceColor, PieceType, SquareIdType } from "../../CustomTypes/CustomTypes"

export const RESET_BOARD = 'RESET_BOARD';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_BOARD_WITH_FEN = 'SET_BOARD_WITH_FEN';
export const PUT_PIECE = "PUT_PIECE";
export const REMOVE_PIECE = "REMOVE_PIECE";
export const MOVE_BOARD_PIECE = "MOVE_BOARD_PIECE";
export const TOGGLE_CASTLING_PIECE = "TOGGLE_CASTLING_PIECE";
export const SET_PLAYER_TO_MOVE = "SET_PLAYER_TO_MOVE";

interface ClearBoardAction {
  type: typeof CLEAR_BOARD;
  payload: null,
}

interface ResetBoardAction {
  type: typeof RESET_BOARD;
  payload: null,
}

interface SetBoardWithFenAction {
  type: typeof SET_BOARD_WITH_FEN;
  payload: {
    fen: string;
  };
}

interface PutPieceAction {
  type: typeof PUT_PIECE;
  payload: {
    squareId: string;
    piece: PieceType;
  };
}

interface RemovePieceAction {
  type: typeof REMOVE_PIECE;
  payload: {
    squareId: string;
  };
}

interface MoveBoardPieceAction {
  type: typeof MOVE_BOARD_PIECE;
  payload: {
    sourceSquareId: SquareIdType;
    destSquareId: SquareIdType;
  };
}

export type BoardEditorActions =
  | ClearBoardAction
  | ResetBoardAction
  | SetBoardWithFenAction
  | PutPieceAction
  | MoveBoardPieceAction
  | RemovePieceAction;

export const setPlayerToMoveAction = (playerColor: PieceColor) => ({
  type: RESET_BOARD,
  payload: playerColor,
});

export const resetBoardAction = () => ({
  type: RESET_BOARD,
});

export const clearBoardAction = () => ({
  type: CLEAR_BOARD,
});

export const flipBoardAction = () => ({
    type: FLIP_BOARD,
});

export const setupBoardWithFenAction = (fen: string) => ({
    type: SET_BOARD_WITH_FEN,
    payload: fen,
});

export const putPieceAction = (squareId: string, piece: PieceType) => ({
    type: PUT_PIECE,
    payload: {squareId: squareId, piece: piece},
});

export const removePieceAction = (squareId: string) => ({
    type: REMOVE_PIECE,
    payload: {squareId : squareId},
});

export const movePieceAction = (sourceSquareId: string, destSquareId: string) => ({
    type: MOVE_BOARD_PIECE,
    payload: {sourceSquareId: sourceSquareId, destSquareId: destSquareId},
});

// export const toggleCastlingFlagAction = (flag: ) => ({
//     type: TOGGLE_CASTLING_PIECE,
//     payload: flag,
// });