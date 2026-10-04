import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { normalizeFenKey } from '../../engine/services/stockfishFenCache.js';
import { CATEGORY_IDS } from './classifyMove.js';
import {
  classifyDeepReviewPly,
  deepReviewAnalysisChanged,
  judgeDeepReviewPly,
  PASS2_MIN_DEPTH,
  pass2Depths,
  prioritizeDeepReviewPlies,
  runSecondReviewPass,
  shouldDeepReviewPly,
  uniqueFensForDeepReview,
  type DeepSearchEval,
  type DeepSearchFn,
  type ReviewPlySnapshot,
} from './reviewDeepPass.js';

function ply(partial: Partial<ReviewPlySnapshot>): ReviewPlySnapshot {
  return {
    index: 12,
    san: 'e4',
    playedUci: 'e2e4',
    fenBefore: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    fenAfter: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
    evalBefore: 0.3,
    evalAfter: -2.4,
    mateBefore: null,
    mateAfter: null,
    bestMoveUci: 'e2e4',
    altEval: 0.2,
    altMate: null,
    olderEval: 0.25,
    olderMate: null,
    book: false,
    categoryId: CATEGORY_IDS.BLUNDER,
    label: '💀 Blunder',
    ...partial,
  };
}

function evals(pawns: number, bestMoveUci = 'e2e4'): DeepSearchEval {
  return { pawns, mate: null, bestMoveUci, altEval: pawns, altMate: null };
}

function searchFromScript(
  script: Record<number, { before: DeepSearchEval; after: DeepSearchEval }>,
): DeepSearchFn {
  const start = ply({});
  return async (fens, depth) => {
    const pair = script[depth];
    assert.ok(pair, `unexpected depth ${depth}`);
    const map = new Map<string, DeepSearchEval>();
    for (const fen of fens) {
      const key = normalizeFenKey(fen);
      map.set(key, fen === start.fenAfter || key === normalizeFenKey(start.fenAfter) ? pair.after : pair.before);
    }
    return map;
  };
}

describe('reviewDeepPass', () => {
  it('selects engine #1 moves that were not labelled Best/Great/Brilliant', () => {
    assert.equal(shouldDeepReviewPly(ply({})), true);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.MISSED_WIN })), true);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.MISTAKE })), true);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.INACCURACY })), true);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.GOOD })), true);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.EXCELLENT })), true);
  });

  it('skips Best, Great, Brilliant, Book, and moves that were not the engine #1', () => {
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.BEST, label: '✅ Best' })), false);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.GREAT })), false);
    assert.equal(shouldDeepReviewPly(ply({ categoryId: CATEGORY_IDS.BRILLIANT })), false);
    assert.equal(shouldDeepReviewPly(ply({ book: true, categoryId: CATEGORY_IDS.BOOK })), false);
    assert.equal(shouldDeepReviewPly(ply({ playedUci: 'd2d4', bestMoveUci: 'e2e4' })), false);
  });

  it('orders pass-2 as blunder, miss, mistake, inaccuracy, good, excellent', () => {
    const ordered = prioritizeDeepReviewPlies([
      ply({ index: 2, categoryId: CATEGORY_IDS.EXCELLENT }),
      ply({ index: 4, categoryId: CATEGORY_IDS.GOOD }),
      ply({ index: 6, categoryId: CATEGORY_IDS.MISTAKE }),
      ply({ index: 8, categoryId: CATEGORY_IDS.MISSED_WIN }),
      ply({ index: 10, categoryId: CATEGORY_IDS.BLUNDER }),
      ply({ index: 12, categoryId: CATEGORY_IDS.INACCURACY }),
    ]);
    assert.deepEqual(
      ordered.map((item) => item.categoryId),
      [
        CATEGORY_IDS.BLUNDER,
        CATEGORY_IDS.MISSED_WIN,
        CATEGORY_IDS.MISTAKE,
        CATEGORY_IDS.INACCURACY,
        CATEGORY_IDS.GOOD,
        CATEGORY_IDS.EXCELLENT,
      ],
    );
  });

  it('collects parent and child FENs once', () => {
    const a = ply({ index: 2 });
    const b = ply({
      index: 3,
      fenBefore: a.fenAfter,
      fenAfter: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    });
    const fens = uniqueFensForDeepReview([a, b]);
    assert.equal(fens.length, 3);
  });

  it('reports a change when deeper search upgrades Blunder to Best', () => {
    const start = ply({});
    const next = classifyDeepReviewPly(start, evals(0.3), evals(0.32, 'e7e5'));
    assert.equal(next.categoryId, CATEGORY_IDS.BEST);
    assert.equal(deepReviewAnalysisChanged(start, next), true);
  });

  it('does not rewrite when the deeper search agrees', () => {
    const start = ply({
      evalAfter: 0.3,
      categoryId: CATEGORY_IDS.BEST,
      label: '✅ Best',
    });
    assert.equal(
      deepReviewAnalysisChanged(start, {
        evalScore: 0.32,
        bestMove: 'e2e4',
        label: '✅ Best',
      }),
      false,
    );
  });

  it('explains a recovered Best as horizon-effect', () => {
    const start = ply({});
    const next = classifyDeepReviewPly(start, evals(0.3), evals(0.32, 'e7e5'));
    const judged = judgeDeepReviewPly(start, next, evals(0.3), evals(0.32, 'e7e5'), null, false);
    assert.equal(judged.reason, 'horizon-effect');
  });

  it('explains a changed engine #1 as shallow-best-wrong', () => {
    const start = ply({});
    const before = evals(0.3, 'd2d4');
    const after = evals(-2.4, 'e7e5');
    const next = classifyDeepReviewPly(start, before, after);
    const judged = judgeDeepReviewPly(start, next, before, after, null, false);
    assert.equal(judged.reason, 'shallow-best-wrong');
    assert.notEqual(next.bestMove, start.playedUci);
  });

  it('forces Best when max depth still says the played move is engine #1', () => {
    const start = ply({});
    const before = evals(0.3);
    const after = evals(-2.4);
    const next = classifyDeepReviewPly(start, before, after);
    assert.equal(next.categoryId, CATEGORY_IDS.BLUNDER);
    const judged = judgeDeepReviewPly(start, next, before, after, null, true);
    assert.equal(judged.reason, 'trusted-pv');
    assert.equal(judged.categoryId, CATEGORY_IDS.BEST);
  });

  it('raises depth until a horizon-effect Best is found', async () => {
    const start = ply({});
    const depths: number[] = [];
    const search = searchFromScript({
      18: { before: evals(0.3), after: evals(-2.4) },
      20: { before: evals(0.3), after: evals(0.32, 'e7e5') },
    });
    const wrapped: DeepSearchFn = async (fens, depth) => {
      depths.push(depth);
      return search(fens, depth);
    };
    const updates: Array<{ index: number; categoryId?: string; label: string | null }> = [];
    await runSecondReviewPass({
      candidates: [start],
      search: wrapped,
      onUpdate: (index, next) => updates.push({ index, label: next.label }),
      isCancelled: () => false,
    });
    assert.deepEqual(depths, [18, 20]);
    assert.equal(updates.length, 1);
    assert.equal(updates[0]?.index, 12);
    assert.equal(pass2Depths()[0], PASS2_MIN_DEPTH);
  });

  it('raises depth per move, not as extra global passes', async () => {
    const first = ply({ index: 12, san: 'e4' });
    const second = ply({
      index: 13,
      san: 'e5',
      fenBefore: first.fenAfter,
      fenAfter: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
    });
    const calls: Array<{ fens: number; depth: number }> = [];
    const search: DeepSearchFn = async (fens, depth) => {
      calls.push({ fens: fens.length, depth });
      const map = new Map<string, DeepSearchEval>();
      const isSecond = fens.some(
        (fen) => normalizeFenKey(fen) === normalizeFenKey(second.fenAfter),
      );
      for (const fen of fens) {
        const key = normalizeFenKey(fen);
        const isAfter = isSecond
          ? key === normalizeFenKey(second.fenAfter)
          : key === normalizeFenKey(first.fenAfter);
        if (isSecond && depth < 20 && isAfter) {
          map.set(key, evals(-2.4));
        } else if (isAfter) {
          map.set(key, evals(0.32, 'e7e5'));
        } else {
          map.set(key, evals(0.3));
        }
      }
      return map;
    };
    await runSecondReviewPass({
      candidates: [first, second],
      search,
      onUpdate: () => {},
      isCancelled: () => false,
    });
    assert.deepEqual(calls, [
      { fens: 2, depth: 18 },
      { fens: 2, depth: 18 },
      { fens: 2, depth: 20 },
    ]);
  });

  it('searches engine-#1 blunders before excellents', async () => {
    const excellent = ply({
      index: 4,
      san: 'e4',
      categoryId: CATEGORY_IDS.EXCELLENT,
      evalAfter: 0.2,
    });
    const blunder = ply({
      index: 20,
      san: 'Be2',
      categoryId: CATEGORY_IDS.BLUNDER,
      fenBefore: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
      fenAfter: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPBPPP/RNBQK1NR b KQkq - 1 2',
    });
    const order: string[] = [];
    const search: DeepSearchFn = async (fens) => {
      const isBlunder = fens.some(
        (fen) => normalizeFenKey(fen) === normalizeFenKey(blunder.fenAfter),
      );
      order.push(isBlunder ? 'blunder' : 'excellent');
      const map = new Map<string, DeepSearchEval>();
      for (const fen of fens) {
        map.set(normalizeFenKey(fen), evals(0.32, 'e7e5'));
      }
      return map;
    };
    await runSecondReviewPass({
      candidates: [excellent, blunder],
      search,
      onUpdate: () => {},
      isCancelled: () => false,
    });
    assert.deepEqual(order, ['blunder', 'excellent']);
  });

  it('stops early when evals stay stable and still not Best', async () => {
    const start = ply({});
    const depths: number[] = [];
    const search = searchFromScript({
      18: { before: evals(0.3), after: evals(-2.4) },
      20: { before: evals(0.3), after: evals(-2.35) },
    });
    const wrapped: DeepSearchFn = async (fens, depth) => {
      depths.push(depth);
      return search(fens, depth);
    };
    const updates: Array<{ label: string | null }> = [];
    await runSecondReviewPass({
      candidates: [start],
      search: wrapped,
      onUpdate: (_index, next) => updates.push({ label: next.label }),
      isCancelled: () => false,
    });
    assert.deepEqual(depths, [18, 20]);
    assert.equal(updates[updates.length - 1]?.label, '✅ Best');
  });
});
