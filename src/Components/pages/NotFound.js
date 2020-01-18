import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import { RouteMap } from 'Routes';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

/**
 * Show this if route doesn't match anything
 */
export default function NotFound() {
   return (
      <Container>
         <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
               <Link to={RouteMap.ROOT}>
                  <Button type="primary">Back Home</Button>
               </Link>
            }
         />
      </Container>
   );
}
