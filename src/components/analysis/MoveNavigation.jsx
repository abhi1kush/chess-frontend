import React from "react";
import "../../styles/components/moveNavigation.css";
import PropTypes from "prop-types";
import { playMoveSound, playBoardSetupSound } from "../../utils/soundUtils";

const MoveNavigation = ({
  onNavigatePrev,
  onNavigateNext,
  canNavigatePrev,
  canNavigateNext,
  onGoStart,
  onGoLatest,
  goStartDisabled,
  goLatestDisabled,
}) => {
  const goToStart = () => {
    playBoardSetupSound();
    onGoStart();
  };

  const prevMove = () => {
    if (!canNavigatePrev) return;
    playMoveSound("move");
    onNavigatePrev();
  };

  const nextMove = () => {
    if (!canNavigateNext) return;
    playMoveSound("move");
    onNavigateNext();
  };

  const goToLatest = () => {
    playBoardSetupSound();
    onGoLatest();
  };

  return (
    <div className="move-navigation">
      <button onClick={goToStart} disabled={goStartDisabled}>
        <span role="img" aria-label="go to start">
          ⏮️
        </span>{" "}
        Start
      </button>
      <button onClick={prevMove} disabled={!canNavigatePrev}>
        <span role="img" aria-label="previous">
          ⬅️
        </span>{" "}
        Prev
      </button>
      <button onClick={nextMove} disabled={!canNavigateNext}>
        <span role="img" aria-label="next">
          ➡️
        </span>{" "}
        Next
      </button>
      <button onClick={goToLatest} disabled={goLatestDisabled}>
        <span role="img" aria-label="last">
          ⏭️
        </span>{" "}
        Latest
      </button>
    </div>
  );
};

export default MoveNavigation;

MoveNavigation.propTypes = {
  onNavigatePrev: PropTypes.func.isRequired,
  onNavigateNext: PropTypes.func.isRequired,
  canNavigatePrev: PropTypes.bool.isRequired,
  canNavigateNext: PropTypes.bool.isRequired,
  onGoStart: PropTypes.func.isRequired,
  onGoLatest: PropTypes.func.isRequired,
  goStartDisabled: PropTypes.bool.isRequired,
  goLatestDisabled: PropTypes.bool.isRequired,
};
