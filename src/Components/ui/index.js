import styled from '@emotion/styled';
import _MainHeader from './MainHeader';
import _MainSidebar from './MainSidebar';
import _OverlayBackground from './OverlayBackground';
import _UserFlowOption from './UserFlowOption';

export const MainHeader = _MainHeader;
export const MainSidebar = _MainSidebar;
export const OverlayBackground = _OverlayBackground;
export const UserFlowOption = _UserFlowOption;

export const FullScreenContainer = styled.div`
   display: flex;
   flex-direction: ${props => (props.column ? 'column' : 'row')};
   align-items: ${props => props.alignItems || 'baseline'};
   justify-content: ${props => props.justifyContent || 'flex-start'};
   height: 100vh;
   width: 100%;
   margin: ${props => props.margin}
`;
