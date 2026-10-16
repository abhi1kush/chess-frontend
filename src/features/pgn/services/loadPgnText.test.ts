import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { looksLikePgn, tryParsePgnText } from './loadPgnText';

const samplePgn = `[Event "Casual"]
[White "Alice"]
[Black "Bob"]
[Result "1-0"]

1. e4 e5 2. Qh5 Nc6 3. Bc4 Nf6 4. Qxf7# 1-0`;

describe('tryParsePgnText', () => {
  it('parses a PGN with headers and moves', () => {
    const result = tryParsePgnText(samplePgn);
    assert.equal(result.ok, true);
    if (result.ok) {
      assert.equal(result.game.moves.length, 7);
      assert.equal(result.game.whitePlayerName, 'Alice');
    }
  });
  it('rejects empty text', () => {
    assert.equal(tryParsePgnText('   ').ok, false);
  });
  it('rejects illegal moves with a readable error', () => {
    const result = tryParsePgnText('1. e4 e5 2. Ke5');
    assert.equal(result.ok, false);
    if (!result.ok) assert.match(result.error, /^Invalid PGN/);
  });
  it('rejects random text', () => {
    assert.equal(tryParsePgnText('hello world').ok, false);
  });
});

describe('looksLikePgn', () => {
  it('detects headers and move text', () => {
    assert.equal(looksLikePgn(samplePgn), true);
    assert.equal(looksLikePgn('1. d4 d5'), true);
    assert.equal(looksLikePgn('just some text'), false);
  });
});
