// Action Types
export const TOGGLE_ENGINE = 'TOGGLE_ENGINE';
export const SET_MULTIPV = 'SET_MULTIPV';
export const SET_MAX_DEPTH = 'SET_MAX_DEPTH';
export const SET_AUTO_STOP_TIME = 'SET_AUTO_STOP_TIME';

export type ToggleEngineAction = {
  type: typeof TOGGLE_ENGINE;
}

// Action Creators
export const toggleEngine = (): ToggleEngineAction => ({
  type: TOGGLE_ENGINE,
});

export type EngineAction =
  | ToggleEngineAction
