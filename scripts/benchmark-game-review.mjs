/**
 * Review the Chess.com benchmark PGN with Stockfish lite and print
 * our classifications vs the labeled key moves and category totals.
 */
import { spawn } from 'node:child_process';
import { copyFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { Chess } = require('chess.js');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stockfishSrc = path.join(root, 'public/stockfish/stockfish-17-lite-single.js');
const stockfishWasm = path.join(root, 'public/stockfish/stockfish-17-lite-single.wasm');
const tmpDir = os.tmpdir();
const stockfishJs = path.join(tmpDir, 'stockfish-17-lite-single.cjs');
copyFileSync(stockfishSrc, stockfishJs);
copyFileSync(stockfishWasm, path.join(tmpDir, 'stockfish-17-lite-single.wasm'));

const PGN =
  '1. e4 e5 2. Nf3 Nf6 3. d3 d6 4. c3 Bg4 5. Nbd2 Nbd7 6. Qc2 Be7 7. Be2 O-O 8. O-O c6 9. Re1 a6 10. Bf1 b5 11. h3 Bh5 12. g3 Qc7 13. Bg2 c5 14. Nf1 Bg6 15. N3d2 Rac8 16. Ne3 Rfd8 17. Rf1 Bf8 18. f4 exf4 19. gxf4 Bh5 20. Kh1 c4 21. d4 Be2 22. Rf2 Bd3 23. Qd1 Re8 24. e5 dxe5 25. fxe5 Bg6 26. Ndf1 Nh5 27. Nf5 Rcd8 28. N1e3 Nxe5 29. Nd5 Rxd5 30. Bxd5 Bxf5 31. Rxf5 Ng3+ 32. Kg2 Nxf5 33. dxe5 Qxe5 34. Bf3 Qg3+ 35. Kf1 Bc5 36. Qd2 Qg1#';

const KEY = {
  '17b': 'missed_win',
  '18w': 'missed_win',
  '18b': 'great',
  '20w': 'missed_win',
  '21b': 'great',
  '22b': 'great',
  '28w': 'blunder',
  '28b': 'great',
  '29b': 'brilliant',
  '31b': 'great',
};

const BENCH_TOTALS = {
  w: { brilliant: 0, great: 0, book: 3, best: 7, excellent: 9, good: 5, inaccuracy: 4, mistake: 5, missed_win: 2, blunder: 1 },
  b: { brilliant: 1, great: 5, book: 2, best: 8, excellent: 6, good: 5, inaccuracy: 6, mistake: 2, missed_win: 1, blunder: 0 },
};

function normalizeEval(score, fen) {
  return fen.split(/\s+/)[1] === 'w' ? score : -score;
}

function plyLabel(i) {
  const n = Math.floor(i / 2) + 1;
  return `${n}${i % 2 === 0 ? 'w' : 'b'}`;
}

function startEngine() {
  const child = spawn(process.execPath, [stockfishJs], {
    cwd: path.dirname(stockfishJs),
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  let buf = '';
  const waiters = [];
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (chunk) => {
    buf += chunk;
    const parts = buf.split(/\r?\n/);
    buf = parts.pop() ?? '';
    for (const line of parts) {
      if (line) waiters.forEach((w) => w(line));
    }
  });
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (chunk) => process.stderr.write(`[sf] ${chunk}`));
  child.on('exit', (code) => process.stderr.write(`[sf] exit ${code}\n`));
  const send = (cmd) => child.stdin.write(`${cmd}\n`);
  const waitFor = (pred, ms = 120000) =>
    new Promise((resolve, reject) => {
      const t = setTimeout(() => {
        waiters.splice(waiters.indexOf(onLine), 1);
        reject(new Error(`timeout waiting for ${pred}`));
      }, ms);
      const onLine = (line) => {
        if (pred(line)) {
          clearTimeout(t);
          waiters.splice(waiters.indexOf(onLine), 1);
          resolve(line);
        }
      };
      waiters.push(onLine);
    });
  return { send, waitFor, kill: () => child.kill('SIGTERM') };
}

async function analyzeFenInner(engine, fen, depth) {
  const collected = [];
  const finished = new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`timeout ${fen}`)), 120000);
    const pred = (line) => {
      if (line.startsWith('info')) collected.push(line);
      if (line.startsWith('bestmove')) {
        clearTimeout(t);
        resolve({ best: line, collected });
        return true;
      }
      return false;
    };
    engine.waitFor(pred, 120000).catch(reject);
  });
  engine.send(`position fen ${fen}`);
  engine.send(`go depth ${depth}`);
  const { best, collected: infos } = await finished;
  const pv = { 1: null, 2: null };
  const bestUci = best.split(/\s+/)[1] === '(none)' ? '' : best.split(/\s+/)[1] ?? '';
  for (const line of infos) {
    if (/\b(lowerbound|upperbound)\b/i.test(line)) continue;
    const mp = Number((line.match(/\bmultipv\s+(\d+)/i) || [])[1] || 1);
    const sc = line.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
    const pvm = line.match(/\bpv\s+(\S+)/i);
    if (!sc) continue;
    const raw = sc[1].toLowerCase() === 'cp' ? Number(sc[2]) / 100 : Number(sc[2]) > 0 ? 10 : -10;
    pv[mp] = {
      pawns: normalizeEval(raw, fen),
      uci: pvm?.[1] ?? '',
    };
  }
  return {
    fen,
    eval: pv[1]?.pawns ?? null,
    bestMoveUci: pv[1]?.uci || bestUci,
    altEval: pv[2]?.pawns ?? null,
    altMoveUci: pv[2]?.uci ?? '',
  };
}

const DEPTH = Number(process.env.REVIEW_DEPTH || 16);

const game = new Chess();
game.loadPgn(PGN);
const moves = game.history({ verbose: true });
const replay = new Chess();
const fens = [replay.fen()];
const sans = [];
const ucis = [];
for (const m of moves) {
  sans.push(m.san);
  ucis.push(`${m.from}${m.to}${m.promotion || ''}`);
  replay.move(m);
  fens.push(replay.fen());
}

const { classifyMove, isOpeningBookMove, CATEGORY_IDS } = await import(
  path.join(root, 'src/features/analysis/services/classifyMove.ts')
).catch(async () => {
  const { build } = await import('esbuild');
  const out = '/tmp/mc-bench.cjs';
  await build({
    entryPoints: [path.join(root, 'src/features/analysis/services/classifyMove.ts')],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    outfile: out,
  });
  return require(out);
});

const engine = startEngine();
engine.send('uci');
await engine.waitFor((l) => l === 'uciok');
engine.send('setoption name Threads value 1');
engine.send('setoption name Hash value 16');
engine.send('setoption name MultiPV value 2');
engine.send('isready');
await engine.waitFor((l) => l === 'readyok');
engine.send('ucinewgame');
engine.send('isready');
await engine.waitFor((l) => l === 'readyok');

const analyses = [];
for (let i = 0; i < fens.length; i++) {
  process.stderr.write(`analyzing ${i + 1}/${fens.length}\n`);
  analyses.push(await analyzeFenInner(engine, fens[i], DEPTH));
}
engine.send('quit');
engine.kill();

const playedPrefix = [];
const rows = [];
const counts = {
  w: Object.fromEntries(Object.keys(BENCH_TOTALS.w).map((k) => [k, 0])),
  b: Object.fromEntries(Object.keys(BENCH_TOTALS.b).map((k) => [k, 0])),
};
counts.w.unknown = 0;
counts.b.unknown = 0;

for (let i = 0; i < sans.length; i++) {
  playedPrefix.push(ucis[i].toLowerCase());
  const book = typeof isOpeningBookMove === 'function' ? isOpeningBookMove(playedPrefix) : false;
  const classified = classifyMove({
    evalBefore: analyses[i].eval,
    evalAfter: analyses[i + 1].eval,
    bestMoveUci: analyses[i].bestMoveUci,
    playedUci: ucis[i],
    fenBefore: fens[i],
    fenAfter: fens[i + 1],
    altEval: analyses[i].altEval,
    book,
  });
  const side = i % 2 === 0 ? 'w' : 'b';
  const id = classified.categoryId;
  if (id in counts[side]) counts[side][id] += 1;
  else counts[side].unknown += 1;
  rows.push({
    ply: i,
    label: plyLabel(i),
    san: sans[i],
    id,
    loss:
      side === 'w'
        ? Math.max(0, (analyses[i].eval ?? 0) - (analyses[i + 1].eval ?? 0))
        : Math.max(0, (analyses[i + 1].eval ?? 0) - (analyses[i].eval ?? 0)),
    evalBefore: analyses[i].eval,
    evalAfter: analyses[i + 1].eval,
    best: analyses[i].bestMoveUci,
    alt: analyses[i].altMoveUci,
    altEval: analyses[i].altEval,
    expected: KEY[plyLabel(i)] ?? null,
  });
}

console.log('\n=== Key moves ===');
for (const r of rows.filter((x) => x.expected)) {
  const mark = r.id === r.expected ? 'OK' : 'MISS';
  console.log(
    `${mark} ${r.label} ${r.san} got=${r.id} want=${r.expected} loss=${r.loss.toFixed(2)} before=${r.evalBefore} after=${r.evalAfter} best=${r.best} alt=${r.alt}/${r.altEval}`,
  );
}

console.log('\n=== Totals ours vs Chess.com ===');
for (const side of ['w', 'b']) {
  console.log(side === 'w' ? 'White' : 'Black');
  for (const k of Object.keys(BENCH_TOTALS[side])) {
    console.log(`  ${k.padEnd(12)} ours=${String(counts[side][k]).padStart(2)} bench=${BENCH_TOTALS[side][k]}`);
  }
}

console.log('\n=== All moves ===');
for (const r of rows) {
  console.log(
    `${r.label.padEnd(4)} ${r.san.padEnd(8)} ${r.id.padEnd(12)} loss=${r.loss.toFixed(2)} best=${r.best}`,
  );
}
