import shopActiontype from "./shop-type";

const INITIAL_STATE = {
  loading: false,
  items: [],
  error: ""
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActiontype.FETCH_SHOP_START:
      return {
        ...state,
        loading: true,
        items: [],
        error: ""
      };
    case shopActiontype.FETCH_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: ""
      };
    case shopActiontype.FETCH_SHOP_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
