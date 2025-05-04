import { Chess } from "chess.js"; 

// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
export const IsValidFen = (fen: string): {isValid: boolean, msg: string} => {
    if (fen === null || fen === undefined || fen === "") {
        return {isValid: false, msg: ""};
    }
    if (fen.length < 10 || fen.length > 100) {
        return {isValid: false, msg: ""};
    }
    const regex = /^[rnbqkpRNBQKP1-8/]+ [wb] [KQkq-]{0,4} (?:-|[a-h][36]) \d+ \d+$/;
    if (!regex.test(fen)) {
        return {isValid: false, msg: ""};
    }

    const splittedFen = fen.split(" ");
    if (splittedFen.length === 0) {
        return {isValid: false, msg: ""};
    }
    const castlingFlags = splittedFen[2];
    const ranks = splittedFen[0].split("/");
    if (ranks.length == 0) {
        return {isValid: false, msg: ""};
    }
    let blackKingCount = 0;
    let whiteKingCount = 0;
    const piecePos = new Map([]);
    
    for (let r = 0; r < 8; r++) {
        const currentRank = ranks[r];
        let squareCount = 0;
        for (let i = 0; i < currentRank.length; i++) {
            const emptySquares = Number(currentRank[i]);
            squareCount += !isNaN(emptySquares) ? emptySquares : 1;
            
            switch(currentRank[i]) {
                case 'k':
                    if (r === 0 && squareCount === 5) {
                        piecePos.set('e8', currentRank[i]);
                    }
                    blackKingCount += 1;
                    break;
                case 'K':
                    if (r === 7 && squareCount === 5) {
                        piecePos.set('e1', currentRank[i]);
                    }
                    whiteKingCount += 1;
                    break;
                case 'p':
                    if (r === 0 || r === 7) {
                        return {isValid: false, msg: "pawn can not exist on last rank or first rank."};
                    }
                    break;
                case 'P':
                    if (r === 0 || r === 7) {
                        return {isValid: false, msg: "pawn can not exist on last rank or first rank."};
                    }
                    break;
                case 'r':
                    if(r === 0 && i === 0) {
                        piecePos.set("a8", currentRank[i]);
                    } else if (r === 0 && i === currentRank.length - 1) {
                        piecePos.set("h8", currentRank[i]);
                    }
                    break;
                case 'R':
                    if(r === 7 && i === 0) {
                        piecePos.set("a1", currentRank[i]);
                    } else if (r === 7 && i === currentRank.length - 1) {
                        piecePos.set("h1", currentRank[i]);
                    }
                    break;
                case 'n':
                    break;
                case 'N':
                    break;
                case 'b':
                    break;
                case 'B':
                    break;
                case 'q':
                    break;
                case 'Q':
                    break;
                default:
                    break;
            }
        }
    }

    if (blackKingCount !== 1) {
        return {isValid: false, msg: "There should be exactly one black king."};
    }
    if (whiteKingCount !== 1) {
        return {isValid: false, msg: "There should be exactly one white king."};
    }
    
    for (let i = 0; i < castlingFlags.length; i++) {
        switch(castlingFlags[i]) {
            case 'K':
                if (!piecePos.has('e1') || piecePos.get('e1') !== 'K') {
                    return {isValid: false, msg: "white castling is not possible, king is not at e1."};
                }
                if (!piecePos.has('h1')  || piecePos.get('h1') !== 'R') {
                    return {isValid: false, msg: "white short castling is not possible, rook is not at h1"};
                }
                break;
            case 'Q':
                if (!piecePos.has('e1') || piecePos.get('e1') !== 'K') {
                    return {isValid: false, msg: "white castling is not possible, king is not at e1."};
                }
                if (!piecePos.has('a1')  || piecePos.get('a1') !== 'R') {
                    return {isValid: false, msg: "white long castling is not possible, rook is not at a1"};
                }
                break;
            case 'k':
                if (!piecePos.has('e8') || piecePos.get('e8') !== 'k') {
                    return {isValid: false, msg: "black castling is not possible, king is not at e8."};
                }
                if (!piecePos.has('h8') || piecePos.get('h8') !== 'r') {
                    return {isValid: false, msg: "black short castling is not possible, rook is not at h8"};
                }
                break;
            case 'q':
                if (!piecePos.has('e8') || piecePos.get('e8') !== 'k') {
                    return {isValid: false, msg: "black castling is not possible, king is not at e8."};
                }
                if (!piecePos.has('a8') || piecePos.get('a8') !== 'r') {
                    return {isValid: false, msg: "black long castling is not possible, rook is not at a8"};
                }
                break;
        }
    }
 
    const turn = splittedFen[1];
    // Flip the turn to simulate the opponent's position
    const flippedFen = flipTurnInFen(fen);
    const flippedGame = new Chess(flippedFen);
    const opponentInCheck = flippedGame.inCheck();
    
    if (opponentInCheck) {
        const playerToMove = turn === 'w'? "white" : "black";
        const opponentPlayer = turn === 'w'? "black" : "white";
        return {isValid: false, msg: `${playerToMove} to move but ${opponentPlayer} was already in check and did not defend king`};
    }
    return {isValid: true, msg: ""};
}

function flipTurnInFen(fen: string) {
    const parts = fen.split(" ");
    parts[1] = parts[1] === "w" ? "b" : "w";
    return parts.join(" ");
}
  