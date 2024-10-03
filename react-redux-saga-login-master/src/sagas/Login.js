import {takeLatest, takeEvery, call, put} from 'redux-saga/effects';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  loginApi
} from '../actions/Login';

export function* login(action) {
  try {
    const payload = yield call(loginApi, action.email, action.pwd);
    yield put({type: LOGIN_SUCCESS, payload});
  } catch (error) {
    yield put({type: LOGIN_FAILED, error});
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
