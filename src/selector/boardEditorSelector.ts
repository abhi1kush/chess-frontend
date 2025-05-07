// selectors/boardEditorSelectors.ts
import { createSelector } from "reselect";
import { RootState } from "../redux/reducers/reducers";

export const selectBoardEditorState = (state: RootState) => state.boardeditor;

export const selectBoardEditorProps = createSelector(
  [selectBoardEditorState],
  (boardeditor) => ({
    board: boardeditor.board,
    isFlipped: boardeditor.isFlipped,
    playerToMove: boardeditor.playerToMove,
    castlingFlags: boardeditor.castlingFlags,
  })
);

export const selectCatllingProps = createSelector(
  [selectBoardEditorState],
  (boardeditor) => ({
    playerToMove: boardeditor.playerToMove,
    castlingFlags: boardeditor.castlingFlags,
  })
);

