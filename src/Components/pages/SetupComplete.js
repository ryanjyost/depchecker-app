import React from 'react';
import styled from '@emotion/styled';
import { Icon, Typography } from 'antd';
import { COLORS } from 'Styles';

const { Title, Text } = Typography;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   max-width: 700px;
   margin: auto;
   text-align: center;
`;

const StyledText = styled(Text)`
   font-size: 16px;
`;

export default function SetupComplete() {
   return (
      <Container>
         <Title level={2}>DepChecker installed successfully 🥳</Title>
         <Title level={4}>Now you'll get info about any npm dependency updates in pull requests! </Title>

         <StyledText>
            If you have questions or feedback, please don't hesitate to reach out to me at{' '}
            <a href="mailto:ryanjyost@gmail.com">ryanjyost@gmail.com</a> or on Twitter{' '}
            <a href="https://twitter.com/ryanjyost">@ryanjyost</a>
         </StyledText>
      </Container>
   );
}
