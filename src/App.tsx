import React from "react";
import "./styles/App.scss";
import "./styles/normalize.scss";
import { Header } from "./components";
import { News, Home } from "./pages";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/news" component={News} />
      </Switch>
    </>
  );
};

export default App;
