import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import promiseMiddlerware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

const createStoreWithMiddleware =
  applyMiddleware(promiseMiddlerware)(createStore);

const store = createStoreWithMiddleware(rootReducer, composeWithDevTools());

export default store;
