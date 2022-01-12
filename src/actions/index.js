import getPrice from '../services/priceAPI';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_EXPENSE = 'REQUEST_EXPENSE';

export const REQUEST_PRICE = 'REQUEST_PRICE';
export const REQUEST_PRICE_SUCCESS = 'REQUEST_PRICE_SUCCESS';

export const requestLogin = (payload) => ({
  type: REQUEST_LOGIN,
  payload,
});

export const requestExpense = (payload) => ({
  type: REQUEST_EXPENSE,
  payload,
});

export const requestPrice = () => ({
  type: REQUEST_PRICE,
});

export const requestPriceSuccess = (payload) => ({
  type: REQUEST_PRICE_SUCCESS,
  payload,
});

export function requestPriceThunk() {
  return async (dispatch) => {
    const prices = Object.values(await getPrice());
    dispatch(requestPriceSuccess(prices));
  };
}
