export const FETCH_POST = 'fetch_post';
export const fetchPost = id => async (dispatch, getState, api) => {
  const res = await api.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
  return dispatch({
    type: FETCH_POST,
    payload: res
  });
};
