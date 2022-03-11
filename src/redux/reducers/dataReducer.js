import { CLICK_LIKE, GET_CONTENT_DATA, GET_ERROR } from '../actions';

const initialState = { data: [], isLoaded: false };
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_LIKE: {
      const content = state.data.content.map(item => {
        if (item.id === action.id) {
          if (item.isClick === false) {
            return {
              ...item,
              like_cnt: item.like_cnt + 1,
              isClick: true,
            };
          } else {
            return { ...item, like_cnt: item.like_cnt - 1, isClick: false };
          }
        } else {
          return item;
        }
      });
      return { ...state, data: { content: content } };
    }

    case GET_CONTENT_DATA: {
      const content = action.payload.data.content.map(item => {
        item.isClick = false;
        return item;
      });
      const sector = action.payload.data.sector;
      return {
        ...state,
        data: {
          content: content,
          sector: sector,
        },
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
