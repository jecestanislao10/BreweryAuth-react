/*
 *
 * SignupPage actions
 *
 */

import { SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESS } from './constants';

export function signup(email, username, phone, password) {
  return {
    type: SIGNUP,
    userData: {
      email,
      username,
      password,
      phone,
      mfa: '1',
    },
  };
}

export function signupSuccess(clientId) {
  return {
    type: SIGNUP_SUCCESS,
    clientId,
  };
}

export function signupFailed(errors = []) {
  return {
    type: SIGNUP_FAILED,
    errors,
  };
}
