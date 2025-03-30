// src/redux/reducers/gameReducer.js
import { Chess } from 'chess.js';
import {LOAD_PGN} from '../actions/analysisActions';
import CONFIG from '../../config';

const initialState = {
  finalFen: "",
  moves: [],
  fens:[],
};

const pgnReducer = (state = initialState, action) => {
//   console.log('gameReducer called with:', state, action);
  switch (action.type) {
    case LOAD_PGN:
        console.log("pgnReducer LOAD_PGN", action.payload);
        return {
            ...state,
            finalFen: action.payload.finalPos,
            moves: action.payload.moves,
            fens: action.payload.fens,
        };
    default:
      return state;
  }
};

export default pgnReducer;