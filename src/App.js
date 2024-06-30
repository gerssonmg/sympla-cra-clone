import './App.css';
import Routes from './routes/routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Link, Typography } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // mode: 'light',
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.youtube.com/channel/UCNiJgzoC7f8QvzODJd4LSgA"
      >
        Gérson Aguiar - YT: dev.gersonaguiar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '80vh',
        }}
      >
        <Routes />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 8,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2">
            Desenvolvido por{' '}
            <Link
              color="inherit"
              href="https://www.youtube.com/channel/UCNiJgzoC7f8QvzODJd4LSgA"
            >
              Gérson Aguiar
            </Link>{' '}
            <br /> Entre em contato, para consultoria ou suporte <br /> E-mail:
            gersoncafilho@gmail.com
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
