// src/redux/reducers/gameReducer.js
import {FLIP_BOARD, SET_THEME, SET_SOUND} from '../actions/settingsActions';

const initialState = {
  isFlipped: false,
  theme: 'default',
  enableSound: true,
};

const settingReducer = (state = initialState, action) => {
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
      console.log('settingReducer SET_SOUND:', action.payload);
      return {
        ...state,
        enableSound: action.payload,
      };
    default:
      return state;
  }
};

export default settingReducer;