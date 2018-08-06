import { FETCH_USER } from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      // 只能返回对象，不能返回数组
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
};
