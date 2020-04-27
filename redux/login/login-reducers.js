import isLoginActionType from "./login-type";

const INITIAL_STATE = {
  isLogin: false
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case isLoginActionType.CURRENT_USER:
      return {
        ...state,
        isLogin: !state.isLogin
      };

    default:
      return state;
  }
};

export default userReducers;
