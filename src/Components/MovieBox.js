import React from "react";
import "../App.css";
import MovieBoxPage from "./MovieBoxPage";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";

const MovieBox = () => {
  const { movielist } = useSelector((state) => {
    return state.movieModule;
  });

  const dispatch = useDispatch();

  return (
    <div className="movie-box-container">
      <MovieBoxPage></MovieBoxPage>
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
