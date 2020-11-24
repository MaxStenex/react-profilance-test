import { ArticleType } from "./reducer";

export enum NewsActionTypes {
  ADD_ARTICLE = "ADD_ARTICLE",
  VERIFY_ARTICLE = "VERIFY_ARTICLE",
  DELETE_ARTICLE = "DELETE_ARTICLE",
}

export type NewsActions = AddArticleType | VerifyArticleType | DeleteArticleType;

interface AddArticleType {
  type: NewsActionTypes.ADD_ARTICLE;
  payload: ArticleType;
}

export const addArticle = (
  title: string,
  text: string,
  createdAt: Date,
  verified: boolean,
  createdBy: string | null
): AddArticleType => {
  return {
    type: NewsActionTypes.ADD_ARTICLE,
    payload: {
      title,
      text,
      createdAt,
      verified,
      createdBy,
    },
  };
};

interface VerifyArticleType {
  type: NewsActionTypes.VERIFY_ARTICLE;
  payload: {
    createdAt: Date;
  };
}

export const verifyArticle = (createdAt: Date): VerifyArticleType => {
  return {
    type: NewsActionTypes.VERIFY_ARTICLE,
    payload: {
      createdAt,
    },
  };
};

interface DeleteArticleType {
  type: NewsActionTypes.DELETE_ARTICLE;
  payload: {
    createdAt: Date;
  };
}

export const deleteArticle = (createdAt: Date): DeleteArticleType => {
  return {
    type: NewsActionTypes.DELETE_ARTICLE,
    payload: {
      createdAt,
    },
  };
};
