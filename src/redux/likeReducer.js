import { CLICK_LIKE, REMOVE_LIKE } from './actions';

// [{id: 12, like: false}]
const initialState = [];
export const clickLike = (previousState = initialState, action) => {
  if (action.type === CLICK_LIKE) {
    return [...previousState, { id: action.id, like: true }];
  }

  if (action.type === REMOVE_LIKE) {
    return previousState.map(item => {
      if (action.id === item.id) {
        return { ...item, like: false };
      }
      return item;
    });
  }
};
