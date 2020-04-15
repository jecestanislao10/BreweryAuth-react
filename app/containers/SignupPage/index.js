/**
 *
 * SignupPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import SignupForm from 'components/SignupForm/Loadable';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignupPage, { makeSelectorUserData, ErrorSelector, LoadingSelector } from './selectors';
import { signup, signupFailed } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function SignupPage({ onSubmit, errors, loading }) {
  useInjectReducer({ key: 'signupPage', reducer });
  useInjectSaga({ key: 'signupPage', saga });
  return (
    <div>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Description of SignupPage" />
      </Helmet>
      <SignupForm onSubmit={onSubmit} errors={errors} loading={loading} />
    </div>
  );
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object,
  onSubmit: PropTypes.func,
  errors: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signupPage: makeSelectSignupPage(),
  userData: makeSelectorUserData(),
  errors: ErrorSelector(),
  loading: LoadingSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmit: e => {
      e.preventDefault();
      const data = new FormData(e.target);
      const email = data.get('email');
      const username = data.get('username');
      const password = data.get('password');
      const ConfirmPassword = data.get('ConfirmPassword');
      const phone = data.get('phone');
      if (password !== ConfirmPassword) {
        dispatch(signupFailed(['PASSWORD_MATCH']));
      } else {
        dispatch(signup(email, username, phone, password));
      }
      // console.log(email + username + password + phone);
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignupPage);
