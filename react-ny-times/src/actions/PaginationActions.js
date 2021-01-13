import { SETPAGINATIONLIST, SETPAGINATIONACTIVE } from "../constants/Common";

export const setPaginationList = (pageSize, activePage) => ({
  type: SETPAGINATIONLIST,
  pageSize,
  activePage,
});

export const setPaginationActive = (activePage) => ({
  type: SETPAGINATIONACTIVE,
  activePage,
});
