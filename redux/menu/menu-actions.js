import isOpenActionType from "./menu-type";

export const isOpenMenu = () => ({
  type: isOpenActionType.IS_OPEN
});

export const isDropdown = () => ({
  type: isOpenActionType.IS_DROPDOWN
});