import { LOGIN, SIGNUP } from "../actions/auth";

const initialState = {
  token: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        user: action.user
      };
    case SIGNUP:
      return {
        token: action.token,
        user: action.user
      };
    default:
      return state;
  }
};