import React from "react";
import Cat from "../assets/cat.jpg";
import "../styles/Home.scss";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__main">
          <img src={Cat} alt="Котик машет рукой" className="home__cat" />
          <h2 className="home__title">Привет, Гость!</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
