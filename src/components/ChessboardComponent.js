// src/components/ChessboardComponent.js
import React from 'react';
import { Chessboard } from 'react-chessboard';
import '../styles/themes.css';
import { useSelector, useDispatch } from 'react-redux';
import { movePiece } from '../redux/actions/gameActions';
import { Chess } from 'chess.js';

const ChessboardComponent = ({ isAnalysis }) => {
  const dispatch = useDispatch();
  const fen = useSelector((state) => state.game.fen);
  const lastMove = useSelector((state) => state.game.lastMove);
  const isFlipped = useSelector((state) => state.game.isFlipped);

  const getSquareStyles = () => {
    if (!lastMove) return {};
    return {
      [lastMove.from]: { backgroundColor: 'var(--last-move-from)' },
      [lastMove.to]: { backgroundColor: 'var(--last-move-to)' },
    };
  };

  const handlePieceDrop = (source, target) => {
    dispatch(movePiece({ from: source, to: target }));
  };

    const calcPossibleMoves = ({ square }) => {
        const game = new Chess(fen);
        const moves = game.moves({ square, verbose: true });
        return moves.map((move) => move.to);
    };

  return (
    <div className={isAnalysis ? 'analysis-board' : 'chess-board'}>
      <Chessboard
        key={fen} // Force re-render when fen changes
        position={fen}
        onPieceDrop={handlePieceDrop}
        boardOrientation={isFlipped ? 'black' : 'white'}
        customSquareStyles={getSquareStyles()}
        customDarkSquareStyle={{ backgroundColor: 'var(--dark-square)' }}
        customLightSquareStyle={{ backgroundColor: 'var(--light-square)' }}
        calcPossibleMoves = {calcPossibleMoves}
      />
    </div>
  );
};

export default ChessboardComponent;