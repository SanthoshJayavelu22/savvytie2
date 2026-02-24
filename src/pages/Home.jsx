// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import PromoVideo from '../components/PromoVideo';
import WhyChoose from '../components/WhyChoose';
import OutsourcingBenefits from '../components/OutsourcingBenefits';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import TalentPool from '../components/TalentPool';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import TalentVetting from '../components/TalentVetting';

function Home() {
  return (
    <>
      <Hero />
    
      <Comparison />
      <PromoVideo />
      <WhyChoose />
      <OutsourcingBenefits />
      <HowItWorks />
      <TalentVetting />
      <Services />
      <TalentPool />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;