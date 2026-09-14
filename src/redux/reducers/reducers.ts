// src/redux/reducers.ts
import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import analysisReducer from './analysisReducer';
import pgnReducer from './pgnReducer';
import engineReducer from './engineReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  analysis: analysisReducer,
  pgn: pgnReducer,
  engine: engineReducer,
});

export default rootReducer;