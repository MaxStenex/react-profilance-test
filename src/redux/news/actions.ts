import { Roles } from "../user/reducer";
import { ArticleType } from "./reducer";

export enum NewsActionTypes {
  ADD_ARTICLE = "ADD_ARTICLE",
  FILTER_ARTICLES = "FILTER_ARTICLES",
  VERIFY_ARTICLE = "VERIFY_ARTICLE",
  DELETE_ARTICLE = "DELETE_ARTICLE",
}

export type NewsActions =
  | AddArticleType
  | VerifyArticleType
  | DeleteArticleType
  | FilterArticlesType;

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

interface FilterArticlesType {
  type: NewsActionTypes.FILTER_ARTICLES;
  payload: {
    role: Roles;
    login: string | null;
  };
}

export const filterArticles = (role: Roles, login: string | null): FilterArticlesType => {
  return {
    type: NewsActionTypes.FILTER_ARTICLES,
    payload: {
      role,
      login,
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
