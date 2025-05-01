
export const SELECT_ITEM = "SET_SELECTED_ITEM";
export const DESELECT_ITEM = "DESELECT_ITEM";

export const selectItemAction = (item) => ({
  type: SELECT_ITEM,
  payload: item,
});

export const deselectItemAction = () => ({
    type: DESELECT_ITEM
});