// src/redux/reducers/pgnReducer.js
import {LOAD_PGN} from '../actions/analysisActions';

const initialState = {
  finalFen: "",
  moves: [],
  fens:[],
  fromToSquares: [],
  termination: "",
  result: "",
  blackPlayerName: "",
  whitePlayerName: "",
};

const pgnReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PGN:
        return {
            ...state,
            finalFen: action.payload.finalPos,
            moves: action.payload.moves,
            fens: action.payload.fens,
            fromToSquares: action.payload.fromToSquares,
            termination: action.payload.termination,
            result: action.payload.result, 
            blackPlayerName: action.payload.blackPlayerName,
            whitePlayerName: action.payload.whitePlayerName, 
        };
    default:
      return state;
  }
};

export default pgnReducer;