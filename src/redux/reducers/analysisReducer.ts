// src/redux/reducers/analysisReducer.js
import { AnalysisActionType } from '../actions/analysisActions';
import { NEXT, PREV, START_POS, FINAL_POS, LOAD_PGN, JUMP_TO_MOVE, TOGGLE_ENGINE, DISABLE_ENGINE} from '../actions/analysisActions';

const initialState = {
  finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
  fenLength: 72, 
  currentMoveIndex: 0,
  engineEnabled: false,
};

const analysisReducer = (state = initialState, action: AnalysisActionType) => {
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
        return {
            ...state,
            finalFen: action.payload.finalPos,
            fenLength: action.payload.fens.length,
            currentMoveIndex: 0
        }
    case TOGGLE_ENGINE:
        return {
            ...state,
            engineEnabled: !state.engineEnabled
    }
    case DISABLE_ENGINE:
        return {
            ...state,
            engineEnabled: false
    }
    default:
      return state;
  }
};

export default analysisReducer;