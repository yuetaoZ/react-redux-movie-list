import React from "react";
import "../App.css";
import MovieBoxPage from "./MovieBoxPage";
import MovieCard from "./MovieCard";

import { useDispatch, useSelector } from "react-redux";

const MovieBox = (props) => {
  const { movielistInfo, loading } = useSelector((state) => {
    return state.movieModule;
  });

  const dispatch = useDispatch();

  return (
    <div className="movie-box-container">
      <MovieBoxPage
        page={movielistInfo.page}
        total_pages={movielistInfo.total_pages}
      ></MovieBoxPage>
      <div className="movie-box-display-area">
        {console.log("movielistInfo from redux: ", movielistInfo)}
        {movielistInfo.results.map((movie) => {
          return <MovieCard movie={movie}></MovieCard>;
        })}
      </div>
    </div>
  );
};

export default MovieBox;
