// import { current } from "@reduxjs/toolkit";
import CONFIG, {StartChessPosition, ClearBoardPosition} from "../../config"
import {BoardEditorActions, CLEAR_BOARD, RESET_BOARD, SET_BOARD_WITH_FEN, PUT_PIECE, MOVE_BOARD_PIECE} from "../actions/boardEditorActions"
import { FenToBoard, GetPlayerToMove } from "../../services/fen/fenparser";
import {BoardState} from "../../CustomTypes/CustomTypes"

const initialState: BoardState = {
    board: {...StartChessPosition},
    // currentFen: CONFIG.START_FEN,
    // selectedPalettePiece: null,
    // isFlipped: false,
    // playerToMove: CONFIG.WHITE,
    // castlingFlags: {
    //   K: true,
    //   Q: true,
    //   k: true,
    //   q: true
    // }
  };

const clearBoardState: BoardState = {
  board: {...ClearBoardPosition},
  // currentFen: CONFIG.CLEAR_FEN,
  // selectedPalettePiece: null,
  // isFlipped: false,
  // playerToMove: CONFIG.WHITE,
  // castlingFlags: {
  //   K: true,
  //   Q: true,
  //   k: true,
  //   q: true
  // }
}

const boardEditorReducer = (state: BoardState = initialState, action: BoardEditorActions) => {
  console.log("boardEditorReducer", action.type, action.payload);
  switch (action.type) {
    case RESET_BOARD:
      return initialState;
    case CLEAR_BOARD:
      return clearBoardState;
    case SET_BOARD_WITH_FEN: 
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
          [action.payload.squareId]: {
            ...state.board[action.payload.squareId],
            piece: action.payload.piece,
          }
        }
      }
    case MOVE_BOARD_PIECE: {
      const piece = state.board[action.payload.sourceSquareId];
      return {
        ...state,
        board: {
          ...state.board,
          [action.payload.destSquareId]: {
            ...state.board[action.payload.destSquareId],
            piece: piece,
          },
          [action.payload.sourceSquareId]: {
            ...state.board[action.payload.sourceSquareId],
            piece: null,
          },
        }
      }
    }
    default:
      return state;
    }
  };
  
  export default boardEditorReducer;