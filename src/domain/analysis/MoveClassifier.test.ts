import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { MoveClassifier } from './MoveClassifier';
import { evaluationToExpectedPoints } from './EvaluationConverter';
import { calculateExpectedPointsLoss } from './ExpectedPoints';
import type { ClassificationContext } from './ClassificationContext';
import type { EngineScore } from './MoveAnalysis';

const classifier = new MoveClassifier();

function cp(value: number): EngineScore {
  return { type: 'cp', value };
}

function mate(value: number): EngineScore {
  return { type: 'mate', value };
}

function context(partial: Partial<ClassificationContext> & Pick<ClassificationContext, 'beforeScore' | 'afterScore' | 'playerColor'>): ClassificationContext {
  const loss = calculateExpectedPointsLoss(partial.beforeScore, partial.afterScore, partial.playerColor);
  const before = evaluationToExpectedPoints(
    partial.playerColor === 'b'
      ? partial.beforeScore.type === 'cp'
        ? { type: 'cp', value: -partial.beforeScore.value }
        : { type: 'mate', value: -partial.beforeScore.value }
      : partial.beforeScore,
  );
  const after = evaluationToExpectedPoints(
    partial.playerColor === 'b'
      ? partial.afterScore.type === 'cp'
        ? { type: 'cp', value: -partial.afterScore.value }
        : { type: 'mate', value: -partial.afterScore.value }
      : partial.afterScore,
  );
  return {
    bestMove: 'e2e4',
    playedMove: 'd2d4',
    expectedPointsBefore: before,
    expectedPointsAfter: after,
    expectedPointsLoss: loss,
    ...partial,
  };
}

describe('evaluationToExpectedPoints', () => {
  it('maps equality near 0.5 and does not treat mate as centipawns', () => {
    const equal = evaluationToExpectedPoints(cp(0));
    assert.ok(Math.abs(equal - 0.5) < 1e-9);
    assert.equal(evaluationToExpectedPoints(mate(1)), 1);
    assert.equal(evaluationToExpectedPoints(mate(-3)), 0);
    assert.ok(evaluationToExpectedPoints(cp(1000)) < 1);
    assert.ok(evaluationToExpectedPoints(mate(1)) > evaluationToExpectedPoints(cp(1000)));
  });
});

describe('calculateExpectedPointsLoss', () => {
  it('uses the mover perspective and stays non-negative', () => {
    const whiteLoss = calculateExpectedPointsLoss(cp(30), cp(-120), 'w');
    const sameSwingWhenAlreadyWinning = calculateExpectedPointsLoss(cp(500), cp(350), 'w');
    assert.ok(whiteLoss > sameSwingWhenAlreadyWinning);
    assert.ok(whiteLoss > 0);

    const blackLoss = calculateExpectedPointsLoss(cp(-40), cp(80), 'b');
    assert.ok(blackLoss > 0);
    const blackPlayedTheBest = calculateExpectedPointsLoss(cp(-40), cp(-40), 'b');
    assert.equal(blackPlayedTheBest, 0);
  });
});

describe('MoveClassifier', () => {
  it('labels ordinary bands from expected-points loss', () => {
    assert.equal(classifier.classify(context({ beforeScore: cp(20), afterScore: cp(20), playerColor: 'w' })).toString(), 'BEST');
    assert.equal(
      classifier.classify(context({ beforeScore: cp(0), afterScore: cp(-12), playerColor: 'w' })),
      'EXCELLENT',
    );
    assert.equal(
      classifier.classify(context({ beforeScore: cp(0), afterScore: cp(-40), playerColor: 'w' })),
      'GOOD',
    );
    assert.equal(
      classifier.classify(context({ beforeScore: cp(0), afterScore: cp(-80), playerColor: 'w' })),
      'INACCURACY',
    );
    assert.equal(
      classifier.classify(context({ beforeScore: cp(0), afterScore: cp(-160), playerColor: 'w' })),
      'MISTAKE',
    );
    assert.equal(
      classifier.classify(context({ beforeScore: cp(0), afterScore: cp(-400), playerColor: 'w' })),
      'BLUNDER',
    );
  });

  it('treats delivering mate from an equal position as Great', () => {
    assert.equal(
      classifier.classify(context({ beforeScore: cp(40), afterScore: mate(1), playerColor: 'w', playedMove: 'h5f7', bestMove: 'h5f7' })),
      'GREAT',
    );
  });

  it('treats throwing away a mate as a blunder, not a centipawn swing', () => {
    assert.equal(
      classifier.classify(context({ beforeScore: mate(1), afterScore: mate(-1), playerColor: 'w' })),
      'BLUNDER',
    );
    assert.equal(
      classifier.classify(context({ beforeScore: mate(2), afterScore: mate(1), playerColor: 'w' })),
      'BEST',
    );
  });

  it('does not mark a quiet best move as Great', () => {
    assert.equal(
      classifier.classify(
        context({
          beforeScore: cp(25),
          afterScore: cp(20),
          playerColor: 'w',
          bestMove: 'e2e4',
          playedMove: 'e2e4',
          secondBestScore: cp(18),
        }),
      ),
      'BEST',
    );
  });

  it('marks Great when a losing position finds a saving move', () => {
    assert.equal(
      classifier.classify(
        context({
          beforeScore: cp(-250),
          afterScore: cp(20),
          playerColor: 'w',
          bestMove: 'a1a8',
          playedMove: 'a1a8',
        }),
      ),
      'GREAT',
    );
  });

  it('marks Miss only when the opponent created a chance that was given back', () => {
    const withoutContext = classifier.classify(
      context({
        beforeScore: cp(90),
        afterScore: cp(20),
        playerColor: 'w',
      }),
    );
    assert.notEqual(withoutContext, 'MISS');

    assert.equal(
      classifier.classify(
        context({
          beforeScore: cp(90),
          afterScore: cp(20),
          playerColor: 'w',
          scoreBeforeOpponentMove: cp(0),
        }),
      ),
      'MISS',
    );
  });

  it('marks a sound exchange sacrifice Brilliant and a collapsing one a blunder', () => {
    const fenBefore = '3rrbk1/2q2ppp/p5b1/1p1NnN1n/2pP4/2P4P/PP3RB1/R1BQ3K b - - 1 29';
    const fenAfter = '4rbk1/2q2ppp/p5b1/1p1rnN1n/2pP4/2P4P/PP3RB1/R1BQ3K w - - 0 30';
    assert.equal(
      classifier.classify(
        context({
          beforeScore: cp(-297),
          afterScore: cp(-370),
          playerColor: 'b',
          bestMove: 'e5d3',
          playedMove: 'd8d5',
          fenBefore,
          fenAfter,
        }),
      ),
      'BRILLIANT',
    );
    const collapsing = classifier.classify(
      context({
        beforeScore: cp(-40),
        afterScore: cp(220),
        playerColor: 'b',
        bestMove: 'g6f5',
        playedMove: 'd8d5',
        fenBefore,
        fenAfter,
      }),
    );
    assert.equal(collapsing, 'BLUNDER');
  });
});
