// src/redux/reducers/gameReducer.js
import { Chess } from 'chess.js';
import { MOVE_PIECE, RESET_GAME, LOAD_GAME, UPDATE_TIME, SET_GAME_OVER, SET_GAME_RESULT, FLIP_BOARD, SET_THEME, SET_SOUND, SET_TIMER_DURATION } from '../actions/gameActions';
import { saveGameToStorage } from '../../utils/storage';
import CONFIG from '../../config';

const initialState = {
  fen: CONFIG.START_FEN,
  moveHistory: [],
  whiteTime: 300, // Default timer duration
  blackTime: 300, // Default timer duration
  lastMove: null,
  gameOver: false,
  gameResult: '',
  // settings
  isFlipped: false,
  theme: 'default',
  enableSound: true,
  timerDuration: 300,
};

const gameReducer = (state = initialState, action) => {
  console.log('gameReducer called with:', state, action);
  switch (action.type) {
    case MOVE_PIECE:
        try {
            const game = new Chess(state.fen); // Create Chess instance for move calculation
            console.log('FEN before move:', state.fen); // Add this line
            const move = game.move({ from: action.payload.from, to: action.payload.to, promotion: 'q' });
            if (!move) return state;
    
            const newHistory = [...state.moveHistory, move.san];
            saveGameToStorage(game.fen(), newHistory);
    
            return {
              ...state,
              fen: game.fen(), // Store the new FEN string
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
            whiteTime: action.payload,
            blackTime: action.payload,

        };
    case LOAD_GAME:
        return {
            ...state,
            fen: action.payload.fen,
            moveHistory: action.payload.moveHistory || [],
        };
    case UPDATE_TIME:
      return {
        ...state,
        whiteTime: action.payload.turn === 'w' ? action.payload.time : state.whiteTime,
        blackTime: action.payload.turn === 'b' ? action.payload.time : state.blackTime,
      };
    case SET_GAME_OVER:
      return {
        ...state,
        gameOver: action.payload,
      };
    case SET_GAME_RESULT:
      return {
        ...state,
        gameResult: action.payload,
      };
    case FLIP_BOARD:
      return {
        ...state,
        isFlipped: !state.isFlipped,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_SOUND:
      return {
        ...state,
        enableSound: action.payload,
      };
    case SET_TIMER_DURATION:
      return {
        ...state,
        timerDuration: action.payload,
        whiteTime: action.payload,
        blackTime: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;