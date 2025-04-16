// src/redux/actions/analysisActions.js
export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const START_POS = 'START_POS';
export const FINAL_POS = 'FINAL_POS';
export const LOAD_PGN = 'LOAD_PGN';
export const JUMP_TO_MOVE = 'JUMP_TO_MOVE';
export const TOGGLE_ENGINE = 'TOGGLE_ENGINE';
export const DISABLE_ENGINE = 'DISABLE_ENGINE';

export const startPos = () => ({type: START_POS});
export const prev = () => ({type: PREV});
export const next = () => ({type: NEXT});
export const finalPosition = () => ({type: FINAL_POS});

export const loadPgn = ({finalPos, moves, fens, fromToSquares, termination, result, blackPlayerName, whitePlayerName}) => ({
  type: LOAD_PGN,
  payload: {finalPos, moves, fens, fromToSquares, termination, result, blackPlayerName, whitePlayerName},
});

export const jumpToMove = (index) => ({
  type: JUMP_TO_MOVE,
  payload: index, 
})

export const toggleEngine = () => ({
  type: TOGGLE_ENGINE
});

export const disableEngine = () => ({
  type: DISABLE_ENGINE
});