import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import list from "../reducers/list";
import fetch from "../reducers/myFetch";
import query from "../reducers/query";

const combinedReducers = combineReducers({
  list,
  fetch,
  query,
});
const store = configureStore({
  reducer: combinedReducers,
});
export default store;
