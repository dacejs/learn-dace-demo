export const FETCH_USER = 'fetch_user';
export const fetchUser = id => async (dispatch, getState, api) => {
  const res = await api.get(`http://jsonplaceholder.typicode.com/users/${id}`);
  return dispatch({
    type: FETCH_USER,
    payload: res
  });
};
