import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Content />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
