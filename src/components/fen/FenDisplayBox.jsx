import React, {useState} from "react";
import "../../styles/components/FenDisplayBox.css";
import { IsValidFen } from "../../services/fen/fen_validation";

const FenDisplayBox = ({ currentFen }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(currentFen);
    alert("FEN copied to clipboard!");
  };

  const {isValid, reason } = currentFen != ""? IsValidFen(currentFen): {isValid: false, msg:""};
  console.log("currentFen", currentFen, isValid);
  return (
    <div className="fen-container">
      <div id="fen-display" className="fen-display">
        {currentFen}
      </div>
      {isValid ? <div className="circle-tick">✔</div>:<div className="circle-cross">✖</div>}
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
};

export default FenDisplayBox;