// src/redux/reducers/gameReducer.js
import { Chess } from 'chess.js';
import { MOVE_PIECE, RESET_GAME, LOAD_GAME, SET_GAME_OVER, SET_TIMER_DURATION } from '../actions/gameActions';
import CONFIG from '../../config';

const initialState = {
  fen: CONFIG.START_FEN,
  isWhiteTurn: true, 
  moveHistory: [],
  lastMove: null,
  isGameOver: false,
  gameResult: '',
  timerDuration: CONFIG.TIMER_DURATION,
};

const gameReducer = (state = initialState, action) => {
//   console.log('gameReducer called with:', state, action);
  switch (action.type) {
    case MOVE_PIECE:
        try {
            const game = new Chess(state.fen); // Create Chess instance for move calculation
            // console.log('FEN before move:', state.fen); // Add this line
            const move = game.move({ from: action.payload.from, to: action.payload.to, promotion: action.payload.promotionPiece });
            if (!move) return state;
    
            const newHistory = [...state.moveHistory, move.san];
    
            return {
              ...state,
              fen: game.fen(), // Store the new FEN string
              isWhiteTurn: !state.isWhiteTurn,
              moveHistory: newHistory,
              lastMove: { from: action.payload.from, to: action.payload.to },
            };
          } catch (error) {
            console.warn('Invalid move:', error);
            return state;
          }
    case RESET_GAME:
        return {
            ...initialState,
            moveHistory: [],
            timerDuration: action.payload,
        };
    case LOAD_GAME:
        return {
            ...state,
            fen: action.payload.fen,
            moveHistory: action.payload.moveHistory || [],
        };
    case SET_GAME_OVER:
      console.log("gameOver", action, action.payload)
      return {
        ...state,
        isGameOver: action.payload.isGameOver,
        gameResult: action.payload.gameResult
      };
    case SET_TIMER_DURATION:
      return {
        ...state,
        timerDuration: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;