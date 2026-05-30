import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldAlert, GraduationCap, Compass } from 'lucide-react';

const visions = [
  {
    title: "Healthcare",
    subtitle: "Instant Diagnostics",
    desc: "Eradicate diagnostic latency. Neural nanotech monitors cell degradation in real-time, delivering immediate preventive remedies directly to cellular sites.",
    icon: HeartPulse,
    color: "#00F5FF", // Cyan
    bgGrad: "from-cyan-500/10 to-transparent"
  },
  {
    title: "Defense",
    subtitle: "Enhanced Decision Making",
    desc: "Process combat matrices, environmental hazards, and threat indicators at sub-second telemetry rates, ensuring optimal defensive reactions.",
    icon: ShieldAlert,
    color: "#7B2FFF", // Purple
    bgGrad: "from-purple-500/10 to-transparent"
  },
  {
    title: "Education",
    subtitle: "Knowledge Acceleration",
    desc: "Bypass physical learning curves. Download encyclopedic datasets, language structures, and complex motor skills directly to neural memory buffers.",
    icon: GraduationCap,
    color: "#FF00AA", // Pink
    bgGrad: "from-pink-500/10 to-transparent"
  },
  {
    title: "Space Exploration",
    subtitle: "Human-Machine Survival",
    desc: "Adapt biological tolerances for deep-space colonization. Connect with ship telemetry systems to survive vacuum pressure anomalies.",
    icon: Compass,
    color: "#00F5FF", // Cyan
    bgGrad: "from-cyan-500/10 to-transparent"
  }
];

const VisionCard = ({ vision, index }) => {
  const Icon = vision.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-8 rounded-2xl glass-panel border overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent opacity-60" />
      <div className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full blur-[80px] opacity-20 bg-gradient-to-br from-primary to-secondary group-hover:scale-125 transition-transform duration-500" />

      <div>
        {/* Card Header */}
        <div className="flex justify-between items-start mb-6">
          <div 
            className="p-3 rounded-xl border"
            style={{ 
              borderColor: `${vision.color}33`,
              background: `${vision.color}0a`
            }}
          >
            <Icon 
              className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" 
              style={{ 
                color: vision.color,
                filter: `drop-shadow(0 0 5px ${vision.color})`
              }} 
            />
          </div>
          <span className="font-orbitron font-extrabold text-[8px] tracking-widest text-white/20 group-hover:text-white/40 uppercase">
            SEC. {vision.title.substring(0, 3)}
          </span>
        </div>

        {/* Card Title */}
        <span 
          className="font-orbitron font-bold text-xs uppercase tracking-widest mb-1 block"
          style={{ color: vision.color }}
        >
          {vision.subtitle}
        </span>
        
        <h3 className="font-orbitron font-black text-2xl text-white mb-3 group-hover:text-primary transition-colors">
          {vision.title}
        </h3>

        {/* Card Description */}
        <p className="font-inter text-muted text-sm leading-relaxed group-hover:text-white/80 transition-all duration-300">
          {vision.desc}
        </p>
      </div>

      {/* Cyber Corner Lines */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/5 group-hover:border-primary/20 transition duration-300" />
    </motion.div>
  );
};

const Vision = () => {
  return (
    <section id="future" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          Corporate Horizons
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight"
        >
          FUTURE VISION
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {visions.map((vision, index) => (
          <VisionCard key={index} vision={vision} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Vision;
