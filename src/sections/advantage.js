import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

function Advantage() {
    return (
        <div id="advantage">
            <Box
                className="advantage-section"
                sx={{
                    py: '6rem',
                    textAlign: 'center',
                    backgroundImage: 'url(/assets/background.png)',
                    backgroundSize: 'cover',
                    height: 900,
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 600, mb: '6rem' }}>
                        Наши преимущества
                    </Typography>
                    <Grid container justifyContent="center" alignItems="flex-start">
                        <Grid item xs={11} md={2}>
                            <Box sx={{ mb: '2rem' }}>
                                <CheckCircleOutline sx={{ fontSize: '3rem', color: '#4caf50', mb: '1rem' }} />
                                <Typography variant="h5" sx={{ mb: '1rem' }}>Качественное выполнение заданий</Typography>
                                <Typography variant="body1">Мы гарантируем высокое качество выполнения любых заданий, независимо от сложности и объема работы.</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={1} />
                        <Grid item xs={11} md={2}>
                            <Box sx={{ mb: '2rem' }}>
                                <CheckCircleOutline sx={{ fontSize: '3rem', color: '#4caf50', mb: '1rem' }} />
                                <Typography variant="h5" sx={{ mb: '1rem' }}>Быстрая и своевременная поддержка</Typography>
                                <Typography variant="body1">Наша команда всегда готова оказать помощь и ответить на любые вопросы в кратчайшие сроки.</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={1} />
                        <Grid item xs={11} md={2}>
                            <Box sx={{ mb: '2rem' }}>
                                <CheckCircleOutline sx={{ fontSize: '3rem', color: '#4caf50', mb: '1rem' }} />
                                <Typography variant="h5" sx={{ mb: '1rem' }}>Конфиденциальность и безопасность</Typography>
                                <Typography variant="body1">Мы гарантируем полную конфиденциальность и безопасность ваших данных и работы. Никакой информации не будет передано третьим лицам.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default Advantage;
