import { loadPgn } from '../../analysis/redux/analysisActions';
import { parsePgn, type ParsedPgn } from './PgnParser';
import type { Dispatch } from 'redux';

export type PgnTextParseResult =
  | { ok: true; game: ParsedPgn }
  | { ok: false; error: string };

/** Parse PGN text without side effects, returning a readable error on failure. */
export function tryParsePgnText(pgnText: string): PgnTextParseResult {
  const trimmedPgnText = pgnText.trim();
  if (!trimmedPgnText) {
    return { ok: false, error: 'The PGN is empty. Paste a game with moves.' };
  }
  try {
    const parsedGame = parsePgn(trimmedPgnText);
    if (parsedGame.moves.length === 0) {
      return { ok: false, error: 'Invalid PGN: no moves were found.' };
    }
    return { ok: true, game: parsedGame };
  } catch (parseError) {
    const detail = parseError instanceof Error ? parseError.message : String(parseError);
    return { ok: false, error: `Invalid PGN: ${detail}` };
  }
}

/** Shared by Upload PGN and Paste PGN: parse text, then replace the current game. */
export function loadPgnFromText(dispatch: Dispatch, pgnText: string): PgnTextParseResult {
  const parseResult = tryParsePgnText(pgnText);
  if (parseResult.ok) {
    dispatch(loadPgn(parseResult.game));
  }
  return parseResult;
}

/** Heuristic used for page-level Ctrl+V: does this text look like a PGN? */
export function looksLikePgn(text: string): boolean {
  const trimmedText = text.trim();
  return /^\[\w+\s+"/.test(trimmedText) || /^1\.\s*(\.\.\.)?\s*[a-hKQRBNO]/.test(trimmedText);
}
