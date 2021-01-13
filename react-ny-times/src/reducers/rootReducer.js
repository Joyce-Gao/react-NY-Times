import { combineReducers } from "redux";
import { Pagination } from "./PaginationReducers";
import { Search } from "./SearchReducers";
import { User } from "./UserReducers";
import { Loading } from "./LoadingReducers";

const rootReducer = combineReducers({
  Pagination,
  Search,
  User,
  Loading,
});
export default rootReducer;
