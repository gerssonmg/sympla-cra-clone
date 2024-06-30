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

export const arrayEvents = [
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show.jpg',
  },
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show01.jpg',
  },
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show2.jpeg',
  },
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show03.jpg',
  },
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show04.png',
  },
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show05.jpg',
  },
  {
    date: 'DOM, 04 AGO - 19:00',
    title: 'AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24',
    address: 'Araújo Vianna - Porto Alegre, RS',
    imgUrl: '/imagens/show06.png',
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
          {arrayEvents.map((item, index) => (
            <CardEventComponent data={item} />
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
