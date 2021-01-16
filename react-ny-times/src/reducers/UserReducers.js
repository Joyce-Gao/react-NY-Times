import {
  SIGN_IN,
  SIGNIN_FAILURE,
  REGISTER_DONE,
  REGISTER_FAILURE,
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
    case SIGN_IN:
    case REGISTER_DONE:
      return {
        ...state,
        isLogin: true,
        accout: action.accout,
        access_token: action.token,
      };
    case SIGNIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        isLogin: false,
        accout: null,
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
