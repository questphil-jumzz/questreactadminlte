import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Maintenance/Users";

const Content = () => {
  return (
    <div className="content-wrapper">
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/maintenance/users" component={Users}/>
    </div>
  );
};

export default Content;
