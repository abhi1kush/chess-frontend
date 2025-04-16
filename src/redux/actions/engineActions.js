// Action Types
export const TOGGLE_ENGINE = 'TOGGLE_ENGINE';
export const SET_MULTIPV = 'SET_MULTIPV';
export const SET_MAX_DEPTH = 'SET_MAX_DEPTH';
export const SET_AUTO_STOP_TIME = 'SET_AUTO_STOP_TIME';

// Action Creators
export const toggleEngine = () => ({
  type: TOGGLE_ENGINE,
});

export const setMultiPV = (value) => ({
  type: SET_MULTIPV,
  payload: value,
});

export const setMaxDepth = (value) => ({
  type: SET_MAX_DEPTH,
  payload: value,
});

export const setAutoStopTime = (value) => ({
  type: SET_AUTO_STOP_TIME,
  payload: value,
});
