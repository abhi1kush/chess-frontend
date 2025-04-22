import { Chess } from "chess.js"
import React, { useEffect, useState } from "react";
import "../../styles/components/FenInputBox.css";

const FenInputBox = ({ currentFen, onFenSubmit }) => {
  const [fen, setFen] = useState(currentFen);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setFen(currentFen);
  }, [currentFen]);

  const handleInputChange = (e) => {
    const chess = new Chess();
    const valid = chess.load(fen);
    setIsValid(valid);
    if (!valid) return;
    console.log('Valid FEN:', fen);
    setFen(e.target.value);
    setIsValid(null); // reset status on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFenSubmit) {
      onFenSubmit(fen);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fen-container">
      <label htmlFor="fen-input" className="fen-label">
        FEN:
      </label>
      <input
        type="text"
        id="fen-input"
        value={fen}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="fen-input"
        placeholder="Enter FEN string here"
      />
      {isValid ? <div className="circle-tick">✔</div>:<div className="circle-cross">✖</div>}
      <button className="fen-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FenInputBox;
