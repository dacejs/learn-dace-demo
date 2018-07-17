import { FETCH_MOVIE } from './action';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        data: action.payload.data
      };
    default:
      return state;
  }
};
