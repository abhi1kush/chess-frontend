import React, { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import TopContainer from "./TopContainer";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "./ChessboardComponent";
import MoveHistory from "./MoveHistory";
import { useConfig } from "../context/configContext";


const AnalysisGame = ({ onExitAnalysis }) => {
  const analysisGameRef = useRef(new Chess());
  const [position, setPosition] = useState(analysisGameRef.current.fen());
  const [moveHistory, setMoveHistory]= useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [fenHistory, setFenHistory] = useState([analysisGameRef.current.fen()]);
  const { theme, setTheme, enableSound, setEnableSound , timerDuration, setTimerDuration, isFlipped, setIsFlipped} = useConfig();
  const hasLoaded = useRef(false); 

    useEffect(() => {
      setCurrentMoveIndex(moveHistory.length);
    }, [moveHistory.length]);

  console.log(`🎯 AnalysisGame rendered`);
  return (
     <div className="main-container">
     <h2>Analysis Mode</h2>
          <TopContainer
            flipBoard={() => setIsFlipped((prev) => !prev)}
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
