import { current } from "@reduxjs/toolkit";
import CONFIG, {startPosBoard, clearBoard} from "../../config"
import {CLEAR_BOARD, RESET_BOARD, SET_BOARD_WITH_FEN, PUT_PIECE, MOVE_PIECE} from "../actions/boardEditorActions"
import { FenToBoard, GetPlayerToMove } from "../../services/fen/fenparser";

const initialState = {
    board: [...startPosBoard],
    currentFen: CONFIG.START_FEN,
    selectedPalettePiece: null,
    isFlipped: false,
    playerToMove: CONFIG.WHITE,
    castlingRights: {
      whiteKingSide: true,
      whiteQueenSide: true,
      blackKingSide: true,
      blackQueenSide: true
    }
  };

const clearBoardState = {
  board: [...clearBoard],
  currentFen: CONFIG.CLEAR_FEN,
  selectedPalettePiece: null,
  isFlipped: false,
  playerToMove: CONFIG.WHITE,
  isFlipped: false,
  castlingRights: {
    whiteKingSide: true,
    whiteQueenSide: true,
    blackKingSide: true,
    blackQueenSide: true
  }
}

const boardEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_BOARD:
      return initialState;
    case CLEAR_BOARD:
      return clearBoardState;
    case SET_BOARD_WITH_FEN: 
      return {
        ...state,
        board: [...FenToBoard(action.payload.fen)],
        playerToMove: GetPlayerToMove(fen),
      }
    case PUT_PIECE:
      return {
        ...state,
        board: putPiece(board, action.payload.id, action.payload.type),
      }
    case MOVE_PIECE: {
      return {
        ...state,
        board: movePiece(board, action.payload.sourceSquareId, action.payload.destSquareId),
      }
    }
    default:
      return state;
    }
  };
  
  export default boardEditorReducer;

  const putPiece = (board, squareId, piece) => {
    return board.map(rank => map(square => {
      if (square.id == squareId) {
        return {
          ...square,
          piece: piece
        }
      }
    }))
  }

  const movePiece = (board, srcId, destId) => {
    let srcPiece = null;
    return board.map(rank => rank.map(square => {
      if (square.id == srcId) {
        srcPiece = square.piece;
        return {
          ...square,
          type: null,
        }
      } 
      if (square.id == destId) {
        return {
          ...square,
          type: srcPiece != null ? srcPiece : square.piece,
        }
      }
    }))
  }