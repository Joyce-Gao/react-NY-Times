import {
  SET_PAGINATION_LIST,
  SET_PAGINATION_ACTIVE,
  PAGINATION_ACTIVE,
  PAGINATION_NUM,
} from "../constants/Common";

let initialState = {
  pageSize: PAGINATION_NUM,
  activePage: PAGINATION_ACTIVE,
};
export const Pagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PAGINATION_LIST:
      return {
        ...state,
        pageSize: action.pageSize,
        activePage: action.activePage,
      };
    case SET_PAGINATION_ACTIVE:
      return {
        ...state,
        activePage: action.activePage,
      };
    default:
      return state;
  }
};
