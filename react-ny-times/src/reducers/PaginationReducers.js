import {
  SET_PAGINATION_ACTIVE,
  PAGINATION_ACTIVE,
  PAGINATION_NUM,
} from "../constants/Common";

const initialState = {
  pageSize: PAGINATION_NUM,
  activePage: PAGINATION_ACTIVE,
};
export const Pagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PAGINATION_ACTIVE:
      return {
        ...state,
        activePage: action.activePage,
      };
    default:
      return state;
  }
};
