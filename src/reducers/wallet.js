// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_EXPENSE } from '../actions';

const INITIAL_STATE = {
  // currencies: [],
  expenses: [],
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { expenses } = state;
  switch (action.type) {
  case REQUEST_EXPENSE:
    return {
      expenses: [...expenses, payload],
    };
  default:
    return state;
  }
};

export default expenseReducer;
