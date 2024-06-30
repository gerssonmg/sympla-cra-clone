import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid } from '@mui/material';

export default function CardCityComponent({ imgURL = '/imagens/sp-city.png' }) {
  return (
    <Grid item sm={6} md={4} lg={2} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="324"
            image={imgURL}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
