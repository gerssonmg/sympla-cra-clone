import * as React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { URLS } from '../routes/routes';

export default function CardEventComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(URLS.EVENT); // Substitua pelo caminho da sua página de detalhes do evento
  };

  return (
    <Grid item sm={6} md={4} lg={3} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image="/imagens/show.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              DOM, 04 AGO - 19:00
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              AFONSO PADILHA NINGUÉM SE IMPORTA - 11/08/24
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Araújo Vianna - Porto Alegre, RS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
