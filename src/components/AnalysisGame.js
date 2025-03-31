import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Chess } from "chess.js";
import { flipBoard, setTheme, setSound } from '../redux/actions/gameActions';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "./ChessboardComponent";
import CONFIG from "../config";
import AnalysisMoveHistory from "./AnalysisMoveHistory";

const AnalysisGame = () => {
  const { fens, moves } = useSelector((state) => state.pgn);
  const { currentMoveIndex } = useSelector((state) => state.analysis);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const { isFlipped, theme, enableSound } = useSelector((state) => state.settings);
  
  const handleMove = ({ from, to }) => {
    console.log("handleMove in analyis")
  };

  useEffect(() => {
    if (fens && fens.length > 0) {
      console.log("Setting Position to", currentMoveIndex, fens[currentMoveIndex])
      setPosition(fens[currentMoveIndex]);
    }
  }, [currentMoveIndex, fens]);

  return (
     <div className="main-container">
     <h2>Analysis Mode</h2>
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
                  handleMove={handleMove}
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
          <div className="bottumContainer"></div>
        </div>
  );
};

export default AnalysisGame;
