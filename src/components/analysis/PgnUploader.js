import React from 'react';
import PropTypes from 'prop-types';
import { Chess } from 'chess.js';
import { useDispatch } from 'react-redux';
import {loadPgn} from '../../redux/actions/analysisActions'
import CONFIG from '../../config';

// Pure function to read file content
const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

const PgnUploader = ({ onLoadPGN }) => {
  const dispatch = useDispatch()
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      readFileContent(file)
        .then((pgnData) => {
          try {
            const chess = new Chess();
            chess.loadPgn(pgnData);
            const moves = chess.history();
            const fens = [CONFIG.START_FEN]; // Initialize with starting FEN

            // Generate FENs for each move
            chess.reset(); // Reset to starting position
            moves.forEach((move) => {
              chess.move(move);
              fens.push(chess.fen());
            });

            dispatch(loadPgn(fens[fens.length - 1], moves, fens))
          } catch (error) {
            console.error('Error parsing PGN:', error);
          }

        })
        .catch((error) => {
          console.error('Error reading PGN file:', error);
        });
    }
  };
  return (
    <label className="action-button upload-btn">
      Upload PGN
      <input type="file" accept=".pgn" onChange={handleFileUpload} hidden />
    </label>
  );
};

PgnUploader.propTypes = {
  onLoadPGN: PropTypes.func.isRequired,
};

export default PgnUploader;