export const CLICK_LIKE = 'CLICK_LIKE';

export const clickLike = id => {
  return {
    type: CLICK_LIKE,
    id,
  };
};
