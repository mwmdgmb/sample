import shopActiontype from "./shop-type";
export const fetchShopStart = () => ({
  type: shopActiontype.FETCH_SHOP_START
});

export const fetchShopSuccess = item => ({
  type: shopActiontype.FETCH_SHOP_SUCCESS,
  payload: item
});

export const fetchShopFailure = error => ({
  type: shopActiontype.FETCH_SHOP_FAILURE,
  payload: error
});

export const fetchingDataAsync = () => {
  return dispatch => {
    dispatch(fetchShopStart());
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(data => dispatch(fetchShopSuccess(data.data)))
      .catch(error => dispatch(fetchShopFailure(error)));
  };
};
