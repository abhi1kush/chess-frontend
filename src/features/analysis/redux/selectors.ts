import type { RootState } from '../../../app/rootReducer';

export const selectAnalysis = (state: RootState) => state.analysis;
export const selectPgn = (state: RootState) => state.pgn;
export const selectSettings = (state: RootState) => state.settings;
