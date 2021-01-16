import jwt_decode from "jwt-decode";
import {
  SIGN_IN,
  REGISTER_DONE,
  REFRESHING_TOKEN_DONE,
} from "../constants/Common";
import { refreshToken } from "../actions/UserActions";

export default function authMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    let state = getState();
    if (typeof action === "function") {
      if (state?.User?.access_token && isExpired(state?.User?.access_token)) {
        if (!getState().User.refreshTokenPromise) {
          return dispatch(
            refreshToken(getState().User?.access_token)
          ).then(() => next(action));
        } else {
          return getState().User.refreshTokenPromise.then(() => next(action));
        }
      }
    }

    switch (action.type) {
      case SIGN_IN:
      case REGISTER_DONE:
      case REFRESHING_TOKEN_DONE:
        tokenRefreshInterval(dispatch, action?.access_token);
        break;
      default:
    }
    return next(action);
  };
}

let refreshInterval;
let token_refresh_time = 5000;

function tokenRefreshInterval(dispatch, access_token) {
  if (refreshInterval) window.clearInterval(refreshInterval);
  refreshInterval = window.setInterval(
    () => dispatch(refreshToken(access_token)),
    token_refresh_time
  );
}

function isExpired(token) {
  let currentTime = new Date();
  let expires_date = new Date(jwt_decode(token)?.exp);
  return currentTime > expires_date;
}
