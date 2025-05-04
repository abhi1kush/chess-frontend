import React from "react";
import ToggleButton from "../common/buttons/ToggleButton";
import MoveToggle from "../common/buttons/MoveToggle";
import { useSelector, useDispatch } from "react-redux";
import NoticeBoard from "./NoticeBoard";
// import { IsValidFen } from "../../services/fen/fenValidation";
import { setPlayerToMoveAction, toggleCastlingFlagAction } from "../../redux/actions/boardEditorActions";
import { RootState } from "../../redux/reducers/reducers";


interface CastlingFlagsComponentProps {
  isValidFen: boolean;
  fenErrorMsg: string;
}

const CastlingFlagsComponent: React.FC<CastlingFlagsComponentProps> = ({isValidFen, fenErrorMsg}) => {
  const {playerToMove, castlingFlags } = useSelector((state: RootState) => state.boardeditor);
  const dispatch = useDispatch();
  // console.log("CastlingFlags rendered", castlingFlags, playerToMove);
  const castlingFlagsUI = [
    { flag: 'K', label: "White King-Side", state: castlingFlags.K},
    { flag: 'Q', label: "White Queen-Side", state: castlingFlags.Q},
    { flag: 'k', label: "Black King-Side", state: castlingFlags.k},
    { flag: 'q', label: "Black Queen-Side", state: castlingFlags.q},
   ];

  return (
    <div className="castling">
        {/* <div><h3>Castling</h3></div> */}
        <div className="toggle-container">
            <span>To Move : </span>
            <MoveToggle playerToMove={playerToMove} setPlayerToMove={
              () => {dispatch(setPlayerToMoveAction(playerToMove === 'w' ? 'b' : 'w'))}}
            />
        </div> 
        {
            castlingFlagsUI.map(({flag, label, state}) => (
            <ToggleButton 
            key={label}
            labelText={label} 
            toggle={state} 
            handleToggle={() => {dispatch(toggleCastlingFlagAction(flag))}}
            />))
        }
        <NoticeBoard messages={[{type: isValidFen ? "ok" : "error", text: fenErrorMsg}]} isValid={isValidFen}/>
    </div>
  );
}

export default CastlingFlagsComponent;

