// src/components/ChessboardComponent.js
import React, {
  forwardRef,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {Chess, Square} from "chess.js"
import { Chessboard} from 'react-chessboard';
import '../../styles/themes.css';
import { getKingPosition } from '../../utils/helpers';
import { getLastMoveSquareStylesForAnalysis } from '../../utils/moveClassification';
import {
  MoveCategoryBoardIcon,
  WinnerCrownBoardIcon,
  LoserFlagBoardIcon,
} from './MoveCategoryBoardIcons';
import { FromToSquare, BoardPiece, PromotionPiece} from '../../CustomTypes/AnalysisTypes';
import { Arrow } from 'react-chessboard/dist/chessboard/types';
import type { CustomSquareStyles } from 'react-chessboard/dist/chessboard/types';

interface MoveBadge { toSquare: string; categoryId: string; } 
type EndgameKingBadge ={ type: 'winner' | 'loser'; } 
type EndgameKingBadges = Record<string, EndgameKingBadge>; 
interface CustomSquareProps { square: string; style?: CSSProperties; children?: ReactNode; }

/**
 * @param {{ toSquare: string; categoryId: string } | null | undefined} badge
 */
function makeCustomSquare(
  badge : MoveBadge | null | undefined, 
  endgameKingBadges: EndgameKingBadges) {
  return forwardRef<HTMLDivElement, CustomSquareProps>(
    function AnalysisCustomSquare({ square, style, children },ref) {
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
            <MoveCategoryBoardIcon categoryId={b!.categoryId} size={iconSize} />
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

interface MoveCategoryBadge { toSquare: string; categoryId: string; }

interface AnalysisBoardProps { 
  className?: string; 
  handleMove: (move: FromToSquare) => boolean; 
  fen: string; 
  lastMove: FromToSquare | undefined; 
  /** * After review: CSS category id from * moveQualityClassFromLabel * (empty = default last-move colors). */ 
  lastMoveCategoryId?: string; 
  /** * After review on main line: * show category SVG on last move "to" square. */ 
  moveCategoryBadge?: MoveCategoryBadge | null; 
  isFlipped?: boolean; 
  isFinalMove?: boolean; 
  result: string; 
  customArrows?: Arrow[]; 
  arePiecesDraggable?: boolean; 
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
}: AnalysisBoardProps) => {
  const handlePieceDrop = (source: Square, target: Square, piece: BoardPiece): boolean => {
    
    if (piece === 'wP' && target[1] === '8' || piece === 'bP' && target[1] === '1') {
      // TODO: Handle promotion piece selection (e.g., show a modal to select the piece)
      const promotionPiece: PromotionPiece = 'q'; // Default to queen for simplicity

      handleMove({ from: source, to: target, promotion: promotionPiece });
      return true;    
    }

    handleMove({ from: source, to: target, promotion: null });
    return true;
  };

  const getSquareStyles = (): CustomSquareStyles | undefined => {
    if (isFinalMove) {
      return winerLoserHighlights(fen, result);
    }
    return getLastMoveSquareStylesForAnalysis(lastMove, lastMoveCategoryId);
  };

  const endgameKingBadges : EndgameKingBadges = useMemo(
    (): EndgameKingBadges => getEndgameKingBadges(fen, result, !!isFinalMove),
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

const getSquareName = (rank: number, file: number) => {
  return String.fromCharCode(file + 'a'.charCodeAt(0)) + (8 - rank);
}

const winerLoserHighlights = (fen : string, result : string) => {
  const chess = new Chess(fen);
  const styles : Record<string, { backgroundColor: string }> = {};;
  const board = chess.board();
  const whiteKingPosition = getKingPosition(board, 'w');
  const blackKingPosition = getKingPosition(board, 'b');

      if (result === '1-0' && whiteKingPosition && blackKingPosition){ 
        styles[getSquareName(whiteKingPosition.rank, whiteKingPosition.file)] = {backgroundColor: 'var(--winner-king-background)'};
        styles[getSquareName(blackKingPosition.rank, blackKingPosition.file)] = {backgroundColor: 'var(--loser-king-background)'};
      }

      if (result === '0-1' && blackKingPosition && whiteKingPosition){
        styles[getSquareName(whiteKingPosition.rank, whiteKingPosition.file)] = {backgroundColor: 'var(--loser-king-background)'};
        styles[getSquareName(blackKingPosition.rank, blackKingPosition.file)] = {backgroundColor: 'var(--winner-king-background)'};
      }
  return styles;
} 

const getEndgameKingBadges = (fen: string, result: string, isFinalMove: boolean): EndgameKingBadges => {
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
