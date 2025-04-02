import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "../common/ChessboardComponent";
import CONFIG from "../../config";
import Moves from "./Moves";
import '../../styles/global.css';

const AnalysisGame = () => {
  const { fens, fromToSquares, moves, blackPlayerName, whitePlayerName} = useSelector((state) => state.pgn);
  const { currentMoveIndex} = useSelector((state) => state.analysis);
  const { result} = useSelector((state) => state.pgn);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const { isFlipped, theme } = useSelector((state) => state.settings);

  useEffect(() => {
    if (fens && fens.length > 0) {
      setPosition(fens[currentMoveIndex]);
    }
  }, [currentMoveIndex, fens, fromToSquares]);
  return (
     <div className="main-container">
          <AnalysisTopContainer/> 
          <div className="middle-container">
            <div className={`chess-container ${theme}-theme`}>
              <div className="left-panel">
              </div>
              <div className="centre-area">
                <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "white-player-name" : "black-player-name"}`}>{isFlipped ? whitePlayerName : blackPlayerName}</div>
                </div>
                <ChessboardComponent
                  className={'analysis-board'}
                  fen={position}
                  isFlipped={isFlipped}
                  lastMove={currentMoveIndex > 0 && currentMoveIndex < fens.length - 1 ? fromToSquares[currentMoveIndex - 1]: null}
                  handleMove={() => {}}
                  isFinalMove={currentMoveIndex === fens.length - 1}
                  result={result}
                />
                <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "black-player-name" : "white-player-name"}`}>{isFlipped ? blackPlayerName : whitePlayerName}</div>
                </div>
              </div>
              <div className="right-panel">
                <Moves moves={moves} />
                <MoveNavigation setPosition={setPosition}/>
              </div>
            </div>
          </div>
        </div>
  );
};

export default AnalysisGame;
