import React from "react";
import "./MovieBox.css";
import MovieBoxPage from "./MovieBoxPage";
import MovieCard from "./MovieCard";

const MovieBox = () => {
  return (
    <div className="movie-box-container">
      <MovieBoxPage></MovieBoxPage>
      <div className="movie-box-display-area">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieBox;
