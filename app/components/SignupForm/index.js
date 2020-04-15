/**
 *
 * SignupForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SignupForm({ onSubmit, errors, loading }) {
  let passwordsMatch = '';
  let loadingStatus = '';
  if (loading === true) { loadingStatus = 'Loading...' };
  if(errors.includes('PASSWORD_MATCH')) {passwordsMatch = "Passwords don't match!"};
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Create your account</h1>
        <input type='email' name ='email' id ='email' placeholder ='email' required/><br></br>
        <input type='text' name ='username' id ='username' placeholder ='username' required /><br></br>
        <input type='tel' name ='phone' id ='phone' placeholder ='phone ex. +639123456789' pattern ='^(\+639)\d{9}$' required /><br></br>
        <input type='password' name ='password' id ='password' placeholder ='password' required /><br></br>
        <input type='password' name ='ConfirmPassword' id ='ConfirmPassword' placeholder ='ConfirmPassword' required /><br></br>
        <p>{passwordsMatch}{loadingStatus}</p>
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
  errors: PropTypes.array,
  loading: PropTypes.bool
};

export default memo(SignupForm);
