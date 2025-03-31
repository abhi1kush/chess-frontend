
import React from 'react';

const GameOverOverlay = ({resetGameHandler, timerDuration, gameResult}) => {
     return (
     <div className="game-over-overlay">
        <div className="game-over-message">
            <p>{gameResult}</p>
            <button className="restart-button" onClick={() => resetGameHandler(timerDuration)}>
                Restart Game
            </button>
        </div>
    </div>);
}

export default GameOverOverlay;