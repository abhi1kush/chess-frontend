import React, { useEffect, useState } from "react";
import "../../styles/components/FenInputBox.css";

const FenInputBox = ({ currentFen, onFenSubmit }) => {
  const [fen, setFen] = useState(currentFen);

  useEffect(() => {
    setFen(currentFen);
  }, [currentFen]);

  const handleInputChange = (e) => {
    setFen(e.target.value);
  };

  const handleSubmit = () => {
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
      <button className="fen-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FenInputBox;
