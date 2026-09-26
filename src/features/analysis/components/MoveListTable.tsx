import { Fragment, type ReactNode, type RefObject } from 'react';
import { playBoardSetupSound } from '../../../shared/utils/soundUtils';
import { formatUserLineWithNumbers } from '../services/formatUserLine';
import { MoveSanCell } from './MoveSanCell';
import type { AnalysisDataRow } from '../../pgn/redux/pgnSlice';
import type { LinePly } from '../types';

type MoveListTableProps = {
  scrollRef: RefObject<HTMLDivElement | null>;
  moves: string[];
  analysisData: AnalysisDataRow[];
  reviewAnalysisComplete: boolean;
  currentMoveIndex: number;
  exploreLine: boolean;
  lineCursor: number;
  lineBranchIndex: number | null;
  linePlies: LinePly[];
  fens: string[];
  onJumpToMainLine: (index: number) => void;
  onEnterUserLine?: () => void;
};

function isMainLineCellCurrent(
  clickIndex: number,
  currentMoveIndex: number,
  exploreLine: boolean,
  lineCursor: number,
  lineBranchIndex: number | null,
): boolean {
  if (exploreLine && lineCursor > 0) return false;
  if (exploreLine && lineCursor === 0 && lineBranchIndex != null) {
    return clickIndex === lineBranchIndex;
  }
  return !exploreLine && clickIndex === currentMoveIndex;
}

export default function MoveListTable({
  scrollRef,
  moves,
  analysisData,
  reviewAnalysisComplete,
  currentMoveIndex,
  exploreLine,
  lineCursor,
  lineBranchIndex,
  linePlies,
  fens,
  onJumpToMainLine,
  onEnterUserLine,
}: MoveListTableProps) {
  const handleMoveClick = (index: number) => {
    playBoardSetupSound();
    onJumpToMainLine(index);
  };

  const userLineInsertAfterRowStart =
    lineBranchIndex != null && lineBranchIndex >= 1
      ? 2 * Math.floor((lineBranchIndex - 1) / 2)
      : null;

  const fenAtBranch =
    lineBranchIndex != null && fens?.[lineBranchIndex] != null
      ? fens[lineBranchIndex]
      : '';

  const userLineText =
    linePlies.length > 0 && fenAtBranch
      ? formatUserLineWithNumbers(fenAtBranch, linePlies)
      : '';

  const renderUserLineRow = (key: string): ReactNode | null => {
    if (!linePlies.length) return null;
    const active = exploreLine && lineCursor > 0;
    return (
      <tr key={key} className="move-history-user-line-row">
        <td />
        <td colSpan={2} className="move-history-user-line-cell">
          <button
            type="button"
            className={`move-history-user-line-btn${active ? ' move-history-user-line-btn--current' : ''}`}
            onClick={() => onEnterUserLine?.()}
          >
            {userLineText}
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="move-history rounded-xl">
      <div className="move-history-scroll" ref={scrollRef}>
        <table className="move-history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>White</th>
              <th>Black</th>
            </tr>
          </thead>
          <tbody>
            {lineBranchIndex === 0 && linePlies.length > 0 ? renderUserLineRow('user-line-0') : null}
            {moves &&
              moves.map((move, index) =>
                index % 2 === 0 ? (
                  <Fragment key={index}>
                    <tr className={`move-row-${index}`}>
                      <td>{Math.floor(index / 2) + 1}.</td>
                      <td
                        className={`clickable${
                          isMainLineCellCurrent(
                            index + 1,
                            currentMoveIndex,
                            exploreLine,
                            lineCursor,
                            lineBranchIndex,
                          )
                            ? ' move-history-cell--current'
                            : ''
                        }`}
                        onClick={() => handleMoveClick(index + 1)}
                      >
                        <MoveSanCell
                          san={move}
                          isWhite
                          moveIdx={index}
                          reviewComplete={reviewAnalysisComplete}
                          analysisData={analysisData}
                        />
                      </td>
                      <td
                        className={`clickable${
                          isMainLineCellCurrent(
                            index + 2,
                            currentMoveIndex,
                            exploreLine,
                            lineCursor,
                            lineBranchIndex,
                          )
                            ? ' move-history-cell--current'
                            : ''
                        }`}
                        onClick={() => handleMoveClick(index + 2)}
                      >
                        <MoveSanCell
                          san={moves[index + 1]}
                          isWhite={false}
                          moveIdx={index + 1}
                          reviewComplete={reviewAnalysisComplete}
                          analysisData={analysisData}
                        />
                      </td>
                    </tr>
                    {userLineInsertAfterRowStart === index && linePlies.length > 0
                      ? renderUserLineRow(`user-line-${lineBranchIndex}`)
                      : null}
                  </Fragment>
                ) : null,
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
