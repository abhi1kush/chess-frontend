/**
 * Petroff key moves under the expected-points classifier.
 * Evals are Stockfish lite MultiPV=2 at depth 12 (White POV).
 * Labels follow expected-points loss. Miss needs the score from before
 * the opponent's move, which these rows do not include, so a Chess.com
 * "Miss" shows up here as its ordinary band.
 */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { Chess } from 'chess.js';
import { classifyMove, isOpeningBookMove, CATEGORY_IDS } from './classifyMove.js';

const PGN =
  '1. e4 e5 2. Nf3 Nf6 3. d3 d6 4. c3 Bg4 5. Nbd2 Nbd7 6. Qc2 Be7 7. Be2 O-O 8. O-O c6 9. Re1 a6 10. Bf1 b5 11. h3 Bh5 12. g3 Qc7 13. Bg2 c5 14. Nf1 Bg6 15. N3d2 Rac8 16. Ne3 Rfd8 17. Rf1 Bf8 18. f4 exf4 19. gxf4 Bh5 20. Kh1 c4 21. d4 Be2 22. Rf2 Bd3 23. Qd1 Re8 24. e5 dxe5 25. fxe5 Bg6 26. Ndf1 Nh5 27. Nf5 Rcd8 28. N1e3 Nxe5 29. Nd5 Rxd5 30. Bxd5 Bxf5 31. Rxf5 Ng3+ 32. Kg2 Nxf5 33. dxe5 Qxe5 34. Bf3 Qg3+ 35. Kf1 Bc5 36. Qd2 Qg1#';

const KEY: Record<
  string,
  {
    want: string;
    evalBefore: number;
    evalAfter: number;
    best: string;
    altEval: number;
  }
> = {
  '17b': { want: CATEGORY_IDS.MISTAKE, evalBefore: -0.76, evalAfter: 0.62, best: 'd6d5', altEval: -0.64 },
  '18w': { want: CATEGORY_IDS.INACCURACY, evalBefore: 0.62, evalAfter: -0.2, best: 'b2b3', altEval: 0.62 },
  '18b': { want: CATEGORY_IDS.BEST, evalBefore: -0.2, evalAfter: -0.23, best: 'e5f4', altEval: 0.22 },
  '20w': { want: CATEGORY_IDS.GOOD, evalBefore: 0.56, evalAfter: 0.05, best: 'f1f2', altEval: 0.51 },
  '21b': { want: CATEGORY_IDS.BEST, evalBefore: -0.39, evalAfter: -0.4, best: 'h5e2', altEval: 0.17 },
  '22b': { want: CATEGORY_IDS.EXCELLENT, evalBefore: -0.51, evalAfter: -0.45, best: 'e2d3', altEval: 0.3 },
  '28w': { want: CATEGORY_IDS.BLUNDER, evalBefore: 0.84, evalAfter: -2.94, best: 'd1g4', altEval: 0.47 },
  '28b': { want: CATEGORY_IDS.GREAT, evalBefore: -2.94, evalAfter: -2.96, best: 'd7e5', altEval: -0.81 },
  '29b': { want: CATEGORY_IDS.BRILLIANT, evalBefore: -2.97, evalAfter: -3.7, best: 'e5d3', altEval: -2.43 },
  '31b': { want: CATEGORY_IDS.GREAT, evalBefore: -3.31, evalAfter: -3.4, best: 'h5g3', altEval: -1.81 },
};

function plyLabel(i: number) {
  return `${Math.floor(i / 2) + 1}${i % 2 === 0 ? 'w' : 'b'}`;
}

describe('Chess.com Petroff benchmark key moves', () => {
  const game = new Chess();
  game.loadPgn(PGN);
  const verbose = game.history({ verbose: true });
  const replay = new Chess();
  const prefix: string[] = [];

  it('marks the first five plies as Book', () => {
    const bookUcis = ['e2e4', 'e7e5', 'g1f3', 'g8f6', 'd2d3'];
    const acc: string[] = [];
    for (const u of bookUcis) {
      acc.push(u);
      assert.equal(isOpeningBookMove(acc), true);
    }
    acc.push('d7d6');
    assert.equal(isOpeningBookMove(acc), false);
  });

  for (let i = 0; i < verbose.length; i++) {
    const m = verbose[i];
    const fenBefore = replay.fen();
    const uci = `${m.from}${m.to}${m.promotion || ''}`;
    prefix.push(uci);
    replay.move(m);
    const label = plyLabel(i);
    const spec = KEY[label];
    if (!spec) continue;

    it(`${label} ${m.san} is ${spec.want}`, () => {
      const r = classifyMove({
        evalBefore: spec.evalBefore,
        evalAfter: spec.evalAfter,
        bestMoveUci: spec.best,
        playedUci: uci,
        fenBefore,
        fenAfter: replay.fen(),
        altEval: spec.altEval,
        book: isOpeningBookMove(prefix),
      });
      assert.equal(r.categoryId, spec.want);
    });
  }
});
