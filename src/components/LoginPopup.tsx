import React, { Dispatch, SetStateAction } from "react";
import "../styles/LoginPopup.scss";

interface Props {
  opened: boolean;
  togglePopup: Dispatch<SetStateAction<boolean>>;
}

const LoginPopup: React.FC<Props> = ({ opened, togglePopup }) => {
  return (
    <div className={"join-popup " + (opened ? "join-popup__opened" : "")}>
      <h2 className="join-popup__title">Вход в личный аккаунт</h2>
      <form className="join-popup__form" onSubmit={(evt) => evt.preventDefault()}>
        <div className="join-popup__section">
          <label className="join-popup__label">Логин</label>
          <input type="text" className="join-popup__input" />
        </div>
        <div className="join-popup__section">
          <label className="join-popup__label">Пароль</label>
          <input type="password" className="join-popup__input" />
        </div>
        <div className="join-popup__buttons">
          <button className="join-popup__submit">Войти</button>
          <button
            className="join-popup__close"
            onClick={() => {
              togglePopup((s) => !s);
            }}
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
