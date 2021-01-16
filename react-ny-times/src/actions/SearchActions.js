import { SET_SEARCH_VALUE, SET_SEARCH_ALERT } from "../constants/Common";

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  searchValue,
});

export const setSearchAlert = (searchValue) => ({
  type: SET_SEARCH_ALERT,
  searchValue,
});
