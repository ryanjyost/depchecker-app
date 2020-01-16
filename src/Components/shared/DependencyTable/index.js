import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment';
import numeral from 'numeral';
import { Icon, Tooltip, Tag } from 'antd';
import { Table } from 'Components/shared';
import { SEVERITY_COLORS } from 'Styles';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const NameContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

const NameLink = styled.a`
   color: rgba(0, 0, 0, 0.9);
`;

const LinksContainer = styled.div``;

const LinkIcon = styled.a`
   margin-right: 8px;

   i {
      font-size: 13px;
   }
`;

const SeverityTag = styled(Tag)`
   font-size: 14px;
   padding: 3px 6px;
`;

const DevTag = styled(Tag)`
   margin-left: 5px;
`;

export default function DependencyTable({ dependencies }) {
   const columns = useMemo(
      () => [
         {
            Header: 'Name',
            accessor: 'name',
            Cell: data => {
               const { row } = data;
               const { original } = row;
               const { links } = original;
               return (
                  <NameContainer>
                     <NameLink href={links ? links.homepage : null} target={'_blank'}>
                        <strong>{data.cell.value}</strong> {original.isDev && <DevTag>dev</DevTag>}
                     </NameLink>
                     <LinksContainer>
                        <Tooltip title={original.description} placement={'right'}>
                           <LinkIcon href={null}>
                              <Icon type={'info-circle'} />
                           </LinkIcon>
                        </Tooltip>
                        {links['homepage'] && (
                           <LinkIcon href={links['homepage']} target={'_blank'}>
                              <Icon type={'home'} />
                           </LinkIcon>
                        )}
                        {links['github'] && (
                           <LinkIcon href={links['github']} target={'_blank'}>
                              <Icon type={'github'} />
                           </LinkIcon>
                        )}
                        {links['npm'] && (
                           <LinkIcon href={`https://www.npmjs.com/package/${original.name}`} target={'_blank'}>
                              npm
                           </LinkIcon>
                        )}
                     </LinksContainer>
                  </NameContainer>
               );
            }
         },
         { Header: 'Project', accessor: 'versions.project' },
         { Header: 'LTS', accessor: 'versions.latest' },
         {
            Header: 'Versions Behind',
            accessor: 'versionsBehind.text',
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['versionsBehind']]}>
                  {data.cell.value}
               </SeverityTag>
            )
         },
         {
            Header: 'Last Publish',
            accessor: row => moment(row.time.latest).unix(),
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['lastPublish']]}>
                  {timeAgo.format(moment.unix(data.cell.value).toDate())}
               </SeverityTag>
            )
         },
         {
            Header: 'Weekly Downloads',
            accessor: 'downloads.weekly.downloads',
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['weeklyDownloads']]}>
                  {numeral(data.cell.value).format('0,0')}
               </SeverityTag>
            )
         },
         {
            Header: 'GitHub Stars',
            accessor: 'stars',
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['stars']]}>
                  {numeral(data.cell.value).format('0,0')}
               </SeverityTag>
            )
         },
         {
            Header: 'License',
            accessor: row => row.license.spdx_id || row.license,
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['license']]}>{data.cell.value}</SeverityTag>
            )
         },
         {
            Header: 'Issues & PRs',
            accessor: 'openIssues',
            Cell: data =>
               data.row.original.links.github ? (
                  <a href={`${data.row.original.links.github}/issues`}>{data.cell.value}</a>
               ) : (
                  <div>{data.cell.value}</div>
               )
         }
      ],
      []
   );
   const data = useMemo(
      () =>
         dependencies.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
         }),
      [dependencies]
   );

   return <Table columns={columns} data={data} />;
}

DependencyTable.defaultProps = {};

DependencyTable.propTypes = {
   /** Comment prop  */
};
