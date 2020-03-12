import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {Layout, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const Root = styled(Header)`
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 20px 30px !important;
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

const MenuLink = styled.a`
   margin: 2px 10px 5px 10px;
   line-height: 1;
`;

const StyledLink = styled(Link)`
   margin: 2px 10px 5px 10px;
   line-height: 1;
`;

export default function BasicHeader() {
   return (
      <Root>
         <LogoContainer to="/">
            <LogoImage src={'/android-chrome-192x192.png'} height={30} />
            <LogoText level={4}>DepChecker</LogoText>
         </LogoContainer>
         <LinkContainer>
            <StyledLink to="/demo">Try Demo</StyledLink>
            <MenuLink href="/#how-it-works">How it Works</MenuLink>
            <MenuLink href="/#features">Features</MenuLink>
            <MenuLink href="/#pricing">Pricing</MenuLink>
            <MenuLink href="mailto:ryanjyost.com">Contact</MenuLink>
            <MenuLink href="https://github.com/ryanjyost/depchecker">Github</MenuLink>
         </LinkContainer>
      </Root>
   );
}
