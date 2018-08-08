import { FETCH_POST } from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      // 只能返回对象，不能返回数组
      return {
        ...state,
        post: action.payload.data
      };
    default:
      return state;
  }
};
