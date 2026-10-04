import { loadPgn } from '../../analysis/redux/analysisActions';
import { parsePgn } from './PgnParser';
import type { Dispatch } from 'redux';

/** Same path as Upload PGN: parse text, then replace the current game. */
export function loadPgnFromText(dispatch: Dispatch, pgnText: string): void {
  dispatch(loadPgn(parsePgn(pgnText)));
}
