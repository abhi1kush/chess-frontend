import type { PromotionPiece } from "../CustomTypes/AnalysisTypes";

type PromotionResult = {
  isPromotion: boolean;
  promotedPiece: PromotionPiece | undefined ;
};

/**
 * Checks if a SAN move is a pawn promotion and returns the promoted piece.
 * Supports standard FIDE syntax (e.g., e8=Q, fxg8=Q) and common variants without the '=' (e.g., e8Q).
 */
export function getPromotionDetails(sanMove: string): PromotionResult {
  // Regex looks for an optional '=' followed by Q, R, B, or N at the very end of the string
  // It accounts for optional check (+) or checkmate (#) symbols after the piece
  const promotionRegex = /=?([QRBNqrbn])[+#]?$/;
  
  const match = sanMove.match(promotionRegex);

  if (match && match[1]) {
    return {
      isPromotion: true,
      promotedPiece: match[1].toLowerCase() as PromotionPiece,
    };
  }

  return {
    isPromotion: false,
    promotedPiece: undefined
  };
}