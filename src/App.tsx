import React from "react";
import "./styles/App.scss";
import "./styles/normalize.scss";
import { Header } from "./components";
import { News, Home, AddArticle } from "./pages";
import { Redirect, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/add-article" component={AddArticle} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </>
  );
};

export default App;
