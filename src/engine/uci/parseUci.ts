import type { EngineEval } from '../types';

/** Stockfish may send several UCI lines in one postMessage; split before parsing. */
export function uciLinesFromWorkerData(raw: unknown): string[] {
  if (raw == null) {
    return [];
  }

  if (typeof raw === 'string') {
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  if (typeof ArrayBuffer !== 'undefined' && raw instanceof ArrayBuffer) {
    return uciLinesFromWorkerData(new TextDecoder().decode(raw));
  }

  if (ArrayBuffer.isView && ArrayBuffer.isView(raw)) {
    return uciLinesFromWorkerData(
      new TextDecoder().decode(
        raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength),
      ),
    );
  }

  if (Array.isArray(raw)) {
    const lines: string[] = [];
    for (const item of raw) {
      lines.push(...uciLinesFromWorkerData(item));
    }
    return lines;
  }

  if (typeof raw === 'object' && raw !== null && 'data' in raw && typeof (raw as { data: unknown }).data === 'string') {
    return uciLinesFromWorkerData((raw as { data: string }).data);
  }

  const value = String(raw).trim();
  return value ? [value] : [];
}

export function parseScoreFromInfoLine(line: string): EngineEval | null {
  const match = line.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
  if (!match) {
    return null;
  }
  const type = match[1].toLowerCase();
  const value = parseInt(match[2], 10);
  if (Number.isNaN(value)) {
    return null;
  }
  if (type === 'cp') {
    return { pawns: value / 100, mate: null };
  }
  return { pawns: value > 0 ? 10 : -10, mate: value };
}

export function parsePvFromInfoLine(line: string): string[] | null {
  const pvMatch = line.match(/\bpv\s+(.+)/i);
  if (!pvMatch) {
    return null;
  }
  return pvMatch[1].trim().split(/\s+/).filter(Boolean);
}

export function parseDepthFromInfoLine(line: string): number | null {
  const match = line.match(/\bdepth\s+(\d+)/i);
  if (!match) {
    return null;
  }
  const depth = parseInt(match[1], 10);
  return Number.isNaN(depth) ? null : depth;
}

export function parseBestMoveUci(line: string): string | null {
  if (!line.startsWith('bestmove')) {
    return null;
  }
  const parts = line.trim().split(/\s+/);
  const move = parts[1];
  if (!move || move === '(none)') {
    return '';
  }
  return move;
}
