import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Layout, Typography, Button } from 'antd';
import { COLORS } from 'Styles';
import { RouteMap } from 'Routes';
const { Footer } = Layout;

const Root = styled(Footer)`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding: 20px 30px !important;
   z-index: 1;
   width: 100%;
   background-color: transparent;
`;

const LinkContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

const Text = styled(Typography.Text)`
   margin: 0px 10px 0px 10px;
   font-size: 12px;
   opacity: 0.5;
`;

const FooterLink = styled.a`
   margin: 0px 10px 0px 10px;
   font-size: 12px;
`;

export default function BasicHeader() {
   return (
      <Root>
         <LinkContainer>
            <Text>Copyright © 2020 depchecker.com</Text>
            <FooterLink href="https://depchecker.com/blog">Blog</FooterLink>
            <FooterLink href="mailto:ryanjyost@gmail.com?subject=DepChecker">Contact</FooterLink>
            <FooterLink href="https://github.com/ryanjyost/depchecker">GitHub</FooterLink>
         </LinkContainer>
      </Root>
   );
}
