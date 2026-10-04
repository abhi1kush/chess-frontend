export const FLIP_BOARD = 'FLIP_BOARD';
export const SET_THEME = 'SET_THEME';
export const SET_SOUND = 'SET_SOUND';
export const SET_PLAY_MOVES_DURING_REVIEW = 'SET_PLAY_MOVES_DURING_REVIEW';
export const SET_ENGINE_KIND = 'SET_ENGINE_KIND';

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

export const setEngineKind = (kind: 'stockfish-lite' | 'stockfish-native') => ({
  type: SET_ENGINE_KIND,
  payload: kind,
});

export type SettingsAction = ReturnType<typeof flipBoard> 
| ReturnType<typeof setTheme> 
| ReturnType<typeof setSound>
| ReturnType<typeof setPlayMovesDuringReview>
| ReturnType<typeof setEngineKind>;