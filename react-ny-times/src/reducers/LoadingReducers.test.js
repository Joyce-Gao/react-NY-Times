import { SETLOAING } from "../constants/Common";
import { Loading } from "./LoadingReducers";

describe("Loading reduicer", () => {
  it("should return isLoading is false", () => {
    expect(
      Loading(
        {},
        {
          type: SETLOAING,
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
          type: SETLOAING,
          isLoading: true,
        }
      )
    ).toEqual({
      isLoading: true,
    });
  });
});
