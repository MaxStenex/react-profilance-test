import React from "react";
import "../styles/Article.scss";

const Article: React.FC = () => {
  return (
    <li className="feed__article article">
      <h3 className="article__title">Название новости</h3>
      <p className="article__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet nihil
        quisquam neque obcaecati! Voluptates.
      </p>
      <span className="article__date">
        <span>Написано: </span>
        {new Date().toUTCString()}
      </span>
    </li>
  );
};

export default Article;
