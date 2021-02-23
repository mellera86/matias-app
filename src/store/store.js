import { applyMiddleware, compose, createStore } from 'redux';
import allReducers from './reducers';
import thunk from 'react-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;