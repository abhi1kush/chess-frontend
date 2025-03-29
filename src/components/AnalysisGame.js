import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Chess } from "chess.js";
import { flipBoard, setTheme, setSound } from '../redux/actions/gameActions';
import AnalysisTopContainer from "./AnalysisTopContainer";
import MoveNavigation from "./MoveNavigation";
import ChessboardComponent from "./ChessboardComponent";

const AnalysisGame = () => {
  const analysisGameRef = useRef(new Chess());
  const [position, setPosition] = useState(analysisGameRef.current.fen());
  const dispatch = useDispatch();
  const { isFlipped, theme, enableSound } = useSelector((state) => state.settings);
  
  return (
     <div className="main-container">
     <h2>Analysis Mode</h2>
          <AnalysisTopContainer/> 
          { <div className="middle-container">
            <div className={`analysis-container ${theme}-theme`}>
                <ChessboardComponent
                  className={'analysis-board'}
                  position={position}
                  isFlipped={isFlipped}
                />
              <MoveNavigation 
                setPosition={setPosition}
              />
            </div>
          </div> }
          <div className="bottumContainer"></div>
        </div>
  );
};

export default AnalysisGame;
