import React from "react";
import "./MovieBox.css";
import MovieBoxPage from "./MovieBoxPage";

const MovieBox = () => {
  return (
    <div className="movie-box-container">
      <MovieBoxPage></MovieBoxPage>
      <div>MovieArea</div>
    </div>
  );
};

export default MovieBox;
