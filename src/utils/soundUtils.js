// utils/soundUtils.js
import { store } from '../redux/store';
import moveSound from "../assets/sounds/move-self.mp3";
import captureSound from "../assets/sounds/capture.mp3";
import boardStartSound from "../assets/sounds/board-start.mp3"

const isEnableSound = () => {
  const { enableSound } = store.getState().settings;
  return enableSound
}

export const playMoveSound = (type) => {
  if (!isEnableSound()) return;
  let sound;
  switch (type) {
    case "move":
      sound = new Audio(moveSound);
      break;
    case "capture":
      sound = new Audio(captureSound);
      break;
    default:
      return;
  }
  sound.play();
};

export const playBoardSetupSound = () => {
  if (!isEnableSound()) return;
  const sound = new Audio(boardStartSound);
  sound.play();
}