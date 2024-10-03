import {
  CHECK_EMAIL,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAILED,

  LOGOUT,
  // LOGOUT_SUCCESS,
  // LOGOUT_FAILED,

  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '~/src/actions/Login';

const INITAIL_STATE = {
  isFetching: false,
  error: null,
  token: null
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isFetching: true};

    case LOGIN_SUCCESS:
      return {...state, isFetching: false, token: action.payload.uid};

    case LOGIN_FAILED:
      return {...state, isFetching: false, error: action.error};

    case LOGOUT:
      return {...state, token: null};

    // case LOGOUT_SUCCESS:
    // case LOGOUT_FAILED:
    case CHECK_EMAIL:
    case CHECK_EMAIL_SUCCESS:
    case CHECK_EMAIL_FAILED:
    default:
      return state;
  }
};