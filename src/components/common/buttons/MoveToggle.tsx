import { useSelector, useDispatch } from "react-redux";
import "../../../styles/components/MoveToggle.css";
import { setPlayerToMoveAction } from "../../../redux/actions/boardEditorActions";
import { BoardState } from "../../../CustomTypes/CustomTypes";
import { RootState } from "../../../redux/reducers/reducers";

function MoveToggle() {
  const {playerToMove, castlingFlags} = useSelector((state: RootState) => ({
    playerToMove: state.boardeditor.playerToMove,
  }) as BoardState);
  const dispatch = useDispatch();
  return (
    <div className="move-toggle">
      <button
        className={`move-option ${playerToMove === "w" ? "active" : ""}`}
        onClick={() => dispatch(setPlayerToMoveAction("w"))}
      >
        White
      </button>
      <button
        className={`move-option ${playerToMove === "b" ? "active" : ""}`}
        onClick={() => dispatch(setPlayerToMoveAction("b"))}
      >
        Black
      </button>
    </div>
  );
}

export default MoveToggle;