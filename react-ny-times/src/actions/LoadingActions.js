import { SET_LOADING } from "../constants/Common";

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading,
});
