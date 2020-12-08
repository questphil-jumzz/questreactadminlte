import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Doctors from "../pages/Maintenance/Doctors";
import Users from "../pages/Maintenance/Users";

const Content = () => {
  return (
    <div className="content-wrapper">
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/maintenance/users" component={Users} />
      <Route exact path="/maintenance/doctors" component={Doctors} />
      asdf
    </div>
  );
};

export default Content;
