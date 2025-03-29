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
        console.log("analysisReducer LOAD_PGN", action.payload.pgn);
        const finalFen = ""
        const moves = []
        const fens = []
        return {
            ...state,
            fen: finalFen,
            moves: moves,
            fens: fens,
        };
    default:
      return state;
  }
};

export default pgnReducer;