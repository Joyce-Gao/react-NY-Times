import {
  SETLOGIN,
  SETTOKEN,
  REFRESHING_TOKEN,
  REFRESHING_TOKEN_DONE,
  REFRESHING_TOKEN_FAILURE,
} from "../constants/Common";

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
        access_token: action.token,
      };
    case SETTOKEN:
      return {
        ...state,
        isLogin: true,
        access_token: action.token,
      };

    case REFRESHING_TOKEN:
      return { ...state, ...action };
    case REFRESHING_TOKEN_DONE:
      return { ...state, token: action.token, refreshTokenPromise: undefined };
    case REFRESHING_TOKEN_FAILURE:
      return { ...state, token: action.token, refreshTokenPromise: undefined };
    default:
      return state;
  }
};
