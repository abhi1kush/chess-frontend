import type { ReactNode } from 'react';
import AnalysisBoard from '../../chessboard/components/AnalysisChessBoard';
import EvalBar from './EvalBar';
import type { FromToSquare } from '../../../shared/types/AnalysisTypes';
import type { Arrow } from 'react-chessboard/dist/chessboard/types';

type BoardStageProps = {
  position: string;
  isFlipped: boolean;
  theme: string;
  whitePlayerName: string;
  blackPlayerName: string;
  topNameActive: boolean;
  bottomNameActive: boolean;
  displayEvalScore: number | null;
  lastMove?: FromToSquare;
  lastMoveCategoryId: string;
  moveCategoryBadge: { toSquare: string; categoryId: string } | null;
  handleMove: (move: FromToSquare) => boolean;
  arePiecesDraggable: boolean;
  isFinalMove: boolean;
  result: string;
  customArrows: Arrow[];
  children?: ReactNode;
};

export default function BoardStage({
  position,
  isFlipped,
  theme,
  whitePlayerName,
  blackPlayerName,
  topNameActive,
  bottomNameActive,
  displayEvalScore,
  lastMove,
  lastMoveCategoryId,
  moveCategoryBadge,
  handleMove,
  arePiecesDraggable,
  isFinalMove,
  result,
  customArrows,
  children,
}: BoardStageProps) {
  const topIsWhite = isFlipped;
  return (
    <div className={`analysis-container ${theme}-theme rounded-2xl`}>
      <div className="main-area">
        <div className="top-name">
          <div className="player-names-wrapper">
            <span
              className={`player-side-avatar ${topIsWhite ? 'player-side-avatar--white' : 'player-side-avatar--black'}`}
              aria-hidden
            >
              👤
            </span>
            <div
              className={`player-name player-pill ${topIsWhite ? 'white-player-name' : 'black-player-name'}${topNameActive ? ' player-name--active' : ''}`}
            >
              {topIsWhite ? whitePlayerName : blackPlayerName}
            </div>
          </div>
        </div>
        <div className="evalbar-board-container">
          <EvalBar isFlipped={isFlipped} evalScore={displayEvalScore} />
          <div className="board-wrapper">
            <AnalysisBoard
              className="board"
              fen={position}
              isFlipped={isFlipped}
              lastMove={lastMove}
              lastMoveCategoryId={lastMoveCategoryId}
              moveCategoryBadge={moveCategoryBadge}
              handleMove={handleMove}
              arePiecesDraggable={arePiecesDraggable}
              isFinalMove={isFinalMove}
              result={result}
              customArrows={customArrows}
            />
          </div>
        </div>
        <div className="bottom-name">
          <div className="player-names-wrapper">
            <span
              className={`player-side-avatar ${topIsWhite ? 'player-side-avatar--black' : 'player-side-avatar--white'}`}
              aria-hidden
            >
              👤
            </span>
            <div
              className={`player-name player-pill ${topIsWhite ? 'black-player-name' : 'white-player-name'}${bottomNameActive ? ' player-name--active' : ''}`}
            >
              {topIsWhite ? blackPlayerName : whitePlayerName}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
