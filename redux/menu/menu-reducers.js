import isOpenActionType from "./menu-type";

const INITIAL_STATE = {
  isOpen: false ,
  isDropdown: false
};

const menuReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case isOpenActionType.IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case isOpenActionType.IS_DROPDOWN:
      return {
        ...state,
        isDropdown: !state.isDropdown
      };

    default:
      return state;
  }
};

export default menuReducers;
