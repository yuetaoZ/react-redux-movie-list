import React from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieBox = () => {
  const { movielist } = useSelector((state) => {
    return state.movieModule;
  });

  return (
    <div className="movie-box-container">
      <div className="movie-box-display-area">
        {movielist &&
          movielist.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>;
          })}
      </div>
    </div>
  );
};

export default MovieBox;
