import { CLICK_LIKE, GET_CONTENT_DATA, GET_ERROR } from '../actions';

const initialState = { data: [], isLoaded: false };
export const dataReducer = (state = initialState, action) => {
  switch (action?.type) {
    case CLICK_LIKE: {
      return state;
    }
    case GET_CONTENT_DATA: {
      return {
        ...state,
        data: action.payload.data,
        isLoaded: action.payload.isLoaded,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
      };
    }
    default:
      return state;
  }
};
