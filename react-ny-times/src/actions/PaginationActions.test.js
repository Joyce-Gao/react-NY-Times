import {
  SET_PAGINATION_LIST,
  SET_PAGINATION_ACTIVE,
} from "../constants/Common";
import { setPaginationList, setPaginationActive } from "./PaginationActions";

describe("pagination Actions", () => {
  it("should return pagination pageSize and activePage", () => {
    expect(setPaginationList(10, 4)).toEqual({
      type: SET_PAGINATION_LIST,
      pageSize: 10,
      activePage: 4,
    });
  });
  it("should return pagination activePage", () => {
    expect(setPaginationActive(5)).toEqual({
      type: SET_PAGINATION_ACTIVE,
      activePage: 5,
    });
  });
});
