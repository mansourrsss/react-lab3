import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/combinedReducer";
export const store = createStore(reducers, composeWithDevTools());
