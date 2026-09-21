// src/redux/actions/settingActions.js
export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_THEME = 'SET_THEME';
export const SET_SOUND = 'SET_SOUND';
export const SET_PLAY_MOVES_DURING_REVIEW = 'SET_PLAY_MOVES_DURING_REVIEW';

export const flipBoard = () => ({
  type: FLIP_BOARD,
});

export const setTheme = (theme: string) => ({ 
    type: SET_THEME,
    payload: theme,
  });

export const setSound = (sound: boolean) => ({
    type: SET_SOUND, 
    payload: sound
  });

export const setPlayMovesDuringReview = (enabled: boolean) => ({
  type: SET_PLAY_MOVES_DURING_REVIEW,
  payload: enabled,
});

export type SettingsAction = ReturnType<typeof flipBoard> 
| ReturnType<typeof setTheme> 
| ReturnType<typeof setSound>
| ReturnType<typeof setPlayMovesDuringReview>;