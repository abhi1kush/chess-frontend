import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Chess } from "chess.js";
import { flipBoard, setTheme, setSound } from '../redux/actions/gameActions';
import TopContainer from "./TopContainer";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "./ChessboardComponent";

const AnalysisGame = ({ onExitAnalysis }) => {
  const analysisGameRef = useRef(new Chess());
  const [position, setPosition] = useState(analysisGameRef.current.fen());
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0); 
  const dispatch = useDispatch();
  const { isFlipped, theme, enableSound } = useSelector((state) => state.settings);
  const fenHistory = analysisGameRef.current.history({ verbose: true });
  
  return (
     <div className="main-container">
     <h2>Analysis Mode</h2>
          <TopContainer
            flipBoard={dispatch(flipBoard())}
            isFlipped={isFlipped}
            theme={theme}
            setTheme={setTheme}
            onExitAnalysis={onExitAnalysis}
            isAnalysis={true}
          />
          <div className="middle-container">
            <div className={`analysis-container ${theme}-theme`}>
                <ChessboardComponent
                  position={position}
                  isFlipped={isFlipped}
                  isAnalysis={true}
                />
              <MoveNavigation 
                fenHistory={fenHistory}
                currentMoveIndex={currentMoveIndex}  
                setCurrentMoveIndex={setCurrentMoveIndex} 
                setPosition={setPosition}
              />
            </div>
          </div>
          <div className="bottumContainer"><button onClick={onExitAnalysis}>Exit Analysis Mode</button></div>
        </div>
  );
};

export default AnalysisGame;
