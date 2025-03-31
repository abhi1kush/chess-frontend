// src/redux/reducers/pgnReducer.js
import {LOAD_PGN} from '../actions/analysisActions';

const initialState = {
  finalFen: "",
  moves: [],
  fens:[],
};

const pgnReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PGN:
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