import { SETLOGIN, SETTOKEN, REFRESHING_TOKEN } from "../constants/Common";
import { refreshToken_request } from "../util/Helper";

export const setLogin = (accout) => ({
  type: SETLOGIN,
  accout,
});

export const setTocken = (token) => ({
  type: SETTOKEN,
  token,
});

export function refreshToken(token) {
  return (dispatch) => {
    const refreshTokenPromise = refreshToken_request(token).then(
      (res) => Promise.resolve(res.data.access_token),
      (err) => {
        const error = err?.response?.data;
        return Promise.reject({ error });
      }
    );
    dispatch({
      type: REFRESHING_TOKEN,
      refreshTokenPromise,
    });
  };
}
