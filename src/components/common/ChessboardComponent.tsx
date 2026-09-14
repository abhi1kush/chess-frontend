// src/components/ChessboardComponent.js
import React from 'react';
import { Chessboard } from 'react-chessboard';
// CSS is loaded for its side effects; the stylesheet has no TypeScript declarations.
// @ts-expect-error -- CSS module declarations are not available in this project.
import '../../styles/themes.css';
import { getLastMoveSquareStyles } from "../../utils/helpers"
import { MoveType } from "../../CustomTypes/AnalysisTypes"
import { Square } from 'chess.js';

interface ChessboardComponentProps {
  className?: string;
  handleMove: (move: MoveType) => void;
  fen: string;
  lastMove: {
    from: Square;
    to: Square;
  } | null;
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