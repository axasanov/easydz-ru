import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { AssignmentTurnedIn, PersonPinCircle, AccessTime } from '@mui/icons-material';

function Functionality() {
  return (
    <div id="functionality">

      <Box sx={{ py: '6rem', backgroundColor: '#f5f5f5', backgroundImage: 'url(/assets/background-2.png)', backgroundSize: 'cover', }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 600, mb: '4rem', textAlign: 'center' }}
        >
          Функциональность
        </Typography>
        <Grid container justifyContent="center" spacing={0}>
          <Grid item xs={10} md={2} sx={{ backgroundColor: "white", borderRadius: '20px', mb: 3, py: 3, px: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>
              <AssignmentTurnedIn sx={{ color: '#1E88E5', fontSize: 100 }} />
            </Box>
            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Качественные материалы</Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              Наши авторы работают только с проверенными и надежными источниками информации. Вы получаете качественные и
              достоверные материалы.
            </Typography>

          </Grid>
          <Grid item md={1} />
          <Grid item xs={10} md={2} sx={{ backgroundColor: "white", borderRadius: '20px', mb: 3, py: 3, px: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>

              <PersonPinCircle sx={{ color: '#1E88E5', fontSize: 100 }} />
            </Box>
            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Индивидуальный подход</Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              Мы учитываем все ваши требования и пожелания. Авторы работают над вашим заказом с учетом ваших индивидуальных
              потребностей.
            </Typography>
          </Grid>
          <Grid item md={1} />
          <Grid item xs={10} md={2} sx={{ backgroundColor: "white", borderRadius: '20px', py: 3, px: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>
              <AccessTime sx={{ color: '#1E88E5', fontSize: 100 }} />
            </Box>
            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Своевременная сдача</Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              Мы гарантируем сдачу заказа вовремя, без задержек и промедлений. Вы всегда получаете свои работы в срок.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Functionality;
