import React from 'react';
import Hero from '../components/Home/Hero';
import TrustIndicators from '../components/Home/TrustIndicators';
import InformationStrip from '../components/Home/InformationStrip';
import Introduction from '../components/Home/Introduction';
import Features from '../components/Home/Features';
import Categories from '../components/Home/Categories';
import InformationSections from '../components/Home/InformationSections';
import TrustSection from '../components/Home/TrustSection';
import FAQ from '../components/Home/FAQ';
import FinalCTA from '../components/Home/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 font-sans selection:bg-[#ffbc00] selection:text-black">
      <Hero />
      <TrustIndicators />
      <InformationStrip />
      <Introduction />
      <Features />
      <Categories />
      <InformationSections />
      <TrustSection />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
