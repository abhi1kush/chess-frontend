// src/redux/actions/analysisActions.js
export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const START_POS = 'START_POS';
export const FINAL_POS = 'FINAL_POS';
export const LOAD_PGN = 'LOAD_PGN';

export const startPos = () => ({type: START_POS});
export const prev = () => ({type: PREV});
export const next = () => ({type: NEXT});
export const finalPos = () => ({type: FINAL_POS});

export const loadPgn = (pgn) => ({
  type: LOAD_PGN,
  payload: pgn,
});

