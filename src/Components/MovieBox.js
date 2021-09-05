import React from "react";
import "../App.css";
import MovieCard from "./MovieCard";

const MovieBox = (props) => {
  return (
    <div className="movie-box-container">
      <div className="movie-box-display-area">
        {props.movielist &&
          props.movielist.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>;
          })}
      </div>
    </div>
  );
};

export default MovieBox;
