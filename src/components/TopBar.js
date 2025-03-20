import React from "react";
import "../styles/topContainer.css"; // Add styles for the top bar
import Settings from "./Settings";
import PropTypes from "prop-types";

const TopBar = (props) => {
  return (
        <div className="top-bar">
            <button onClick={props.resetGame} className="action-button">Reset Board</button>
            <button onClick={props.flipBoard}className="action-button">{props.isFlipped ? "Unflip Board" : "Flip Board"}</button>
        </div>
  );
};

export default TopBar;

TopBar.propTypes = {
  resetGame: PropTypes.func.isRequired,
  flipBoard: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired
}