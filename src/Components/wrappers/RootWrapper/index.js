import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Layout, message, BackTop } from 'antd';
// components, constants, etc.
import ErrorBoundary from '../ErrorBoundary';
import { ErrorPage } from 'Components/pages';
import { $env, $envDisplay } from 'Config';
import style from './rootWrapper.module.scss';

/**
 * Wraps the entire app
 */
function RootWrapper({ error, location, children }) {
   // show error banner if one found in redux
   useEffect(() => {
      if (error) {
         message.error(this.props.error);
      }
   }, [error]);

   // when changing Routes, make sure scroll to top
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   return (
      <Layout className={style.Layout}>
         <Helmet>
            <title>{$env === 'PRODUCTION' ? 'DepChecker' : `${$envDisplay} - DepChecker`}</title>
         </Helmet>
         <ErrorBoundary renderError={ErrorPage}>{children}</ErrorBoundary>
         <BackTop />
      </Layout>
   );
}

const mapStateToProps = state => {
   const { user } = state;

   const error = user.error;
   return { error };
};

const mapDispatchToProps = dispatch => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RootWrapper));

RootWrapper.propTypes = {
   /** any redux error */
   error: PropTypes.bool,
   /** all routes */
   children: PropTypes.node
};
