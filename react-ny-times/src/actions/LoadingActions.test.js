import { SETLOAING } from "../constants/Common";
import { setLoading } from "./LoadingActions";

describe("Loading Actions", () => {
  it("should return loading true", () => {
    expect(setLoading(true)).toEqual({
      type: SETLOAING,
      isLoading: true,
    });
  });
  it("should return loading false", () => {
    expect(setLoading(false)).toEqual({
      type: SETLOAING,
      isLoading: false,
    });
  });
});
