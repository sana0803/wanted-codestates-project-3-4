import { apis } from '../axios/axios';

export const CLICK_LIKE = 'CLICK_LIKE';
export const GET_CONTENT_DATA = 'GET_CONTENT_DATA';
export const GET_ERROR = 'GET_ERROR';

export const clickLike = id => {
  return {
    type: CLICK_LIKE,
    id,
  };
};

export const getContentData = async () => {
  try {
    const { data } = await apis();
    return {
      type: GET_CONTENT_DATA,
      payload: {
        isLoaded: true,
        data,
      },
    };
  } catch (error) {
    return {
      type: GET_ERROR,
      payload: {
        isLoaded: false,
      },
    };
  }
};
