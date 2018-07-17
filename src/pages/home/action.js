import { isLoaded } from 'dace';

export const FETCH_MOVIES = 'fetch_movies';
export const fetchMovies = () => async (dispatch, getState, api) => {
  const { movies } = getState();
  if (!isLoaded(movies)) {
    const res = await api.get('http://api.tvmaze.com/search/shows?q=batman');
    dispatch({
      type: FETCH_MOVIES,
      payload: res
    });
  } else {
    console.log('state.movies已经获取过');
  }
};
