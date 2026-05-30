import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BrainCircuit, ArrowRight, MousePointerClick } from 'lucide-react';

const Hero = ({ onExploreClick, onJoinClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 pt-24 overflow-hidden">
      {/* Sticky Top Header Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-lg border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-[#050816] p-2 rounded-lg border border-white/10">
              <BrainCircuit className="w-6 h-6 text-primary" />
            </div>
          </div>
          <span className="font-orbitron font-black text-xl tracking-widest bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
            CYBORG NEXUS
          </span>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 text-sm font-orbitron tracking-wider text-muted"
        >
          <a href="#evolution" className="hover:text-primary transition-colors">Evolution</a>
          <a href="#technology" className="hover:text-primary transition-colors">Modules</a>
          <a href="#stats" className="hover:text-primary transition-colors">Performance</a>
          <a href="#architecture" className="hover:text-primary transition-colors">Architecture</a>
          <a href="#future" className="hover:text-primary transition-colors">Vision</a>
        </motion.nav>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={onJoinClick}
          className="relative group overflow-hidden px-5 py-2.5 rounded-lg border border-primary/30 text-white font-orbitron text-xs tracking-widest hover:border-primary transition duration-300"
        >
          <div className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative flex items-center gap-1">
            EVOLVE NOW <Shield className="w-3.5 h-3.5 text-primary" />
          </span>
        </motion.button>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 max-w-4xl py-12">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-orbitron tracking-widest mb-8 shadow-[0_0_15px_rgba(0,245,255,0.05)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          NEURAL INTEGRATION VER. 85.0
        </motion.div>

        {/* Company Title (CYBORG NEXUS) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron font-black text-3xl md:text-5xl lg:text-6xl tracking-[0.25em] text-white opacity-40 mb-3"
        >
          CYBORG NEXUS
        </motion.h2>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-orbitron font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
        >
          <span className="bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent">Beyond Human.</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(123,47,255,0.3)]">Beyond Machine.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-inter text-muted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          The next era of intelligence begins with seamless neural integration. 
          Unify your biological cognition with quantum artificial cores.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          {/* Primary Button */}
          <button
            onClick={onJoinClick}
            className="relative px-8 py-4 rounded-xl font-orbitron font-bold text-sm tracking-widest bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_0_30px_rgba(0,245,255,0.25)] hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              JOIN EVOLUTION <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          {/* Secondary Button */}
          <button
            onClick={onExploreClick}
            className="px-8 py-4 rounded-xl font-orbitron font-bold text-sm tracking-widest bg-white/5 border border-white/10 hover:border-primary/50 text-white hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,245,255,0.1)] transform hover:-translate-y-0.5 active:translate-y-0 transition duration-300 flex items-center justify-center gap-2"
          >
            EXPLORE TECHNOLOGY <MousePointerClick className="w-4 h-4 text-primary" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="pb-8 flex flex-col items-center gap-2 text-muted font-orbitron text-xs tracking-widest cursor-pointer"
        onClick={onExploreClick}
      >
        <span>SCROLL DOWN TO INITIATE</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
