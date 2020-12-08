import React from "react";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        {/* Logo */}
        <a href="index2.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>Q</b>
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Q</b>uest
          </span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="test_url"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              
              {/* Control Sidebar Toggle Button */}
              <li>
                <a href="test_url" data-toggle="control-sidebar">
                  <i className="fa fa-gears" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
