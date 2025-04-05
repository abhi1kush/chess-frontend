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
    <label className="action-button">
      Upload PGN
      <input type="file" accept=".pgn" onChange={handleFileUpload} hidden />
    </label>
  );
};

PgnUploader.propTypes = {
  onLoadPGN: PropTypes.func.isRequired,
};

export default PgnUploader;