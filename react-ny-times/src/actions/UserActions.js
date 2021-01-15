import { SETLOGIN, SETTOKEN } from "../constants/Common";

export const setLogin = (accout) => ({
  type: SETLOGIN,
  accout,
});

export const setTocken = (token) => ({
  type: SETTOKEN,
  token,
});
