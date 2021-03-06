import { combineReducers } from 'redux';
import loginReducer from './user';
import expenseReducer from './wallet';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({
  user: loginReducer,
  wallet: expenseReducer,
});

export default rootReducer;
