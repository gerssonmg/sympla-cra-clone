import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Hidden } from '@mui/material';

export default function CardBannerComponent() {
  return (
    <Card sx={{ display: 'flex' }}>
      <Hidden smUp>
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image="/imagens/show07.jpg"
          alt="Live from space album cover"
        />
      </Hidden>
      <Hidden smDown>
        <CardMedia
          component="img"
          sx={{ width: '70%' }}
          image="/imagens/show07.jpg"
          alt="Live from space album cover"
        />

        <Box
          p={2}
          sx={{
            // display: { xl: 'none', xs: 'flex' },
            flexDirection: 'column',
            width: '30%',
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              06 de Julho
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Wind of Change - Encontro de Investidores em Eólicas Offshore{' '}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="outlined">Ver informações</Button>
          </Box>
        </Box>
      </Hidden>
    </Card>
  );
}
