import { isLoaded, logger } from 'dace';

export const FETCH_MOVIES = 'fetch_movie';
export const fetchMovies = () => async (dispatch, getState, api) => {
  const { movies } = getState();
  if (!isLoaded(movies)) {
    const res = await api.get('http://api.tvmaze.com/search/shows?q=batman');
    dispatch({
      type: FETCH_MOVIES,
      payload: res
    });
  } else {
    logger.info('state.movies已经获取过');
  }
};
