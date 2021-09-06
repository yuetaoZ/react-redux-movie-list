import * as Actions from "./actions";

const initialState = {
  movielist: [],
  favoriteList: [],
  ratedList: [],
  page: "",
  totalPages: "",
  loading: false,
  logged_in: false,
  login_failed: false,
  userData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.LOAD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.SET_LOGIN_STATUS: {
      return {
        ...state,
        login_failed: false,
      };
    }
    case Actions.LOGIN_SUCCEED: {
      return {
        ...state,
        loading: false,
        logged_in: true,
        login_failed: false,
        userData: action.payload,
      };
    }
    case Actions.LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        logged_in: false,
        login_failed: true,
      };
    }
    case Actions.LOG_OUT: {
      return {
        ...state,
        logged_in: false,
        favoriteList: [],
        ratedList: [],
        userData: {},
      };
    }
    case Actions.LOAD_MOVIELIST_SUCCESS: {
      return {
        ...state,
        movielistInfo: action.payload,
        page: action.payload.page,
        totalPages: action.payload.total_pages,
        movielist: action.payload.results,
        loading: false,
      };
    }
    case Actions.LOAD_FAVORITE_MOVIELIST_SUCCESS: {
      return {
        ...state,
        favoriteList: action.payload.results,
        loading: false,
      };
    }
    case Actions.LOAD_RATED_MOVIELIST_SUCCESS: {
      return {
        ...state,
        ratedList: action.payload.results,
        loading: false,
      };
    }
    case Actions.LOAD_MOVIE_DETAILS_SUCCEED: {
      return {
        ...state,
        movieDetails: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
