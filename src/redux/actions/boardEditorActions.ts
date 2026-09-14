import { Square } from "chess.js";
import { PieceColor, PieceType, CastlingFlagsType, SelectedItemType } from "../../CustomTypes/CustomTypes"
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

type ClearBoardAction = {
  type: typeof CLEAR_BOARD;
}

type ResetBoardAction = {
  type: typeof RESET_BOARD;
}

type SetBoardWithFenAction = {
  type: typeof SET_BOARD_WITH_FEN;
  payload: {
    fen: string;
  };
}

type PutPieceAction = {
  type: typeof PUT_PIECE;
  payload: {
    squareId: string;
    piece: PieceType;
  };
}

type RemovePieceAction = {
  type: typeof REMOVE_PIECE;
  payload: {
    squareId: string;
  };
}

type MoveBoardPieceAction = {
  type: typeof MOVE_BOARD_PIECE;
  payload: {
    sourceSquareId: Square;
    destSquareId: Square;
  };
}

type ToggleCastlingFlagAction = {
  type: typeof TOGGLE_CASTLING_PIECE;
  payload: {
    flag: CastlingFlagsType
  }
}

type FlipAction = {
  type: typeof FLIP_BOARD;
}

type PlayerToMoveAction = {
  type: typeof SET_PLAYER_TO_MOVE;
  payload: {color: PieceColor}
}

type SelectedItemActionType = {
  type: typeof SELECT_ITEM,
  payload: {item: SelectedItemType | null}
}

type DeselectItemActionType = {
  type: typeof DESELECT_ITEM
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

  export const selectItemAction = (item : SelectedItemType | null): SelectedItemActionType => ({
    type: SELECT_ITEM,
    payload: {item: item},
  });
  
  export const deselectItemAction = (): DeselectItemActionType => ({
      type: DESELECT_ITEM,
  });

export const setPlayerToMoveAction = (playerColor: PieceColor): PlayerToMoveAction => ({
  type: SET_PLAYER_TO_MOVE,
  payload: {color: playerColor},
});

export const resetBoardAction = (): ResetBoardAction => ({
  type: RESET_BOARD,
});

export const clearBoardAction = (): ClearBoardAction => ({
  type: CLEAR_BOARD,
});

export const flipBoardAction = (): FlipAction => ({
    type: FLIP_BOARD,
});

export const setupBoardWithFenAction = (fen: string): SetBoardWithFenAction => ({
    type: SET_BOARD_WITH_FEN,
    payload: {fen: fen},
});

export const putPieceAction = (squareId: string, piece: PieceType): PutPieceAction => ({
    type: PUT_PIECE,
    payload: {squareId: squareId, piece: piece},
});

export const removePieceAction = (squareId: string): RemovePieceAction => ({
    type: REMOVE_PIECE,
    payload: {squareId : squareId},
});

export const movePieceAction = (sourceSquareId: Square, destSquareId: Square): MoveBoardPieceAction => ({
    type: MOVE_BOARD_PIECE,
    payload: {sourceSquareId: sourceSquareId, destSquareId: destSquareId},
});

export const toggleCastlingFlagAction = (flag: CastlingFlagsType): ToggleCastlingFlagAction => ({
    type: TOGGLE_CASTLING_PIECE,
    payload: {flag: flag},
});