import React from 'react';
import styled from '@emotion/styled';
import { Typography, Input, Button, Layout } from 'antd';
import { BasicHeader } from 'Components/ui';
import darkTheme from '@ant-design/dark-theme';
console.log('darj', darkTheme)

const Root = styled(Layout)`

`

export default function FullAnalysisOption() {
   return (
      <Root theme="dark">
         <BasicHeader/>
      </Root>
   );
}
