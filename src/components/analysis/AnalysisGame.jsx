import React, { useState, useEffect, useCallback, useRef } from "react";
import useStockfish from "../../hooks/useStockfish";
import { Chess } from "chess.js";
import {useSelector} from 'react-redux';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import CONFIG from "../../config";
import Moves from "./Moves";
import '../../styles/global.css';
import AnalysisBoard from "./AnalysisBoard";
import EvalBar from "./EvalBar";
import '../../styles/components/AnalysisLayout.css';

const AnalysisGame = () => {
  const { fens, fromToSquares, moves, blackPlayerName, whitePlayerName} = useSelector((state) => state.pgn);
  const { currentMoveIndex} = useSelector((state) => state.analysis);
  const { result} = useSelector((state) => state.pgn);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const { isFlipped, theme } = useSelector((state) => state.settings);
  const [evalScore, setEvalScore] = useState(0);
  const latestScoreRef = useRef(null);

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

  const { sendCommand } = useStockfish((data) => {
    if (typeof data === "string") {
      if (data.startsWith("info") && data.includes("score")) {
        const match = data.match(/score (cp|mate) (-?\d+)/);
        if (match) {
          const type = match[1];
          const value = parseInt(match[2], 10);
          const displayValue = type === "cp" ? value / 100 : (value > 0 ? 10 : -10); // limit mate scores
          latestScoreRef.current = displayValue;
        }
      }
      if (data.startsWith("bestmove")) {
        setEvalScore(latestScoreRef.current ?? 0);
      }
    }
  });

  useEffect(() => {
    if (position) {
      latestScoreRef.current = 0;
      sendCommand("uci");
      sendCommand(`position fen ${position}`);
      sendCommand("go depth 12");
    }
  }, [position, sendCommand]);

  return (
    <div>
      <AnalysisTopContainer/>
      <div className='middle-container'>
        <div className='left-menu-bar'>          <p style={{ color: "black", marginTop: "0.5rem" }}>Eval: {evalScore}</p></div>
        <div className={`analysis-container ${theme}-theme `}>
          <div className="main-area">
          <div className="top-name">              
            <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "white-player-name" : "black-player-name"}`}>{isFlipped ? whitePlayerName : blackPlayerName}</div>
            </div>
          </div>
          <div className='evalbar-board-container'>
              <EvalBar
                isFlipped={isFlipped}
                evalScore={evalScore}
              />
            <div className="board-wrapper">
                  <AnalysisBoard
                  className={'board'}
                  fen={position}
                  isFlipped={isFlipped}
                  lastMove={currentMoveIndex > 0 && currentMoveIndex < fens.length - 1  && fromToSquares ? fromToSquares[currentMoveIndex - 1]: null}
                  handleMove={handleMove}
                  isFinalMove={currentMoveIndex === fens.length - 1}
                  result={result}
                />
            </div>
          </div>
          <div className="bottom-name">
            <div className="player-names-wrapper">
                  <div className={`player-name ${isFlipped ? "black-player-name" : "white-player-name"}`}>{isFlipped ? blackPlayerName : whitePlayerName}</div>
            </div>
          </div>
          </div>
         <div className="sidebar right-panel">
          <Moves moves={moves} />
          <MoveNavigation setPosition={setPosition}/>
         </div>
         </div>
      </div>
    </div>
  );
};

export default AnalysisGame;
