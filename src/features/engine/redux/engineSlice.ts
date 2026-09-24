import type { Reducer } from 'redux';
import {
  TOGGLE_ENGINE,
  SET_MULTIPV,
  SET_MAX_DEPTH,
  SET_AUTO_STOP_TIME,
} from './engineActions';

export type EngineState = {
  enabled: boolean;
  multiPV: number;
  maxDepth: number;
  autoStopTime: number;
}

interface ToggleEngineAction {
  type: typeof TOGGLE_ENGINE;
}

interface SetMultiPVAction {
  type: typeof SET_MULTIPV;
  payload: number;
}

interface SetMaxDepthAction {
  type: typeof SET_MAX_DEPTH;
  payload: number;
}

interface SetAutoStopTimeAction {
  type: typeof SET_AUTO_STOP_TIME;
  payload: number;
}

type EngineAction =
  | ToggleEngineAction
  | SetMultiPVAction
  | SetMaxDepthAction
  | SetAutoStopTimeAction;

const initialState: EngineState = {
  enabled: true,
  multiPV: 1,
  maxDepth: 20,
  autoStopTime: 8000,
};

const engineReducer = (
  state: EngineState = initialState,
  action: EngineAction,
): EngineState => {
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

export default engineReducer as Reducer<EngineState>;

