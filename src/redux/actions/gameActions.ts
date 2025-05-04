import { MoveType } from "../../CustomTypes/AnalysisTypes"

// src/redux/actions/gameActions.js
export const MOVE_PIECE = 'MOVE_PIECE';
export const RESET_GAME = 'RESET_GAME';
export const LOAD_GAME = 'LOAD_GAME';
export const UPDATE_TIME = 'UPDATE_TIME';
export const SET_GAME_OVER = 'SET_GAME_OVER';
export const SET_GAME_RESULT = 'SET_GAME_RESULT';
export const SET_TIMER_DURATION = 'SET_TIMER_DURATION';

export const movePiece = (move: MoveType) => ({
  type: MOVE_PIECE,
  payload: move,
});

export const resetGame = (timerDuration: number) => ({
  type: RESET_GAME,
  payload: timerDuration,
});

// export const loadGame = (gameData) => ({
//   type: LOAD_GAME,
//   payload: gameData,
// });

// export const updateTime = (turn, time) => ({
//   type: UPDATE_TIME,
//   payload: { turn, time },
// });

export const setGameOver = (isGameOver: boolean, gameResult: string) => ({
  type: SET_GAME_OVER,
  payload: {isGameOver, gameResult},
});

// export const setTimerDuration = (duration: number) => ({
//   type: SET_TIMER_DURATION,
//   payload: duration,
// });