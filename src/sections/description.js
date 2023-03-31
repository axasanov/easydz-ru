import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function Description() {
  return (
    <div id="description">
      <Box
        sx={{
          py: '6rem',
          textAlign: 'center',
          backgroundImage: 'url(/assets/background.png)',
          backgroundSize: 'cover',
          backgroundColor: '#fff',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 600,
            mb: '2rem',
          }}
        >
          Описание наших услуг
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={11} md={8}>
            <Typography variant="body1" sx={{ mb: '2rem' }}>
              Наша компания предоставляет услуги по написанию сочинений, эссе, курсовых и прочего для школьников, студентов и любых других людей, которым нужна помощь в написании академических текстов. Мы предлагаем профессиональную помощь, которая позволит вам получить отличную оценку и улучшить свои знания в соответствующей области.
            </Typography>
            <Typography variant="body1" sx={{ mb: '2rem' }}>
              Наши авторы - это профессиональные писатели, которые имеют опыт написания различных типов текстов и владеют необходимыми знаниями в соответствующей области. Мы гарантируем, что все работы будут выполнены в соответствии с вашими требованиями и сроками.
            </Typography>
            <Typography variant="body1">
              Если вы нуждаетесь в помощи с написанием какого-либо текста, не стесняйтесь связаться с нами и мы обязательно поможем вам!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Description;
