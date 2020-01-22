import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Layout, Typography } from 'antd';
import GitHubButton from 'react-github-btn';
import { COLORS } from 'Styles';
const { Header } = Layout;
const { Title } = Typography;

const Root = styled(Header)`
   background-color: ${COLORS.black};
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0px 30px !important;
   //position: fixed;
   z-index: 1;
   width: 100%;
`;

const LogoContainer = styled(Link)`
   display: flex;
   align-items: center;
`;

const LogoImage = styled.img`
   border-radius: 2px;
`;

const LogoText = styled(Title)`
   margin: 0px 0px 0px 10px !important;
`;

const LinkContainer = styled.div`
   display: flex;
   align-items: center;
`;

const HeaderLink = styled.a`
   margin: 10px 20px 0px 10px;
`;

export default function BasicHeader() {
   return (
      <Root>
         <LogoContainer to="/">
            <LogoImage src={'/android-chrome-192x192.png'} height={30} />
            <LogoText level={4}>DepChecker</LogoText>
         </LogoContainer>
         <LinkContainer>
            <GitHubButton
               href="https://github.com/ryanjyost/depchecker"
               data-color-scheme="no-preference: light; light: light; dark: dark;"
               data-size="large"
               aria-label="Star ryanjyost/depchecker on GitHub">
               Star
            </GitHubButton>
         </LinkContainer>
      </Root>
   );
}
