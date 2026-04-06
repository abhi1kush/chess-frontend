/**
 * Chess.com–style move quality from engine eval (White’s perspective, pawns)
 * and best vs played UCI. Not a full WDL model — tunable thresholds below.
 */

import { Chess } from 'chess.js';

/** Loss buckets (pawns) for the side that moved — positive = worsened their winning chances. */
export const THRESH_EXCELLENT = 0.05;
export const THRESH_GOOD = 0.15;
export const THRESH_INACCURACY = 0.35;
export const THRESH_MISTAKE = 0.9;

/** Strong winning eval (White POV) before the move — used for Missed Win. */
export const MISSED_WIN_WHITE = 3;
export const MISSED_WIN_BLACK = -3;
export const MISSED_WIN_MIN_LOSS = 0.02;

/** “Great”: clear eval gain vs static expectation when not playing engine best (rare). */
export const GREAT_IMPROVEMENT = 0.25;

/** Brilliant: material lost for mover but eval holds or improves (sacrifice that works). */
export const BRILLIANT_MAX_LOSS = 0.2;

const PIECE_VALUES = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };

export const CATEGORY_IDS = {
  BRILLIANT: 'brilliant',
  GREAT: 'great',
  BEST: 'best',
  EXCELLENT: 'excellent',
  GOOD: 'good',
  INACCURACY: 'inaccuracy',
  MISTAKE: 'mistake',
  BLUNDER: 'blunder',
  MISSED_WIN: 'missed_win',
  UNKNOWN: 'unknown',
};

/** @type {Record<string, { id: string; emoji: string; name: string }>} */
export const DISPLAY = {
  [CATEGORY_IDS.BRILLIANT]: { id: CATEGORY_IDS.BRILLIANT, emoji: '🔥', name: 'Brilliant' },
  [CATEGORY_IDS.GREAT]: { id: CATEGORY_IDS.GREAT, emoji: '⭐', name: 'Great' },
  [CATEGORY_IDS.BEST]: { id: CATEGORY_IDS.BEST, emoji: '✅', name: 'Best' },
  [CATEGORY_IDS.EXCELLENT]: { id: CATEGORY_IDS.EXCELLENT, emoji: '👍', name: 'Excellent' },
  [CATEGORY_IDS.GOOD]: { id: CATEGORY_IDS.GOOD, emoji: '🙂', name: 'Good' },
  [CATEGORY_IDS.INACCURACY]: { id: CATEGORY_IDS.INACCURACY, emoji: '⚠️', name: 'Inaccuracy' },
  [CATEGORY_IDS.MISTAKE]: { id: CATEGORY_IDS.MISTAKE, emoji: '❌', name: 'Mistake' },
  [CATEGORY_IDS.BLUNDER]: { id: CATEGORY_IDS.BLUNDER, emoji: '💀', name: 'Blunder' },
  [CATEGORY_IDS.MISSED_WIN]: { id: CATEGORY_IDS.MISSED_WIN, emoji: '🚫', name: 'Missed Win' },
  [CATEGORY_IDS.UNKNOWN]: { id: CATEGORY_IDS.UNKNOWN, emoji: '', name: '—' },
};

/**
 * Emoji shown on the board for a review category (empty if none).
 * @param {string} categoryId from {@link moveQualityClassFromLabel}
 */
export function categoryEmojiFromCategoryId(categoryId) {
  if (!categoryId) return '';
  return DISPLAY[categoryId]?.emoji ?? '';
}

/**
 * @param {string} uci
 */
export function normalizeUci(uci) {
  if (uci == null || typeof uci !== 'string') return '';
  return uci.trim().toLowerCase().replace(/\s+/g, '');
}

/**
 * @param {{ from?: string; to?: string; promotion?: string } | null | undefined} fromTo
 */
export function toUci(fromTo) {
  if (!fromTo) return '';
  const f = String(fromTo.from || '').toLowerCase();
  const t = String(fromTo.to || '').toLowerCase();
  const p = fromTo.promotion ? String(fromTo.promotion).toLowerCase() : '';
  return `${f}${t}${p}`;
}

/**
 * Full UCI including promotion from SAN on `fenBefore` (handles underpromotion).
 * @param {string} fenBefore
 * @param {string} san
 * @returns {string}
 */
export function playedUciFromSan(fenBefore, san) {
  try {
    const g = new Chess(fenBefore);
    const m = g.move(san);
    if (!m) return '';
    return `${m.from}${m.to}${m.promotion || ''}`.toLowerCase();
  } catch {
    return '';
  }
}

function materialForColor(fen, color) {
  try {
    const g2 = new Chess();
    if (!g2.load(fen)) return 0;
    let sum = 0;
    const board = g2.board();
    for (const row of board) {
      for (const sq of row) {
        if (!sq || sq.color !== color) continue;
        sum += PIECE_VALUES[sq.type] ?? 0;
      }
    }
    return sum;
  } catch {
    return 0;
  }
}

/**
 * @param {string} fenBefore
 * @param {string} fenAfter
 * @param {boolean} whiteMoved
 */
function isSacrificeCompensation(fenBefore, fenAfter, whiteMoved) {
  if (!fenBefore || !fenAfter) return false;
  const color = whiteMoved ? 'w' : 'b';
  const before = materialForColor(fenBefore, color);
  const after = materialForColor(fenAfter, color);
  return before > after + 0.5;
}

/**
 * @param {object} input
 * @param {number | null} input.evalBefore — White POV, position before the move
 * @param {number | null} input.evalAfter — White POV, position after the move
 * @param {string} [input.bestMoveUci]
 * @param {string} [input.playedUci]
 * @param {string} [input.fenBefore]
 * @param {string} [input.fenAfter]
 * @returns {{ categoryId: string; label: string; emoji: string; name: string }}
 */
export function classifyMove({
  evalBefore,
  evalAfter,
  bestMoveUci = '',
  playedUci = '',
  fenBefore = '',
  fenAfter = '',
}) {
  if (
    evalBefore == null ||
    evalAfter == null ||
    !Number.isFinite(evalBefore) ||
    !Number.isFinite(evalAfter)
  ) {
    const u = DISPLAY[CATEGORY_IDS.UNKNOWN];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }

  const parts = fenBefore.trim().split(/\s+/);
  const whiteMoved = parts[1] === 'w';

  const bestU = normalizeUci(bestMoveUci);
  const playedU = normalizeUci(playedUci);
  const isBest = Boolean(playedU && bestU && playedU === bestU);

  /** Positive = mover worsened their standing (lost expected points in eval terms). */
  const loss = whiteMoved
    ? Math.max(0, evalBefore - evalAfter)
    : Math.max(0, evalAfter - evalBefore);

  /** Positive = mover improved eval for their side (without engine “best” match). */
  const improvement = whiteMoved
    ? Math.max(0, evalAfter - evalBefore)
    : Math.max(0, evalBefore - evalAfter);

  if (isBest) {
    const u = DISPLAY[CATEGORY_IDS.BEST];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }

  if (fenBefore && fenAfter && isSacrificeCompensation(fenBefore, fenAfter, whiteMoved)) {
    const compOk = whiteMoved
      ? evalAfter >= evalBefore - BRILLIANT_MAX_LOSS
      : evalAfter <= evalBefore + BRILLIANT_MAX_LOSS;
    if (compOk) {
      const u = DISPLAY[CATEGORY_IDS.BRILLIANT];
      return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
    }
  }

  const wasWinningForMover = whiteMoved
    ? evalBefore >= MISSED_WIN_WHITE
    : evalBefore <= MISSED_WIN_BLACK;
  if (wasWinningForMover && loss >= MISSED_WIN_MIN_LOSS) {
    const u = DISPLAY[CATEGORY_IDS.MISSED_WIN];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }

  if (improvement >= GREAT_IMPROVEMENT) {
    const u = DISPLAY[CATEGORY_IDS.GREAT];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }

  if (loss <= THRESH_EXCELLENT) {
    const u = DISPLAY[CATEGORY_IDS.EXCELLENT];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }
  if (loss <= THRESH_GOOD) {
    const u = DISPLAY[CATEGORY_IDS.GOOD];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }
  if (loss <= THRESH_INACCURACY) {
    const u = DISPLAY[CATEGORY_IDS.INACCURACY];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }
  if (loss <= THRESH_MISTAKE) {
    const u = DISPLAY[CATEGORY_IDS.MISTAKE];
    return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
  }
  const u = DISPLAY[CATEGORY_IDS.BLUNDER];
  return { categoryId: u.id, label: formatLabel(u), emoji: u.emoji, name: u.name };
}

function formatLabel(u) {
  return u.emoji ? `${u.emoji} ${u.name}` : u.name;
}

/**
 * CSS modifier (matches {@link CATEGORY_IDS}) for coloring the move-quality line.
 * Matches longest display names first so e.g. "Missed Win" wins over substrings.
 * @param {string | null | undefined} label
 * @returns {string} category id or ''
 */
export function moveQualityClassFromLabel(label) {
  if (!label || typeof label !== 'string') return '';
  const names = Object.entries(DISPLAY)
    .filter(([id]) => id !== CATEGORY_IDS.UNKNOWN)
    .map(([id, d]) => ({ id, name: d.name }))
    .filter((x) => x.name && x.name !== '—')
    .sort((a, b) => b.name.length - a.name.length);
  for (const { id, name } of names) {
    if (label.includes(name)) return id;
  }
  return '';
}

/**
 * Board last-move tints — RGB from MoveCategoryBoardIcons.jsx circle fill (same hex per category).
 * Slightly stronger on `to` so the destination reads clearly on light and dark squares.
 * @type {Record<string, { from: string; to: string }>}
 */
const MOVE_QUALITY_HIGHLIGHT_RGBA = {
  [CATEGORY_IDS.BRILLIANT]: {
    from: 'rgba(38, 194, 163, 0.38)',
    to: 'rgba(38, 194, 163, 0.55)',
  },
  [CATEGORY_IDS.GREAT]: {
    from: 'rgba(116, 155, 191, 0.38)',
    to: 'rgba(116, 155, 191, 0.55)',
  },
  [CATEGORY_IDS.BEST]: {
    from: 'rgba(129, 182, 76, 0.38)',
    to: 'rgba(129, 182, 76, 0.55)',
  },
  [CATEGORY_IDS.EXCELLENT]: {
    from: 'rgba(129, 182, 76, 0.38)',
    to: 'rgba(129, 182, 76, 0.55)',
  },
  [CATEGORY_IDS.GOOD]: {
    from: 'rgba(149, 183, 118, 0.38)',
    to: 'rgba(149, 183, 118, 0.55)',
  },
  [CATEGORY_IDS.INACCURACY]: {
    from: 'rgba(247, 198, 49, 0.38)',
    to: 'rgba(247, 198, 49, 0.55)',
  },
  [CATEGORY_IDS.MISTAKE]: {
    from: 'rgba(255, 164, 89, 0.38)',
    to: 'rgba(255, 164, 89, 0.55)',
  },
  [CATEGORY_IDS.BLUNDER]: {
    from: 'rgba(250, 65, 45, 0.38)',
    to: 'rgba(250, 65, 45, 0.55)',
  },
  [CATEGORY_IDS.MISSED_WIN]: {
    from: 'rgba(255, 119, 105, 0.38)',
    to: 'rgba(255, 119, 105, 0.55)',
  },
};

/**
 * Last-move square highlights tinted by review category (main line after Start Review).
 * @param {{ from: string; to: string } | null | undefined} lastMove
 * @param {string} categoryId from {@link moveQualityClassFromLabel}
 * @returns {Record<string, { backgroundColor: string }> | null}
 */
export function getReviewLastMoveSquareStyles(lastMove, categoryId) {
  if (!lastMove?.from || !lastMove?.to) return null;
  if (!categoryId) return null;
  const palette = MOVE_QUALITY_HIGHLIGHT_RGBA[categoryId];
  if (!palette) return null;
  return {
    [lastMove.from]: { backgroundColor: palette.from },
    [lastMove.to]: { backgroundColor: palette.to },
  };
}

function defaultLastMoveSquareStyles(lastMove) {
  if (!lastMove?.from || !lastMove?.to) return null;
  return {
    [lastMove.from]: { backgroundColor: 'var(--last-move-from)' },
    [lastMove.to]: { backgroundColor: 'var(--last-move-to)' },
  };
}

/**
 * Last-move styles: category tint after review on main line, else default CSS vars.
 * @param {{ from: string; to: string } | null | undefined} lastMove
 * @param {string} categoryId
 */
export function getLastMoveSquareStylesForAnalysis(lastMove, categoryId) {
  const tinted = getReviewLastMoveSquareStyles(lastMove, categoryId);
  if (tinted) return tinted;
  return defaultLastMoveSquareStyles(lastMove);
}

/**
 * Display string for Redux / UI (same as `classifyMove` label).
 */
export function classificationDisplayString(result) {
  if (!result || !result.label) return '—';
  return result.label;
}
