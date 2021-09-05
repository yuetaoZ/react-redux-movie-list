import axios from "axios";

export const LOAD_START = "LOAD_START";
export const LOAD_FAILED = "LOAD_FAILED";
export const LOAD_MOVIELIST_SUCCESS = "LOAD_MOVIELIST_SUCCESS";
export const LOAD_FAVORITE_MOVIELIST_SUCCESS =
  "LOAD_FAVORITE_MOVIELIST_SUCCESS";
export const LOAD_RATED_MOVIELIST_SUCCESS = "LOAD_RATED_MOVIELIST_SUCCESS";
export const LOGIN_SUCCEED = "LOGIN_SUCCEED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const LOG_OUT = "LOG_OUT";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const API_KEY = "9b2c8894f1dac9b8e9b2f47ce9f2cb67";

export const loadingStart = () => {
  return {
    type: LOAD_START,
  };
};

export const loadingFailed = () => {
  return {
    type: LOAD_FAILED,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

export const loginSucceed = (userData) => {
  return {
    type: LOGIN_SUCCEED,
    payload: userData,
  };
};

export const loadMovielistSuccess = (movielist) => {
  return {
    type: LOAD_MOVIELIST_SUCCESS,
    payload: movielist,
  };
};

export const loadFavoriteMovielistSuccess = (movielist) => {
  return {
    type: LOAD_FAVORITE_MOVIELIST_SUCCESS,
    payload: movielist,
  };
};

export const loadRatedMovielistSuccess = (movielist) => {
  return {
    type: LOAD_RATED_MOVIELIST_SUCCESS,
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
      .then((resp) => dispatch(loadMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const loadFavoriteMoviesAsyncAction = (account_id, session_id) => {
  console.log("account_id", account_id);
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(
        `https://api.themoviedb.org/3/account/${account_id}/favorite/movies?api_key=${API_KEY}&language=en-US&session_id=${session_id}&sort_by=created_at.asc&page=1`
      )
      .then((resp) => dispatch(loadFavoriteMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const loadRatedMoviesAsyncAction = (account_id, session_id) => {
  console.log("account_id", account_id);
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(
        `https://api.themoviedb.org/3/account/${account_id}/rated/movies?api_key=${API_KEY}&language=en-US&session_id=${session_id}&sort_by=created_at.asc&page=1`
      )
      .then((resp) => dispatch(loadRatedMovielistSuccess(resp.data)))
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const setLoginStatus = () => {
  return {
    type: SET_LOGIN_STATUS,
  };
};

export const loginAsyncAction = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch(loadingStart());
      const request_token = await axios
        .get(
          `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
        )
        .then((resp) => resp.data.request_token);
      await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
        { username, password, request_token }
      );
      console.log(`request_token`, request_token);
      const session_id = await axios
        .post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
          { request_token }
        )
        .then((resp) => resp.data.session_id);
      console.log("session_id", session_id);
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${session_id}`
        )
        .then((resp) => resp.data);
      console.log("account", data);
      const userData = {
        username,
        accountId: data.id,
        sessionId: session_id,
        requestToken: request_token,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch(loginSucceed(userData));
      console.log("userData", userData);
    } catch (e) {
      console.log("something wrong");
      dispatch(loginFailed());
      throw e;
    }
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: LOG_OUT,
  };
};
