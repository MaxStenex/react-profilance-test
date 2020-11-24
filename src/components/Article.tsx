import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, verifyArticle } from "../redux/news/actions";
import { ArticleType } from "../redux/news/reducer";
import { RootState } from "../redux/rootReducer";
import { Roles } from "../redux/user/reducer";
import "../styles/Article.scss";

const Article: React.FC<ArticleType> = React.memo(
  ({ text, title, createdAt, verified }) => {
    const userRole = useSelector((state: RootState) => state.user.role);
    const dispatch = useDispatch();

    const onVerify = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
      dispatch(verifyArticle(createdAt));
    };
    const onDelete = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
      dispatch(deleteArticle(createdAt));
    };

    return (
      <li className="feed__article article">
        <h3 className="article__title">{title}</h3>
        <p className="article__text">{text}</p>
        <span className="article__date">
          <span>Написано: </span>
          {createdAt.toLocaleString()}
        </span>
        {userRole === Roles.Admin ? (
          <div className="article__admin-buttons">
            {verified ? null : (
              <button className="article__approve-btn" onClick={onVerify}>
                Одобрить
              </button>
            )}
            <button className="article__delete-btn" onClick={onDelete}>
              Удалить
            </button>
          </div>
        ) : null}
      </li>
    );
  }
);

export default Article;
