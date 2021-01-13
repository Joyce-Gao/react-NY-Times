import { SETSEARCHVALUE, SETSEARCHALERT } from "../constants/Common";

export const setSearchValue = (searchValue) => ({
  type: SETSEARCHVALUE,
  searchValue,
});

export const setSearchAlert = (searchValue) => ({
  type: SETSEARCHALERT,
  searchValue,
});
