import {
  SETLOGIN,
  SETTOKEN,
  REFRESHING_TOKEN,
  REFRESHING_TOKEN_DONE,
  REFRESHING_TOKEN_FAILURE,
} from "../constants/Common";
import { refreshToken_request } from "../util/Helper";

export const setLogin = (accout, token) => ({
  type: SETLOGIN,
  accout,
  token,
});

export const setTocken = (token) => ({
  type: SETTOKEN,
  token,
});

export function refreshToken(token) {
  return (dispatch) => {
    const refreshTokenPromise = refreshToken_request(token).then(
      (res) => {
        dispatch({
          type: REFRESHING_TOKEN_DONE,
          access_token: { ...res.data },
        });
        return Promise.resolve(res.data.access_token);
      },
      (err) => {
        const error = err?.response?.data;
        dispatch({ type: REFRESHING_TOKEN_FAILURE, access_token: { error } });
        return Promise.reject({ error });
      }
    );
    dispatch({
      type: REFRESHING_TOKEN,
      refreshTokenPromise,
    });
  };
}
