import React, { useState, useEffect } from 'react';
import { Box, Button, TableHead, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import TableRow from '@mui/material/TableRow';
import FormEventComponent from '../components/FormEvent';
import useEvents from '../service/realtime.database';
import Soma from './TesteDialog';

// MOCK
// const MOCK_EVENTOS_RESPONSE
const visibleRows = [
  {
    id: 1,
    title: 'Show Sertanejo',
    date: '12/12/2024',
    price: 'R$197,00',
    capacity: 240,
    sold: 4,
  },
  {
    id: 2,
    title: 'Conferencia da OAB do Norte de Minas',
    date: '12/11/2024',
    price: 'R$97,00',
    capacity: 130,
    sold: 42,
  },
];

const MyEvents = () => {
  // const valor = Soma(5, 6);
  // console.log(valor);

  const [showSoma1, setShowForm1] = useState(false);

  const handleClick = (event, id) => {
    setShowForm1(!showSoma1);
  };

  const [showForm, setShowForm] = useState(false);

  const events = useEvents();
  useEffect(() => {
    console.log('events');
    console.log(events);
  }, [events]);

  const combinedRows = [...events, ...visibleRows];

  return (
    <>
      {/* JSX */}
      {showSoma1 && (
        <>
          <Dialog open>Alo</Dialog>
          <Soma a={4} b={9} />
        </>
      )}

      <Box mt={10}>
        <Button
          sx={{ mb: 4 }}
          variant="contained"
          onClick={() => setShowForm(true)}
        >
          Criar Evento
        </Button>

        <Dialog open={showForm} onClose={() => setShowForm(false)}>
          <DialogContent>
            <FormEventComponent handleClose={() => setShowForm(false)} />
          </DialogContent>
        </Dialog>

        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell align="left">Ativo</TableCell>

                <TableCell component="th" scope="row" padding="none">
                  Nome
                </TableCell>
                <TableCell align="right">Data</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">Capacidade</TableCell>
                <TableCell align="right">Vendidos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedRows.map((row, index) => {
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
                    <TableCell padding="checkbox" align="center">
                      <Switch size="small" defaultChecked />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.capacity}</TableCell>
                    <TableCell align="right">{row.sold}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default MyEvents;
