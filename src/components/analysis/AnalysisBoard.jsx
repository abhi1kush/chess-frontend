// src/components/ChessboardComponent.js
import React, { forwardRef, useMemo } from 'react';
import {Chess} from "chess.js"
import { Chessboard } from 'react-chessboard';
import '../../styles/themes.css';
import PropTypes from 'prop-types';
import { getKingPosition } from '../../utils/helpers';
import { getLastMoveSquareStylesForAnalysis } from '../../utils/moveClassification';
import {
  MoveCategoryBoardIcon,
  WinnerCrownBoardIcon,
  LoserFlagBoardIcon,
} from './MoveCategoryBoardIcons';

/**
 * @param {{ toSquare: string; categoryId: string } | null | undefined} badge
 */
function makeCustomSquare(badge, endgameKingBadges) {
  return forwardRef(function AnalysisCustomSquare(
    { square, style, children },
    ref,
  ) {
    const b = badge;
    const sq = typeof square === 'string' ? square.toLowerCase() : '';
    const toSq = b?.toSquare ? String(b.toSquare).toLowerCase() : '';
    const show = Boolean(b?.categoryId && toSq && sq === toSq);
    const kingBadge = endgameKingBadges?.[sq] || null;
    const w = style?.width;
    const iconSize =
      typeof w === 'number' && Number.isFinite(w)
        ? Math.max(10, Math.round(Number(w) * 0.36))
        : 16;

    return (
      <div
        ref={ref}
        style={{
          ...style,
          ...((show || kingBadge) ? { position: 'relative' } : {}),
        }}
      >
        {children}
        {show ? (
          <span className="analysis-board-move-category-badge" aria-hidden>
            <MoveCategoryBoardIcon categoryId={b.categoryId} size={iconSize} />
          </span>
        ) : null}
        {kingBadge ? (
          <span
            className={`analysis-board-endgame-badge analysis-board-endgame-badge--${kingBadge.type}`}
            aria-hidden
          >
            {kingBadge.type === 'winner' ? (
              <WinnerCrownBoardIcon size={iconSize} />
            ) : (
              <LoserFlagBoardIcon size={iconSize} />
            )}
          </span>
        ) : null}
      </div>
    );
  });
}

const AnalysisBoard = ({
  className,
  handleMove,
  fen,
  lastMove,
  /** After review: CSS category id from `moveQualityClassFromLabel` (empty = default last-move colors). */
  lastMoveCategoryId = '',
  /** After review on main line: show category SVG on last move “to” square. */
  moveCategoryBadge = null,
  isFlipped,
  isFinalMove,
  result,
  customArrows = [],
  arePiecesDraggable = true,
}) => {
  const handlePieceDrop = (source, target) => {
    handleMove({ from: source, to: target });
  };

  const getSquareStyles = () => {
    if (isFinalMove) {
      return winerLoserHighlights(fen, result);
    }
    return getLastMoveSquareStylesForAnalysis(lastMove, lastMoveCategoryId);
  };

  const endgameKingBadges = useMemo(
    () => getEndgameKingBadges(fen, result, isFinalMove),
    [fen, result, isFinalMove],
  );

  const CustomSquare = useMemo(
    () => makeCustomSquare(moveCategoryBadge, endgameKingBadges),
    [moveCategoryBadge, endgameKingBadges],
  );

  return (
    <div className={className}>
      <Chessboard
        position={fen}
        onPieceDrop={handlePieceDrop}
        arePiecesDraggable={arePiecesDraggable}
        boardOrientation={isFlipped ? 'black' : 'white'}
        customSquare={CustomSquare}
        customSquareStyles={getSquareStyles()}
        customArrows={customArrows}
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

const getEndgameKingBadges = (fen, result, isFinalMove) => {
  if (!isFinalMove) return {};
  const normalizedResult = String(result ?? '').trim();
  if (normalizedResult !== '1-0' && normalizedResult !== '0-1') return {};

  const chess = new Chess(fen);
  const board = chess.board();
  const whiteKingPosition = getKingPosition(board, 'w');
  const blackKingPosition = getKingPosition(board, 'b');
  if (!whiteKingPosition || !blackKingPosition) return {};

  const whiteSquare = getSquareName(whiteKingPosition.rank, whiteKingPosition.file).toLowerCase();
  const blackSquare = getSquareName(blackKingPosition.rank, blackKingPosition.file).toLowerCase();

  if (normalizedResult === '1-0') {
    return {
      [whiteSquare]: { type: 'winner' },
      [blackSquare]: { type: 'loser' },
    };
  }

  return {
    [whiteSquare]: { type: 'loser' },
    [blackSquare]: { type: 'winner' },
  };
};

const getSquareName = (rank, file) => {
  return String.fromCharCode(file + 'a'.charCodeAt(0)) + (8 - rank);
}
