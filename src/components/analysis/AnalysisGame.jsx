import React, { useState, useEffect, useCallback, useRef } from "react";
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
import {onMessage} from "../../utils/onMessage";
import { useStockfishContext } from "../../context/StockfishContext";
import EngineEnabledListener from "./EngineEnabledListener"

const AnalysisGame = () => {
  const { fens, fromToSquares, moves, blackPlayerName, whitePlayerName} = useSelector((state) => state.pgn);
  const { currentMoveIndex} = useSelector((state) => state.analysis);
  const { result} = useSelector((state) => state.pgn);
  const [position, setPosition] = useState(CONFIG.START_FEN);
  const positionRef = useRef(position); 
  const { isFlipped, theme } = useSelector((state) => state.settings);
  const [evalScore, setEvalScore] = useState(0);
  const [bestLine, setBestLine] = useState("");
  const enabledChessEngine = useSelector(state => state.engine.enabled);

  const stockfishOptions = [
    { name: 'Threads', value: 1 },
    { name: 'Hash', value: 16 },
    { name: 'MultiPV', value: 1 },
  ];
  const { initEngine, setOptions, startSearch, stopSearch, setOnMessage, syncEnabledState} = useStockfishContext();
  const handleEngineMessage = useCallback((data) => {
    onMessage(data, setEvalScore, setBestLine, positionRef.current);
  }, []);

    // Permission sync
    useEffect(() => {
      syncEnabledState(enabledChessEngine);
    }, [enabledChessEngine, syncEnabledState]);

    // ✅ New: Keep positionRef up-to-date
    useEffect(() => {
      positionRef.current = position;
    }, [position]);

  const setupEngine = () => {
    initEngine();
    setOptions(stockfishOptions);
    setOnMessage(handleEngineMessage);
  };

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
      setupEngine();
      setPosition(game.fen());
      stopSearch("handleMove");
      startSearch(game.fen());
    } catch (error) {
      console.error(error);
    }
  }, [position]);

  const navigateMove = useCallback(() => {
    stopSearch("navigateMove");
    startSearch(positionRef.current);
  }, []);

  return (
    <div>
      <EngineEnabledListener fen={position} />
      <AnalysisTopContainer/>
      <div className='middle-container'>
        <div className='left-menu-bar'>          
          <p style={{ color: "black", marginTop: "0.5rem" }}>Eval: {evalScore}</p>
          <p style={{ color: "black", marginTop: "0.5rem" }}>Best Line: {bestLine}</p>
        </div>
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
          <MoveNavigation 
            setPosition={setPosition}
            handleMove={navigateMove}
            />
         </div>
         </div>
      </div>
    </div>
  );
};

export default AnalysisGame;
