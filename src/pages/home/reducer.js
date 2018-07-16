import { FETCH_MOVIES } from './action';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log('--action.payload.data:', action.payload.data);
      return action.payload.data.map(({ show: { id, name } }) => ({ id, name }));
    default:
      return state;
  }
};
