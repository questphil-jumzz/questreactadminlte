import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Switch } from "react-router-dom";
import SidebarOverlay from "./components/SidebarOverlay";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Content />
        </Switch>
        <Footer />
        <SidebarOverlay />
      </BrowserRouter>
    </div>
  );
};

export default App;
