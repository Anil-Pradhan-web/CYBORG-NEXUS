import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BrainCircuit, ArrowRight, MousePointerClick, Menu, X } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';

const Hero = ({ onExploreClick, onJoinClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#evolution", label: "Roadmap" },
    { href: "#technology", label: "Applications" },
    { href: "#stats", label: "Specifications" },
    { href: "#architecture", label: "Architecture" },
    { href: "#testimonials", label: "Case Studies" },
    { href: "#advisors", label: "Advisory Board" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 pt-24 pb-8 overflow-hidden bg-[#050816]">
      {/* Background Neural Canvas */}
      <NeuralCanvas />

      {/* Sticky Top Header Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-lg border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-[#050816] p-2 rounded-lg border border-white/10">
              <BrainCircuit className="w-5 h-5 text-primary" />
            </div>
          </div>
          <span className="font-orbitron font-black text-lg tracking-widest bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
            CYBORG NEXUS
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-orbitron tracking-wider text-muted">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onJoinClick}
            className="hidden sm:relative group overflow-hidden px-5 py-2 rounded-lg border border-primary/30 text-white font-orbitron text-xs tracking-widest hover:border-primary transition duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative flex items-center gap-1.5">
              JOIN WAITLIST <Shield className="w-3.5 h-3.5 text-primary" />
            </span>
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-200 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Animated Dropdown Menu for Mobile/Tablet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[73px] left-0 w-full z-40 bg-[#050816]/95 backdrop-blur-xl border-b border-white/5 flex flex-col items-center py-8 gap-6 shadow-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-orbitron font-semibold text-sm tracking-widest text-muted hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onJoinClick();
              }}
              className="sm:hidden px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-orbitron text-xs tracking-widest font-bold mt-2 shadow-lg"
            >
              JOIN WAITLIST
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 max-w-4xl py-12 px-2">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-[10px] font-orbitron tracking-widest mb-8 shadow-[0_0_15px_rgba(0,245,255,0.05)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          CLINICAL FEASIBILITY STUDY LIVE
        </motion.div>

        {/* Company Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] text-white opacity-40 mb-3"
        >
          CYBORG NEXUS
        </motion.h2>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-orbitron font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent">Direct Brain-Computer Interfaces.</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,245,255,0.15)]">Restore Autonomy. Expand Potential.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-inter text-muted text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10 px-2"
        >
          Developing high-resolution implantable and non-invasive neural interfaces designed to reconnect people with motor paralysis, assist neurological rehabilitation, and open channels of communication.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary Button */}
          <button
            onClick={onJoinClick}
            className="relative w-full sm:w-auto px-8 py-4 rounded-xl font-orbitron font-bold text-xs tracking-widest bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_0_30px_rgba(0,245,255,0.15)] hover:shadow-[0_0_45px_rgba(0,245,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            JOIN WAITLIST
          </button>

          {/* Secondary Button */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-orbitron font-bold text-xs tracking-widest bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,245,255,0.05)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-white"
          >
            EXPLORE ROADMAP <MousePointerClick className="w-3.5 h-3.5 text-primary" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="pb-4 flex flex-col items-center gap-1.5 text-muted font-orbitron text-[10px] tracking-widest cursor-pointer"
        onClick={onExploreClick}
      >
        <span>SCROLL TO INITIATE DETAILED ROADMAP</span>
        <div className="w-4 h-7 rounded-full border border-muted/30 flex justify-center p-0.5">
          <div className="w-0.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
