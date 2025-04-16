import { TOGGLE_ENGINE, SET_MULTIPV, SET_MAX_DEPTH, SET_AUTO_STOP_TIME } from '../actions/engineActions';

const initialState = {
  enabled: false,
  multiPV: 1,
  maxDepth: 20,
  autoStopTime: 8000, // in ms
};

const engineReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ENGINE:
      return {
        ...state,
        enabled: !state.enabled,
      };
    case SET_MULTIPV:
      return {
        ...state,
        multiPV: action.payload,
      };
    case SET_MAX_DEPTH:
      return {
        ...state,
        maxDepth: action.payload,
      };
    case SET_AUTO_STOP_TIME:
      return {
        ...state,
        autoStopTime: action.payload,
      };
    default:
      return state;
  }
};

export default engineReducer;
