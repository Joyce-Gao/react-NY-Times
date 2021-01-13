import { SETLOGIN, SETSIGNOUT } from "../constants/Common";

export const setLogin = (accout) => ({
  type: SETLOGIN,
  accout,
});

export const setSignOut = () => ({
  type: SETSIGNOUT,
});
