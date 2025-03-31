import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "./ChessboardComponent";
import CONFIG from "../config";
import AnalysisMoveHistory from "./AnalysisMoveHistory";

const AnalysisGame = () => {
  const { fens, moves } = useSelector((state) => state.pgn);
  const { currentMoveIndex } = useSelector((state) => state.analysis);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const { isFlipped, theme } = useSelector((state) => state.settings);

  useEffect(() => {
    if (fens && fens.length > 0) {
      setPosition(fens[currentMoveIndex]);
    }
  }, [currentMoveIndex, fens]);

  return (
     <div className="main-container">
          <AnalysisTopContainer/> 
          <div className="middle-container">
            <div className={`chess-container ${theme}-theme`}>
            <div className="left-panel">
            </div>
                <div className="centre-area">
                <ChessboardComponent
                  className={'analysis-board'}
                  fen={position}
                  isFlipped={isFlipped}
                  handleMove={() => {}}
                />
                </div>
                <div className="right-panel">
                  <AnalysisMoveHistory moveHistory={moves} />
                  <MoveNavigation 
                  setPosition={setPosition}
                />
            </div>
            </div>
          </div>
        </div>
  );
};

export default AnalysisGame;
