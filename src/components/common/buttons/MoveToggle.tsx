import { useSelector, useDispatch } from "react-redux";
// CSS is handled by the bundler; TypeScript has no declaration for side-effect imports.
// @ts-expect-error -- stylesheet imports are resolved at build time.
import "../../../styles/components/MoveToggle.css";
import { setPlayerToMoveAction } from "../../../redux/actions/boardEditorActions";
import { selectCatllingProps } from "../../../selector/boardEditorSelector";

function MoveToggle() {
    const {
      playerToMove
    } = useSelector(selectCatllingProps);
  const dispatch = useDispatch();
  return (
    <div className="move-toggle">
      <button
        type="button"
        className={`move-option ${playerToMove === "w" ? "active" : ""}`}
        onClick={() => dispatch(setPlayerToMoveAction("w"))}
      >
        White
      </button>
      <button
        type="button"
        className={`move-option ${playerToMove === "b" ? "active" : ""}`}
        onClick={() => dispatch(setPlayerToMoveAction("b"))}
      >
        Black
      </button>
    </div>
  );
}

export default MoveToggle;