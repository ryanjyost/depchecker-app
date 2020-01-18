import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTable } from 'react-table';

const StyledTable = styled.table`
   border-spacing: 0;
   min-width: 900px;

   tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      background-color: #fff;
   }

   th,
   td {
      margin: 0;
      padding: 0.8rem 1rem;
   }

   th {
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 3px 3px 0px 0px;
   }
`;

/**
 * General Table Component
 */
export default function Table({ columns, data }) {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data
   });

   return (
      <StyledTable {...getTableProps()}>
         <thead>
            {headerGroups.map(headerGroup => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
               prepareRow(row);
               return (
                  <tr {...row.getRowProps()}>
                     {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                     })}
                  </tr>
               );
            })}
         </tbody>
      </StyledTable>
   );
}

Table.propTypes = {
   /** Column definitions */
   columns: PropTypes.array,
   /** Table data */
   data: PropTypes.array
};
