import React, { useState, useEffect, useCallback } from "react";
import { Chess } from "chess.js";
import {useSelector} from 'react-redux';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import CONFIG from "../../config";
import Moves from "./Moves";
import '../../styles/global.css';
import AnalysisBoard from "./AnalysisBoard";
import EvalBar from "./EvalBar";

const AnalysisGame = () => {
  const { fens, fromToSquares, moves, blackPlayerName, whitePlayerName} = useSelector((state) => state.pgn);
  const { currentMoveIndex} = useSelector((state) => state.analysis);
  const { result} = useSelector((state) => state.pgn);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const { isFlipped, theme } = useSelector((state) => state.settings);
  const [blackEvalBarHeight, setBlackEvalBarHeight] = useState(50);

  useEffect(() => {
    if (fens && fens.length > 0) {
      setPosition(fens[currentMoveIndex]);
    }
    // setBlackEvalBarHeight(Math. random() * (100 - 1) + 1);
  }, [currentMoveIndex, fens, fromToSquares]);

  const handleMove = useCallback(({ from, to }) => {
    console.log("handleMove", from, to);
    const game = new Chess(position);
    try {
      const move = game.move({from, to, promotion: 'q'});
      if (!move) return;
      setPosition(game.fen());
    } catch (error) {
      console.error(error);
    }
  }, [position]);

  return (
     <div className="main-container">
          <AnalysisTopContainer/> 
          <div className="middle-container">
            <div className={`chess-container ${theme}-theme`}>
              <div className="left-panel">
                <EvalBar
                isFlipped={isFlipped}
                blackHeight={blackEvalBarHeight}
                setBlackHeight={setBlackEvalBarHeight} 
                />
              </div>
              <div className="centre-area">
                <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "white-player-name" : "black-player-name"}`}>{isFlipped ? whitePlayerName : blackPlayerName}</div>
                </div>
                <AnalysisBoard
                  className={'analysis-board'}
                  fen={position}
                  isFlipped={isFlipped}
                  lastMove={currentMoveIndex > 0 && currentMoveIndex < fens.length - 1  && fromToSquares ? fromToSquares[currentMoveIndex - 1]: null}
                  handleMove={handleMove}
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
