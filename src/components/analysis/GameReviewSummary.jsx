import React, { useMemo } from 'react';
import {
  aggregateGameReviewStats,
  computePlayerAccuracy,
  GAME_REVIEW_ROWS,
} from '../../utils/gameReviewStats';
import '../../styles/components/gameReviewSummary.css';
import { MoveCategoryBoardIcon } from './MoveCategoryBoardIcons';

const REVIEW_SUMMARY_ICON_PX = 18;

export default function GameReviewSummary({
  analysisData,
  numMoves,
  whitePlayerName,
  blackPlayerName,
}) {
  const { white, black } = useMemo(
    () => aggregateGameReviewStats(analysisData, numMoves),
    [analysisData, numMoves],
  );

  const accWhite = useMemo(() => computePlayerAccuracy(white), [white]);
  const accBlack = useMemo(() => computePlayerAccuracy(black), [black]);

  const rows = useMemo(
    () =>
      GAME_REVIEW_ROWS.filter(
        (row) =>
          row.id !== 'unknown' || (white.unknown ?? 0) + (black.unknown ?? 0) > 0,
      ),
    [white, black],
  );

  const wName = whitePlayerName?.trim() || 'White';
  const bName = blackPlayerName?.trim() || 'Black';

  return (
    <section className="game-review-summary" aria-labelledby="game-review-heading">
      <div className="game-review-summary__header">
        <h2 id="game-review-heading" className="game-review-summary__title">
          <span className="game-review-summary__title-star" aria-hidden>
            ★
          </span>{' '}
          Game Review
        </h2>
      </div>

      <div className="game-review-summary__grid">
        <span className="game-review-summary__section-label game-review-summary__grid-span-4">
          Players
        </span>
        <div
          className="game-review-summary__grid-cell game-review-summary__grid-cell--type"
          aria-hidden
        />
        <div className="game-review-summary__grid-cell game-review-summary__grid-cell--white">
          <div
            className="game-review-summary__avatar game-review-summary__avatar--white"
            title={wName}
            aria-label={`${wName} (White)`}
          >
            <span className="game-review-summary__avatar-piece" aria-hidden>
              ♔
            </span>
          </div>
        </div>
        <div
          className="game-review-summary__grid-cell game-review-summary__grid-cell--center"
          aria-hidden
        />
        <div className="game-review-summary__grid-cell game-review-summary__grid-cell--black">
          <div
            className="game-review-summary__avatar game-review-summary__avatar--black"
            title={bName}
            aria-label={`${bName} (Black)`}
          >
            <span className="game-review-summary__avatar-piece" aria-hidden>
              ♚
            </span>
          </div>
        </div>

        <span className="game-review-summary__section-label game-review-summary__grid-span-4">
          Accuracy
        </span>
        <div
          className="game-review-summary__grid-cell game-review-summary__grid-cell--type"
          aria-hidden
        />
        <div className="game-review-summary__grid-cell game-review-summary__grid-cell--white">
          <span
            className="game-review-summary__accuracy-pill game-review-summary__accuracy-pill--white"
            title={`${wName} accuracy`}
          >
            {accWhite != null ? accWhite : '—'}
          </span>
        </div>
        <div
          className="game-review-summary__grid-cell game-review-summary__grid-cell--center"
          aria-hidden
        />
        <div className="game-review-summary__grid-cell game-review-summary__grid-cell--black">
          <span
            className="game-review-summary__accuracy-pill game-review-summary__accuracy-pill--black"
            title={`${bName} accuracy`}
          >
            {accBlack != null ? accBlack : '—'}
          </span>
        </div>
      </div>

      <hr className="game-review-summary__divider" />

      <div className="game-review-summary__scroll">
        <div className="game-review-summary__stats" role="table" aria-label="Move quality by category">
          {rows.map((row) => {
            const wc = white[row.id] ?? 0;
            const bc = black[row.id] ?? 0;
            return (
              <div
                key={row.id}
                className="game-review-summary__stat-row"
                role="row"
                aria-label={`${row.name}: White ${wc}, Black ${bc}`}
              >
                <div
                  className={`game-review-summary__cat-name analysis-game-move-quality--${row.id}`}
                  role="cell"
                >
                  {row.name}
                </div>
                <div
                  className={`game-review-summary__count game-review-summary__count--white analysis-game-move-quality--${row.id}`}
                  role="cell"
                >
                  {wc}
                </div>
                <div className="game-review-summary__icon-cell" role="cell">
                  <span
                    className="game-review-summary__icon-badge"
                    title={row.name}
                    aria-hidden
                  >
                    {row.id === 'unknown' ? (
                      <span className="game-review-summary__icon-unknown">—</span>
                    ) : (
                      <MoveCategoryBoardIcon
                        categoryId={row.id}
                        size={REVIEW_SUMMARY_ICON_PX}
                      />
                    )}
                  </span>
                </div>
                <div
                  className={`game-review-summary__count game-review-summary__count--black analysis-game-move-quality--${row.id}`}
                  role="cell"
                >
                  {bc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
