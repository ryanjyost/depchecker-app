import React from 'react';
import styled from '@emotion/styled';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { RouteMap } from 'Routes';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

/**
 * Page to show instead of page component if error caught
 */
export default function ErrorPage() {
   return (
      <Container>
         <Result
            status="500"
            title="500"
            subTitle="An unknown error occurred."
            extra={
               <Link to={RouteMap.ROOT}>
                  <Button type="primary">Back Home</Button>
               </Link>
            }
         />
      </Container>
   );
}
