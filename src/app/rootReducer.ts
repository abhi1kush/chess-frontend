// src/redux/reducers.ts
import { combineReducers, type Reducer } from 'redux';

import settingsReducer, { type SettingsState } from '../features/settings/redux/settingsSlice';
import analysisReducer, { type AnalysisState } from '../features/analysis/redux/analysisSlice';
import pgnReducer, { type PGNState } from '../features/pgn/redux/pgnSlice';
import engineReducer, { type EngineState } from '../features/engine/redux/engineSlice';

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