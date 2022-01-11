// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
