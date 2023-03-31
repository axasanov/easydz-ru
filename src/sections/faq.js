import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="faq">
            <Box sx={{ py: '6rem', backgroundColor: '#f5f5f5', height: 600, backgroundImage: 'url(/assets/background.png)', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 600, mb: '6rem', textAlign: 'center' }}>
                    Часто задаваемые вопросы
                </Typography>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item xs={11} md={8}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography variant="h5">Как долго вы выполняете заказы?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">
                                    Мы обычно выполняем заказы в течение 3-7 дней в зависимости от их сложности и объема работы. Однако, если вам нужно срочное выполнение, свяжитесь с нами, мы постараемся найти решение.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={11} md={8}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography variant="h5">Как я могу заказать у вас работу?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">
                                    Вы можете заказать работу у нас, заполнив форму на нашем сайте или связавшись с нами по телефону или по электронной почте. Мы свяжемся с вами в ближайшее время для обсуждения деталей заказа.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={11} md={8}>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography variant="h5">Как я могу быть уверен, что моя работа уникальна?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">
                                    Мы гарантируем 100% уникальность выполненных нами работ. Все работы проходят проверку на плагиат с помощью специального программного обеспечения.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Faq
