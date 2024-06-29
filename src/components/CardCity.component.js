import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function CardCityComponent() {
  return (
    <Grid item sm={6} md={4} lg={2} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="324"
            image="/imagens/show.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
