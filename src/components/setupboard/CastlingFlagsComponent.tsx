import React from "react";
import ToggleButton from "../common/buttons/ToggleButton";
import MoveToggle from "../common/buttons/MoveToggle";
import { useSelector, useDispatch } from "react-redux";
import NoticeBoard from "./NoticeBoard";
// import { IsValidFen } from "../../services/fen/fenValidation";
import { setPlayerToMoveAction, toggleCastlingFlagAction } from "../../redux/actions/boardEditorActions";
import { RootState } from "../../redux/reducers/reducers";
import { BoardState } from "../../CustomTypes/CustomTypes";


interface CastlingFlagsComponentProps {
  isValidFen: boolean;
  fenErrorMsg: string;
}

const CastlingFlagsComponent: React.FC<CastlingFlagsComponentProps> = ({isValidFen, fenErrorMsg}) => {
  // const {playerToMove, castlingFlags } = useSelector((state: RootState) => state.boardeditor);
    const {playerToMove, castlingFlags} = useSelector((state: RootState) => ({
      playerToMove: state.boardeditor.playerToMove,
      castlingFlags: state.boardeditor.castlingFlags,
    }) as BoardState);
  const dispatch = useDispatch();
  // console.log("CastlingFlags rendered", castlingFlags, playerToMove);
 interface CastlingFlagUI {
    flag: 'K' | 'Q' | 'k' | 'q';
    label: string;
    state: boolean; 
  }
  const castlingFlagsUI: CastlingFlagUI[] = [
    { flag: 'K', label: "White King-Side", state: castlingFlags.K},
    { flag: 'Q', label: "White Queen-Side", state: castlingFlags.Q},
    { flag: 'k', label: "Black King-Side", state: castlingFlags.k},
    { flag: 'q', label: "Black Queen-Side", state: castlingFlags.q},
   ];

  return (
    <div className="castling">
        <div className="toggle-container">
            <span>To Move : </span>
            <MoveToggle/>
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

