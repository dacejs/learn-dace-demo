export const FETCH_MOVIE = 'fetch_movie';
export const fetchMovie = id => async (dispatch, getState, api) => {
  const res = await api.get(`http://api.tvmaze.com/shows/${id}`);
  dispatch({
    type: FETCH_MOVIE,
    payload: res
  });
};
