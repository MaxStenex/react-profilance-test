import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import { LoginPopup } from "./";

const Header: React.FC = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

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
          <button
            className="header__join"
            onClick={() => {
              setIsPopupOpened((s) => !s);
            }}
          >
            Войти
          </button>
          <LoginPopup opened={isPopupOpened} togglePopup={setIsPopupOpened} />
        </div>
      </div>
    </header>
  );
};

export default Header;
