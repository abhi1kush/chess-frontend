import { LoadPgnParams, PgnAnalysisEntry } from "../../CustomTypes/AnalysisTypes";

// src/redux/actions/analysisActions.js
export const SET_PGN_ANALYSIS_AT_INDEX = 'SET_PGN_ANALYSIS_AT_INDEX';
/** After Start Review finishes, UI reads per-ply data from `analysisData` only (live engine must not overwrite it). */
export const SET_REVIEW_ANALYSIS_COMPLETE = 'SET_REVIEW_ANALYSIS_COMPLETE';

export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const START_POS = 'START_POS';
export const FINAL_POS = 'FINAL_POS';
export const LOAD_PGN = 'LOAD_PGN';
export const JUMP_TO_MOVE = 'JUMP_TO_MOVE';
export const TOGGLE_ENGINE = 'TOGGLE_ENGINE';
export const DISABLE_ENGINE = 'DISABLE_ENGINE';

export const startPos = (): StartPosActionType => ({type: START_POS});
export const prev = (): PrevActionType => ({type: PREV});
export const next = (): NextActionType => ({type: NEXT});
export const finalPosition = (): FinalPosActionType => ({type: FINAL_POS});

export const loadPgn = (
  {
    finalPos, 
    moves, 
    fens, 
    fromToSquares, 
    termination, 
    result, 
    blackPlayerName, 
    whitePlayerName
  }: LoadPgnParams): LoadPgnActionType => ({
  type: LOAD_PGN,
  payload: {finalPos, moves, fens, fromToSquares, termination, result, blackPlayerName, whitePlayerName},
});

export const setPgnAnalysisAtIndex = (payload: {
  index: number;
  evalScore: PgnAnalysisEntry['evalScore'];
  bestMove: string;
  moveClassification?: PgnAnalysisEntry['moveClassification'];
}): SetPgnAnalysisAtIndexAction => ({
  type: SET_PGN_ANALYSIS_AT_INDEX,
  payload,
});

export const jumpToMove = (index: number): JumpToMoveActionType => ({
  type: JUMP_TO_MOVE,
  payload: index, 
});

export const setReviewAnalysisComplete = (complete: boolean): SetReviewAnalysisCompleteAction => ({
  type: SET_REVIEW_ANALYSIS_COMPLETE,
  payload: complete,
});

export const toggleEngine = (): ToggleEngineActionType => ({
  type: TOGGLE_ENGINE
});

export const disableEngine = (): DisableEngineActionType => ({
  type: DISABLE_ENGINE
});

export type SetReviewAnalysisCompleteAction = {
  type: typeof SET_REVIEW_ANALYSIS_COMPLETE;
  payload: boolean;
};

export type SetPgnAnalysisAtIndexAction = {
  type: typeof SET_PGN_ANALYSIS_AT_INDEX;
  payload: {
    index: number;
    evalScore: PgnAnalysisEntry['evalScore'];
    bestMove: string;
    moveClassification?: PgnAnalysisEntry['moveClassification'];
  };
};

export type LoadPgnActionType = {
  type: typeof LOAD_PGN,
  payload: LoadPgnParams,
}  

export type JumpToMoveActionType = {
  type: typeof JUMP_TO_MOVE,
  payload: number,
}

export type ToggleEngineActionType = {
    type: typeof TOGGLE_ENGINE;
}

export type DisableEngineActionType = {
  type: typeof DISABLE_ENGINE;
}

export type StartPosActionType = {
  type: typeof START_POS;
}

export type PrevActionType = {
  type: typeof PREV;
}

export type NextActionType = {
  type: typeof NEXT;
}

export type FinalPosActionType = {
    type: typeof FINAL_POS;
}

type SetPGNAnalysisAtIndexAction = {
  type: typeof SET_PGN_ANALYSIS_AT_INDEX;
  payload: {
    index: number;
    evalScore: number | null;
    bestMove?: string;
    moveClassification?: string | null;
  };
}

export type PGNAction =
  | LoadPgnActionType
  | SetReviewAnalysisCompleteAction
  | SetPGNAnalysisAtIndexAction;

export type AnalysisActionType =  
  | PGNAction
  | JumpToMoveActionType 
  | ToggleEngineActionType 
  | StartPosActionType 
  | PrevActionType 
  | NextActionType 
  | FinalPosActionType 
  | DisableEngineActionType;