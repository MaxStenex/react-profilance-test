import React from "react";
import "../styles/News.scss";
import { Article } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

const News: React.FC = () => {
  const articles = useSelector((state: RootState) => state.news.allNews);

  return (
    <section className="news">
      <div className="container">
        <h2 className="news__title">Новости</h2>
        <div className="news__top">
          <h3 className="news__label">Поиск по тексту</h3>
          <input type="text" className="news__search" />
        </div>
        <ul className="feed__articles">
          {articles.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              text={article.text}
              createdAt={article.createdAt}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
