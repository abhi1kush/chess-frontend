import type { Color, Square } from 'chess.js';

export type AnalysisPly = {
  san: string;
  fenAfter: string;
  from: Square;
  to: Square;
  color: Color;
};

/** Move-list user line only needs SAN + side. */
export type LinePly = {
  san: string;
  color: Color;
};
