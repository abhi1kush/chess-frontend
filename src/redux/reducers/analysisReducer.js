// src/redux/reducers/gameReducer.js
import { Chess } from 'chess.js';
import { NEXT, PREV, START_POS, FINAL_POS, LOAD_PGN} from '../actions/analysisActions';
import CONFIG from '../../config';

const initialState = {
  finalFen: "",
  moves: [],
  fens:[],
  currentMoveIndex: 0
};

const analysisReducer = (state = initialState, action) => {
//   console.log('gameReducer called with:', state, action);
  switch (action.type) {
    case NEXT:
        if (state.currentMoveIndex == moves.length() - 1) {
            return state
        }

        return {
            ...state,
            currentMoveIndex: state.currentMoveIndex + 1
        }
    case PREV:
        if (state.currentMoveIndex == 0) {
            return state
        }
        return {
            ...state,
            currentMoveIndex: state.currentMoveIndex - 1
        }
    case START_POS:
        return {
            ...state,
            currentMoveIndex: 0
        }
    case FINAL_POS:
        return {
            ...state,
            currentMoveIndex: state.moves.length()
        }
    case LOAD_PGN:
        const finalFen = ""
        const moves = []
        const fens = []
        return {
            ...state,
            fen: finalFen,
            moves: moves,
            fens: fens,
            currentMoveIndex: 0
        };
    default:
      return state;
  }
};

export default analysisReducer;