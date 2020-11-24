import React from "react";
import { useSelector } from "react-redux";
import Cat from "../assets/cat.jpg";
import "../styles/Home.scss";
import { RootState } from "../redux/rootReducer";

const Home: React.FC = () => {
  const userLogin = useSelector((state: RootState) => state.user.login);

  return (
    <section className="home">
      <div className="container">
        <div className="home__main">
          <img src={Cat} alt="Котик машет рукой" className="home__cat" />
          <h2 className="home__title">Привет, {userLogin || "Гость!"}</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
