import React from 'react';
import { Box, Button, TextField, Grid, Typography } from '@mui/material';

function Contact() {
    const [state, setState] = React.useState({
        name: '',
        email: '',
        workType: '',
        topic: '',
        description: '',
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, workType, topic, description } = state;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('workType', workType);
        formData.append('topic', topic);
        formData.append('description', description);

        try {
            const response = await fetch('https://formspree.io/f/xknavnyg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data);
            alert('Спасибо за Ваше сообщение! Мы свяжемся с Вами в ближайшее время.');
        } catch (error) {
            console.log(error);
            alert('Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
        }
    };

    return (
        <div id="contact">
            <Box
                sx={{
                    py: '6rem',
                    backgroundImage: 'url(/assets/background.png)',
                    backgroundSize: 'cover',
                    backgroundColor: '#fff',
                }}
            >
                <Grid container justifyContent="center" alignItems="flex-start">
                    <Grid item xs={11}>
                        <Box component="form" sx={{ maxWidth: '800px', margin: '0 auto', backgroundColor: "white", p: 5, borderRadius: "20px" }} onSubmit={handleSubmit}>
                            <Typography
                                variant="h2"
                                sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 600, mb: '4rem', textAlign: 'center' }}
                            >
                                Обратная связь
                            </Typography>
                            <Box sx={{ mb: '2rem' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="name"
                                    label="Имя"
                                    variant="outlined"
                                    value={state.name}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: '2rem' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={state.email}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: '2rem' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="workType"
                                    label="Тип работы (эссе, курсовая и т.д.)"
                                    variant="outlined"
                                    value={state.workType}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: '2rem' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="topic"
                                    label="Тема работы"
                                    variant="outlined"
                                    value={state.topic}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mb: '2rem' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="description"
                                    label="Описание задачи"
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    value={state.description}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                                    Отправить
                                </Button>
                            </Box>
                        </Box>
                    </Grid >
                </Grid>
            </Box>
        </div>
    );
}

export default Contact;
