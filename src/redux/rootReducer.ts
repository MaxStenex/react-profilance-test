import { combineReducers } from "redux";
import { newsReducer, NewsStateType } from "./news/reducer";
import { userReducer, UserStateType } from "./user/reducer";

export interface RootState {
  news: NewsStateType;
  user: UserStateType;
}

export const rootReducer = combineReducers({ news: newsReducer, user: userReducer });
