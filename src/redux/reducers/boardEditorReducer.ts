// import { current } from "@reduxjs/toolkit";
import CONFIG, {StartChessPosition, ClearBoardPosition} from "../../config"
import {BoardEditorActions, FLIP_BOARD, CLEAR_BOARD, RESET_BOARD, 
  SET_BOARD_WITH_FEN, PUT_PIECE, REMOVE_PIECE,
   MOVE_BOARD_PIECE,
   TOGGLE_CASTLING_PIECE, SET_PLAYER_TO_MOVE} from "../actions/boardEditorActions"
import { FenToBoard, GetPlayerToMove } from "../../services/fen/fenparser";
import {BoardState} from "../../CustomTypes/CustomTypes"

const initialState: BoardState = {
    board: {...StartChessPosition},
    // currentFen: CONFIG.START_FEN,
    selectedItem: null,
    isFlipped: false,
    playerToMove: CONFIG.WHITE,
    castlingFlags: {
      K: true,
      Q: true,
      k: true,
      q: true
    }
  };

const clearBoardState: BoardState = {
  board: {...ClearBoardPosition},
  // currentFen: CONFIG.CLEAR_FEN,
  selectedItem: null,
  isFlipped: false,
  playerToMove: CONFIG.WHITE,
  castlingFlags: {
    K: false,
    Q: false,
    k: false,
    q: false
  }
}

const boardEditorReducer = (state: BoardState = initialState, action: BoardEditorActions) => {
  console.log("boardEditorReducer", action.type, action.payload);
  switch (action.type) {
    case FLIP_BOARD: 
      return {
        ...state,
        isFlipped: !state.isFlipped,
      }
    case RESET_BOARD:
      return initialState;
    case CLEAR_BOARD:
      return clearBoardState;
    case SET_BOARD_WITH_FEN: 
      console.log("SET_BOARD_WITH_FEN",action.payload.fen, FenToBoard(action.payload.fen));
      return {
        ...state,
        board: {...FenToBoard(action.payload.fen)},
        playerToMove: GetPlayerToMove(action.payload.fen),
      }
    case PUT_PIECE:
      // const pieceId = `${squareId}-${piece.color}-${piece.type}`;
      return {
        ...state,
        board: {
          ...state.board,
          [action.payload.squareId]: action.payload.piece,
        }
      }
    case MOVE_BOARD_PIECE: {
      const piece = state.board[action.payload.sourceSquareId];
      return {
        ...state,
        board: {
          ...state.board,
          [action.payload.destSquareId]: piece,
          [action.payload.sourceSquareId]: null,
        }
      }
    }
    case REMOVE_PIECE: {
      return {
        ...state,
        board: {
          ...state.board,
          [action.payload.squareId]: null,
        }
      }
    }
    case TOGGLE_CASTLING_PIECE: {
      return {
        ...state,
        castlingFlags: {
          ...state.castlingFlags,
          [action.payload.flag]: !state.castlingFlags[action.payload.flag],
        }
      }
    }
    case SET_PLAYER_TO_MOVE: {
      console.log("SET_PLAYER_TO_MOVE", action.payload.color, state.playerToMove);
      return {
        ...state,
        playerToMove: action.payload.color,
      }
    }
    default:
      return state;
    }
  };
  
  export default boardEditorReducer;