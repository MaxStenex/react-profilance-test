import React from "react";

interface Props {
  opened: boolean;
}

const LoginPopup: React.FC<Props> = ({ opened }) => {
  return (
    <div className={"join-popup " + (opened ? "join-popup__opened" : "")}>
      <h2 className="join-popup__title">Вход в личный аккаунт</h2>
      <form className="join-popup__form">
        <div className="join-popup__section">
          <label className="join-popup__label">Логин</label>
          <input type="text" className="join-popup__input" />
        </div>
        <div className="join-popup__section">
          <label className="join-popup__label">Пароль</label>
          <input type="password" className="join-popup__input" />
        </div>
        <button className="join-popup__submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPopup;
