import { combineReducers } from "redux";
import menuReducers from "./menu/menu-reducers";
import shopReducer from "./shop/shop-reducers";
import cartReducer from "./cart/cart-reducers";
import userReducers from "./login/login-reducers";

const rootReducers = combineReducers({
  toggle: menuReducers,
  shop: shopReducer,
  cart: cartReducer,
  user: userReducers
});

export default rootReducers;
