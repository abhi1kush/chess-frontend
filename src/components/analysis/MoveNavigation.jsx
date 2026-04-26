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
    <div className="move-navigation rounded-xl">
      <button className="move-nav-icon-btn" onClick={goToStart} disabled={goStartDisabled} title="Start" aria-label="Start">
        <span aria-hidden>⏮</span>
      </button>
      <button className="move-nav-icon-btn" onClick={prevMove} disabled={!canNavigatePrev} title="Previous" aria-label="Previous">
        <span aria-hidden>◀</span>
      </button>
      <button className="move-nav-icon-btn move-nav-icon-btn--primary" onClick={nextMove} disabled={!canNavigateNext} title="Next" aria-label="Next">
        <span aria-hidden>▶</span>
      </button>
      <button className="move-nav-icon-btn" onClick={goToLatest} disabled={goLatestDisabled} title="Latest" aria-label="Latest">
        <span aria-hidden>⏭</span>
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
