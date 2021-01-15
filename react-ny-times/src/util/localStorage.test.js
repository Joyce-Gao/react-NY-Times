import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "./localStorage";

describe("localStorage function", () => {
  it("should set localStorage", () => {
    expect(setLocalStorage("local_test", "test")).toEqual(
      localStorage.setItem("local_test", "test")
    );
  });
  it("should get localStorage local_test", () => {
    expect(getLocalStorage("local_test")).toEqual("test");
  });
  it("should remove localStorage local_test", () => {
    expect(removeLocalStorage("local_test")).toEqual();
  });
});
