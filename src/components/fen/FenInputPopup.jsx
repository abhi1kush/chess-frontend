import React, { useState } from "react";
import "../../styles/components/FenInputPopup.css";

const FenInputPopup = React.memo(({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fen, setFen] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFen("");
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("fen-popup-overlay")) {
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fen);
    handleClose();
  };
  console.log("^ render fenInputPopup");
  return (
    <>
      <button className="action-button" onClick={handleOpen}>Set FEN</button>
      {isOpen && (
        <div className="fen-popup-overlay" onClick={handleOverlayClick}>
          <div className="fen-popup">
            <h5>Setup board from FEN </h5>
            <button className="fen-close" onClick={handleClose}>&times;</button>
            <form onSubmit={handleSubmit} className="fen-input-form">
              <input
                type="text"
                value={fen}
                onChange={(e) => setFen(e.target.value)}
                placeholder="Enter FEN"
                className="fen-input"
              />
              <div className="fen-actions">
                <button type="submit" className="fen-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
});

export default FenInputPopup;
