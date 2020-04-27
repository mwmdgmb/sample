import isLoginActionType from "./login-type";

export const isLoginAction = () => ({
  type: isLoginActionType.CURRENT_USER
});
