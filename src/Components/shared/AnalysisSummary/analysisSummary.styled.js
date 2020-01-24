import styled from '@emotion/styled';
import { Typography } from 'antd';
const { Text } = Typography;

export const Root = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 1rem;
`;

export const MetricTitle = styled(Text)`
   margin: 0px 10px 0px 0px;
   font-size: 1rem;
   font-weight: bold;
`;

export const MetricSection = styled.div`
   margin: 5px 40px 5px 5px;

   h4 {
      font-weight: 400;
      opacity: 0.8;
   }
`;

export const MetricValuesContainer = styled.div``;

export const MetricNumber = styled(Text)`
   color: ${props => props.color} !important;
   margin-right: 5px;
   font-size: 1.4rem !important;
   font-weight: bold;
`;

export const Metric = styled.div`
   margin: 10px 0px;
   display: flex;
   align-items: center;
   span {
      font-size: 0.8rem;
      max-width: 200px;
      line-height: 1.2;
   }
`;

export const LoadingText = styled(Text)`
  margin-bottom: 20px;
`
