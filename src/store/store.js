//store

import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todolistReducer";
const store= createStore(combineReducers({counterReducer,todoReducer}))
export default store;