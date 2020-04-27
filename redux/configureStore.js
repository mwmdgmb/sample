import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./rootReducers";
import thunk from "redux-thunk";
let middleware = [thunk, logger];

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
