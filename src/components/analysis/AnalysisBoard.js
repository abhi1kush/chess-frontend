// src/components/ChessboardComponent.js
import React from 'react';
import {Chess} from "chess.js"
import { Chessboard } from 'react-chessboard';
import '../../styles/themes.css';
import PropTypes from 'prop-types';
import { getKingPosition, getLastMoveSquareStyles } from '../../utils/helpers';

const AnalysisBoard = ({ className, handleMove, fen, lastMove, isFlipped, isFinalMove, result}) => {
  const handlePieceDrop = (source, target) => {
    handleMove({ from: source, to: target });
  };

  const getSquareStyles = () => {
    if (isFinalMove) {
      return winerLoserHighlights(fen, result);
    }
    return getLastMoveSquareStyles(lastMove);
  };

  return (
    <div className={className}>
      <Chessboard
        position={fen}
        onPieceDrop={handlePieceDrop}
        boardOrientation={isFlipped ? 'black' : 'white'}
        customSquareStyles={getSquareStyles()}
        customDarkSquareStyle={{ backgroundColor: 'var(--dark-square)' }}
        customLightSquareStyle={{ backgroundColor: 'var(--light-square)' }}
      />
    </div>
  );
};

export default AnalysisBoard;

AnalysisBoard.defaultProps = {
  isFinalMove: false,
  result: "",
}

AnalysisBoard.prototype = {
  isAnalysis: PropTypes.bool.isRequired,
  handleMove: PropTypes.func.isRequired,
  fen: PropTypes.string.isRequired,
  lastMove: PropTypes.object.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isFinalMove: PropTypes.bool.isFinalMove,
};

const winerLoserHighlights = (fen , result) => {
  const chess = new Chess(fen);
  const styles = {};
  const board = chess.board();
  const whiteKingPosition = getKingPosition(board, 'w');
  const blackKingPosition = getKingPosition(board, 'b');

      if (result === '1-0' && whiteKingPosition) {
        styles[getSquareName(whiteKingPosition.rank, whiteKingPosition.file)] = {backgroundColor: 'var(--winner-king-background)'};
        styles[getSquareName(blackKingPosition.rank, blackKingPosition.file)] = {backgroundColor: 'var(--loser-king-background)'};
      }
      if (result === '0-1' && blackKingPosition){
        styles[getSquareName(whiteKingPosition.rank, whiteKingPosition.file)] = {backgroundColor: 'var(--loser-king-background)'};
        styles[getSquareName(blackKingPosition.rank, blackKingPosition.file)] = {backgroundColor: 'var(--winner-king-background)'};
      }
  return styles;
} 

const getSquareName = (rank, file) => {
  return String.fromCharCode(file + 'a'.charCodeAt(0)) + (8 - rank);
}
