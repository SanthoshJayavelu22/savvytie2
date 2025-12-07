// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import OutsourcingBenefits from '../components/OutsourcingBenefits';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import TalentPool from '../components/TalentPool';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <OutsourcingBenefits />
      <HowItWorks />
      <Services />
      <TalentPool />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;