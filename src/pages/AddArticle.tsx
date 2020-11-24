import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../redux/news/actions";
import { RootState } from "../redux/rootReducer";
import { Roles } from "../redux/user/reducer";
import "../styles/AddArticle.scss";

const AddArticle: React.FC = () => {
  const [articleData, setArticleData] = useState({ title: "", text: "" });
  const [error, setError] = useState(false);
  const userRole = useSelector((state: RootState) => state.user.role);

  const dispatch = useDispatch();
  const onAdd = (evt: React.FormEvent) => {
    evt.preventDefault();
    const { title, text } = articleData;
    if (userRole === Roles.Guest) {
      return setError(true);
    }
    // Валидация на пустые строки
    if (text.trim() !== "" && title.trim() !== "") {
      const { title, text } = articleData;
      dispatch(addArticle(title, text, new Date(), false));
      setArticleData({ title: "", text: "" });
      setError(false);
    }
  };

  return (
    <section className="add-article">
      <div className="container">
        <h2 className="add-article__title">Добавить статью</h2>
        <form className="add-article__form" onSubmit={onAdd}>
          <div className="add-article__section">
            <h3 className="add-article__label">Название</h3>
            <input
              type="text"
              className="add-article__input"
              value={articleData.title}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                setArticleData({ ...articleData, title: evt.target.value })
              }
            />
          </div>
          <div className="add-article__section">
            <h3 className="add-article__label">Текст</h3>
            <textarea
              className="add-article__textarea"
              value={articleData.text}
              onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
                setArticleData({ ...articleData, text: evt.target.value })
              }
            />
          </div>
          <button className="add-article__submit" type="submit">
            Добавить
          </button>
          {error && (
            <div className="add-article__error">
              Авторизуйтесь, чтобы добавить новость.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddArticle;
