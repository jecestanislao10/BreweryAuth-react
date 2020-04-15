import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

const makeSelectLoading = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.loading,
  );

const makeSelectLoginFailed = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.loginFailed,
  );
const makeCredentialsSelector = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.credentials,
  );

export default makeSelectLogin;
export {
  selectLoginDomain,
  makeCredentialsSelector,
  makeSelectLoginFailed,
  makeSelectLoading,
};
