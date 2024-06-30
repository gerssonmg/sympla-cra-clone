import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CardEventComponent from './CardEvent.component';
import { arrayEvents } from '../pages/Store';

export default function DialogResponsiveDialog({ setShowDialog }) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const data = arrayEvents[0];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Informações do evento{' '}
        </DialogTitle>
        <DialogContent>
          <CardEventComponent data={data} />
          <DialogContentText sx={{ mt: 2 }}>
            Atenção na Data e Horario do evento. Atenção para os dados da pessoa
            que vai usar o ingresso, pode ser requisitado apresentar o
            documento.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
          <Button onClick={handleClose} autoFocus>
            Entendi
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
