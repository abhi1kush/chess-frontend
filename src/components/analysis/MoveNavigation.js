import React from "react";
import "../../styles/components/moveNavigation.css";
import PropTypes from "prop-types";import { useDispatch, useSelector } from "react-redux";
import { startPos, prev, next, finalPosition } from "../../redux/actions/analysisActions";
import { playMoveSound, playBoardSetupSound} from "../../utils/soundUtils"

const MoveNavigation = ({setPosition}) => {
  const {fens} = useSelector((state) => state.pgn);
  const {currentMoveIndex} = useSelector((state) => state.analysis);
  const dispatch = useDispatch();

  const goToStart = () => {
    playBoardSetupSound();
    dispatch(startPos());
    setPosition(fens[0]);
  };

  const prevMove = () => {
    if (currentMoveIndex > 0) {
      playMoveSound("move");
        dispatch(prev());
        setPosition(fens[currentMoveIndex - 1]);
      };
  }

  const nextMove = () => {
    if (currentMoveIndex < fens.length - 1) {
      playMoveSound("move");
      dispatch(next());
      setPosition(fens[currentMoveIndex + 1]);
    }
  };

  const goToLatest = () => {
    playBoardSetupSound();
    dispatch(finalPosition());
    setPosition(fens[fens.length - 1]);
  };

  return (
    <div className="move-navigation">
      <button onClick={goToStart} disabled={currentMoveIndex === 0}><span role="img" aria-label="gotostart">⏮️</span> Start</button>
      <button onClick={prevMove} disabled={currentMoveIndex === 0}><span role="img" aria-label="previous">⬅️</span> Prev</button>
      <button onClick={nextMove} disabled={currentMoveIndex >= (fens.length - 1)}><span role="img" aria-label="next">➡️</span> Next</button>
      <button onClick={goToLatest} disabled={currentMoveIndex === (fens.length - 1)}><span role="img" aria-label="last">⏭️</span> Latest</button>
    </div>
  );
};

export default MoveNavigation;

MoveNavigation.propTypes = {
    setPosition: PropTypes.func.isRequired
};

