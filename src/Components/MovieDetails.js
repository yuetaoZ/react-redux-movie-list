import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadMovieDetailsAsyncAction } from "../redux/actions";
import Icon from "@material-ui/core/Icon";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieDetails, ratedList } = useSelector((state) => {
    return state.movieModule;
  });
  const dispatch = useDispatch();
  let { id } = useParams();

  const [movie, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([{ id: 1, name: "default" }]);
  const [rating, setRating] = useState("Not yet");

  useEffect(() => {
    dispatch(loadMovieDetailsAsyncAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetails !== undefined) {
      setMovieDetails(movieDetails);
      setGenres(movieDetails.genres);
    }
  }, [movieDetails]);

  useEffect(() => {
    if (ratedList !== undefined) {
      const ratedMovie = ratedList.filter(
        (item) => item.id === movieDetails.id
      );
      if (ratedMovie.length > 0) {
        setRating(ratedMovie[0].rating);
      }
    }
  }, [ratedList, movieDetails]);

  return (
    <div className="movie-details-area">
      <div className="movie-details-container">
        <img
          alt={movie ? movie.title : "title"}
          src={`https://image.tmdb.org/t/p/w500${
            movie ? movie.poster_path : "path"
          }`}
          title={movie ? movie.title : ""}
        />
        <div className="movie-details-description-container">
          <h3 className="movie-details-title">
            {movie ? movie.title : "title"}
          </h3>
          <p className="movie-details-sub-title">Release date:</p>
          <p>{movie ? movie.release_date : "release_date"}</p>
          <p className="movie-details-sub-title">Overview:</p>
          <p>{movie ? movie.overview : "overview"}</p>
          <p className="movie-details-sub-title">Genres:</p>
          <div className="movie-details-genre-container">
            {genres
              ? genres.map((genre) => {
                  return (
                    <div key={genre.id} className="movie-details-genre">
                      {genre.name}
                    </div>
                  );
                })
              : "genres"}
          </div>
          <p className="movie-details-sub-title">Average Rating:</p>
          <div className="movie-average-rating">
            <Icon size="small" style={{ color: "orange" }}>
              star
            </Icon>
            {movie ? movie.vote_average : "vote_average"}
          </div>
          <p className="movie-details-sub-title">Your Rating:</p>
          <p>{rating}</p>
          description
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
