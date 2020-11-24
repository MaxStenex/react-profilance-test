import React, { useEffect, useState } from "react";
import "../styles/News.scss";
import { Article } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Link } from "react-router-dom";
import { Roles } from "../redux/user/reducer";

const News: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  // Подтвержденные статьи, сортированные по дате
  const articles = useSelector((state: RootState) => state.news.allNews)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .filter((article) => {
      // Если пользователь гость, то он будет видеть только подтвержденные статьи

      if (user.role === Roles.Guest) {
        return article.verified === true;
      }
      // Пользователи видят все подтвержденные статьи + свои
      if (user.role === Roles.User) {
        return article.createdBy === user.login;
      }
      // Админ видит все статьи
      return article;
    });

  const [textFilter, setTextFilter] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    // Фильтрация статей по тексту
    setFilteredArticles(
      articles.filter((article) =>
        article.title.toLowerCase().includes(textFilter.toLowerCase())
      )
    );
  }, [textFilter, user.role]);
  // console.log("Rendering");

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
