import {
  SIGN_IN,
  SIGN_IN_FAILURE,
  REGISTER_DONE,
  REGISTER_FAILURE,
  REFRESHING_TOKEN,
  REFRESHING_TOKEN_DONE,
  REFRESHING_TOKEN_FAILURE,
} from "../constants/Common";

let initialState = {
  isLogin: false,
  account: null,
  access_token: null,
};
export const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_IN:
    case REGISTER_DONE:
      return {
        ...state,
        isLogin: true,
        account: action.account,
        access_token: action.token,
      };
    case SIGN_IN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        isLogin: false,
        account: null,
        access_token: null,
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
