import {
  SETPAGINATIONLIST,
  SETPAGINATIONACTIVE,
  PAGINATIONACTIVE,
  PAGINATIONNUM,
  SETLOAING,
} from "../constants/Common";
import { Pagination } from "./PaginationReducers";

let initialState = {
  pageSize: PAGINATIONNUM,
  activePage: PAGINATIONACTIVE,
};

describe("Pagination Reducer", () => {
  it("should be set pagination list pagination state", () => {
    expect(
      Pagination(initialState, {
        type: SETPAGINATIONLIST,
        pageSize: 10,
        activePage: 2,
      })
    ).toEqual({
      pageSize: 10,
      activePage: 2,
    });
  });
  it("should be set pagination active pagination state", () => {
    expect(
      Pagination(initialState, {
        type: SETPAGINATIONACTIVE,
        pageSize: 10,
        activePage: 2,
      })
    ).toEqual({
      pageSize: 10,
      activePage: 2,
    });
  });
});
