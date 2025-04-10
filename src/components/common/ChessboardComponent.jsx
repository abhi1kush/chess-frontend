// src/components/ChessboardComponent.js
import React from 'react';
import { Chessboard } from 'react-chessboard';
import '../../styles/themes.css';
import PropTypes from 'prop-types';
import { getLastMoveSquareStyles } from "../../utils/helpers"

const ChessboardComponent = ({ className, handleMove, fen, lastMove, isFlipped}) => {
  const handlePieceDrop = (source, target) => {
    handleMove({ from: source, to: target });
  };

  return (
    <div className={className}>
      <Chessboard
        position={fen}
        onPieceDrop={handlePieceDrop}
        boardOrientation={isFlipped ? 'black' : 'white'}
        customSquareStyles={getLastMoveSquareStyles(lastMove)}
        customDarkSquareStyle={{ backgroundColor: 'var(--dark-square)' }}
        customLightSquareStyle={{ backgroundColor: 'var(--light-square)' }}
      />
    </div>
  );
};

export default ChessboardComponent;

ChessboardComponent.defaultProps = {
  isFinalMove: false,
  result: "",
}

ChessboardComponent.prototype = {
  isAnalysis: PropTypes.bool.isRequired,
  handleMove: PropTypes.func.isRequired,
  fen: PropTypes.string.isRequired,
  lastMove: PropTypes.object.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isFinalMove: PropTypes.bool.isFinalMove,
};