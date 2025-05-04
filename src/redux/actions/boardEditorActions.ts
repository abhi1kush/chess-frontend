import { PieceColor, PieceType, SquareIdType, CastlingFlagsType, SelectedItemType } from "../../CustomTypes/CustomTypes"

export const RESET_BOARD = 'RESET_BOARD';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_BOARD_WITH_FEN = 'SET_BOARD_WITH_FEN';
export const PUT_PIECE = "PUT_PIECE";
export const REMOVE_PIECE = "REMOVE_PIECE";
export const MOVE_BOARD_PIECE = "MOVE_BOARD_PIECE";
export const TOGGLE_CASTLING_PIECE = "TOGGLE_CASTLING_PIECE";
export const SET_PLAYER_TO_MOVE = "SET_PLAYER_TO_MOVE";
export const SELECT_ITEM = "SET_SELECTED_ITEM";
export const DESELECT_ITEM = "DESELECT_ITEM";

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

interface ToggleCastlingFlagAction {
  type: typeof TOGGLE_CASTLING_PIECE;
  payload: {
    flag: CastlingFlagsType
  }
}

interface FlipAction {
  type: typeof FLIP_BOARD;
  payload: null
}

interface PlayerToMoveAction {
  type: typeof SET_PLAYER_TO_MOVE;
  payload: {color: PieceColor}
}

interface SelectedItemActionType {
  type: typeof SELECT_ITEM,
  payload: {item: SelectedItemType}
}

interface DeselectItemActionType {
  type: typeof DESELECT_ITEM
  payload: null,
}

export type BoardEditorActions =
  | ClearBoardAction
  | ResetBoardAction
  | SetBoardWithFenAction
  | PutPieceAction
  | MoveBoardPieceAction
  | RemovePieceAction
  | ToggleCastlingFlagAction
  | FlipAction
  | PlayerToMoveAction
  | SelectedItemActionType|
  DeselectItemActionType;


  
  export const selectItemAction = (item : SelectedItemType | null) => ({
    type: SELECT_ITEM,
    payload: {item: item},
  });
  
  export const deselectItemAction = () => ({
      type: DESELECT_ITEM,
  });

export const setPlayerToMoveAction = (playerColor: PieceColor) => ({
  type: SET_PLAYER_TO_MOVE,
  payload: {color: playerColor},
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
    payload: {fen: fen},
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

export const toggleCastlingFlagAction = (flag: CastlingFlagsType) => ({
    type: TOGGLE_CASTLING_PIECE,
    payload: {flag: flag},
});