import {expect} from 'chai';
import {takeLatest, call, put} from 'redux-saga/effects';
import {
  login,
  watchLogin
} from '../../src/sagas/Login';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  loginApi
} from '../../src/actions/Login';

describe('Login Saga tests', () => {
  describe('watchLogin saga test', () => {
    const gen = watchLogin();
    it('should take latest LOGIN request', () => {
      expect(gen.next().value).to.deep.equal(takeLatest(LOGIN, login));
    })
  });

  describe('login saga test', () => {
    const action = {
      email: 'gino.wu@test.com',
      pwd: 'abc12345'
    };

    const gen = login(action);

    it('should yield an Effect call(loginApi, action.email, action.pwd)', () => {
      expect(gen.next().value).to.deep.equal(call(loginApi, action.email, action.pwd));
    });

    it('should yield an Effect put(LOGIN_SUCCESS, payload)', () => {
      const payload = {};
      expect(gen.next(payload).value).to.deep.equal(put({type: LOGIN_SUCCESS, payload}));
    });

    it('should yield an Effect put(LOGIN_FAILED, error)', () => {
      const error = {};
      expect(gen.throw(error).value).to.deep.equal(put({type: LOGIN_FAILED, error}));
    });
  });
});