// src/redux/reducers.js
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import settingsReducer from './settingsReducer';
import analysisReducer from './analysisReducer';
import pgnReducer from './pgnReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer,
  analysis: analysisReducer,
  pgn: pgnReducer,
});

export default rootReducer;