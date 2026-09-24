// src/components/ChessboardComponent.js
import React from 'react';
import { Chessboard } from 'react-chessboard';
// CSS is loaded for its side effects; the stylesheet has no TypeScript declarations.
import '../../../styles/themes.css';
import { getLastMoveSquareStyles } from "../../../shared/utils/helpers"
import { MoveType } from "../../../shared/types/AnalysisTypes"
import { Square } from 'chess.js';
import type { FromToSquare } from '../../../shared/types/AnalysisTypes';

interface ChessboardComponentProps {
  className?: string;
  handleMove: (move: MoveType) => void;
  fen: string;
  lastMove: FromToSquare;
  isFlipped?: boolean;
}

const ChessboardComponent = ({
  className,
  handleMove,
  fen,
  lastMove,
  isFlipped = false,
}: ChessboardComponentProps) => {
  const handlePieceDrop = (
    source: Square,
    target: Square,
  ): boolean => {
    handleMove({
      from: source,
      to: target 
    });
    return false;
  };

  return (
    <div className={className}>
      <Chessboard
        position={fen}
        onPieceDrop={handlePieceDrop}
        boardOrientation={isFlipped ? 'black' : 'white'}
        customSquareStyles={getLastMoveSquareStyles(lastMove) ?? undefined}
        customDarkSquareStyle={{
          backgroundColor: 'var(--dark-square)',
        }}
        customLightSquareStyle={{
          backgroundColor: 'var(--light-square)',
        }}
      />
    </div>
  );
};

export default ChessboardComponent;