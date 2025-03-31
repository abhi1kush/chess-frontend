// utils/soundUtils.js
import moveSound from "../sounds/normal-move.mp3";
import captureSound from "../sounds/capture-move.mp3";

const playSound = (type) => {
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

export default playSound;