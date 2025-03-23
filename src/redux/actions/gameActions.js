// src/redux/actions/gameActions.js
export const MOVE_PIECE = 'MOVE_PIECE';
export const RESET_GAME = 'RESET_GAME';
export const LOAD_GAME = 'LOAD_GAME';
export const UPDATE_TIME = 'UPDATE_TIME';
export const SET_GAME_OVER = 'SET_GAME_OVER';
export const SET_GAME_RESULT = 'SET_GAME_RESULT';
export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_THEME = 'SET_THEME';
export const SET_SOUND = 'SET_SOUND';
export const SET_TIMER_DURATION = 'SET_TIMER_DURATION';

export const movePiece = (move) => ({
  type: MOVE_PIECE,
  payload: move,
});

export const resetGame = (timerDuration) => ({
  type: RESET_GAME,
  payload: timerDuration,
});

export const loadGame = (gameData) => ({
  type: LOAD_GAME,
  payload: gameData,
});

export const updateTime = (turn, time) => ({
  type: UPDATE_TIME,
  payload: { turn, time },
});

export const setGameOver = (gameOver) => ({
  type: SET_GAME_OVER,
  payload: gameOver,
});

export const setGameResult = (result) => ({
  type: SET_GAME_RESULT,
  payload: result,
});

export const flipBoard = () => ({
  type: FLIP_BOARD,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setSound = (sound) => ({
  type: SET_SOUND,
  payload: sound,
});

export const setTimerDuration = (duration) => ({
  type: SET_TIMER_DURATION,
  payload: duration,
});