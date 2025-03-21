import React, { useEffect, useRef} from "react";
import { Chess } from "chess.js";
import "../styles/components/moveNavigation.css";
import PropTypes from "prop-types";
import CONFIG from "../config";

const MoveNavigation = ({ fenHistory, currentMoveIndex, setCurrentMoveIndex, setPosition }) => {
  // ⏮️ Move to the first move
  const goToStart = () => {
    setCurrentMoveIndex(0);
    setPosition(fenHistory[0]);
  };
    useEffect(() => {
        console.log("🛠 MoveNavigation goToStart", currentMoveIndex);
    }, [currentMoveIndex]);


  // ⏪ Step back one move
  const prevMove = () => {
    if (currentMoveIndex > 0) {
      setCurrentMoveIndex(prev => {
        const newIndex = prev - 1;
        setPosition(fenHistory[newIndex]);
        return newIndex;
      });
    }
  };

  // ⏩ Step forward one move
  const nextMove = () => {
    if (currentMoveIndex < fenHistory.length - 1) {
      setCurrentMoveIndex(prev => {
        const newIndex = prev + 1;
        setPosition(fenHistory[newIndex]);
        return newIndex;
      });
    }
  };


  // 🔚 Go to the latest move
  const goToLatest = () => {
    setCurrentMoveIndex(fenHistory.length - 1);
    setPosition(fenHistory[fenHistory.length - 1]);
  };
  console.log("🛠 MoveNavigation rendered", currentMoveIndex, fenHistory.length);
  return (
    <div className="move-navigation">
      <button onClick={goToStart} disabled={currentMoveIndex === 0}>⏮️ Start</button>
      <button onClick={prevMove} disabled={currentMoveIndex === 0}>⬅️ Prev</button>
      <button onClick={nextMove} disabled={currentMoveIndex >= (fenHistory.length - 1)}>➡️ Next</button>
      <button onClick={goToLatest} disabled={currentMoveIndex === (fenHistory.length - 1)}>⏭️ Latest</button>
    </div>
  );
};

export default MoveNavigation;

MoveNavigation.defaultProps = {
    fenHistory: [],
};

MoveNavigation.propTypes = {
    gameRef: PropTypes.object.isRequired,
    setPosition: PropTypes.func.isRequired,
    currentMoveIndex: PropTypes.number.isRequired,
    setCurrentMoveIndex: PropTypes.func.isRequired,
    fenHistory: PropTypes.array.isRequired,
};

