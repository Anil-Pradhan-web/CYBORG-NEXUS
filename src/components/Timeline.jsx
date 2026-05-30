import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Zap, Infinity as InfinityIcon } from 'lucide-react';

const timelineData = [
  {
    year: "2025",
    title: "AI Assistants",
    description: "Intelligent autonomous agents co-exist in workflow loops, lay the computational base, and optimize initial human-machine interface layers.",
    icon: Cpu,
    color: "#00F5FF", // Cyan
  },
  {
    year: "2040",
    title: "Neural Interfaces",
    description: "Introduction of non-invasive neural mesh. Consumers type using brainwaves and transmit direct sensory inputs to machine receptors.",
    icon: Eye,
    color: "#7B2FFF", // Purple
  },
  {
    year: "2065",
    title: "Bio Augmentation",
    description: "Nanotech blood enhancements and cybernetic prosthetics connect directly to central nervous systems with sub-millisecond sync speeds.",
    icon: Zap,
    color: "#FF00AA", // Pink
  },
  {
    year: "2085",
    title: "Cyborg Civilization",
    description: "Cyborg Nexus establishes the first global neural swarm. Biological intelligence and artificial superintelligence merge into a unified consciousness.",
    icon: InfinityIcon,
    color: "#00F5FF", // Cyan
  }
];

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const IconComponent = data.icon;

  return (
    <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between w-full">
      {/* Date badge / spacer for layout */}
      <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center order-2 md:order-1`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="glass-panel glass-panel-hover p-6 rounded-2xl max-w-md w-full relative overflow-hidden"
        >
          {/* Card Border Glow */}
          <div 
            className="absolute top-0 left-0 w-1 h-full"
            style={{ backgroundColor: data.color }}
          />

          <span 
            className="font-orbitron font-extrabold text-xs tracking-widest uppercase px-2 py-0.5 rounded border border-white/5 inline-block mb-3"
            style={{ color: data.color, borderColor: `${data.color}33` }}
          >
            Phase {index + 1}
          </span>
          
          <h3 className="font-orbitron font-bold text-xl md:text-2xl text-white mb-2 flex items-center gap-2">
            <IconComponent className="w-5 h-5" style={{ color: data.color }} />
            {data.title}
          </h3>
          
          <p className="font-inter text-muted text-sm leading-relaxed">
            {data.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline central dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border border-white/10 bg-[#050816] flex items-center justify-center z-10 order-1 md:order-2 my-4 md:my-0">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-4 h-4 rounded-full"
          style={{ 
            backgroundColor: data.color, 
            boxShadow: `0 0 15px ${data.color}`
          }}
        />
      </div>

      {/* Year badge display */}
      <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center order-3 md:my-0 my-2`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-orbitron font-black text-5xl md:text-7xl tracking-tighter"
          style={{ 
            color: data.color,
            textShadow: `0 0 30px ${data.color}33`
          }}
        >
          {data.year}
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="evolution" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Title Header */}
      <div className="text-center mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          Chronological Evolution Path
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight"
        >
          HUMAN <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">→ CYBORG</span> TRANSITION
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Main Timeline Wrapper */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary/50 via-secondary/55 to-accent/50 opacity-30" />
        
        {/* Timeline Items */}
        <div className="space-y-4">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
