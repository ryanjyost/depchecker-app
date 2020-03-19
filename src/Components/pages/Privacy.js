import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Paragraph = styled.p`
   margin-bottom: 20px;
`;

export default function Privacy() {
   return (
      <Root>
         <BasicHeader />
         <Content>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: 100
               }}>
               <div className={'plainText'} style={{ padding: '20px 20px', maxWidth: 600 }}>
                  <Paragraph>
                     Your privacy is important to us. It is DepChecker's policy to respect your privacy regarding any
                     information we may collect from you across our website, <Link to="/">https://depchecker.com</Link>,
                     other sites we own and operate or through 3rd party integrations like GitHub.
                  </Paragraph>
                  <Paragraph>
                     We only ask for personal information when we truly need it to provide a service to you. We collect
                     it by fair and lawful means, with your knowledge and consent. We also let you know why we’re
                     collecting it and how it will be used.
                  </Paragraph>
                  <Paragraph>
                     We only retain collected information for as long as necessary to provide you with your requested
                     service. What data we store, we’ll protect within commercially acceptable means to prevent loss and
                     theft, as well as unauthorised access, disclosure, copying, use or modification.
                  </Paragraph>
                  <Paragraph>
                     We don’t share any personally identifying information publicly or with third-parties, except when
                     required to by law.
                  </Paragraph>
                  <Paragraph>
                     Our website may link to external sites that are not operated by us. Please be aware that we have no
                     control over the content and practices of these sites, and cannot accept responsibility or
                     liability for their respective privacy policies.
                  </Paragraph>
                  <Paragraph>
                     You are free to refuse our request for your personal information, with the understanding that we
                     may be unable to provide you with some of your desired services.
                  </Paragraph>
                  <Paragraph>
                     Your continued use of our website will be regarded as acceptance of our practices around privacy
                     and personal information. If you have any questions about how we handle user data and personal
                     information, feel free to contact us.
                  </Paragraph>
                  <Paragraph>This policy is effective as of 11 March 2020.</Paragraph>
               </div>
            </div>
         </Content>
         <BasicFooter />
      </Root>
   );
}
