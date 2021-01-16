import { SET_LOADING } from "../constants/Common";
import { Loading } from "./LoadingReducers";

describe("Loading reduicer", () => {
  it("should return isLoading is false", () => {
    expect(
      Loading(
        {},
        {
          type: SET_LOADING,
          isLoading: false,
        }
      )
    ).toEqual({ isLoading: false });
  });

  it("should set current category", () => {
    expect(
      Loading(
        {},
        {
          type: SET_LOADING,
          isLoading: true,
        }
      )
    ).toEqual({
      isLoading: true,
    });
  });
});
