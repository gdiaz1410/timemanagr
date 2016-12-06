import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

// receives action
// catch email change action and record it
// content is property of state being produced
export default combineReducers({
  auth: AuthReducer
})
