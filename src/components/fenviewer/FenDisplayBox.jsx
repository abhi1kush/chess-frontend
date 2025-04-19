import React, {useState} from "react";
import "../../styles/components/FenDisplayBox.css";
import "../../styles/components/FenInputBox.css"

const FenDisplayBox = ({ currentFen }) => {
  const [isValid, setIsValid] = useState(true);
  const handleCopy = () => {
    navigator.clipboard.writeText(currentFen);
    alert("FEN copied to clipboard!");
  };

  return (
    <div className="fen-container">
      <div id="fen-display" className="fen-display">
        {currentFen}
      </div>
      {isValid ? <div className="circle-tick">✔</div>:<div className="circle-cross">✖</div>}
      <button onClick={handleCopy} className="copy-button">
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="28" viewBox="0 0 24 28"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="14" height="20" rx="2" ry="2" fill="#f5f5f5" stroke="#333333"/>
            <rect x="7" y="7" width="14" height="20" rx="2" ry="2" fill="#ffffff" stroke="#333333"/>
        </svg>
      </button>
    </div>
  );
};

export default FenDisplayBox;