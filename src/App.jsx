import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import New from "./components/New";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import VisionMissionGoals from "./components/VisionMissionGoals";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Meaningful from "./components/Meaningful";
import Stats from "./components/Stats";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <Layout>
      <Hero />
      <New />
      <Services />
      <OurWork />
      <Templates />
      <Pricing />
      <VisionMissionGoals />
      <AboutUs />
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