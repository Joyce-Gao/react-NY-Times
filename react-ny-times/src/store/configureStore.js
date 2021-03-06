import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authMiddleware from "./AuthMiddleware";
import rootReducer from "../reducers/rootReducer";

const configureStore = (preloadedState) => {
  const middlewares = [thunk, authMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];

  const enhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
};

export default configureStore;
