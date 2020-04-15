/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from './constants';

export const initialState = {
  credentials: {},
  loginFailed: false,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.loading = true;
        draft.loginFailed = false;
        draft.credentials = action.credentials;
        break;
    }
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.accessToken = action.accessToken;
        draft.refreshToken = action.refreshToken;
        draft.loginFailed = false;
        draft.loading = false;
        break;
    }
    switch (action.type) {
      case LOGIN_FAILED:
        draft.loading = false;
        draft.loginFailed = true;
        break;
    }
  });
export default loginReducer;
