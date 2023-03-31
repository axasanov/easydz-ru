import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { Button } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

function scrollToSection(target) {
    scroll.scrollTo(document.getElementById(target).offsetTop - 70, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
    });
}

function Hero() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <div id="home">
            <Box
                className="hero-section"
                sx={{
                    backgroundColor: '#f5f5f5',
                    height: "100vh",
                    "@media (max-width: 768px)": {
                        height: "auto", // измените на нужное значение для мобильных устройств
                    },
                    backgroundImage: 'url(/assets/background-2.png)',
                    backgroundSize: 'cover',
                    display: 'flex',
                    alignItems: 'center', // center vertically
                    textAlign: 'left',
                    mt: 5,
                    ...(isMobile ? {} : { py: 20 }),
                }}
                height="auto"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mx: 'auto', my: 10, maxWidth: { xs: '300px', md: '600px' } }}>
                            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 600, mt: '2rem' }}>
                                Нужна помощь быстро выполнить домашнее задание?
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, my: '2rem' }}>
                                Мы можем вам помочь! Наши профессиональные писатели готовы взять на себя выполнение домашних заданий любой сложности.
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => scrollToSection('contact')}
                                sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, py: '1rem', px: '2.5rem', borderRadius: '50px' }}
                            >
                                Заказать сейчас
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ justifyContent: 'flex-start' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <img src={'/assets/hero-banner.png'} alt="Hero Banner" width="90%" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Hero;
