import {expect} from 'chai';

import {
  LOGOUT,
  logout,
  LOGIN,
  login
} from '../../src/actions/Login';

describe('Login Action Creator tests', () => {
  describe('login action creator test', () => {
    const user = {
      email: 'user',
      pwd: 'secret'
    };

    it('should return a action object {type: LOGIN, user, password}', () => {
      const obj = login(user.email, user.pwd);
      expect(obj).to.deep.equal({type: LOGIN, email: user.email, pwd: user.pwd});
    });
  });

  describe('logout action creator test', () => {
    it('should return a action object {type: LOGOUT}', () => {
      const obj = logout();
      expect(obj).to.deep.equal({type: LOGOUT});
    });
  });
});