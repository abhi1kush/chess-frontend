// src/redux/reducers/settingsReducer.ts

import {
  FLIP_BOARD,
  SET_THEME,
  SET_SOUND,
} from '../actions/settingsActions';

interface SettingsState {
  isFlipped: boolean;
  theme: string;
  enableSound: boolean;
}

interface FlipBoardAction {
  type: typeof FLIP_BOARD;
}

interface SetThemeAction {
  type: typeof SET_THEME;
  payload: string;
}

interface SetSoundAction {
  type: typeof SET_SOUND;
  payload: boolean;
}

type SettingsAction =
  | FlipBoardAction
  | SetThemeAction
  | SetSoundAction;

const initialState: SettingsState = {
  isFlipped: false,
  theme: 'default',
  enableSound: true,
};

const settingsReducer = (
  state: SettingsState = initialState,
  action: SettingsAction,
): SettingsState => {
  switch (action.type) {
    case FLIP_BOARD:
      return {
        ...state,
        isFlipped: !state.isFlipped,
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case SET_SOUND:
      return {
        ...state,
        enableSound: action.payload,
      };

    default:
      return state;
  }
};

export default settingsReducer;