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
} from './classifyMove.js';

describe('moveClassification', () => {
  it('normalizeUci trims and lowercases', () => {
    assert.equal(normalizeUci('  E2E4  '), 'e2e4');
  });

  it('playedUciFromSan returns UCI for standard e4', () => {
    const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    assert.equal(playedUciFromSan(fen, 'e4'), 'e2e4');
  });

  it('Brilliant when the best move is a sound piece sacrifice', () => {
    const fenBefore = '6k1/5p2/8/8/2B5/8/8/4K3 w - - 0 1';
    const fenAfter = '6k1/5B2/8/8/8/8/8/4K3 b - - 0 1';
    const r = classifyMove({
      evalBefore: 0.4,
      evalAfter: 0.6,
      bestMoveUci: 'c4f7',
      playedUci: 'c4f7',
      fenBefore,
      fenAfter,
    });
    assert.equal(r.categoryId, CATEGORY_IDS.BRILLIANT);
  });

  it('marks opening prefixes as Book when asked', () => {
    const r = classifyMove({
      evalBefore: 0.2,
      evalAfter: 0.25,
      bestMoveUci: 'e2e4',
      playedUci: 'e2e4',
      fenBefore: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      fenAfter: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      book: true,
    });
    assert.equal(r.categoryId, CATEGORY_IDS.BOOK);
  });

  it('Great when the best move is the only check that works', () => {
    const fenBefore = '4rbk1/2q2ppp/p5b1/1p1B1n1n/2p1P3/2P4P/PP4B1/R1BQ2K1 b - - 0 31';
    const r = classifyMove({
      evalBefore: -4,
      evalAfter: -6,
      bestMoveUci: 'h5g3',
      playedUci: 'h5g3',
      fenBefore,
      fenAfter: '4rbk1/2q2ppp/p5b1/1p1B1n2/2p1P3/2P3nP/PP4B1/R1BQ2K1 w - - 1 32',
    });
    assert.ok(
      [CATEGORY_IDS.GREAT, CATEGORY_IDS.BRILLIANT, CATEGORY_IDS.BEST].includes(r.categoryId),
    );
  });

  it('Brilliant on a second winning exchange sacrifice, not only the engine #1', () => {
    const fenBefore = '3rrbk1/2q2ppp/p5b1/1p1NnN1n/2pP4/2P4P/PP3RB1/R1BQ3K b - - 1 29';
    const fenAfter = '4rbk1/2q2ppp/p5b1/1p1rnN1n/2pP4/2P4P/PP3RB1/R1BQ3K w - - 0 30';
    const r = classifyMove({
      evalBefore: -1.1,
      evalAfter: -0.4,
      bestMoveUci: 'g6f5',
      playedUci: 'd8d5',
      fenBefore,
      fenAfter,
    });
    assert.equal(r.categoryId, CATEGORY_IDS.BRILLIANT);
  });

  it('does not call a collapsing exchange sacrifice Brilliant', () => {
    const r = classifyMove({
      evalBefore: -0.4,
      evalAfter: 2.2,
      bestMoveUci: 'g6f5',
      playedUci: 'd8d5',
      fenBefore: '3rrbk1/2q2ppp/p5b1/1p1NnN1n/2pP4/2P4P/PP3RB1/R1BQ3K b - - 1 29',
      fenAfter: '4rbk1/2q2ppp/p5b1/1p1rnN1n/2pP4/2P4P/PP3RB1/R1BQ3K w - - 0 30',
    });
    assert.notEqual(r.categoryId, CATEGORY_IDS.BRILLIANT);
  });

  it('Best, not Brilliant, when the same sacrifice is played from an already winning position', () => {
    const r = classifyMove({
      evalBefore: 5,
      evalAfter: 5,
      bestMoveUci: 'c4f7',
      playedUci: 'c4f7',
      fenBefore: '6k1/5p2/8/8/2B5/8/8/4K3 w - - 0 1',
      fenAfter: '6k1/5B2/8/8/8/8/8/4K3 b - - 0 1',
    });
    assert.ok(
      [CATEGORY_IDS.BEST, CATEGORY_IDS.GREAT].includes(r.categoryId),
    );
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

  it('White move: small expected-points drop → Excellent', () => {
    const r = classifyMove({
      evalBefore: 0.2,
      evalAfter: 0.05,
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
      [CATEGORY_IDS.MISTAKE, CATEGORY_IDS.BLUNDER, CATEGORY_IDS.INACCURACY, CATEGORY_IDS.MISSED_WIN].includes(
        r.categoryId,
      ),
    );
  });

  it('Miss when the opponent handed a chance and the move gives it back', () => {
    const r = classifyMove({
      evalBefore: 1.6,
      evalAfter: -0.2,
      scoreBeforeOpponent: 0,
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
    assert.equal(typeof styles?.e2?.backgroundColor, 'string');
    assert.ok(
      typeof styles?.e2?.backgroundColor === 'string' &&
        styles.e2.backgroundColor.includes('rgba'),
    );
    assert.equal(typeof styles?.e4?.backgroundColor, 'string');
    assert.ok(
      typeof styles?.e4?.backgroundColor === 'string' &&
        styles.e4.backgroundColor.includes('rgba'),
    );
  });

  it('getLastMoveSquareStylesForAnalysis falls back to default when no category', () => {
    const styles = getLastMoveSquareStylesForAnalysis({ from: 'e2', to: 'e4'}, '');
    assert.ok(
      typeof styles?.e2?.backgroundColor === 'string' &&
        styles.e2.backgroundColor.includes('var(--last-move-from)'),
    );
  });

  it('returns unknown label for invalid evals', () => {
    const r = classifyMove({
      evalBefore: Number.NaN,
      evalAfter: 0,
      bestMoveUci: 'e2e4',
      playedUci: 'e2e4',
      fenBefore: '',
      fenAfter: '',
    });
    assert.equal(r.categoryId, CATEGORY_IDS.UNKNOWN);
  });

  it('classifies 35...Re3 as a blunder when it allows mate', () => {
    const r = classifyMove({
      evalBefore: 6,
      evalAfter: 10,
      bestMoveUci: 'g1e3',
      playedUci: 'e8e3',
      fenBefore: '4rrk1/1P3pp1/R6p/3B4/6P1/2B2Q2/2K3P1/6q1 b - - 0 35',
      fenAfter: '5rk1/1P3pp1/R6p/3B4/6P1/2B1rQ2/2K3P1/6q1 w - - 1 36',
      mateAfter: 6,
    });
    assert.equal(r.categoryId, CATEGORY_IDS.BLUNDER);
  });
});
