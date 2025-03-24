import React from "react";
import "../styles/components/moveNavigation.css";
import PropTypes from "prop-types";;

const MoveNavigation = ({ fenHistory, currentMoveIndex, setCurrentMoveIndex, setPosition }) => {
  // ⏮️ Move to the first move
  const goToStart = () => {
    setCurrentMoveIndex(0);
    setPosition(fenHistory[0]);
  };

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
  return (
    <div className="move-navigation">
      <button onClick={goToStart} disabled={currentMoveIndex === 0}><span role="img" aria-label="gotostart">⏮️</span> Start</button>
      <button onClick={prevMove} disabled={currentMoveIndex === 0}><span role="img" aria-label="previous">⬅️</span> Prev</button>
      <button onClick={nextMove} disabled={currentMoveIndex >= (fenHistory.length - 1)}><span role="img" aria-label="next">➡️</span> Next</button>
      <button onClick={goToLatest} disabled={currentMoveIndex === (fenHistory.length - 1)}><span role="img" aria-label="last">⏭️</span> Latest</button>
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

