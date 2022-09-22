import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";


// create store for reducer functions

const store = createStore(rootReducer, composeWithDevTools());
export default store;