import React from "react";
import "../styles/News.scss";
import { Article } from "../components";

const News: React.FC = () => {
  return (
    <section className="news">
      <div className="container">
        <h2 className="news__title">Новости</h2>
        <div className="news__top">
          <h3 className="news__label">Поиск по тексту</h3>
          <input type="text" className="news__search" />
        </div>
        <ul className="feed__articles">
          <Article />
          <Article />
        </ul>
      </div>
    </section>
  );
};

export default News;
