import React from 'react';
import { Link } from 'react-router-dom';
import { URLS } from './routes';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Toolbar
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'start',
        gap: '8px',
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        // sx={{ flex: 1 }}
      >
        SymplaClone
      </Typography>
      <Link to={URLS.STORE}>
        <Button variant="outlined" size="small">
          Eventos
        </Button>
      </Link>
      <Link to={URLS.EVENT}>
        <Button variant="outlined" size="small">
          Evento
        </Button>
      </Link>
      <Link to={URLS.MY_TICKETS}>
        <Button variant="outlined" size="small">
          Meus Ingressos
        </Button>
      </Link>
      <Link to={URLS.MY_EVENTS}>
        <Button variant="outlined" size="small">
          Meus Eventos
        </Button>
      </Link>
    </Toolbar>
  );
};

export default Navbar;
