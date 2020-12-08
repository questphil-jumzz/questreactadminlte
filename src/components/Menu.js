import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">company name</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="/" className="d-block">
              username goes here
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview menu-open">
              <NavLink
                to="/maintenance"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-th" />
                <p>
                  Maintenance
                  <i className="right fas fa-angle-left" />
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/maintenance/users"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Users</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/maintenance/users"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Doctors</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Company</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Patients</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Items</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Packages</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Menu;
