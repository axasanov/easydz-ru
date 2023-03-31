import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

function CTA() {
  return (
    <Box sx={{ py: '4rem', backgroundColor: '#f5f5f5', textAlign: 'center', backgroundImage: 'url(/assets/background-2.png)', backgroundSize: 'cover', }}>
      <Grid container justifyContent="center" alignItems="flex-start">
        <Grid item xs={11}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 600 }}>
            Закажите нашу услугу сегодня!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, mt: '2rem' }}>
            Мы готовы предоставить Вам высококачественную услугу в кратчайшие сроки. Нажмите на кнопку ниже, чтобы заказать сейчас.
          </Typography>
          <Button variant="contained" sx={{ mt: '2rem' }}>
            Заказать сейчас
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CTA;
