import { ArticleType } from "./reducer";

export enum NewsActionTypes {
  ADD_ARTICLE = "ADD_ARTICLE",
}

export type NewsActions = AddArticleType;

interface AddArticleType {
  type: NewsActionTypes.ADD_ARTICLE;
  payload: ArticleType;
}

export const addArticle = (
  title: string,
  text: string,
  createdAt: Date,
  verified: boolean
): AddArticleType => {
  return {
    type: NewsActionTypes.ADD_ARTICLE,
    payload: {
      title,
      text,
      createdAt,
      verified,
    },
  };
};
