// src/redux/reducers.ts
import { combineReducers, type Reducer } from 'redux';

import settingsReducer, { type SettingsState } from './settingsReducer';
import analysisReducer, { type AnalysisState } from './analysisReducer';
import pgnReducer, { type PGNState } from './pgnReducer';
import engineReducer, { type EngineState } from './engineReducer';

export type RootState = {
  settings: SettingsState;
  analysis: AnalysisState;
  pgn: PGNState;
  engine: EngineState;
};

const rootReducer: Reducer<RootState> = combineReducers({
  settings: settingsReducer,
  analysis: analysisReducer,
  pgn: pgnReducer,
  engine: engineReducer,
});

export default rootReducer;