import addItemActionType from "./cart-types";

export const addItemsToCard = items => ({
  type: addItemActionType.ADD_ITEM,
  payload: items
});
