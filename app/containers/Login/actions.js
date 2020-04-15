/*
 *
 * Login actions
 *
 */

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export function login(email, password) {
  return {
    type: LOGIN,
    credentials: {
      email,
      password,
    },
  };
}

export function loginSuccess(accessToken, refreshToken) {
  return {
    type: LOGIN_SUCCESS,
    accessToken,
    refreshToken,
  };
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED,
  };
}
