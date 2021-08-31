import React from "react";
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
          <div className="header-menu-item">HOME</div>
          <div className="header-menu-item">FAVORITE</div>
          <div className="header-menu-item">RATED</div>
        </div>
        <div>
          <div className="header-menu-item">Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
