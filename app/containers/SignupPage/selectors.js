import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { selectLoginDomain } from '../Login/selectors';

/**
 * Direct selector to the signupPage state domain
 */

const selectSignupPageDomain = state => state.signupPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignupPage
 */

const makeSelectSignupPage = () =>
  createSelector(
    selectSignupPageDomain,
    substate => substate,
  );
const makeSelectorUserData = () =>
  createSelector(
    selectSignupPageDomain,
    substate => substate.userData,
  );
const ErrorSelector = () =>
  createSelector(
    selectSignupPageDomain,
    substate => substate.errors,
  );
const LoadingSelector = () =>
  createSelector(
    selectSignupPageDomain,
    substate => substate.loading,
  );

export default makeSelectSignupPage;
export {
  selectSignupPageDomain,
  makeSelectorUserData,
  ErrorSelector,
  LoadingSelector,
};
