export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const login = (email, pwd) => {
  return {
    type: LOGIN,
    email,
    pwd
  };
};

// todo: you could implement your own authentication logic here if you don't want to use firebase;
import * as firebase from 'firebase';
import config from '~/src/firebase.config';
firebase.initializeApp(config);
export const firebaseApp = firebase;
export const loginApi = (account, pwd) => {
  return firebase.auth().signInWithEmailAndPassword(account, pwd);
};

export const LOGOUT = 'LOGOUT';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const CHECK_EMAIL = 'CHECK_EMAIL';
export const CHECK_EMAIL_SUCCESS = 'CHECK_EMAIL_SUCCESS';
export const CHECK_EMAIL_FAILED = 'CHECK_EMAIL_FAILED';
export const checkEmail = (email) => {
  return {
    type: CHECK_EMAIL,
    email
  };
};