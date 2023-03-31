import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../components/logo';

function scrollToSection(target) {
    scroll.scrollTo(document.getElementById(target).offsetTop - 70, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
    });
}

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleClick = (target) => {
        scrollToSection(target);
        setDrawerOpen(false);
    };

    const menuItems = [
        { id: 'advantage', label: 'Преимущества' },
        { id: 'description', label: 'Описание' },
        { id: 'functionality', label: 'Функциональность' },
        { id: 'reviews', label: 'Отзывы' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Контакты' },
    ];

    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundImage: 'url(/assets/background.png)', backgroundSize: 'cover' }}>
            <Toolbar>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={2} md={false} />
                    <Grid item xs={6} md={2}>
                        <Button
                            onClick={() => scrollToSection('home')}
                            sx={{ color: 'inherit', '&:hover': { boxShadow: 'none', color: '#1E88E5' }, '&:active': { color: '#1E88E5' } }}
                        >
                            <Logo />
                        </Button>
                    </Grid>
                    <Grid item md={1} />
                    <Grid item xs={4} md={7}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{ color: 'inherit', '&:hover': { boxShadow: 'none', color: '#1E88E5' }, '&:active': { color: '#1E88E5' } }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                onClick={() => scrollToSection('contact')}
                                sx={{ ml: 2 }}
                            >
                                Заказать
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <Button color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                <List>
                                    {menuItems.map((item) => (
                                        <ListItem button key={item.id} onClick={() => handleClick(item.id)}>
                                            <Typography variant="subtitle1">{item.label}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;