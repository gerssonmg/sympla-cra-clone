import React, { useState } from 'react';
import { Box, Button, TableHead } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import TableRow from '@mui/material/TableRow';
import FormEventComponent from '../components/FormEvent';

const visibleRows = [
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
  {
    id: 1,
    name: 'Show Sertanejo',
    calories: '12/12/2024',
    fat: 'R$197,00',
    carbs: 240,
    protein: 4,
  },
];

const MyEvents = () => {
  const handleClick = (event, id) => {};
  const [showForm, setShowForm] = useState(false);

  return (
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
                  <TableCell padding="checkbox" align="center">
                    <Switch size="small" defaultChecked />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyEvents;
