import React, { useState } from 'react';
import { Box, Button, TableHead } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { URLS } from '../routes/routes';
import DialogResponsiveDialog from '../components/Dialog.component';

import { getDatabase, ref, set } from 'firebase/database';

const visibleRows = [
  {
    id: 1,
    title: 'Show Sertanejo',
    date: '12/12/2024',
    document: '111.999.111-00',
  },
  {
    id: 1,
    title: 'Conferencia da OAB do Norte de Minas',
    date: '12/11/2024',
    document: '012.345.678-90',
  },
];

const MyTickets = () => {
  function writeUserData(
    userId = '123',
    name = 'Gerson',
    email = 'g@gmail.com',
    imageUrl = 'http://'
  ) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  const [showDialog, setShowDialog] = useState(false);

  const handleClick = (event, id) => {
    setShowDialog(true);
    writeUserData();
  };

  return (
    <Box mt={10}>
      <Link to={URLS.STORE}>
        <Button sx={{ mb: 4 }} variant="contained">
          Comprar Ingresso
        </Button>
      </Link>
      <br />
      Clique no ingresso para mais informações do Evento
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHead>
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell align="center" padding="checkbox" />

              <TableCell component="th" scope="row" padding="none">
                Nome no Ingresso
              </TableCell>
              <TableCell align="left">Data</TableCell>
              <TableCell align="left">Documento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = true;
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.title}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.document}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {showDialog && <DialogResponsiveDialog setShowDialog={setShowDialog} />}
    </Box>
  );
};

export default MyTickets;
