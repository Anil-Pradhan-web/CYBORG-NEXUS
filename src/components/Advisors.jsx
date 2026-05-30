import React from 'react';
import { motion } from 'framer-motion';

const advisors = [
  {
    name: "Dr. Sarah Chen, PhD",
    title: "Neural Engineering Advisor",
    affiliation: "Stanford University",
    desc: "20+ years researching high-density implantable CMOS arrays. Guiding micro-thread compatibility.",
    color: "#00F5FF"
  },
  {
    name: "Dr. Thomas Althaus, MD",
    title: "Clinical Trials Director",
    affiliation: "Heidelberg Hospital",
    desc: "Specialist in spinal injury neurorehabilitation. Supervising patient safety protocols and trial design.",
    color: "#7B2FFF"
  },
  {
    name: "Dr. Michael Okoye, PhD",
    title: "Lead Decoding Advisor",
    affiliation: "MIT Media Lab",
    desc: "Pioneer in recursive neural nets for EEG denoising. Overseeing machine learning translation models.",
    color: "#FF00AA"
  },
  {
    name: "Elena Rostova, JD",
    title: "Ethics & Compliance Chair",
    affiliation: "Bioethics Coalition",
    desc: "Advocate for cognitive liberty. Directing our neural data privacy and patient consent frameworks.",
    color: "#00F5FF"
  }
];

const Advisors = () => {
  return (
    <section id="advisors" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 bg-[#050816]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          SCIENTIFIC & ETHICAL CREDIBILITY
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          SCIENTIFIC ADVISORY BOARD
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full px-4 md:px-0">
        {advisors.map((advisor, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="glass-panel p-6 rounded-2xl border flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
          >
            <div>
              {/* Profile Avatar Vector Icon */}
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center border relative overflow-hidden"
                style={{ 
                  borderColor: `${advisor.color}33`,
                  background: `linear-gradient(135deg, ${advisor.color}0a, ${advisor.color}1a)`
                }}
              >
                {/* Generic Clean Profile SVG Icon */}
                <svg className="w-8 h-8 text-white/40 group-hover:text-white/60 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                {/* Ring Indicator */}
                <div 
                  className="absolute inset-0 rounded-full border border-transparent group-hover:border-primary/20 transition-colors duration-300"
                  style={{ borderColor: `${advisor.color}15` }}
                />
              </div>

              <h4 className="font-orbitron font-bold text-base text-white text-center mb-1 group-hover:text-primary transition-colors">
                {advisor.name}
              </h4>
              
              <p 
                className="font-orbitron text-[10px] font-semibold text-center tracking-wider mb-0.5"
                style={{ color: advisor.color }}
              >
                {advisor.title}
              </p>
              
              <p className="font-inter text-xs text-white/50 text-center mb-4 italic">
                {advisor.affiliation}
              </p>
            </div>

            <p className="font-inter text-muted text-xs text-center leading-relaxed border-t border-white/5 pt-4">
              {advisor.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Advisors;
