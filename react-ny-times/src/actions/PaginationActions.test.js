import { SET_PAGINATION_ACTIVE } from "../constants/Common";
import { setPaginationActive } from "./PaginationActions";

describe("pagination Actions", () => {
  it("should return pagination activePage", () => {
    expect(setPaginationActive(5)).toEqual({
      type: SET_PAGINATION_ACTIVE,
      activePage: 5,
    });
  });
});
