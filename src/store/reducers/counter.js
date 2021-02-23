import * as actions from '../actions';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.INCREMENT:
      return updateObject(state, { counter: state.counter + payload.nmb })
    default:
      return state
  }
}

export default counterReducer;