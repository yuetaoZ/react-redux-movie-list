import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  loadMovieDetailsAsyncAction,
  rateMovieAsyncAction,
} from "../redux/actions";
import Icon from "@material-ui/core/Icon";
import { Rating } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../App.css";

const MovieDetails = () => {
  const { movieDetails, ratedList, userData } = useSelector((state) => {
    return state.movieModule;
  });
  const dispatch = useDispatch();
  let { id } = useParams();

  const [movie, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([{ id: 1, name: "default" }]);
  const [rating, setRating] = useState("Not yet");
  const [sessionId, setSessionId] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    dispatch(loadMovieDetailsAsyncAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetails !== undefined) {
      setMovieDetails(movieDetails);
      setGenres(movieDetails.genres);
      setCompanies(movieDetails.production_companies);
    }
  }, [movieDetails]);

  useEffect(() => {
    if (userData !== undefined) {
      setSessionId(userData.sessionId);
    }
  }, [userData]);

  useEffect(() => {
    if (ratedList !== undefined && movieDetails !== undefined) {
      const ratedMovie = ratedList.filter(
        (item) => item.id === movieDetails.id
      );
      if (ratedMovie.length > 0) {
        setRating(ratedMovie[0].rating);
      }
    }
  }, [ratedList, movieDetails]);

  const rateMovie = (rating) => {
    const body = {
      value: rating,
    };
    setRating(rating);
    dispatch(rateMovieAsyncAction(movieDetails.id, sessionId, body));
  };

  return (
    <div className="movie-details-area">
      <div className="movie-details-container">
        <div>
          <img
            alt={movie ? movie.title : "title"}
            src={`https://image.tmdb.org/t/p/w500${
              movie ? movie.poster_path : "path"
            }`}
            title={movie ? movie.title : ""}
          />
        </div>
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
          <p className="movie-details-sub-title">Rate it:</p>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">10 stars</Typography>
            <Rating
              name="customized-10"
              defaultValue={2}
              max={10}
              onFocus={(e) => rateMovie(e.target.value)}
            />
          </Box>
          <p className="movie-details-sub-title">Production Companies:</p>
          <div className="movie-logo-container">
            {companies
              ? companies.map((company) => {
                  return (
                    <img
                      key={company ? company.id : "id"}
                      alt={company ? company.name : "title"}
                      src={`https://image.tmdb.org/t/p/w200${
                        company ? company.logo_path : "logo path"
                      }`}
                      title={company ? company.name : "name"}
                    />
                  );
                })
              : "genres"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
