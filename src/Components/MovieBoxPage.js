import React from "react";
import "./MovieBoxPage.css";

const MovieBoxPage = () => {
  return (
    <div className="movie-box-page-area">
      <div className="movie-box-page-container">
        <div className="movie-box-page">
          <button className="movie-box-page-button">PREV</button>
          <p>currPage/Pages</p>
          <button className="movie-box-page-button">NEXT</button>
        </div>
      </div>
      <div className="movie-box-page-category-area">
        <div className="movie-box-page-category-container">
          <lable
            for="category-select"
            className="movie-box-page-category-label"
          >
            Category
          </lable>
          <select className="category-select" name="category">
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
