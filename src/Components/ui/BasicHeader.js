import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Layout, Typography } from 'antd';
import { COLORS } from 'Styles';
const { Header } = Layout;
const { Title } = Typography;

const Root = styled(Header)`
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0px 20px !important;
`;

const LogoContainer = styled(Link)`
   display: flex;
   align-items: center;
`;

const LogoImage = styled.img`
   border-radius: 2px;
`;

const LogoText = styled(Title)`
   margin: 0px 0px 0px 5px !important;
   color: ${COLORS.blackOp(0.6)} !important;
`;

const LinkContainer = styled.div`
   display: flex;
   align-items: center;
`;

const HeaderLink = styled.a`
margin: 0px 10px;
`;

export default function BasicHeader() {
   return (
      <Root>
         <LogoContainer to="/">
            <LogoImage src={'/android-chrome-192x192.png'} height={30} />
            <LogoText level={4}>DepChecker</LogoText>
         </LogoContainer>
         <LinkContainer>
            <HeaderLink href="mailto:ryanjyost@gmail.com?subject=DepChecker">Contact</HeaderLink>
            <HeaderLink href="https://github.com/ryanjyost/depchecker">GitHub</HeaderLink>
         </LinkContainer>
      </Root>
   );
}
