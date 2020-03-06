import React, { useEffect, useMemo, useState, useRef } from 'react';
import { CSVLink } from 'react-csv';
import PropTypes from 'prop-types';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment';
import numeral from 'numeral';
import { Icon, Tooltip, Button } from 'antd';
import { Table } from 'Components/shared';
import { COLORS, SEVERITY_COLORS } from 'Styles';
import {
   Root,
   NameContainer,
   NameLink,
   LinksContainer,
   LinkIcon,
   SeverityTag,
   DevTag,
   DownloadBtnContainer
} from './dependencyTable.styled';
import { generateCSVData, csvHeaders } from './helpers';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function DependencyTable({ projectName, dependencies }) {
   const [csvData, updateCSVData] = useState([]);

   useEffect(() => {
      updateCSVData(generateCSVData(dependencies));
   }, [dependencies]);

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
                        <strong style={{ color: COLORS.whiteOp(0.8) }}>{data.cell.value}</strong>{' '}
                        {original.isDev && <DevTag>dev</DevTag>}
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
         { Header: 'Project', accessor: row => row.project.rawProjectVersion || '?' },
         {
            Header: 'LTS',
            accessor: row => row.versions.latest || '?',
            Cell: data => {
               const { deprecated } = data.row.original;
               if (!deprecated) return data.cell.value;
               return <SeverityTag color={'red'}>{data.cell.value} (deprecated)</SeverityTag>;
            }
         },
         {
            Header: 'Versions Behind',
            accessor: 'project.versionsBehind.text',
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['versionsBehind']]}>
                  {data.cell.value || '?'}
               </SeverityTag>
            )
         },
         {
            Header: 'Last Publish',
            accessor: row => moment(row.time.latest).unix(),
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['lastPublish']]}>
                  {data.cell.value ? timeAgo.format(moment.unix(data.cell.value).toDate()) : '?'}
               </SeverityTag>
            )
         },
         {
            Header: 'Weekly Downloads',
            accessor: 'weeklyDownloads',
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['weeklyDownloads']]}>
                  {data.cell.value < 0 ? '?' : numeral(data.cell.value).format('0,0')}
               </SeverityTag>
            )
         },
         {
            Header: 'GitHub Stars',
            accessor: 'stars',
            Cell: data => (
               <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['stars']]}>
                  {data.cell.value < 0 ? '?' : numeral(data.cell.value).format('0,0')}
               </SeverityTag>
            )
         },
         {
            Header: 'License',
            accessor: row => {
               return row.license
                  ? typeof row.license === 'object'
                     ? row.license.spdx_id || row.license.key
                     : row.license
                  : row.license;
            },
            Cell: data => {
               return (
                  <SeverityTag color={SEVERITY_COLORS[data.row.original.levels['license']]}>
                     {data.cell.value || '?'}
                  </SeverityTag>
               );
            }
         },
         {
            Header: 'Issues & PRs',
            accessor: 'openIssues',
            Cell: data =>
               data.cell.value < 0 ? (
                  <div>?</div>
               ) : data.row.original.links.github ? (
                  <a href={`${data.row.original.links.github}/issues`}>{data.cell.value}</a>
               ) : (
                  <div>{data.cell.value}</div>
               )
         },
         { Header: 'Size (unpacked)', accessor: row => row.size.unpacked.formatted || '?' }
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

   return (
      <Root>
         <DownloadBtnContainer>
            {csvData && csvData.length ? (
               <CSVLink
                  data={csvData}
                  filename={`${projectName.replace(/\s/g, '')}_depchecker_results.csv`}
                  headers={csvHeaders}>
                  <Button shape="round">Download to CSV</Button>
               </CSVLink>
            ) : null}
         </DownloadBtnContainer>
         <Table columns={columns} data={data} />
      </Root>
   );
}

DependencyTable.propTypes = {
   dependencies: PropTypes.array,
   projectName: PropTypes.string
};
