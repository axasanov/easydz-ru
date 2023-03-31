import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Rating, Grid } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const reviews = [
    {
        rating: 5,
        name: 'Алексей',
        date: '10.02.2022',
        text: 'Я очень доволен работой этой компании! Профессиональный подход, высокое качество и отличные цены. Сотрудничество было приятным и легким, все мои пожелания были учтены. Рекомендую всем! Большое спасибо за вашу работу!',
        profile: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        rating: 4,
        name: 'Ольга',
        date: '05.03.2022',
        text: 'Хочу выразить благодарность за отличную работу! Качество выполненных услуг на высшем уровне, все сделано вовремя и с профессиональным подходом. Команда сделала все возможное, чтобы я получил максимальную пользу от их услуг. Рекомендую всем эту компанию!',
        profile: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        rating: 5,
        name: 'Иван',
        date: '20.04.2022',
        text: 'Отличная компания, которая произвела на меня незабываемое впечатление! Высокий уровень профессионализма, быстрое реагирование на мои запросы и отличный сервис. Большое спасибо за вашу работу и желаю вам дальнейших успехов!',
        profile: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        rating: 4,
        name: 'Анна',
        date: '15.05.2022',
        text: 'Сотрудничество с этой компанией оставило только положительные эмоции! Высокий уровень профессионализма, отличный сервис и качество выполненных услуг на высшем уровне. Команда была очень внимательна ко всем моим пожеланиям и требованиям. Рекомендую всем эту компанию!',
        profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        rating: 5,
        name: 'Мария',
        date: '01.06.2022',
        text: 'Было приятно работать с такой компанией! Высокое качество услуг, отличный сервис и профессиональный подход. Команда была очень отзывчивой и внимательной ко всем моим запросам. Большое спасибо за вашу работу и желаю вам дальнейших успехов!',
        profile: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        rating: 4,
        name: 'Дмитрий',
        date: '12.07.2022',
        text: 'Отличная компания для заказа курсовых работ! Я получил высокое качество услуг и отличный сервис. Все было выполнено вовремя и с профессиональным подходом. Рекомендую всем эту компанию и обязательно воспользуюсь ее услугами в будущем!',
        profile: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
        rating: 5,
        name: 'Евгений',
        date: '25.08.2022',
        text: 'Я очень доволен работой этой компании! Качество выполненных услуг на высшем уровне, все сделано в срок и с профессиональным подходом. Команда была очень отзывчивой и внимательной к моим требованиям. Рекомендую всем эту компанию для написания сочинений и курсовых работ!',
        profile: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        rating: 5,
        name: 'Оксана',
        date: '10.09.2022',
        text: 'Сотрудничество с этой компанией было приятным и эффективным! Я получил высокое качество услуг и профессиональный подход от команды. Все мои пожелания были учтены и выполнены в срок. Большое спасибо за вашу работу и желаю вам дальнейших успехов!',
        profile: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        rating: 4,
        name: 'Андрей',
        date: '27.09.2022',
        text: 'Хочу выразить благодарность за отличную работу! Я заказывал у этой компании написание рефератов и получил высокое качество услуг и отличный сервис. Команда была очень внимательна к моим требованиям и пожеланиям. Рекомендую всем эту компанию!',
        profile: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        rating: 5,
        name: 'Надежда',
        date: '03.10.2022',
        text: 'Я очень доволен результатом работы этой компании! Я заказывал написание сочинений на заказ и получил высокое качество услуг и профессиональный подход. Команда была очень внимательна к моим требованиям и пожеланиям. Рекомендую всем эту компанию для написания курсовых и рефератов!',
        profile: "https://randomuser.me/api/portraits/women/9.jpg",
    }
];

function Review() {
    const isMobile = window.innerWidth < 600;

    const options = {
        type: 'slide',
        perPage: isMobile ? 1 : 3,
        arrows: true,
        pagination: false,
        gap: '1rem',
        padding: {
            right: '50px',
            left: '50px',
        },
        focus: 'center',
        arrowWidth: '50px', // задаем ширину кнопок в 50 пикселей
    };

    return (
        <div id="reviews">
            <Box
                className="review-section"
                sx={{
                    py: '6rem',
                    height: 750,
                    textAlign: 'center',
                    backgroundImage: 'url(/assets/background-2.png)',
                    backgroundSize: 'cover',
                    backgroundColor: '#f5f5f5',
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
                    Отзывы клиентов
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Box sx={{ overflowX: 'hidden' }}>
                            <Splide options={options}>
                                {reviews.map((review, index) => (
                                    <SplideSlide key={index}>
                                        <Card sx={{ backgroundColor: '#fff', mx: '10px', width: 300, height: 470, borderRadius: "50px", border: "2px black solid" }}>
                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '0.5rem' }}>
                                                    <Avatar src={review.profile} alt={review.name} sx={{ width: 80, height: 80, mb: '0.5rem' }} />
                                                    <Typography variant="subtitle1" sx={{ mb: '0.5rem' }}>
                                                        {review.name}
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        {review.date}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.5rem' }}>
                                                    <Rating value={review.rating} size="large" readOnly />
                                                </Box>
                                                <Typography variant="body1" sx={{ textAlign: 'center', mb: '0.5rem' }}>
                                                    {review.text}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Review;
