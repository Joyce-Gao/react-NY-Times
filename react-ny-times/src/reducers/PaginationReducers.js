import {
  SETPAGINATIONLIST,
  SETPAGINATIONACTIVE,
  PAGINATIONACTIVE,
  PAGINATIONNUM,
} from "../constants/Common";

let initialState = {
  pageSize: PAGINATIONNUM,
  activePage: PAGINATIONACTIVE,
};
export const Pagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETPAGINATIONLIST:
      return {
        ...state,
        pageSize: action.pageSize,
        activePage: action.activePage,
      };
    case SETPAGINATIONACTIVE:
      return {
        ...state,
        activePage: action.activePage,
      };
    default:
      return state;
  }
};
