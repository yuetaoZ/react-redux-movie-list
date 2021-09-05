import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as MovieDbLogo } from "../media/moviedb_logo.svg";
import "../App.css";
import { logout, loadPopularMoviesAsyncAction } from "../redux/actions";

const Header = () => {
  const { logged_in, userData } = useSelector((state) => {
    return state.movieModule;
  });

  const dispatch = useDispatch();

  const [showLogOutBtn, setShowLogOutBtn] = useState(false);

  const logOut = () => {
    setShowLogOutBtn(false);
    dispatch(logout());
  };

  const showLogOut = () => {
    setShowLogOutBtn(true);
  };

  const hideLogOut = () => {
    setShowLogOutBtn(false);
  };

  const displayLogoutBtn = (shouldShow) => {
    if (shouldShow) {
      return (
        <button onClick={logOut} autoFocus={true} onBlur={hideLogOut}>
          logout
        </button>
      );
    } else {
      return (
        <div tabIndex="0" onClick={showLogOut}>
          {userData && userData.username}
        </div>
      );
    }
  };

  const displayDefaultPage = () => {
    dispatch(loadPopularMoviesAsyncAction(1));
  };

  return (
    <header className="header-container">
      <div className="header-bar">
        <div className="header-logo-container">
          <MovieDbLogo></MovieDbLogo>
        </div>
        <div className="header-menu-container">
          <div className="header-menu-item">
            <Link
              to="/"
              className="header-menu-link"
              onClick={displayDefaultPage}
            >
              HOME
            </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/favorite" className="header-menu-link">
              FAVORITE
            </Link>
          </div>
          <div className="header-menu-item">
            <Link to="/rated" className="header-menu-link">
              RATED
            </Link>
          </div>
        </div>
        <div>
          <div className="header-menu-item">
            {logged_in ? (
              <div>{displayLogoutBtn(showLogOutBtn)}</div>
            ) : (
              <Link to="/login" className="header-menu-link">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
