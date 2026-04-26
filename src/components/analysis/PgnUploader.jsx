import React from 'react';
import PropTypes from 'prop-types';
import { Chess } from 'chess.js';
import { useDispatch } from 'react-redux';
import {loadPgn} from '../../redux/actions/analysisActions'

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

const PgnUploader = () => {
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
            const fens = [];
            const termination = chess.header().Termination
            const blackPlayerName = chess.header().Black || '-'; // Default value
            const whitePlayerName = chess.header().White || '-';
            const Result = chess.header().Result;
            const fromToSquares = [];

            chess.reset(); 
            fens.push(chess.fen());
            moves.forEach((move) => {
              const moveDetails = chess.move(move);
              fromToSquares.push({from: moveDetails.from, to: moveDetails.to});
              fens.push(chess.fen());
            });

            dispatch(loadPgn({
              finalPos: fens[fens.length - 1], 
              moves: moves, 
              fens: fens, 
              fromToSquares: fromToSquares,
              termination: termination,
              result: Result,
              blackPlayerName: blackPlayerName,
              whitePlayerName: whitePlayerName,
            }))
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
    <label className="top-icon-button top-icon-button--with-tooltip" data-tooltip="Upload PGN" aria-label="Upload PGN">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11.47 3.22a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06l-2.47-2.47v7.69a.75.75 0 0 1-1.5 0V5.56L8.78 8.03a.75.75 0 1 1-1.06-1.06l3.75-3.75Zm-6.22 10.53a.75.75 0 0 1 .75.75v2A1.25 1.25 0 0 0 7.25 17.75h9.5A1.25 1.25 0 0 0 18 16.5v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75h-9.5A2.75 2.75 0 0 1 4.5 16.5v-2a.75.75 0 0 1 .75-.75Z"
        />
      </svg>
      <input type="file" accept=".pgn" onChange={handleFileUpload} hidden />
    </label>
  );
};

PgnUploader.propTypes = {
  onLoadPGN: PropTypes.func.isRequired,
};

export default PgnUploader;