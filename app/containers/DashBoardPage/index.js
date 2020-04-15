/**
 *
 * DashBoardPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashBoardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function DashBoardPage() {
  useInjectReducer({ key: 'dashBoardPage', reducer });
  useInjectSaga({ key: 'dashBoardPage', saga });

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of DashBoardPage" />
      </Helmet>
      <h1>Welcome to your Dashboard</h1>
    </div>
  );
}

DashBoardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashBoardPage: makeSelectDashBoardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DashBoardPage);
