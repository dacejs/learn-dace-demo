import { FETCH_POSTS } from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      // 只能返回对象，不能返回数组
      return {
        ...state,
        posts: action.payload.data.map(({ id, title }) => ({ id, title }))
      };
    default:
      return state;
  }
};
