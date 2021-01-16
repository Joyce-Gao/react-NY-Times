import { SET_PAGINATION_ACTIVE } from "../constants/Common";

export const setPaginationActive = (activePage) => ({
  type: SET_PAGINATION_ACTIVE,
  activePage,
});
