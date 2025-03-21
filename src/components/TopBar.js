import React,{ useState } from "react";
import "../styles/topContainer.css"; // Add styles for the top bar
import Settings from "./Settings";
import PropTypes from "prop-types";

const TopBar = (props) => {
  const [showPGNInput, setShowPGNInput] = useState(false);
  const [pgnText, setPgnText] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const pgnData = e.target.result;
            props.onLoadPGN(pgnData); // 📌 Pass PGN data to AnalysisGame.js
        };
        reader.readAsText(file);
    }
  };

const handlePastePGN = () => {
    props.onLoadPGN(pgnText); // 📌 Load pasted PGN text
    setShowPGNInput(false);
    setPgnText("");
};
  return (
        <div className="top-bar">
            {!props.isAnalysis && <button onClick={props.resetGame} className="action-button">Reset Board</button>}
            <button onClick={props.flipBoard}className="action-button">{props.isFlipped ? "Unflip Board" : "Flip Board"}</button>
            <button onClick={props.enterAnalysisMode} className="action-button">Enter Analysis Mode</button>
            {props.isAnalysis && <label className="action-button upload-btn">
                Upload PGN
                <input type="file" accept=".pgn" onChange={handleFileUpload} hidden />
            </label>}
            {!props.isAnalysis && <button onClick={props.downloadPGN} className="action-button">Download PGN</button>}
        </div>
  );
};

export default TopBar;

TopBar.defaultProps = {
  isAnalysis: false,
};

TopBar.propTypes = {
  resetGame: PropTypes.func.isRequired,
  flipBoard: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isAnalysis: PropTypes.bool,
}