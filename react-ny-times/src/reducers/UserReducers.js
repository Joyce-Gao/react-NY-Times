import { SETLOGIN, SETTOKEN } from "../constants/Common";

let initialState = {
  isLogin: false,
  accout: null,
  access_token: null,
};
export const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETLOGIN:
      return {
        ...state,
        isLogin: true,
        accout: action.accout,
      };
    case SETTOKEN:
      return {
        ...state,
        isLogin: true,
        access_token: action.token,
      };
    default:
      return state;
  }
};
