import counterReducer from './counter';
import authReducer from './auth';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  auth: authReducer
})

export default allReducers;