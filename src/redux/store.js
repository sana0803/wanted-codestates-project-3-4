import { createStore } from 'redux';
import { clickLike } from './likeReducer';

const store = createStore(clickLike);

export default store;
