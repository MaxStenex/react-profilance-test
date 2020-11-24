import React, { useEffect, useState } from "react";
import "../styles/News.scss";
import { Article } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Link } from "react-router-dom";
import { filterArticles } from "../redux/news/actions";

const News: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  // Все статьи
  const allArticles = useSelector((state: RootState) => state.news.allNews);
  // Статьи, сортированные в зависимости от типа пользователя
  const articles = useSelector((state: RootState) => state.news.filteredNews);
  const dispatch = useDispatch();

  const [textFilter, setTextFilter] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    // Сортировка, в зависимости от типа пользователя
    dispatch(filterArticles(user.role, user.login));
  }, [dispatch, user.login, user.role, allArticles]);

  useEffect(() => {
    // Фильтрация статей по тексту
    setFilteredArticles(
      articles.filter((article) =>
        article.title.toLowerCase().includes(textFilter.toLowerCase())
      )
    );
  }, [textFilter, user.role, articles]);

  return (
    <section className="news">
      <div className="container">
        <h2 className="news__title">Новости</h2>
        <div className="news__top">
          <h3 className="news__label">Поиск</h3>
          <input
            type="text"
            className="news__search"
            value={textFilter}
            placeholder="Название статьи..."
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              setTextFilter(evt.target.value);
            }}
          />
          <Link className="news__add-link" to="add-article">
            Добавить статью
          </Link>
        </div>
        <ul className="feed__articles">
          {filteredArticles.map((article) => {
            return (
              <Article
                verified={article.verified}
                key={article.createdAt.toString()}
                title={article.title}
                text={article.text}
                createdAt={article.createdAt}
                createdBy={article.createdBy}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;
