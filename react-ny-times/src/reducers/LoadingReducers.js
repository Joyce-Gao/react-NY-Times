import { SETLOAING } from "../constants/Common";

let initialState = {
  isLoading: true,
};
export const Loading = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETLOAING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
