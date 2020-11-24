import React from "react";
import { ArticleType } from "../redux/news/reducer";
import "../styles/Article.scss";

const Article: React.FC<ArticleType> = ({ text, title, createdAt }) => {
  return (
    <li className="feed__article article">
      <h3 className="article__title">{title}</h3>
      <p className="article__text">{text}</p>
      <span className="article__date">
        <span>Написано: </span>
        {createdAt.toLocaleString()}
      </span>
    </li>
  );
};

export default Article;
