// src/redux/reducers/pgnReducer.js
import {LOAD_PGN} from '../actions/analysisActions';

const initialState = {
  finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
  moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O","c3"
    ,"d5","exd5","Nxd5","Nxe5","Nxe5","Rxe5","Nf6","Re1","Bd6","h3","Ng4","Qf3","Qh4","d4","Nxf2"
    ,"Re2","Bg4","hxg4","Bh2+","Kf1","Bg3","Rxf2","Qh1+","Ke2","Bxf2","Bd2","Bh4","Qh3","Rae8+"
    ,"Kd3","Qf1+","Kc2","Bf2","Qf3","Qg1","Bd5","c5","dxc5","Bxc5","b4","Bd6","a4","a5","axb5","axb4"
    ,"Ra6","bxc3","Nxc3","Bb4","b6","Bxc3" ,"Bxc3","h6","b7","Re3","Bxf7+"],
  fens:["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1", "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4", "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5", "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5", "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6", "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 5 6", "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 7", "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq - 1 7", "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w - - 2 8", "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 8", "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9", "r1bq1rk1/2p1bppp/p1n2n2/1p1Pp3/8/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 9", "r1bq1rk1/2p1bppp/p1n5/1p1np3/8/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 10", "r1bq1rk1/2p1bppp/p1n5/1p1nN3/8/1BP5/PP1P1PPP/RNBQR1K1 b - - 0 10", "r1bq1rk1/2p1bppp/p7/1p1nn3/8/1BP5/PP1P1PPP/RNBQR1K1 w - - 0 11", "r1bq1rk1/2p1bppp/p7/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 b - - 0 11", "r1bq1rk1/2p1bppp/p4n2/1p2R3/8/1BP5/PP1P1PPP/RNBQ2K1 w - - 1 12", "r1bq1rk1/2p1bppp/p4n2/1p6/8/1BP5/PP1P1PPP/RNBQR1K1 b - - 2 12", "r1bq1rk1/2p2ppp/p2b1n2/1p6/8/1BP5/PP1P1PPP/RNBQR1K1 w - - 3 13", "r1bq1rk1/2p2ppp/p2b1n2/1p6/8/1BP4P/PP1P1PP1/RNBQR1K1 b - - 0 13", "r1bq1rk1/2p2ppp/p2b4/1p6/6n1/1BP4P/PP1P1PP1/RNBQR1K1 w - - 1 14", "r1bq1rk1/2p2ppp/p2b4/1p6/6n1/1BP2Q1P/PP1P1PP1/RNB1R1K1 b - - 2 14", "r1b2rk1/2p2ppp/p2b4/1p6/6nq/1BP2Q1P/PP1P1PP1/RNB1R1K1 w - - 3 15", "r1b2rk1/2p2ppp/p2b4/1p6/3P2nq/1BP2Q1P/PP3PP1/RNB1R1K1 b - - 0 15", "r1b2rk1/2p2ppp/p2b4/1p6/3P3q/1BP2Q1P/PP3nP1/RNB1R1K1 w - - 0 16", "r1b2rk1/2p2ppp/p2b4/1p6/3P3q/1BP2Q1P/PP2RnP1/RNB3K1 b - - 1 16", "r4rk1/2p2ppp/p2b4/1p6/3P2bq/1BP2Q1P/PP2RnP1/RNB3K1 w - - 2 17", "r4rk1/2p2ppp/p2b4/1p6/3P2Pq/1BP2Q2/PP2RnP1/RNB3K1 b - - 0 17", "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Q2/PP2RnPb/RNB3K1 w - - 1 18", "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Q2/PP2RnPb/RNB2K2 b - - 2 18", "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Qb1/PP2RnP1/RNB2K2 w - - 3 19", "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Qb1/PP3RP1/RNB2K2 b - - 0 19", "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Qb1/PP3RP1/RNB2K1q w - - 1 20", "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Qb1/PP2KRP1/RNB4q b - - 2 20", "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PP2KbP1/RNB4q w - - 0 21", "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PP1BKbP1/RN5q b - - 1 21", "r4rk1/2p2ppp/p7/1p6/3P2Pb/1BP2Q2/PP1BK1P1/RN5q w - - 2 22", "r4rk1/2p2ppp/p7/1p6/3P2Pb/1BP4Q/PP1BK1P1/RN5q b - - 3 22", "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BP4Q/PP1BK1P1/RN5q w - - 4 23", "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BPK3Q/PP1B2P1/RN5q b - - 5 23", "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BPK3Q/PP1B2P1/RN3q2 w - - 6 24", "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BP4Q/PPKB2P1/RN3q2 b - - 7 24", "4rrk1/2p2ppp/p7/1p6/3P2P1/1BP4Q/PPKB1bP1/RN3q2 w - - 8 25", "4rrk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PPKB1bP1/RN3q2 b - - 9 25", "4rrk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PPKB1bP1/RN4q1 w - - 10 26", "4rrk1/2p2ppp/p7/1p1B4/3P2P1/2P2Q2/PPKB1bP1/RN4q1 b - - 11 26", "4rrk1/5ppp/p7/1ppB4/3P2P1/2P2Q2/PPKB1bP1/RN4q1 w - - 0 27", "4rrk1/5ppp/p7/1pPB4/6P1/2P2Q2/PPKB1bP1/RN4q1 b - - 0 27", "4rrk1/5ppp/p7/1pbB4/6P1/2P2Q2/PPKB2P1/RN4q1 w - - 0 28", "4rrk1/5ppp/p7/1pbB4/1P4P1/2P2Q2/P1KB2P1/RN4q1 b - - 0 28", "4rrk1/5ppp/p2b4/1p1B4/1P4P1/2P2Q2/P1KB2P1/RN4q1 w - - 1 29", "4rrk1/5ppp/p2b4/1p1B4/PP4P1/2P2Q2/2KB2P1/RN4q1 b - - 0 29", "4rrk1/5ppp/3b4/pp1B4/PP4P1/2P2Q2/2KB2P1/RN4q1 w - - 0 30", "4rrk1/5ppp/3b4/pP1B4/1P4P1/2P2Q2/2KB2P1/RN4q1 b - - 0 30", "4rrk1/5ppp/3b4/1P1B4/1p4P1/2P2Q2/2KB2P1/RN4q1 w - - 0 31", "4rrk1/5ppp/R2b4/1P1B4/1p4P1/2P2Q2/2KB2P1/1N4q1 b - - 1 31", "4rrk1/5ppp/R2b4/1P1B4/6P1/2p2Q2/2KB2P1/1N4q1 w - - 0 32", "4rrk1/5ppp/R2b4/1P1B4/6P1/2N2Q2/2KB2P1/6q1 b - - 0 32", "4rrk1/5ppp/R7/1P1B4/1b4P1/2N2Q2/2KB2P1/6q1 w - - 1 33", "4rrk1/5ppp/RP6/3B4/1b4P1/2N2Q2/2KB2P1/6q1 b - - 0 33", "4rrk1/5ppp/RP6/3B4/6P1/2b2Q2/2KB2P1/6q1 w - - 0 34", "4rrk1/5ppp/RP6/3B4/6P1/2B2Q2/2K3P1/6q1 b - - 0 34", "4rrk1/5pp1/RP5p/3B4/6P1/2B2Q2/2K3P1/6q1 w - - 0 35", "4rrk1/1P3pp1/R6p/3B4/6P1/2B2Q2/2K3P1/6q1 b - - 0 35", "5rk1/1P3pp1/R6p/3B4/6P1/2B1rQ2/2K3P1/6q1 w - - 1 36", "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36"],
  fromToSquares: [{from: 'e2', to: 'e4'}, {from: 'e7', to: 'e5'}, {from: 'g1', to: 'f3'}, {from: 'b8', to: 'c6'},
    {from: 'f1', to: 'b5'}, {from: 'a7', to: 'a6'}, {from: 'b5', to: 'a4'}, {from: 'g8', to: 'f6'},
    {from: 'e1', to: 'g1'}, {from: 'f8', to: 'e7'}, {from: 'f1', to: 'e1'}, {from: 'b7', to: 'b5'},
    {from: 'a4', to: 'b3'}, {from: 'e8', to: 'g8'}, {from: 'c2', to: 'c3'}, {from: 'd7', to: 'd5'},
    {from: 'e4', to: 'd5'}, {from: 'f6', to: 'd5'}, {from: 'f3', to: 'e5'}, {from: 'c6', to: 'e5'},
    {from: 'e1', to: 'e5'}, {from: 'd5', to: 'f6'}, {from: 'e5', to: 'e1'}, {from: 'e7', to: 'd6'},
    {from: 'h2', to: 'h3'}, {from: 'f6', to: 'g4'}, {from: 'd1', to: 'f3'}, {from: 'd8', to: 'h4'},
    {from: 'd2', to: 'd4'}, {from: 'g4', to: 'f2'}, {from: 'e1', to: 'e2'}, {from: 'c8', to: 'g4'},
    {from: 'h3', to: 'g4'}, {from: 'd6', to: 'h2'}, {from: 'g1', to: 'f1'}, {from: 'h2', to: 'g3'},
    {from: 'e2', to: 'f2'}, {from: 'h4', to: 'h1'}, {from: 'f1', to: 'e2'}, {from: 'g3', to: 'f2'},
    {from: 'c1', to: 'd2'}, {from: 'f2', to: 'h4'}, {from: 'f3', to: 'h3'}, {from: 'a8', to: 'e8'},
    {from: 'e2', to: 'd3'}, {from: 'h1', to: 'f1'}, {from: 'd3', to: 'c2'}, {from: 'h4', to: 'f2'},
    {from: 'h3', to: 'f3'}, {from: 'f1', to: 'g1'}, {from: 'b3', to: 'd5'}, {from: 'c7', to: 'c5'},
    {from: 'd4', to: 'c5'}, {from: 'f2', to: 'c5'}, {from: 'b2', to: 'b4'}, {from: 'c5', to: 'd6'},
    {from: 'a2', to: 'a4'}, {from: 'a6', to: 'a5'}, {from: 'a4', to: 'b5'}, {from: 'a5', to: 'b4'},
    {from: 'a1', to: 'a6'}, {from: 'b4', to: 'c3'}, {from: 'b1', to: 'c3'}, {from: 'd6', to: 'b4'},
    {from: 'b5', to: 'b6'}, {from: 'b4', to: 'c3'}, {from: 'd2', to: 'c3'}, {from: 'h7', to: 'h6'},
    {from: 'b6', to: 'b7'}, {from: 'e8', to: 'e3'}, {from: 'd5', to: 'f7'}],
  termination: "Capablanca won by resignation",
  result: "1-0",
  blackPlayerName: "Frank James Marshall",
  whitePlayerName: "Jose Raul Capablanca",
};

const pgnReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PGN:
        return {
            ...state,
            finalFen: action.payload.finalPos,
            moves: action.payload.moves,
            fens: action.payload.fens,
            fromToSquares: action.payload.fromToSquares,
            termination: action.payload.termination,
            result: action.payload.result, 
            blackPlayerName: action.payload.blackPlayerName,
            whitePlayerName: action.payload.whitePlayerName, 
        };
    default:
      return state;
  }
};

export default pgnReducer;