import {
  SIGN_IN,
  SIGNIN_FAILURE,
  REGISTER_DONE,
  REGISTER_FAILURE,
  REFRESHING_TOKEN,
  REFRESHING_TOKEN_DONE,
  REFRESHING_TOKEN_FAILURE,
} from "../constants/Common";
import { login, register, refreshToken_request } from "../util/Helper";

export function signInAction(email, password) {
  return (dispatch) => {
    return login(email, password).then(
      (res) => {
        return dispatch({
          type: SIGN_IN,
          accout: email,
          ...res?.data,
        });
      },
      (err) => {
        dispatch({
          type: SIGNIN_FAILURE,
          accout: null,
          access_token: null,
        });
        return Promise.reject(err);
      }
    );
  };
}

export function registerAction(email, password) {
  return (dispatch) => {
    return register(email, password).then(
      (res) => {
        return dispatch({
          type: REGISTER_DONE,
          accout: email,
          ...res?.data,
        });
      },
      (err) => {
        dispatch({
          type: REGISTER_FAILURE,
          accout: null,
          access_token: null,
        });
        return Promise.reject(err);
      }
    );
  };
}
export function refreshToken(token) {
  return (dispatch) => {
    const refreshTokenPromise = refreshToken_request(token).then(
      (res) => {
        dispatch({
          type: REFRESHING_TOKEN_DONE,
          ...res.data,
        });
        return Promise.resolve(res.data.access_token);
      },
      (err) => {
        const error = err?.response?.data;
        dispatch({ type: REFRESHING_TOKEN_FAILURE, error });
        return Promise.reject({ error });
      }
    );
    dispatch({
      type: REFRESHING_TOKEN,
      refreshTokenPromise,
    });
  };
}
