import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', backgroundImage: 'url(/assets/footer.png)', backgroundSize: 'cover', py: '4rem' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: '2rem' }}>
              Наша компания
            </Typography>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Наша компания предоставляет услуги по написанию сочинений, рефератов и курсовых на заказ. Мы гарантируем высокое качество и 100% уникальность выполненных работ.
            </Typography>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              © 2023 Все права защищены
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: '2rem' }}>
              Контакты
            </Typography>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Адрес: 123456, г. Москва, ул. Пушкина, д. 10
            </Typography>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Телефон: +7 (123) 456-78-90
            </Typography>
            <Typography variant="body1" sx={{ mb: '1rem' }}>
              Email: info@easydz.ru
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: '2rem' }}>
              Мы в соцсетях
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Facebook sx={{ fontSize: '2rem', mr: '1rem' }} />
              <Typography variant="body1" sx={{ mr: '2rem' }}>Facebook</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Twitter sx={{ fontSize: '2rem', mr: '1rem' }} />
              <Typography variant="body1" sx={{ mr: '2rem' }}>Twitter</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Instagram sx={{ fontSize: '2rem', mr: '1rem' }} />
              <Typography variant="body1">Instagram</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
