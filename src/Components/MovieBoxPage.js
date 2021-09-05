import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPopularMoviesAsyncAction,
  loadNowPlayingMoviesAsyncAction,
  loadTopRatedMoviesAsyncAction,
  loadUpcomingMoviesAsyncAction,
} from "../redux/actions";
import "../App.css";

const MovieBoxPage = () => {
  const { movielistInfo } = useSelector((state) => {
    return state.movieModule;
  });

  const dispatch = useDispatch();

  const [select, setSelect] = useState("");

  const onChange = (e) => {
    const tag = e.target.value;
    setSelect(tag);
    switch (tag) {
      case "NOW_PLAYING": {
        dispatch(loadNowPlayingMoviesAsyncAction(1));
        return;
      }
      case "POPULAR": {
        dispatch(loadPopularMoviesAsyncAction(1));
        return;
      }
      case "TOP_RATED": {
        dispatch(loadTopRatedMoviesAsyncAction(1));
        return;
      }
      case "UPCOMING": {
        dispatch(loadUpcomingMoviesAsyncAction(1));
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div className="movie-box-page-area">
      <div className="movie-box-page-container">
        <div className="movie-box-page">
          <button className="movie-box-page-button">PREV</button>
          <p>
            {movielistInfo && movielistInfo.page} /{" "}
            {movielistInfo && movielistInfo.total_pages}
          </p>
          <button className="movie-box-page-button">NEXT</button>
        </div>
      </div>
      <div className="movie-box-page-category-area">
        <div className="movie-box-page-category-container">
          <label htmlFor="category" className="movie-box-page-category-label">
            Category
          </label>
          <select
            className="category-select"
            name="category"
            value={select ? select : "POPULAR"}
            onChange={onChange}
          >
            <option value="NOW_PLAYING">Now Playing</option>
            <option value="POPULAR">Popular</option>
            <option value="TOP_RATED">Top Rated</option>
            <option value="UPCOMING">Upcoming</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MovieBoxPage;
