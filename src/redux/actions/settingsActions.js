// src/redux/actions/settingActions.js
export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_THEME = 'SET_THEME';
export const SET_SOUND = 'SET_SOUND';

export const flipBoard = () => ({
  type: FLIP_BOARD,
});

export const setTheme = (theme) => ({ 
    type: SET_THEME,
    payload: theme,
  });

export const setSound = (sound) => ({
    type: SET_SOUND, 
    payload: sound
  });