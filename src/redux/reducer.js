import * as Actions from "./actions";

const initialState = {
  movies: [],
  logged_in: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_POPULAR: {
      console.log("it is load popular movie action");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
