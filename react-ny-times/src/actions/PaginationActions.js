import {
  SET_PAGINATION_LIST,
  SET_PAGINATION_ACTIVE,
} from "../constants/Common";

export const setPaginationList = (pageSize, activePage) => ({
  type: SET_PAGINATION_LIST,
  pageSize,
  activePage,
});

export const setPaginationActive = (activePage) => ({
  type: SET_PAGINATION_ACTIVE,
  activePage,
});
