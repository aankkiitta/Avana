import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AvanaReveal from './components/AvanaReveal';
import Services from './components/Services';
import Pricing from './components/Pricing';
import VisionMissionGoals from './components/VisionMissionGoals';
import OurWork from './components/OurWork';

import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import New from "./components/New";
import Templates from './components/Templates';
import Stats from './components/Stats';
import Meaningful from "./components/Meaningful";
function App() {
  return (
  <Layout>
      <Hero />

      <New />

      
<Services />
     

      <OurWork />

    

     
 <Pricing />
 <VisionMissionGoals />
      
      <AboutUs />
        <Templates />
       <Testimonials />
<FAQ />
<Meaningful />
<Stats />
      <ContactUs />

      <Footer />

      <FloatingButton />
    </Layout>
  );
}

export default App;