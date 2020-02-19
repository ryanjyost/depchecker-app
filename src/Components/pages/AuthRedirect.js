import React, { useEffect } from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { BasicActions, UserActions } from 'Store';
import { RouteMap } from 'Routes';

const Root = styled.div`
   min-height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
`;

const Content = styled(Layout.Content)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 1000px;
   margin: auto;
   padding: 30px;
`;

function AuthRedirect({ login, setupNewInstallation, installation }) {
   useEffect(() => {
      const params = qs.parse(window.location.search);
      if (!params) return;
      if (params.setup_action && params.setup_action === 'install') {
         const { code, installation_id } = params;
         setupNewInstallation(code, installation_id);
      } else {
         login(params.code);
      }
   }, []);

   if (installation) {
      if (!installation.repos.length) {
         return <Redirect to={RouteMap.SETUP_REPOS} />;
      }
   }

   return (
      <Root>
         <Content>Loading</Content>
      </Root>
   );
}

const mapStateToProps = state => {
   return {
      installation: state.user.installation
   };
};

const mapDispatchToProps = dispatch => {
   return {
      login: code => dispatch(UserActions.login.request(code)),
      setupNewInstallation: (code, installationId) =>
         dispatch(UserActions.setupNewInstallation.request(code, installationId))
   };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRedirect));
