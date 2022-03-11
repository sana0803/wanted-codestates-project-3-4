import { CLICK_LIKE } from './actions';

// {3: false, 4:true}
const initialState = {};
export const clickLike = (previousState = initialState, action) => {
  if (action.type === CLICK_LIKE) {
    const selectId = action.id;
    if (previousState[selectId]) {
      previousState[selectId] = false;
      return previousState;
    }
    previousState[selectId] = true;
    return previousState;
  }
};
