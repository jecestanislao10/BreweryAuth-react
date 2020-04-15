/*
 *
 * SignupPage reducer
 *
 */
import produce from 'immer';
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED } from './constants';

export const initialState = {
  userData: {},
  errors: [],
  loading: false,
  clientId: '',
};

/* eslint-disable default-case, no-param-reassign */
const signupPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGNUP:
        draft.userData = action.userData;
        draft.errors = [];
        draft.loading = true;
        break;
      case SIGNUP_FAILED:
        draft.loading = false;
        draft.errors = action.errors;
        break;
      case SIGNUP_SUCCESS:
        draft.loading = false;
        draft.clientId = action.clientId;
        break;
    }
  });

export default signupPageReducer;
