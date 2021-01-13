import { SETSEARCHVALUE, SETSEARCHALERT } from "../constants/Common";

let initialState = {
  searchValue: "",
  searchAlert: false,
};
export const Search = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETSEARCHVALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SETSEARCHALERT:
      return {
        ...state,
        searchAlert: action.searchAlert,
      };
    default:
      return state;
  }
};
