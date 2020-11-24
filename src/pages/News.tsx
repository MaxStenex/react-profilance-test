import React, { useEffect, useState } from "react";
import "../styles/News.scss";
import { Article } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

const News: React.FC = () => {
  const articles = useSelector((state: RootState) => state.news.allNews);
  const [filter, setFilter] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    // Фильтрация статей
    setFilteredArticles(
      articles.filter((article) =>
        article.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, articles]);

  return (
    <section className="news">
      <div className="container">
        <h2 className="news__title">Новости</h2>
        <div className="news__top">
          <h3 className="news__label">Поиск</h3>
          <input
            type="text"
            className="news__search"
            value={filter}
            placeholder="Название статьи..."
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              setFilter(evt.target.value);
            }}
          />
        </div>
        <ul className="feed__articles">
          {filteredArticles.map((article) => (
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
