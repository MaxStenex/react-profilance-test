import React, { useEffect, useState } from "react";
import "../styles/News.scss";
import { Article } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Link } from "react-router-dom";

const News: React.FC = () => {
  // Все статьи, отсортированные по дате
  const allArticles = useSelector((state: RootState) => state.news.allNews).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  const [filter, setFilter] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(allArticles);

  useEffect(() => {
    // Фильтрация статей по тексту
    setFilteredArticles(
      allArticles.filter((article) =>
        article.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, allArticles]);

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
          <Link className="news__add-link" to="add-article">
            Добавить статью
          </Link>
        </div>
        <ul className="feed__articles">
          {filteredArticles.map((article) => (
            <Article
              verified={article.verified}
              key={article.createdAt.toString()}
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
