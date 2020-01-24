import React, { useState } from 'react';
import styled from '@emotion/styled';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Link } from 'react-router-dom';
import { Button, Icon, Input, Layout, Typography } from 'antd';
import { RouteMap as ROUTES } from 'Routes';
import { COLORS } from 'Styles';
import { BasicHeader, BasicFooter } from 'Components/ui';
import { useResponsive } from 'Components/hooks';
const { Title, Text } = Typography;

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

const Hero = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 600px;

   h1 {
      font-weight: 900;
   }

   h4 {
      margin-top: 0px !important;
      opacity: 0.8;
      //font-size: 1rem;
   }

   hr {
      width: 100%;
      margin: 20px 0px;
      opacity: 0.3;
   }
`;

const InputButtonContainer = styled.div`
   display: flex;
   align-items: stretch;
   justify-content: flex-start;
   margin-top: 20px;
   margin-bottom: 20px;
   width: 100%;

   input {
      margin-right: 10px;
      font-size: 1.6rem;
      height: 3.6rem;
   }

   button {
      height: 3.6rem;
   }
`;

const MailChimp = ({ handleChange, email }) => {
   const url = 'https://newsbie.us18.list-manage.com/subscribe/post?u=bbab41b4faa898c5bb1f4c2e1&amp;id=275fb00f49';

   function isValidEmail(stringToCheck) {
      return (
         stringToCheck.includes('@') &&
         stringToCheck.split('@')[0] &&
         stringToCheck.split('@')[1] &&
         stringToCheck.length > 2
      );
   }

   function renderSuccess() {}

   return (
      <MailchimpSubscribe
         url={url}
         render={({ subscribe, status, message }) => {
            console.log('MESS', message, 'status', status);
            function renderCTA() {
               return (
                  <Hero>
                     <Title level={1}>Automated npm dependency monitoring that saves you time and headaches</Title>
                     <Title level={4}>
                        The goal with <strong>DepChecker Pro</strong> is to make it continuously discover actionable
                        insights hidden in your npm dependencies and make sure that you're aware of potential issues
                        before they cost your team time and money.
                     </Title>
                     <hr />
                     <Title level={4}>
                        So if you want to feel more confident about your 3rd party dependencies, join the waiting list
                        below to get <u>free early access</u> to a more sophisticated, valuable tool that's currently a
                        work-in-progress!
                     </Title>
                     <InputButtonContainer>
                        <Input
                           placeholder="jsnow@thewatch.gov"
                           size="large"
                           value={email}
                           tabIndex="-1"
                           onChange={handleChange}
                        />
                        <Button
                           disabled={!isValidEmail(email)}
                           type="primary"
                           size="large"
                           onClick={() => subscribe({ EMAIL: email })}>
                           Join waiting list
                        </Button>
                     </InputButtonContainer>
                     <div>
                        <Text>Not sure?</Text>&nbsp;<a href="https://github.com/ryanjyost/depchecker/issues/10">Check out the planned features for DepChecker Pro on GitHub</a>
                     </div>
                  </Hero>
               );
            }

            return (
               <>
                  {!status && renderCTA()}
                  {/*{status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}*/}
                  {/*{status === 'error' && <div style={{ color: 'red' }}> Something went wrong </div>}*/}
                  {/*{status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}*/}
               </>
            );
         }}
      />
   );
};

export default function PremiumLanding() {
   const styles = { ...COLORS };
   const isWide = !useResponsive('md');
   const [email, updateEmail] = useState('');

   function handleEmailUpdate(e) {
      updateEmail(e.target.value);
   }

   return (
      <Root>
         <BasicHeader />
         <Content>
            <MailChimp email={email} handleChange={handleEmailUpdate} />
         </Content>
         <BasicFooter />
      </Root>
   );
}
