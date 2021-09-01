import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MovieDbLogo } from "../media/moviedb_logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-bar">
        <div className="header-logo-container">
          <MovieDbLogo></MovieDbLogo>
        </div>
        <div className="header-menu-container">
          <div className="header-menu-item">
            <Link to="/home" className="header-menu-link" exact>
              HOME
            </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/favorite" className="header-menu-link" exact>
              FAVORITE
            </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/rated" className="header-menu-link" exact>
              RATED
            </Link>
          </div>
        </div>
        <div>
          <div className="header-menu-item">
            <Link to="/login" className="header-menu-link" exact>
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
