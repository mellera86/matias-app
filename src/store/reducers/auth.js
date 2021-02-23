import * as actions from '../actions';
import { updateObject } from '../utility';

const initialState = {
  isLoggedin: false
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.LOG_IN:
      return updateObject(state, { isLoggedin: true })
    case actions.LOG_OUT:
      return updateObject(state, { isLoggedin: false })
    default:
      return state;
  }
}

export default authReducer;