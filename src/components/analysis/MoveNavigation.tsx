import React from "react";
import "../../styles/components/moveNavigation.css";
import { playMoveSound, playBoardSetupSound } from "../../utils/soundUtils";

interface MoveNavigationProps {
  onNavigatePrev: () => void;
  onNavigateNext: () => void;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
  onGoStart: () => void;
  onGoLatest: () => void;
  goStartDisabled: boolean;
  goLatestDisabled: boolean;
}

const MoveNavigation = ({
  onNavigatePrev,
  onNavigateNext,
  canNavigatePrev,
  canNavigateNext,
  onGoStart,
  onGoLatest,
  goStartDisabled,
  goLatestDisabled,
}: MoveNavigationProps) => {
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
