import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
  // return createStore(rootReducer, devToolsEnhancer());
}
