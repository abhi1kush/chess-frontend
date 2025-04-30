import React from 'react';
import "../../styles/components/FenDisplayBox.css";
import { useFEN } from '../../services/fen/useFEN';
import ToolTipWrapper from '../common/buttons/ToolTipWrapper';

const FenDisplayBox = React.memo(({ isValid, fenErrorMsg}) => {
  const fen = useFEN();
  const handleCopy = () => {
    navigator.clipboard.writeText(fen);
    alert("FEN copied to clipboard!");
  };
  return (
    <div className="fen-container">
      <div id="fen-display" className="fen-display">
        {fen}
      </div>
      {isValid ? <div className="circle-tick">✔</div> : <ToolTipWrapper component={<div className="circle-cross">✖</div>} message={fenErrorMsg}/>}
      <button onClick={handleCopy} className="copy-button">
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="14" height="14" rx="2" ry="2" fill="#f5f5f5" stroke="#333333"/>
            <rect x="7" y="7" width="14" height="14" rx="2" ry="2" fill="#ffffff" stroke="#333333"/>
        </svg>
      </button>
    </div>
  );
});

export default FenDisplayBox;