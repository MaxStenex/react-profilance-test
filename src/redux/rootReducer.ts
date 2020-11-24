import { combineReducers } from "redux";
import { newsReducer, NewsStateType } from "./news/reducer";

export interface RootState {
  news: NewsStateType;
}

export const rootReducer = combineReducers({ news: newsReducer });
