// import { current } from "@reduxjs/toolkit";
import { SELECT_ITEM, DESELECT_ITEM } from "../actions/selectedItemActions";
import { SelectedItemType } from "../../CustomTypes/CustomTypes";

interface SelectedItemState {
  selectedItem: SelectedItemType | null;
}

const initialState: SelectedItemState = {
  selectedItem: null,
};

export interface SelectedItemAction {
  type: typeof SELECT_ITEM | typeof DESELECT_ITEM;
  payload?: SelectedItemType;
}

const selectedItemReducer = (
  state: SelectedItemState = initialState, 
  action: SelectedItemAction
): SelectedItemState => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload ?? null,
      };
    case DESELECT_ITEM:
      console.log("Received DESELECT_ITEM");
      return initialState;
    default:
      return state;
    }
};
  
export default selectedItemReducer;