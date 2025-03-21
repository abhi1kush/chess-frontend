import React, { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "./ChessboardComponent";

const AnalysisGame = ({ onExitAnalysis }) => {
  const analysisGameRef = useRef(new Chess());
  const [moveHistory, setMoveHistory] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);

  // Load game state from localStorage
  useEffect(() => {
    const savedGame = JSON.parse(localStorage.getItem("gameState"));
    if (savedGame) {
      analysisGameRef.current.load(savedGame.fen);
      setMoveHistory(savedGame.moveHistory);
      setCurrentMoveIndex(savedGame.moveHistory.length);
    }
  }, []);

  // Function to navigate through moves
  const goToMove = (index) => {
    analysisGameRef.current = new Chess();
    moveHistory.slice(0, index).forEach((move) => analysisGameRef.current.move(move));
    setCurrentMoveIndex(index);
  };

  return (
    <div className="analysis-container">
      <h2>Analysis Mode</h2>
      <ChessboardComponent position={analysisGameRef.current.fen()} />
      
      <MoveNavigation 
        moveHistory={moveHistory} 
        currentMoveIndex={currentMoveIndex} 
        setCurrentMoveIndex={setCurrentMoveIndex} 
        analysisGameRef={analysisGameRef} 
      />

      <button onClick={onExitAnalysis}>Exit Analysis Mode</button>
    </div>
  );
};

export default AnalysisGame;
