import type { ReactNode } from 'react';
import { sanToFigurineDisplay } from '../../../shared/utils/sanFigurine';
import { moveQualityClassFromLabel } from '../services/classifyMove';
import { MoveCategoryBoardIcon } from './MoveCategoryBadge';
import type { AnalysisDataRow } from '../../pgn/redux/pgnSlice';

/** SAN text uses category hue only for these (rest stay theme foreground). */
const SAN_TEXT_CATEGORY_ACCENTS = new Set(['brilliant', 'great', 'blunder']);

type MoveSanCellProps = {
  san?: string | null;
  isWhite: boolean;
  moveIdx: number;
  reviewComplete: boolean;
  analysisData: AnalysisDataRow[];
};

/**
 * `moves[moveIdx]` matches `analysisData[moveIdx + 1]` (position after that ply).
 */
export function MoveSanCell({
  san,
  isWhite,
  moveIdx,
  reviewComplete,
  analysisData,
}: MoveSanCellProps): ReactNode | null {
  if (san == null || san.trim() === '') return null;

  const figurine = sanToFigurineDisplay(san, isWhite);
  const categoryId =
    reviewComplete && analysisData?.[moveIdx + 1]
      ? moveQualityClassFromLabel(analysisData[moveIdx + 1].moveClassification)
      : '';

  const blackSideClass = !isWhite ? ' move-history-san--black-side' : '';

  if (!reviewComplete || !categoryId) {
    return (
      <span className={`move-history-move-btn move-history-san--figurine${blackSideClass}`}>{figurine}</span>
    );
  }

  const accentClass = SAN_TEXT_CATEGORY_ACCENTS.has(categoryId)
    ? ` move-history-san--accent-${categoryId}`
    : '';

  return (
    <span className="move-history-move-with-review move-history-move-btn">
      <span className="move-history-move-review-icon" aria-hidden>
        <MoveCategoryBoardIcon categoryId={categoryId} size={16} />
      </span>
      <span
        className={`move-history-san--figurine move-history-san--review${accentClass}${blackSideClass}`}
      >
        {figurine}
      </span>
    </span>
  );
}
