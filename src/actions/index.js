import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';
// create action creator
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}


export const loginUser = ({email, password}) => {
  firebase.auth().signInWithEmailAndPasswork(email, password);
};
