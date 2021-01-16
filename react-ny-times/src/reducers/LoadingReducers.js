import { SET_LOADING } from "../constants/Common";

let initialState = {
  isLoading: true,
};
export const Loading = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
