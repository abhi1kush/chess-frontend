const IsValidFen = (fen) => {
    const splittedFen = fen.split(" ");
    const ranks = splittedFen[0].split("/");
    const lastRank = ranks[0];
    const firstRank = ranks[7];
    let blackKingCount = 0;
    let whiteKingCount = 0;

    for (let r = 0; r < 8; r++) {
        const currentRank = ranks[r];
        for (let i = 0; i < currentRank.length; i++) {
            switch(currentRank[i]) {
                case 'k':
                    blackKingCount += 1;
                    break;
                case 'K':
                    whiteKingCount += 1;
                    break;
                case 'p':
                    if (r == 0 || r == 7) {
                        return {isValid: false, msg: "pawn can not exist on last rank or first rank."};
                    }
                case 'P':
                    if (r == 0 || r == 7) {
                        return {isValid: false, msg: "pawn can not exist on last rank or first rank."};
                    }
                case 'r':
                case 'R':
                case 'n':
                case 'N':
                case 'b':
                case 'B':
                case 'q':
                case 'Q':
            }
        }
    }
}