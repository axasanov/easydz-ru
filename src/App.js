import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import Header from './sections/header'; // импорт компонента Header
import Hero from './sections/hero';
import Advantage from './sections/advantage';
import Reviews from './sections/reviews';
import Description from './sections/description';
import Functionality from './sections/functionality';
import Contact from './sections/contact';
import CTA from './sections/cta'
import FAQ from './sections/faq'
import Footer from './sections/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header /> {/* добавление компонента Header */}
      <CssBaseline />
          <Hero />
          <Advantage />
          <Reviews />
          <Description />
          <Functionality />
          <Contact />
          <CTA />
          <FAQ />
          <Footer />
    </ThemeProvider>
  );
}

export default App;
