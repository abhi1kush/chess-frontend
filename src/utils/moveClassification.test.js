import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  classifyMove,
  normalizeUci,
  playedUciFromSan,
  moveQualityClassFromLabel,
  categoryEmojiFromCategoryId,
  getLastMoveSquareStylesForAnalysis,
  CATEGORY_IDS,
  THRESH_EXCELLENT,
} from './moveClassification.js';

describe('moveClassification', () => {
  it('normalizeUci trims and lowercases', () => {
    assert.equal(normalizeUci('  E2E4  '), 'e2e4');
  });

  it('playedUciFromSan returns UCI for standard e4', () => {
    const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    assert.equal(playedUciFromSan(fen, 'e4'), 'e2e4');
  });

  it('Best when played matches engine best', () => {
    const r = classifyMove({
      evalBefore: 0.2,
      evalAfter: 0.25,
      bestMoveUci: 'e2e4',
      playedUci: 'e2e4',
      fenBefore: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      fenAfter: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
    });
    assert.equal(r.categoryId, CATEGORY_IDS.BEST);
  });

  it('White move: small eval drop → Excellent', () => {
    const r = classifyMove({
      evalBefore: 0.5,
      evalAfter: 0.5 - THRESH_EXCELLENT / 2,
      bestMoveUci: 'a2a4',
      playedUci: 'h2h4',
      fenBefore: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      fenAfter: 'rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1',
    });
    assert.equal(r.categoryId, CATEGORY_IDS.EXCELLENT);
  });

  it('Black move: loss when white eval rises', () => {
    const r = classifyMove({
      evalBefore: 0.2,
      evalAfter: 0.9,
      bestMoveUci: 'e7e5',
      playedUci: 'h7h6',
      fenBefore:
        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      fenAfter:
        'rnbqkbnr/pppppp1p/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
    });
    assert.ok(
      [CATEGORY_IDS.MISTAKE, CATEGORY_IDS.BLUNDER, CATEGORY_IDS.INACCURACY].includes(
        r.categoryId,
      ),
    );
  });

  it('Missed Win when winning for White but loss and not best', () => {
    const r = classifyMove({
      evalBefore: 3.5,
      evalAfter: 2.0,
      bestMoveUci: 'd1h5',
      playedUci: 'a2a3',
      fenBefore: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      fenAfter: 'rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq - 0 1',
    });
    assert.equal(r.categoryId, CATEGORY_IDS.MISSED_WIN);
  });

  it('categoryEmojiFromCategoryId returns DISPLAY emoji', () => {
    assert.equal(categoryEmojiFromCategoryId(CATEGORY_IDS.BEST), '✅');
    assert.equal(categoryEmojiFromCategoryId(''), '');
  });

  it('moveQualityClassFromLabel maps display label to category id', () => {
    assert.equal(
      moveQualityClassFromLabel('✅ Best'),
      CATEGORY_IDS.BEST,
    );
    assert.equal(
      moveQualityClassFromLabel('👍 Excellent'),
      CATEGORY_IDS.EXCELLENT,
    );
    assert.equal(
      moveQualityClassFromLabel('🚫 Missed Win'),
      CATEGORY_IDS.MISSED_WIN,
    );
  });

  it('getLastMoveSquareStylesForAnalysis uses category tint when category id set', () => {
    const styles = getLastMoveSquareStylesForAnalysis(
      { from: 'e2', to: 'e4' },
      CATEGORY_IDS.BEST,
    );
    assert.ok(styles?.e2?.backgroundColor?.includes('rgba'));
    assert.ok(styles?.e4?.backgroundColor?.includes('rgba'));
  });

  it('getLastMoveSquareStylesForAnalysis falls back to default when no category', () => {
    const styles = getLastMoveSquareStylesForAnalysis({ from: 'e2', to: 'e4' }, '');
    assert.ok(styles?.e2?.backgroundColor?.includes('var(--last-move-from)'));
  });

  it('returns unknown label for invalid evals', () => {
    const r = classifyMove({
      evalBefore: null,
      evalAfter: 0,
      bestMoveUci: 'e2e4',
      playedUci: 'e2e4',
      fenBefore: '',
      fenAfter: '',
    });
    assert.equal(r.categoryId, CATEGORY_IDS.UNKNOWN);
  });
});
