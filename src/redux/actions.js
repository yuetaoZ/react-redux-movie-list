export const LOAD_POPULAR = "LOAD_POPULAR";

export const displayPopularMovies = (value) => {
  return {
    type: LOAD_POPULAR,
    payload: {
      value,
    },
  };
};
