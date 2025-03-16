// utils/soundUtils.js
import moveSound from "../sounds/move.mp3";
import captureSound from "../sounds/capture.mp3";
import checkSound from "../sounds/capture.mp3";
import checkmateSound from "../sounds/capture.mp3";
import wrongSound from "../sounds/wrong.mp3";

const playSound = (type, enableSound) => {
  if (!enableSound) return;

  let sound;
  switch (type) {
    case "move":
      sound = new Audio(moveSound);
      break;
    case "capture":
      sound = new Audio(captureSound);
      break;
    case "check":
      sound = new Audio(checkSound);
      break;
    case "checkmate":
      sound = new Audio(checkmateSound);
      break;
    case "wrong":
      sound = new Audio(wrongSound);
      break;
    default:
      return;
  }
  sound.play();
};

export default playSound;