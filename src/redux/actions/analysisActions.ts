import { LoadPgnParams } from "../../CustomTypes/AnalysisTypes";

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

export const loadPgn = ({finalPos, moves, fens, fromToSquares, termination, result, blackPlayerName, whitePlayerName}: LoadPgnParams) => ({
  type: LOAD_PGN,
  payload: {finalPos, moves, fens, fromToSquares, termination, result, blackPlayerName, whitePlayerName},
});

export const jumpToMove = (index: number) => ({
  type: JUMP_TO_MOVE,
  payload: index, 
})

export const toggleEngine = () => ({
  type: TOGGLE_ENGINE
});

export const disableEngine = () => ({
  type: DISABLE_ENGINE
});

export interface LoadPgnActionType {
  type: typeof LOAD_PGN,
  payload: LoadPgnParams,
}  

export interface JumpToMoveActionType {
  type: typeof JUMP_TO_MOVE,
  payload: number,
}

export interface ToggleEngineActionType {
    type: typeof TOGGLE_ENGINE;
}

export interface DisableEngineActionType {
  type: typeof DISABLE_ENGINE;
}

export interface StartPosActionType {
  type: typeof START_POS;
}

export interface PrevActionType {
  type: typeof PREV;
}

export interface NextActionType {
  type: typeof NEXT;
}

export interface FinalPosActionType {
    type: typeof FINAL_POS;
}



export type AnalysisActionType =  LoadPgnActionType | JumpToMoveActionType | ToggleEngineActionType | StartPosActionType 
  | PrevActionType | NextActionType | FinalPosActionType | DisableEngineActionType;