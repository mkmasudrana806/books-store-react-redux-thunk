import { combineReducers } from "redux";
import { bookReducer } from "./books/reducer";
const mergeReducers = {
  books: bookReducer,
};
export const rootReducer = combineReducers(mergeReducers);
