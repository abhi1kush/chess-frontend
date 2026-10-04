import type { EngineInfo } from '../../engine/services/types';
import { normalizeFenKey } from '../../engine/services/stockfishFenCache';
import { scoreForTerminalPosition } from '../domain';
import { CATEGORY_IDS, DISPLAY, classifyMove, normalizeUci } from './classifyMove';

/** First review pass: one search per ply. */
export const REVIEW_DEPTH = 16;
/** Second pass only: raise this move's depth until the #1-vs-Best gap is explained. */
export const PASS2_MIN_DEPTH = 18;
export const PASS2_MAX_DEPTH = 24;
export const PASS2_DEPTH_STEP = 2;

export function pass2Depths(): number[] {
  const depths: number[] = [];
  for (let depth = PASS2_MIN_DEPTH; depth <= PASS2_MAX_DEPTH; depth += PASS2_DEPTH_STEP) {
    depths.push(depth);
  }
  return depths;
}

const ACCEPTABLE_BEST_CATEGORIES = new Set([
  CATEGORY_IDS.BEST,
  CATEGORY_IDS.BRILLIANT,
  CATEGORY_IDS.GREAT,
]);

/** Lower number is searched first. Great / Brilliant / Best are never queued. */
const PASS2_PRIORITY: Record<string, number> = {
  [CATEGORY_IDS.BLUNDER]: 0,
  [CATEGORY_IDS.MISSED_WIN]: 1,
  [CATEGORY_IDS.MISTAKE]: 2,
  [CATEGORY_IDS.INACCURACY]: 3,
  [CATEGORY_IDS.GOOD]: 4,
  [CATEGORY_IDS.EXCELLENT]: 5,
};

export function pass2Priority(categoryId: string): number | null {
  if (!Object.prototype.hasOwnProperty.call(PASS2_PRIORITY, categoryId)) return null;
  return PASS2_PRIORITY[categoryId];
}

export function prioritizeDeepReviewPlies(plies: ReviewPlySnapshot[]): ReviewPlySnapshot[] {
  return [...plies].sort((a, b) => {
    const pa = pass2Priority(a.categoryId) ?? Number.POSITIVE_INFINITY;
    const pb = pass2Priority(b.categoryId) ?? Number.POSITIVE_INFINITY;
    if (pa !== pb) return pa - pb;
    return a.index - b.index;
  });
}

export type ReviewPlySnapshot = {
  index: number;
  san?: string;
  playedUci: string;
  fenBefore: string;
  fenAfter: string;
  evalBefore: number | null;
  evalAfter: number | null;
  mateBefore: number | null;
  mateAfter: number | null;
  bestMoveUci: string;
  altEval: number | null;
  altMate: number | null;
  olderEval: number | null;
  olderMate: number | null;
  book: boolean;
  categoryId: string;
  label: string | null;
};

export type DeepSearchEval = {
  pawns: number | null;
  mate: number | null;
  bestMoveUci: string;
  altEval: number | null;
  altMate: number | null;
};

export type DeepReviewReason =
  | 'horizon-effect'
  | 'shallow-best-wrong'
  | 'stable-not-best'
  | 'trusted-pv'
  | 'still-open';

export type DeepReviewJudgement = {
  evalScore: number | null;
  bestMove: string;
  label: string | null;
  categoryId: string;
  evalBefore: number | null;
  mateBefore: number | null;
  evalAfter: number | null;
  mateAfter: number | null;
  reason: DeepReviewReason;
};

export type DeepSearchFn = (
  fens: string[],
  depth: number,
) => Promise<Map<string, DeepSearchEval>>;

/**
 * Played the engine #1 move, but the label is not Best/Great/Brilliant.
 * That usually means depth-16 evals were inconsistent (horizon effect)
 * or the reported best move was wrong.
 */
export function shouldDeepReviewPly(ply: ReviewPlySnapshot): boolean {
  if (ply.book || ply.index < 1) return false;
  if (pass2Priority(ply.categoryId) == null) return false;
  const played = normalizeUci(ply.playedUci);
  const best = normalizeUci(ply.bestMoveUci);
  return Boolean(played && best && played === best);
}

export function evalFromReviewInfo(fen: string, info: EngineInfo): DeepSearchEval {
  const terminal = scoreForTerminalPosition(fen);
  if (terminal) {
    return {
      pawns: terminal.value > 0 ? 10 : -10,
      mate: terminal.value,
      bestMoveUci: info.bestMoveUci ?? '',
      altEval: null,
      altMate: null,
    };
  }
  const pawns =
    info.eval?.pawns != null && Number.isFinite(info.eval.pawns) ? info.eval.pawns : null;
  const altEval =
    info.secondEval?.pawns != null && Number.isFinite(info.secondEval.pawns)
      ? info.secondEval.pawns
      : null;
  return {
    pawns,
    mate: info.eval?.mate ?? null,
    bestMoveUci: info.bestMoveUci ?? '',
    altEval,
    altMate: info.secondEval?.mate ?? null,
  };
}

export function uniqueFensForDeepReview(plies: ReviewPlySnapshot[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const ply of plies) {
    for (const fen of [ply.fenBefore, ply.fenAfter]) {
      const key = normalizeFenKey(fen);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(fen);
    }
  }
  return out;
}

export function classifyDeepReviewPly(
  ply: ReviewPlySnapshot,
  before: DeepSearchEval,
  after: DeepSearchEval,
): { evalScore: number | null; bestMove: string; label: string | null; categoryId: string } {
  const classified =
    before.pawns != null && after.pawns != null
      ? classifyMove({
          evalBefore: before.pawns,
          evalAfter: after.pawns,
          bestMoveUci: before.bestMoveUci,
          playedUci: ply.playedUci,
          fenBefore: ply.fenBefore,
          fenAfter: ply.fenAfter,
          altEval: before.altEval,
          scoreBeforeOpponent: ply.olderEval,
          mateBefore: before.mate,
          mateAfter: after.mate,
          mateBeforeOpponent: ply.olderMate,
          mateSecond: before.altMate,
          book: ply.book,
        })
      : null;
  return {
    evalScore: after.pawns,
    bestMove: before.bestMoveUci,
    label: classified ? classified.label : ply.label,
    categoryId: classified ? classified.categoryId : ply.categoryId,
  };
}

export function deepReviewAnalysisChanged(
  ply: ReviewPlySnapshot,
  next: { evalScore: number | null; bestMove: string; label: string | null },
): boolean {
  if ((next.label ?? '') !== (ply.label ?? '')) return true;
  if (normalizeUci(next.bestMove) !== normalizeUci(ply.bestMoveUci)) return true;
  if (ply.evalAfter == null && next.evalScore == null) return false;
  if (ply.evalAfter == null || next.evalScore == null) return true;
  return Math.abs(ply.evalAfter - next.evalScore) >= 0.05;
}

export function formatPlyRef(index: number): string {
  const n = Math.ceil(index / 2);
  return index % 2 === 1 ? `${n}.` : `${n}...`;
}

function categoryName(categoryId: string): string {
  return DISPLAY[categoryId]?.name ?? (categoryId || 'unknown');
}

function plyRef(ply: ReviewPlySnapshot): string {
  const name = ply.san ? ` ${ply.san}` : '';
  return `${formatPlyRef(ply.index)}${name}`;
}

function pickReason(ply: ReviewPlySnapshot): string {
  return `engine says best move but classified as ${categoryName(ply.categoryId)}`;
}

function bestLabel(): string {
  const u = DISPLAY[CATEGORY_IDS.BEST];
  return u.emoji ? `${u.emoji} ${u.name}` : u.name;
}

function resultReason(
  judged: DeepReviewJudgement | null,
  depth: number,
): string {
  if (!judged) {
    return 'still unresolved';
  }
  const to = categoryName(judged.categoryId);
  if (judged.reason === 'horizon-effect') {
    return `now ${to} at d${depth}`;
  }
  if (judged.reason === 'shallow-best-wrong') {
    return `engine #1 changed to ${judged.bestMove || '—'} (${to}) at d${depth}`;
  }
  if (judged.reason === 'trusted-pv') {
    return `engine still says #1; forced to Best at d${depth} (eval drop was noise)`;
  }
  if (judged.reason === 'stable-not-best') {
    return `engine still says #1 but still ${to} at d${depth}`;
  }
  return `still ${to} at d${depth}`;
}

export function judgeDeepReviewPly(
  ply: ReviewPlySnapshot,
  next: { evalScore: number | null; bestMove: string; label: string | null; categoryId: string },
  before: DeepSearchEval,
  after: DeepSearchEval,
  previous: DeepReviewJudgement | null,
  isMaxDepth: boolean,
): DeepReviewJudgement {
  const judgement: DeepReviewJudgement = {
    ...next,
    evalBefore: before.pawns,
    mateBefore: before.mate,
    evalAfter: after.pawns,
    mateAfter: after.mate,
    reason: 'still-open',
  };
  if (ACCEPTABLE_BEST_CATEGORIES.has(next.categoryId)) {
    judgement.reason = 'horizon-effect';
    return judgement;
  }
  if (normalizeUci(next.bestMove) !== normalizeUci(ply.playedUci)) {
    judgement.reason = 'shallow-best-wrong';
    return judgement;
  }
  const stable =
    previous != null &&
    previous.categoryId === next.categoryId &&
    normalizeUci(previous.bestMove) === normalizeUci(next.bestMove) &&
    previous.evalAfter != null &&
    next.evalScore != null &&
    Math.abs(previous.evalAfter - next.evalScore) < 0.08;
  if (isMaxDepth || stable) {
    if (normalizeUci(next.bestMove) === normalizeUci(ply.playedUci)) {
      judgement.categoryId = CATEGORY_IDS.BEST;
      judgement.label = bestLabel();
      judgement.reason = 'trusted-pv';
      return judgement;
    }
    judgement.reason = 'stable-not-best';
  }
  return judgement;
}

function evalForFen(
  byFen: Map<string, DeepSearchEval>,
  fen: string,
): DeepSearchEval | undefined {
  return byFen.get(normalizeFenKey(fen)) ?? byFen.get(fen);
}

/**
 * One background pass only. For each picked move, raise depth until that
 * move is explained (or PASS2_MAX_DEPTH). There is no third pass.
 */
export async function runSecondReviewPass(args: {
  candidates: ReviewPlySnapshot[];
  search: DeepSearchFn;
  onUpdate: (index: number, next: { evalScore: number | null; bestMove: string; label: string | null }) => void;
  isCancelled: () => boolean;
}): Promise<void> {
  const { search, onUpdate, isCancelled } = args;
  const candidates = prioritizeDeepReviewPlies(args.candidates);
  const depths = pass2Depths();
  if (!candidates.length) {
    console.log('[review] pass-2: 0 moves');
    return;
  }

  console.log(
    `[review] pass-2: ${candidates.length} moves ` +
      `(order: blunder, miss, mistake, inaccuracy, good, excellent)`,
  );

  const updatedIndexes = new Set<number>();

  for (const candidate of candidates) {
    if (isCancelled()) return;
    let ply = { ...candidate };
    let previous: DeepReviewJudgement | null = null;
    let finished: DeepReviewJudgement | null = null;
    let finishedDepth = PASS2_MAX_DEPTH;

    for (let i = 0; i < depths.length; i++) {
      if (isCancelled()) return;
      const depth = depths[i];
      const isMaxDepth = i === depths.length - 1;
      const fensToSearch = uniqueFensForDeepReview([ply]);
      const byFen = await search(fensToSearch, depth);
      if (isCancelled()) return;

      const before = evalForFen(byFen, ply.fenBefore);
      const after = evalForFen(byFen, ply.fenAfter);
      if (!before || !after) {
        continue;
      }
      const classified = classifyDeepReviewPly(ply, before, after);
      const judged = judgeDeepReviewPly(ply, classified, before, after, previous, isMaxDepth);
      const toStore = {
        evalScore: judged.evalScore,
        bestMove: judged.bestMove,
        label: judged.label,
      };
      if (deepReviewAnalysisChanged(ply, toStore)) {
        onUpdate(ply.index, toStore);
        updatedIndexes.add(ply.index);
        ply = {
          ...ply,
          evalBefore: judged.evalBefore,
          evalAfter: judged.evalAfter,
          mateBefore: judged.mateBefore,
          mateAfter: judged.mateAfter,
          bestMoveUci: judged.bestMove,
          label: judged.label,
          categoryId: judged.categoryId,
        };
      }
      if (judged.reason === 'still-open') {
        previous = judged;
        continue;
      }
      finished = judged;
      finishedDepth = depth;
      break;
    }

    console.log(
      `  ${plyRef(candidate)}  ${pickReason(candidate)}  →  ${resultReason(finished, finishedDepth)}`,
    );
  }

  console.log(`[review] pass-2 done: ${candidates.length} moves, ${updatedIndexes.size} updated`);
}
