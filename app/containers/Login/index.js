/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import LoginForm from 'components/LoginForm/Loadable';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { login } from './actions';
import { makeCredentialsSelector, makeSelectLoginFailed, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export function Login({ onSubmit, credentials, loginFailed, loading }) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  let loginStatus = '';
  let loadingStatus = '';

  console.log(loginFailed);
  console.log(loading);
  if(loading === true){ loadingStatus = 'Loading...'}
  if (loginFailed === true){ loginStatus = 'Login Failed' }

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="Login Page" content="Login Page" />
      </Helmet>
      <h1>WELCOME TO BREWERY-AUTH</h1>
      <LoginForm credentials={credentials} onSubmit={onSubmit} />
      <p>{loadingStatus}{loginStatus}</p>
      <a href='/signup'>Don't have an account? Signup.</a>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  credentials: PropTypes.object,
  onSubmit: PropTypes.func,
  loginFailed: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  credentials: makeCredentialsSelector(),
  loginFailed: makeSelectLoginFailed(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmit: (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const email = data.get('email');
      const password = data.get('password');
      dispatch(login(email, password));
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
)(Login);
