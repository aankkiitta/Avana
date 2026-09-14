import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import OurWork from './components/OurWork';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <OurWork />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <ContactUs />
      <Footer />
      <FloatingButton />
    </Layout>
  );
}

export default App;