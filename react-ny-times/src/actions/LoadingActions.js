import { SETLOAING } from "../constants/Common";

export const setLoading = (isLoading) => ({
  type: SETLOAING,
  isLoading,
});
