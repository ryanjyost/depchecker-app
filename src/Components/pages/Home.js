import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { connect } from 'react-redux';
import { RouteMap } from 'Routes';
import { FullScreenContainer, UserFlowOption } from 'Components/ui';
import { BasicActions } from 'Store';
import examplePackageJSON from 'Assets/package.example.json';

import { COLORS } from 'Styles';

const { Title, Text } = Typography;

const SubTitle = styled(Text)`
   font-size: 18px;
   max-width: 600px;
   text-align: center;
`;

const Divider = styled.div`
   height: ${props => props.height || 100}px;
   width: 100%;
`;

const PromptTitle = styled(Text)`
   font-weight: 400;
   font-size: 24px;
   margin-bottom: 30px;
   text-align: center;
`;

const AppName = styled.span`
   color: ${COLORS.primary};
   font-weight: bold;
`;

const LinkContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

function Home({ analyzePackageJSON }) {
   function startExample() {
      analyzePackageJSON(examplePackageJSON);
   }

   return (
      <FullScreenContainer column alignItems="center" margin={'150px 0px 0px 0px'}>
         {/*<Title>Work on JavaScript projects?</Title>*/}
         {/*<SubTitle>*/}
         {/*   <AppName>DepChecker</AppName> makes it easy to understand the state of your projects' npm dependencies, so*/}
         {/*   that you can more efficiently make version updates, discover potential issues and maintain your software.*/}
         {/*</SubTitle>*/}
         {/*<Divider />*/}
         <PromptTitle>Get started with an option below.</PromptTitle>
         <LinkContainer>
            <UserFlowOption title="Quick analysis" link={RouteMap.BASIC_METHOD}>
               Easily upload a <code>package.json</code> file and generate a dependency report. No GitHub authorization
               required.
            </UserFlowOption>
            <UserFlowOption title="Try an example" link={RouteMap.RESULTS} onClick={startExample}>
               Choose this if you're not quite sure what DepChecker does to see it analyze an example project's
               dependencies.
            </UserFlowOption>
         </LinkContainer>
      </FullScreenContainer>
   );
}

const mapStateToProps = state => {
   return {};
};

const mapDispatchToProps = dispatch => {
   return {
      analyzePackageJSON: data => dispatch(BasicActions.analyzePackageJSON.request(data))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.defaultProps = {};

Home.propTypes = {
   /** Comment prop  */
};
