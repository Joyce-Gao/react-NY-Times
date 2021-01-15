import jwt_decode from "jwt-decode";
import { SETLOGIN, REGISTER, REFRESHING_TOKEN } from "../constants/Common";
import { refreshToken } from "../actions/UserActions";

export default function authMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === "function") {
      let state = getState();
      if (state?.User?.access_token && isExpired(state?.User?.access_token)) {
        if (!state?.User?.refreshTokenPromise) {
          return refreshToken(dispatch, state).then(() => next(action));
        } else {
          return state?.User?.refreshTokenPromise.then(() => next(action));
        }
      }
    }

    switch (action.type) {
      case SETLOGIN:
      case REGISTER:
      case REFRESHING_TOKEN:
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
  console.log(
    jwt_decode(token)?.exp,
    "jwt_decode(token)?.expjwt_decode(token)?.exp"
  );
  console.log(expires_date, "expires_dateexpires_dateexpires_date");
  return currentTime > expires_date;
}
