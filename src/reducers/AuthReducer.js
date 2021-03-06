// will handle email and password, errors with auth, show spinner
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: ''};

// update state of email input
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
     return {...state, email: action.payload};
    case PASSWORD_CHANGED:
     return {...state, password: action.payload };
    default:
      return state;
  }
}
