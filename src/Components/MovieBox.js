import React from "react";
import "../App.css";
import MovieCard from "./MovieCard";

const MovieBox = (props) => {
  const movielist = props.movielist;
  const favoriteList = props.favoriteList;

  return (
    <div className="movie-box-container">
      <div className="movie-box-display-area">
        {movielist &&
          movielist.map((movie) => {
            const filterList = favoriteList.filter(
              (item) => item.id === movie.id
            );
            const inFavorite = filterList.length > 0;
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                inFavorite={inFavorite}
              ></MovieCard>
            );
          })}
      </div>
    </div>
  );
};

export default MovieBox;
