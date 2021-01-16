import { SET_LOADING } from "../constants/Common";
import { setLoading } from "./LoadingActions";

describe("Loading Actions", () => {
  it("should return loading true", () => {
    expect(setLoading(true)).toEqual({
      type: SET_LOADING,
      isLoading: true,
    });
  });
  it("should return loading false", () => {
    expect(setLoading(false)).toEqual({
      type: SET_LOADING,
      isLoading: false,
    });
  });
});
