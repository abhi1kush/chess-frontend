import React from "react"
import { useDispatch } from "react-redux";
import { clearBoard, resetBoard} from "../../redux/actions/boardEditorActions";
import { flipBoard } from "../../redux/actions/settingsActions";
import FenInputPopup  from "../fen/FenInputPopup";
import Settings from '../common/Settings';
import DarkThemeToggle from '../common/DarkThemeToggle';

const BoardEditorTopContainer = React.memo(({handleFenSubmit}) => {
    const dispatch = useDispatch();
    // console.log("BoardEditorTopContainer rendered");
    BoardEditorTopContainer.whyrendered = true;
    return (
        <div className="top-container"> 
        <nav className="top-bar">
          <button onClick={() => {dispatch(clearBoard())}} className="action-button">Clear</button>
          <button onClick={() => {dispatch(resetBoard())}} className="action-button">Reset</button>
          <button onClick={() => {dispatch(flipBoard())}} className="action-button">Flip</button>
          <FenInputPopup onSubmit={handleFenSubmit}/>
          <Settings />
          <DarkThemeToggle/>
        </nav>
</div>
    )
});

export default BoardEditorTopContainer;