import { SETLOGIN, SETSIGNOUT } from "../constants/Common";

let initialState = {
  isLogin: false,
  accout: null,
};
export const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETLOGIN:
      return {
        ...state,
        isLogin: true,
        accout: action.accout,
      };
    case SETSIGNOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
