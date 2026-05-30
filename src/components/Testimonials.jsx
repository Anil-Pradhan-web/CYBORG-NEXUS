import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "Following my spinal cord injury, I felt disconnected from the digital world. With the Nexus motor bridge mesh, I was able to navigate my desktop, compose drafts, and command my assistive devices within days. I'm now typing at 82 words-per-minute using direct thought.",
    name: "Arthur Pendelton",
    role: "Clinical Trial Participant #04",
    initials: "AP",
    color: "#00F5FF"
  },
  {
    quote: "The low thermal signature and localized on-device encryption of the Nexus processor set a new benchmark in neural safety. It bridges biological pathways to digital environments without generating tissue complications or risking user data security.",
    name: "Dr. Marcus Vance",
    role: "Chief of Neurosurgery, St. Jude Medical",
    initials: "MV",
    color: "#7B2FFF"
  },
  {
    quote: "Using their open-source SDK, I mapped motor cortex intent directly to coding hotkeys. The sub-8ms processing loop is incredibly fast—hands-free software development is no longer sci-fi, it's my daily workspace reality.",
    name: "Elise Thorne",
    role: "Open-Source BCI Developer",
    initials: "ET",
    color: "#FF00AA"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 bg-[#050816]">
      {/* Background Soft Gradient */}
      <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" /> HUMAN IMPACT & TRIALS
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          PATIENT & DEVELOPER STORIES
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full px-4 md:px-0">
        {testimonials.map((test, index) => (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className="glass-panel p-8 rounded-2xl relative flex flex-col justify-between border hover:border-white/20 transition-all duration-300 group"
          >
            {/* Top quote icon decor */}
            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition duration-300">
              <Quote className="w-12 h-12 text-white" />
            </div>

            <p className="font-inter text-muted text-sm leading-relaxed mb-8 italic relative z-10">
              "{test.quote}"
            </p>

            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              {/* Initials Avatar */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-black text-xs text-white border"
                style={{ 
                  borderColor: `${test.color}44`,
                  background: `linear-gradient(135deg, ${test.color}15, ${test.color}35)`
                }}
              >
                {test.initials}
              </div>

              <div>
                <h4 className="font-orbitron font-bold text-sm text-white group-hover:text-primary transition-colors">
                  {test.name}
                </h4>
                <p className="font-inter text-xs text-muted">
                  {test.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
