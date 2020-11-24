import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/actions";
import { Roles } from "../redux/user/reducer";
import "../styles/LoginPopup.scss";
import LoginsAndPasswords from "../LoginsAndPasswords";

interface Props {
  opened: boolean;
  setIsPopupOpened: Dispatch<SetStateAction<boolean>>;
}

const LoginPopup: React.FC<Props> = ({ opened, setIsPopupOpened }) => {
  const [userData, setUserData] = useState({ login: "", password: "" });
  const [formError, setFormError] = useState(false);

  const dispatch = useDispatch();

  const successLogin = (role: Roles) => {
    if (role === Roles.User) {
      dispatch(setUser(userData.login, userData.password, Roles.User));
    }
    if (role === Roles.Admin) {
      dispatch(setUser(userData.login, userData.password, Roles.Admin));
    }
    setUserData({ login: "", password: "" });
    setFormError(false);
    setIsPopupOpened(false);
  };

  const onFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    // Проверка логина и пароля пользователя
    if (
      userData.login === LoginsAndPasswords.user.login &&
      userData.password === LoginsAndPasswords.user.password
    ) {
      // Успешная авторизация пользователя
      return successLogin(Roles.User);
    }

    // Проверка логина и пароля админа
    if (
      userData.login === LoginsAndPasswords.admin.login &&
      userData.password === LoginsAndPasswords.admin.password
    ) {
      // Успешная авторизация админа
      return successLogin(Roles.Admin);
    }

    // Вывод ошибки аутентификации
    setUserData({ login: "", password: "" });
    setFormError(true);
  };

  return (
    <div className={"join-popup " + (opened ? "join-popup__opened" : "")}>
      <h2 className="join-popup__title">Вход в личный аккаунт</h2>
      <form className="join-popup__form" onSubmit={onFormSubmit}>
        <div className="join-popup__section">
          <label className="join-popup__label">Логин</label>
          <input
            type="text"
            className="join-popup__input"
            placeholder="login"
            value={userData.login}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setUserData({ ...userData, login: evt.target.value })
            }
          />
        </div>
        <div className="join-popup__section">
          <label className="join-popup__label">Пароль</label>
          <input
            type="password"
            className="join-popup__input"
            placeholder="password"
            value={userData.password}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setUserData({ ...userData, password: evt.target.value })
            }
          />
        </div>
        {formError && (
          <div className="join-popup__error">Неправильный логин или пароль</div>
        )}
        <div className="join-popup__buttons">
          <button className="join-popup__submit" type="submit">
            Войти
          </button>
          <button
            className="join-popup__close"
            type="button"
            onClick={() => {
              setIsPopupOpened(false);
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
