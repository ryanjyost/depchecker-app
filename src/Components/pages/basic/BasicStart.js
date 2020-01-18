import React from 'react';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import { FullScreenContainer, UserFlowOption } from 'Components/ui';
import { RouteMap } from 'Routes';

const { Title } = Typography;

const TitleText = styled(Title)`
   margin-bottom: 30px !important;
`;

const LinkContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export default function BasicStart() {
   return (
      <FullScreenContainer column alignItems={'center'} margin={'200px 0px 0px 0px'}>
         <TitleText level={3}>
            How do you want to upload a <code>package.json</code> file?
         </TitleText>
         <LinkContainer>
            <UserFlowOption title="Use a GitHub repository URL" link={RouteMap.BASIC_REPO_URL}>
               Just paste the link to the repository you want to analyze and DepChecker will fetch your{' '}
               <code>package.json</code> automatically.
            </UserFlowOption>
            <UserFlowOption
               title="Upload from your computer"
               link={RouteMap.BASIC_UPLOAD}>
               Drag & drop it or browse your computer's files.
            </UserFlowOption>{' '}
            <UserFlowOption title="Paste the code" link={RouteMap.BASIC_CODE_PASTE}>
               Just copy and paste the contents of your <code>package.json</code> file.
            </UserFlowOption>
         </LinkContainer>
      </FullScreenContainer>
   );
}

BasicStart.defaultProps = {};

BasicStart.propTypes = {
   /** Comment prop  */
};
