import React, { useEffect } from "react";
import { Chess } from "chess.js";
import "../styles/components/moveNavigation.css";
import PropTypes from "prop-types";

const MoveNavigation = ({
  isReplaying,
  setIsReplaying,
  replayGameRef,
  replayMoveIndex,
  setReplayMoveIndex,
  moveHistory,
  setReplayPosition
}) => {
  
  // ✅ Sync replay board position when replayMoveIndex changes
  useEffect(() => {
    if (!isReplaying || replayMoveIndex < 0 || replayMoveIndex > moveHistory.length) return;

    const newReplayGame = new Chess();
    moveHistory.slice(0, replayMoveIndex).forEach((move) => newReplayGame.move(move));
    setReplayPosition(newReplayGame.fen()); // Update board position in replay mode
    replayGameRef.current = newReplayGame;
  }, [isReplaying, replayMoveIndex, moveHistory, setReplayPosition]);

  // 🔄 Move to the first move in history
  const goToStart = () => {
    setIsReplaying(true);
    setReplayMoveIndex(0);
  };

  // ⏪ Step back one move
  const prevMove = () => {
    if (replayMoveIndex > 0) {
      setIsReplaying(true);
      setReplayMoveIndex((prev) => prev - 1);
    }
  };

  // ⏩ Step forward one move
  const nextMove = () => {
    if (replayMoveIndex < moveHistory.length) {
      setIsReplaying(true);
      setReplayMoveIndex((prev) => prev + 1);
    }
  };

  // 🔚 Exit replay mode and go to the latest position
  const goToLatest = () => {
    setIsReplaying(false);
    setReplayMoveIndex(moveHistory.length);
  };

  return (
    <div className="move-navigation">
      <button onClick={goToStart} disabled={replayMoveIndex === 0}>⏮️ Start</button>
      <button onClick={prevMove} disabled={replayMoveIndex === 0}>⬅️ Prev</button>
      <button onClick={nextMove} disabled={replayMoveIndex >= moveHistory.length}>➡️ Next</button>
      <button onClick={goToLatest} disabled={!isReplaying}>⏭️ Latest</button>
    </div>
  );
};

export default MoveNavigation;


MoveNavigation.propTypes = { 
    isReplaying: PropTypes.bool.isRequired,
    setIsReplaying: PropTypes.func.isRequired,
    replayGameRef: PropTypes.object.isRequired,
    replayMoveIndex: PropTypes.number.isRequired,
    setReplayMoveIndex: PropTypes.func.isRequired,
    moveHistory: PropTypes.array.isRequired,
    setReplayPosition: PropTypes.func.isRequired
};

