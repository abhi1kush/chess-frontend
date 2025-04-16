import React, { useState, useCallback } from "react";
import { Chess } from "chess.js";
import {useSelector} from 'react-redux';
import CONFIG from "../../config";
import '../../styles/global.css';
import '../../styles/pageLayout.css';
import ChessboardComponent from "../common/ChessboardComponent"
import FenInputBox from "./FenInputBox";
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';
import FlipButton from '../common/buttons/FlipButton';
import '../../styles/components/topContainer.css';
 
const FenViewer = () => {
  const [fen, setFen] = useState(CONFIG.START_FEN);
  const { isFlipped, theme } = useSelector((state) => state.settings);

  const handleMove = useCallback(({ from, to }) => {
    const game = new Chess(fen);
    try {
      const move = game.move({from, to, promotion: 'q'});
      if (!move) return;
      setFen(game.fen());
    } catch (error) {
      console.error(error);
    }
  }, [fen]);

  const onFenSubmit = (fen) => {
    setFen(fen);
  }

  return (
    <div className="main-container">
      <div className="top-container"> 
        <nav className="top-bar">
            <FlipButton/>
            <Settings />
            <DarkThemeToggle/>
        </nav>
      </div>
      <div className="middle-container">
        <div className="left-menu-bar"></div>
        <div className={`chess-container ${theme}-theme`}>
          <div className="left-panel">
          </div>
          <div className="centre-area">
            <FenInputBox
            currentFen={fen}
            onFenSubmit={onFenSubmit}
            />
            <ChessboardComponent
              className={'chess-board'}
              fen={fen}
              handleMove={handleMove}
              //lastMove={lastMove}
              isFlipped={isFlipped}
            />
          </div>
          <div className="right-panel">
          </div>
        </div>
      </div>
    </div>);
};

export default FenViewer;
