import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

const timelineData = [
  {
    phase: "Phase 1",
    title: "Pre-Clinical Validation",
    period: "2024 - 2026",
    description: "High-density non-invasive EEG cap sensory grids mapped to machine learning translation models. Testing sub-dermal biocompatibility in laboratory models.",
    icon: Cpu,
    color: "#00F5FF",
    glowColor: "rgba(0, 245, 255, 0.4)",
  },
  {
    phase: "Phase 2",
    title: "Clinical Feasibility Trials",
    period: "2026 - 2028",
    description: "First-in-human feasibility studies for patients with severe motor paralysis. Evaluating raw motor intent translation to digital signals (typing, cursor control).",
    icon: Heart,
    color: "#7B2FFF",
    glowColor: "rgba(123, 47, 255, 0.4)",
  },
  {
    phase: "Phase 3",
    title: "Regulatory Integration",
    period: "2028 - 2030",
    description: "Submitting high-resolution telemetry cores for FDA clearances and CE medical device audits. Expanding trials for everyday home use and assistive motor bridge systems.",
    icon: ShieldCheck,
    color: "#FF00AA",
    glowColor: "rgba(255, 0, 170, 0.4)",
  },
  {
    phase: "Phase 4",
    title: "Consumer BCI Integration",
    period: "2030+",
    description: "Launching safe, ultra-low-power wireless consumer interfaces for cognitive support, productivity acceleration, and immersive hand-free digital control systems.",
    icon: CheckCircle2,
    color: "#00F5FF",
    glowColor: "rgba(0, 245, 255, 0.4)",
  }
];

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const IconComponent = data.icon;

  return (
    <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between w-full">
      {/* Card side */}
      <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center order-2 md:order-1 px-4 md:px-0`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="glass-panel glass-panel-hover p-6 rounded-2xl w-full max-w-lg relative overflow-hidden"
        >
          {/* Accent Color Band */}
          <div 
            className="absolute top-0 left-0 w-1.5 h-full"
            style={{ backgroundColor: data.color }}
          />

          <div className="flex justify-between items-start mb-3 pl-2">
            <span 
              className="font-orbitron font-extrabold text-[10px] tracking-widest uppercase px-2 py-0.5 rounded border"
              style={{ color: data.color, borderColor: `${data.color}33`, background: `${data.color}0a` }}
            >
              {data.phase}
            </span>
            <span className="font-orbitron text-xs text-white/40">{data.period}</span>
          </div>
          
          <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mb-2 pl-2 flex items-center gap-2">
            <IconComponent className="w-5 h-5 shrink-0" style={{ color: data.color }} />
            {data.title}
          </h3>
          
          <p className="font-inter text-muted text-sm leading-relaxed pl-2">
            {data.description}
          </p>
        </motion.div>
      </div>

      {/* Central dot indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#050816] flex items-center justify-center z-10 order-1 md:order-2 my-4 md:my-0 shadow-lg">
        <motion.div 
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="w-3.5 h-3.5 rounded-full"
          style={{ 
            backgroundColor: data.color, 
            boxShadow: `0 0 12px ${data.color}`
          }}
        />
      </div>

      {/* Spacing alignment for desktop layout */}
      <div className="hidden md:block w-[45%] order-3" />
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="evolution" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 overflow-hidden bg-[#050816]">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          DEVELOPMENT ROADMAP
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          CLINICAL TO CONSUMER PATHWAY
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary/30 via-secondary/40 to-accent/30 opacity-40" />
        
        {/* Timeline Items */}
        <div className="space-y-2">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
