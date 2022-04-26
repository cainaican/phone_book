import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableWrapper } from './styles'
import { EditIcon } from '../../assets/icons/EditIcon'
import RemoveModal from '../Modal/RemoveModal';
import EditModal from '../Modal/EditModal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: number,
  name: string,
  phone: string
) {
  return { id, name, phone };
}

const rows = [
  createData(1, 'Dinislam', '899999'),
  createData(2, 'Dini', '899999'),
  createData(3, 'islam', '89999'),
  createData(4, 'Dinis', '899999')
];

export default function CustomizedTables() {
  return (
    <TableWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Контакты</StyledTableCell>
              <StyledTableCell align="left">Номер</StyledTableCell>
              <StyledTableCell width={20} align="right"></StyledTableCell>
              <StyledTableCell width={20} align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="right">
                  <RemoveModal />
                  </TableCell>
                  <TableCell align="right">
                    <EditModal />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}