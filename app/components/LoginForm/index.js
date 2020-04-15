/**
 *
 * LoginForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function LoginForm({ onSubmit, credentials }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' name='email' id='email' placeholder ='client id' /> 
        <br></br>
        <input type='password' name='password'id = 'password' placeholder ='client secret' />
        <br></br>
        <button type='submit' >Login</button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  credentials: PropTypes.object
};

export default memo(LoginForm);
