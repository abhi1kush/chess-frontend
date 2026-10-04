import type { Reducer } from 'redux';
import {
  FLIP_BOARD,
  SET_THEME,
  SET_SOUND,
  SET_PLAY_MOVES_DURING_REVIEW,
  SET_ENGINE_KIND,
} from './settingsActions';

export type DesktopEngineKind = 'stockfish-lite' | 'stockfish-native';

export type SettingsState = {
  isFlipped: boolean;
  theme: string;
  enableSound: boolean;
  playMovesDuringReview: boolean;
  engineKind: DesktopEngineKind;
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

interface SetPlayMovesDuringReviewAction {
  type: typeof SET_PLAY_MOVES_DURING_REVIEW;
  payload: boolean;
}

interface SetEngineKindAction {
  type: typeof SET_ENGINE_KIND;
  payload: DesktopEngineKind;
}

type SettingsAction =
  | FlipBoardAction
  | SetThemeAction
  | SetSoundAction
  | SetPlayMovesDuringReviewAction
  | SetEngineKindAction;

const initialState: SettingsState = {
  isFlipped: false,
  theme: 'default',
  enableSound: true,
  playMovesDuringReview: true,
  engineKind: 'stockfish-native',
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

    case SET_PLAY_MOVES_DURING_REVIEW:
      return {
        ...state,
        playMovesDuringReview: action.payload,
      };

    case SET_ENGINE_KIND:
      return {
        ...state,
        engineKind: action.payload === 'stockfish-lite' ? 'stockfish-lite' : 'stockfish-native',
      };

    default:
      return state;
  }
};

export default settingsReducer as Reducer<SettingsState>;