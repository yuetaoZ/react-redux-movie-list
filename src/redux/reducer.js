import * as Actions from "./actions";

const initialState = {
  movielist: [],
  loading: false,
  logged_in: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_MOVIELIST_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.LOAD_MOVIELIST_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.LOAD_MOVIELIST_SUCCESS: {
      return {
        ...state,
        movielistInfo: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
