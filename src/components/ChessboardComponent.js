// src/components/ChessboardComponent.js
import React from 'react';
import { Chessboard } from 'react-chessboard';
import '../styles/themes.css';
import PropTypes from 'prop-types';

const ChessboardComponent = ({ isAnalysis, handleMove, fen, lastMove, isFlipped}) => {
  const getSquareStyles = () => {
    if (!lastMove) return {};
    return {
      [lastMove.from]: { backgroundColor: 'var(--last-move-from)' },
      [lastMove.to]: { backgroundColor: 'var(--last-move-to)' },
    };
  };

  const handlePieceDrop = (source, target) => {
    handleMove({ from: source, to: target });
  };

    // const calcPossibleMoves = ({ square }) => {
    //     const game = new Chess(fen);
    //     const moves = game.moves({ square, verbose: true });
    //     return moves.map((move) => move.to);
    // };

  return (
    <div className={isAnalysis ? 'analysis-board' : 'chess-board'}>
      <Chessboard
        // key={fen} // Force re-render when fen changes
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

export default ChessboardComponent;

ChessboardComponent.prototype = {
  isAnalysis: PropTypes.bool.isRequired,
  handleMove: PropTypes.func.isRequired,
  fen: PropTypes.string.isRequired,
  lastMove: PropTypes.object.isRequired,
  isFlipped: PropTypes.bool.isRequired,
};