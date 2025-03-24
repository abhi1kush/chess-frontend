// src/components/TopBar.js
import React from 'react';
import '../styles/topContainer.css';
import PropTypes from 'prop-types';

const TopBar = ({ resetGame, flipBoard, isFlipped, enterAnalysisMode, isAnalysis, onLoadPGN, downloadPGN }) => {
  // const [showPGNInput, setShowPGNInput] = useState(false);
  // const [pgnText, setPgnText] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const pgnData = e.target.result;
        onLoadPGN(pgnData);
      };
      reader.readAsText(file);
    }
  };

  // const handlePastePGN = () => {
  //   onLoadPGN(pgnText);
  //   setShowPGNInput(false);
  //   setPgnText('');
  // };

  return (
    <div className="top-bar">
      {!isAnalysis && (
        <button onClick={resetGame} className="action-button">
          Reset Board
        </button>
      )}
      <button onClick={flipBoard} className="action-button">
        {isFlipped ? 'Unflip Board' : 'Flip Board'}
      </button>
      <button onClick={enterAnalysisMode} className="action-button">
        Enter Analysis Mode
      </button>
      {isAnalysis && (
        <label className="action-button upload-btn">
          Upload PGN
          <input type="file" accept=".pgn" onChange={handleFileUpload} hidden />
        </label>
      )}
      {!isAnalysis && downloadPGN && (
        <button onClick={downloadPGN} className="action-button">
          Download PGN
        </button>
      )}
    </div>
  );
};

TopBar.defaultProps = {
  isAnalysis: false,
};

TopBar.propTypes = {
  resetGame: PropTypes.func.isRequired,
  flipBoard: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  enterAnalysisMode: PropTypes.func.isRequired,
  isAnalysis: PropTypes.bool,
  onLoadPGN: PropTypes.func,
  downloadPGN: PropTypes.func,
};

export default TopBar;