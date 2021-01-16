import {
  SET_PAGINATION_LIST,
  SET_PAGINATION_ACTIVE,
  PAGINATION_ACTIVE,
  PAGINATION_NUM,
  SET_LOADING,
} from "../constants/Common";
import { Pagination } from "./PaginationReducers";

let initialState = {
  pageSize: PAGINATION_NUM,
  activePage: PAGINATION_ACTIVE,
};

describe("Pagination Reducer", () => {
  it("should be set pagination list pagination state", () => {
    expect(
      Pagination(initialState, {
        type: SET_PAGINATION_LIST,
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
        type: SET_PAGINATION_ACTIVE,
        pageSize: 10,
        activePage: 2,
      })
    ).toEqual({
      pageSize: 10,
      activePage: 2,
    });
  });
});
