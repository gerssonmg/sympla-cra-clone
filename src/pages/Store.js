import { Box, Grid, Typography } from '@mui/material';
import CardEventComponent from '../components/CardEvent.component';
import CardCityComponent from '../components/CardCity.component';
import CardBannerComponent from '../components/CardBanner.component';

const arrayCities = [
  '/imagens/sp-city.png',
  '/imagens/bh-city.png',
  '/imagens/df-city.png',
  '/imagens/rj-city.png',
];

const arrayEvents = [
  {
    date: '',
    title: '',
    address: '',
  },
];

const Store = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={1} mb={1}>
          <Typography>Destaque</Typography>
        </Box>
        <CardBannerComponent />
      </Grid>
      <Grid item xs={12}>
        <Box mt={6} mb={1}>
          <Typography>Clique para mais detalhes</Typography>
        </Box>
        <Grid container spacing={3}>
          {[0, 1, 1, 1, 1, 1].map((item, index) => (
            <CardEventComponent />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box mt={6} mb={2}>
          <Typography>Cidades mais animadas</Typography>
        </Box>

        <Grid container spacing={3}>
          {arrayCities.map((item, index) => (
            <CardCityComponent imgURL={item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Store;
