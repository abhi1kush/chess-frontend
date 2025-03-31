// src/redux/reducers/gameReducer.js
import { NEXT, PREV, START_POS, FINAL_POS, LOAD_PGN, JUMP_TO_MOVE} from '../actions/analysisActions';

const initialState = {
  finalFen: "",
  fenLength: 0, 
  currentMoveIndex: 0
};

const analysisReducer = (state = initialState, action) => {
  console.log("analysisReducer", action.type, action.payload, state.currentMoveIndex)
  switch (action.type) {
    case NEXT:
        if (state.currentMoveIndex === (state.fenLength - 1)) {
            return state
        }

        return {
            ...state,
            currentMoveIndex: state.currentMoveIndex + 1
        }
    case PREV:
        if (state.currentMoveIndex === 0) {
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
            currentMoveIndex: state.fenLength - 1
        }
    case JUMP_TO_MOVE: 
        return {
            ...state,
            currentMoveIndex: action.payload
        }
    case LOAD_PGN:
        console.log("pgnload", action.payload)
        return {
            ...state,
            finalFen: action.payload.finalPos,
            fenLength: action.payload.fens.length,
            currentMoveIndex: 0
        }
    default:
      return state;
  }
};

export default analysisReducer;