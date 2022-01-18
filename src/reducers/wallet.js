// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_EXPENSE, REQUEST_PRICE_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { expenses } = state;
  switch (action.type) {
  case REQUEST_EXPENSE:
    return {
      ...state,
      expenses: [...expenses, payload],
    };
  case REQUEST_PRICE_SUCCESS:
    return {
      ...state,
      currencies: payload,
    };
  default:
    return state;
  }
};

export default expenseReducer;
