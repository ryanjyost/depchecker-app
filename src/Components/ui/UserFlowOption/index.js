import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const { Title, Text } = Typography;

const StyledLink = styled(Link)`
   margin: 10px 0px;
   border-radius: 10px;
   width: 100%;
`;

const OptionRoot = styled(Card)`
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
   border-radius: 10px;
   width: 400px;
   max-width: 100%;

   &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.24);
   }

   span {
      opacity: 0.7;
   }
`;

export default function UserFlowOption({ title, children, link, onClick }) {
   function handleClick() {
      onClick && onClick();
   }

   return (
      <StyledLink to={link} onClick={handleClick}>
         <OptionRoot>
            <Title level={4}>{title}</Title>
            <Text>{children}</Text>
         </OptionRoot>
      </StyledLink>
   );
}

UserFlowOption.defaultProps = {};

UserFlowOption.propTypes = {
   /** Comment prop  */
};
