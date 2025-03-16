export const getMoveType = (move, game) => {
    if (move.flags.includes("c")) {
        return "capture"
    } 
    if (game.isCheckmate()) {
        return "checkmate"
    } 
    if (game.inCheck()) {
        return "check"
    } 
    return "move"
}