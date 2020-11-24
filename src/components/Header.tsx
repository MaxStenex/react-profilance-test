import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import { LoginPopup } from "./";
import { RootState } from "../redux/rootReducer";
import { Roles } from "../redux/user/reducer";
import { logout } from "../redux/user/actions";

const Header: React.FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const userRole = useSelector((state: RootState) => state.user.role);
  const dispatch = useDispatch();

  const onLogout = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <nav className="header__navigation navigation">
            <ul className="navigation__list">
              <li className="navigation__link">
                <Link to="/home">Главная</Link>
              </li>
              <li className="navigation__link">
                <Link to="/news">Новости</Link>
              </li>
            </ul>
          </nav>
          {userRole === Roles.Guest ? (
            <button
              className="header__join"
              onClick={() => {
                setIsPopupOpened((s) => !s);
              }}
            >
              Войти
            </button>
          ) : (
            <button className="header__join" onClick={onLogout}>
              Выйти
            </button>
          )}
          <LoginPopup opened={isPopupOpened} setIsPopupOpened={setIsPopupOpened} />
        </div>
      </div>
    </header>
  );
};

export default Header;
