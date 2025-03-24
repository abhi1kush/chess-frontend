// src/redux/reducers.js
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer,
});

export default rootReducer;