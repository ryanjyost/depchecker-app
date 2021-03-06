import styled from '@emotion/styled';
import { Tag } from 'antd';

export const Root = styled.div`
   width: 100%;
`;

export const DownloadBtnContainer = styled.div`
   width: 100%;
   display: flex;
   padding: 10px 0px;
`;

export const NameContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const NameLink = styled.a`
   //color: rgba(0, 0, 0, 0.9);
`;

export const LinksContainer = styled.div``;

export const LinkIcon = styled.a`
   margin-right: 8px;

   i {
      font-size: 13px;
   }
`;

export const SeverityTag = styled(Tag)`
   font-size: 14px;
   padding: 3px 6px;
   border: ${props => (!props.color ? `0px solid transparent` : undefined)};
`;

export const DevTag = styled(Tag)`
   margin-left: 5px;
`;
