export const CLICK_LIKE = 'CLICK_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const clickLike = id => {
  return {
    type: CLICK_LIKE,
    id,
  };
};

export const cancelLike = id => {
  return {
    type: REMOVE_LIKE,
    id,
  };
};
