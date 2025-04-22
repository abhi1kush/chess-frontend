// src/redux/reducers.js
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import settingsReducer from './settingsReducer';
import analysisReducer from './analysisReducer';
import pgnReducer from './pgnReducer';
import engineReducer from './engineReducer';
import boardEditorReducer from './boardEditorReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer,
  analysis: analysisReducer,
  pgn: pgnReducer,
  engine: engineReducer,
  boardeditor: boardEditorReducer,
});

export default rootReducer;