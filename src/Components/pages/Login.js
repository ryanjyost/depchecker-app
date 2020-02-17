import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Icon, Input, Layout, Typography } from 'antd';
import { COLORS } from 'Styles';
import { BasicHeader, BasicFooter } from 'Components/ui';

const Root = styled.div`
   min-height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   .anticon {
      color: ${COLORS.blue} !important;
   }
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

export default function Login() {
   return (
      <Root>
         <BasicHeader />
         <Content>
            <Button
               // href={`https://github.com/login/oauth/authorize?client_id=${$GitHubClientId}&redirect_uri=${process.env.REACT_APP_ClientUrl}/auth`}
               href={`https://github.com/apps/${process.env.REACT_APP_GH_APP_NAME}/installations/new`}>
               Authenticate with GitHub
            </Button>
         </Content>
         <BasicFooter />
      </Root>
   );
}
