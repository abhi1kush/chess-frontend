// utils/soundUtils.js
import moveSound from "../assets/sounds/move-self.mp3";
import captureSound from "../assets/sounds/capture.mp3";
import boardStartSound from "../assets/sounds/board-start.mp3"

export const playMoveSound = (type) => {
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
    const sound = new Audio(boardStartSound);
    sound.play();
}