import React from "react";
import { ReactComponent as MovieDbLogo } from "../media/moviedb_logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <MovieDbLogo className="header-logo"></MovieDbLogo>
      Header
    </div>
  );
};

export default Header;
