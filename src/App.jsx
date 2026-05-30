import React, { useState } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Stats from './components/Stats';
import Architecture from './components/Architecture';
import Testimonials from './components/Testimonials';
import Advisors from './components/Advisors';
import Vision from './components/Vision';
import CTA from './components/CTA';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  const handleExploreClick = () => {
    const element = document.getElementById('evolution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white select-none bg-[#050816]">
      {/* Background Neural Network */}
      <NeuralCanvas />

      {/* Hero section */}
      <Hero 
        onExploreClick={handleExploreClick} 
        onJoinClick={handleJoinClick} 
      />

      {/* Main Content Layout */}
      <main className="space-y-12 pb-16">
        {/* Section 2: Clinical to Consumer Roadmap Timeline */}
        <Timeline />

        {/* Section 3: Technology Applications Modules Grid */}
        <Features />

        {/* Section 4: Specifications & Specifications stats */}
        <Stats />

        {/* Section 5: Synaptic Architecture node map */}
        <Architecture />

        {/* Section 6: Patient Case Studies & Developer Testimonials */}
        <Testimonials />

        {/* Section 7: Scientific & Ethical Advisory Board */}
        <Advisors />

        {/* Section 8: Future corporate horizons grid */}
        <Vision />

        {/* Section 9: Final waitlist action & Terminal calibration dialog */}
        <CTA 
          isOpen={isModalOpen} 
          setIsOpen={setIsModalOpen} 
        />
      </main>
    </div>
  );
}

export default App;
