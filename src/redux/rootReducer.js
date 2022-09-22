// combine of 2 reducer function form filter, and todo
import { combineReducers } from "redux"
import todoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";


const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
});

export default rootReducer;