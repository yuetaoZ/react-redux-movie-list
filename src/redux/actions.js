import axios from "axios";

export const LOAD_MOVIELIST_START = "LOAD_MOVIELIST_START";
export const LOAD_MOVIELIST_FAILED = "LOAD_MOVIELIST_FAILED";
export const LOAD_MOVIELIST_SUCCESS = "LOAD_MOVIELIST_SUCCESS";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const API_KEY = "9b2c8894f1dac9b8e9b2f47ce9f2cb67";

export const loadingStart = () => {
  return {
    type: LOAD_MOVIELIST_START,
  };
};

export const loadingFailed = () => {
  return {
    type: LOAD_MOVIELIST_FAILED,
  };
};

export const loadMovielistSuccess = (movielist) => {
  return {
    type: LOAD_MOVIELIST_SUCCESS,
    payload: movielist,
  };
};

export const loadPopularMoviesAsyncAction = (page) => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      // .then((resp) => console.log("resp:", resp))
      .then((resp) => dispatch(loadMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const loadNowPlayingMoviesAsyncAction = (page) => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      // .then((resp) => console.log("resp:", resp))
      .then((resp) => dispatch(loadMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const loadTopRatedMoviesAsyncAction = (page) => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      // .then((resp) => console.log("resp:", resp))
      .then((resp) => dispatch(loadMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const loadUpcomingMoviesAsyncAction = (page) => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      // .then((resp) => console.log("resp:", resp))
      .then((resp) => dispatch(loadMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};
