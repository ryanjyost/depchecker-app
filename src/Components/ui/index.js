import styled from '@emotion/styled';
import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import OverlayBackground from './OverlayBackground';
import UserFlowOption from './UserFlowOption';
import BasicHeader from './BasicHeader';
import BasicFooter from './BasicFooter';

const FullScreenContainer = styled.div`
   display: flex;
   flex-direction: ${props => (props.column ? 'column' : 'row')};
   align-items: ${props => props.alignItems || 'baseline'};
   justify-content: ${props => props.justifyContent || 'flex-start'};
   height: 100vh;
   width: 100%;
   margin: ${props => props.margin};
`;

export { MainHeader, MainSidebar, OverlayBackground, UserFlowOption, BasicHeader, FullScreenContainer, BasicFooter };
