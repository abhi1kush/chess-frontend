import React from "react"
import ToggleButton from "./buttons/toggleButton"
import resetBoardSound from "../sounds/board-start.mp3";
import {useDispatch } from 'react-redux';
import {resetGame} from "../redux/actions/gameActions"
import {flipBoard} from "../redux/actions/settingsActions"

export const ResetButton = ({ timerDuration }) => {
    const dispatch = useDispatch();
    const sound = new Audio(resetBoardSound);

    const resetBoard = () => { // Removed the 'handler' parameter
        sound.play();
        dispatch(resetGame(timerDuration));
    };

    return (
        <button
            onClick={resetBoard} // Directly pass the resetBoard function
            className="action-button"
        >
            Reset Board
        </button>
    );
};

export const FlipButton = () => {
    const dispatch = useDispatch();
    const flipHandler = () => {
        dispatch(flipBoard())
    }
    return (
        <ToggleButton 
        initialText="Flip Board"
        alternateText="Unflip Board"
        onClickHandler={flipHandler}/>
    )
}

export const DownloadPgnButton = ({downloadPgnHandler}) => {
    return (
        (
            <button onClick={downloadPgnHandler} className="action-button">
              Download PGN
            </button>
        )
    )
}
