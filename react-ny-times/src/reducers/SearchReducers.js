import { SET_SEARCH_VALUE, SET_SEARCH_ALERT } from "../constants/Common";

const initialState = {
  searchValue: "",
  searchAlert: false,
};
export const Search = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SET_SEARCH_ALERT:
      return {
        ...state,
        searchAlert: action.searchAlert,
      };
    default:
      return state;
  }
};
