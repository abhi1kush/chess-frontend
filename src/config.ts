import { PieceSymbol } from "chess.js";
import {BoardType, PieceColor, PieceType, SquareIdType} from "./CustomTypes/CustomTypes"

interface CONFIG_T {
    TIMER_DURATION: number, 
    THEME: string,
    ENABLE_SOUND: boolean,
    IS_FLIPPED: boolean,
    THEME_KEY: string,
    ENABLE_SOUND_KEY: string, 
    TIMER_DURATION_KEY: string,
    IS_FLIPPED_KEY: string,
    CHESS_GAME_KEY: string,
    START_FEN: string,
    CLEAR_FEN: string,
    FINAL_FEN_KEY: string,
    CHECKMATE_MESSAGE: string,
    WHITE: PieceColor,
    BLACK: PieceColor, 
    BOARD_PIECE: string,
    PALLETE_ITEM: string,
    ERASER_ID: string,
}

const CONFIG: CONFIG_T = {
    TIMER_DURATION: 60*3, 
    THEME: "classic",
    ENABLE_SOUND: true,
    IS_FLIPPED: false,
    THEME_KEY: "theme",
    ENABLE_SOUND_KEY: "enableSound", 
    TIMER_DURATION_KEY: "timerDuration",
    IS_FLIPPED_KEY: "isFlipped",
    CHESS_GAME_KEY: "chessGame",
    START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    CLEAR_FEN: "8/8/8/8/8/8/8/8 w KQkq - 0 1",
    FINAL_FEN_KEY: "finalFen",
    CHECKMATE_MESSAGE: "Wins by Checkmate!",
    WHITE: 'w',
    BLACK: 'b', 
    BOARD_PIECE: "boardPiece",
    PALLETE_ITEM: "palleteItem",
    ERASER_ID: "p-g-eraser",
  };
  
  export default CONFIG;
  export const SquareIds: SquareIdType[][] = [ 
                             ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
                             ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
                             ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
                             ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
                             ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
                             ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
                             ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
                             ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'] 
  ];
  
  export const FlippedSquareIds: SquareIdType[][] = [ 
                             ['h1', 'g1', 'f1', 'e1', 'd1', 'c1', 'b1', 'a1' ], 
                             ['h2', 'g2', 'f2', 'e2', 'd2', 'c2', 'b2', 'a2' ],
                             ['h3', 'g3', 'f3', 'e3', 'd3', 'c3', 'b3', 'a3' ],
                             ['h4', 'g4', 'f4', 'e4', 'd4', 'c4', 'b4', 'a4' ],
                             ['h5', 'g5', 'f5', 'e5', 'd5', 'c5', 'b5', 'a5' ],
                             ['h6', 'g6', 'f6', 'e6', 'd6', 'c6', 'b6', 'a6' ],
                             ['h7', 'g7', 'f7', 'e7', 'd7', 'c7', 'b7', 'a7' ],
                             ['h8', 'g8', 'f8', 'e8', 'd8', 'c8', 'b8', 'a8' ]
  ];

  export const StartChessPosition: BoardType = {
    a8: {type: 'r', color: 'b'}, 
    b8: {type: 'n', color: 'b'}, 
    c8: {type: 'b', color: 'b'}, 
    d8: {type: 'q', color: 'b'}, 
    e8: {type: 'k', color: 'b'}, 
    f8: {type: 'b', color: 'b'}, 
    g8: {type: 'n', color: 'b'}, 
    h8: {type: 'r', color: 'b'},
    
    
    a7: {type: 'p', color: 'b'},
    b7: {type: 'p', color: 'b'},
    c7: {type: 'p', color: 'b'},
    d7: {type: 'p', color: 'b'},
    e7: {type: 'p', color: 'b'},
    f7: {type: 'p', color: 'b'},
    g7: {type: 'p', color: 'b'},
    h7: {type: 'p', color: 'b'},
    
    
    a6: null,
    b6: null,
    c6: null,
    d6: null,
    e6: null,
    f6: null,
    g6: null,
    h6: null,
    
    
    a5: null,
    b5: null,
    c5: null,
    d5: null,
    e5: null,
    f5: null,
    g5: null,
    h5: null,
    
    
    a4: null,
    b4: null,
    c4: null,
    d4: null,
    e4: null,
    f4: null,
    g4: null,
    h4: null,
    
    
    a3: null,
    b3: null,
    c3: null,
    d3: null,
    e3: null,
    f3: null,
    g3: null,
    h3: null,
    
    
    a2: {type: 'p', color: 'w'},
    b2: {type: 'p', color: 'w'},
    c2: {type: 'p', color: 'w'},
    d2: {type: 'p', color: 'w'},
    e2: {type: 'p', color: 'w'},
    f2: {type: 'p', color: 'w'},
    g2: {type: 'p', color: 'w'},
    h2: {type: 'p', color: 'w'}, 
    
    
    a1: {type: 'r', color: 'w'},
    b1: {type: 'n', color: 'w'},
    c1: {type: 'b', color: 'w'},
    d1: {type: 'q', color: 'w'},
    e1: {type: 'k', color: 'w'},
    f1: {type: 'b', color: 'w'},
    g1: {type: 'n', color: 'w'},
    h1: {type: 'r', color: 'w'} 
  }
  
  export const ClearBoardPosition: BoardType = {
    a8: null, 
    b8: null, 
    c8: null, 
    d8: null, 
    e8: null, 
    f8: null, 
    g8: null, 
    h8: null,
    
    a7: null,
    b7: null,
    c7: null,
    d7: null,
    e7: null,
    f7: null,
    g7: null,
    h7: null,
    
    a6: null,
    b6: null,
    c6: null,
    d6: null,
    e6: null,
    f6: null,
    g6: null,
    h6: null,
    
    a5: null,
    b5: null,
    c5: null,
    d5: null,
    e5: null,
    f5: null,
    g5: null,
    h5: null,
    
    a4: null,
    b4: null,
    c4: null,
    d4: null,
    e4: null,
    f4: null,
    g4: null,
    h4: null,
    
    a3: null,
    b3: null,
    c3: null,
    d3: null,
    e3: null,
    f3: null,
    g3: null,
    h3: null,
    
    a2: null,
    b2: null,
    c2: null,
    d2: null,
    e2: null,
    f2: null,
    g2: null,
    h2: null, 
    
    a1: null,
    b1: null,
    c1: null,
    d1: null,
    e1: null,
    f1: null,
    g1: null,
    h1: null, 
  }