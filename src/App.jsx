import React, { useState } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Stats from './components/Stats';
import Architecture from './components/Architecture';
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
    <div className="relative min-h-screen text-white select-none">
      {/* Dynamic Background */}
      <NeuralCanvas />

      {/* Hero section */}
      <Hero 
        onExploreClick={handleExploreClick} 
        onJoinClick={handleJoinClick} 
      />

      {/* Main Content Layout */}
      <main className="space-y-12 pb-16">
        {/* Section 2: Human -> Cyborg Evolution Timeline */}
        <Timeline />

        {/* Section 3: Technology Modules Grid */}
        <Features />

        {/* Section 4: Performance Statistics & Custom SVG illustration */}
        <Stats />

        {/* Section 5: Synaptic Architecture node map */}
        <Architecture />

        {/* Section 6: Future corporate horizons grid */}
        <Vision />

        {/* Section 7: Final evolutionary call to action & Terminal signup dialog */}
        <CTA 
          isOpen={isModalOpen} 
          setIsOpen={setIsModalOpen} 
        />
      </main>
    </div>
  );
}

export default App;
