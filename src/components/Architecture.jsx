import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Server, Network, ArrowDown } from 'lucide-react';

const nodes = [
  {
    id: "brain",
    title: "Human Brain",
    subtitle: "Biological Origin",
    desc: "100 Billion neurons firing bio-electrical signals. Raw cognition, subconscious thoughts, and memory storage.",
    icon: Brain,
    glow: "rgba(0, 245, 255, 0.4)", // Cyan
    iconColor: "#00F5FF"
  },
  {
    id: "interface",
    title: "Neural Interface",
    subtitle: "Synaptic Telemetry Link",
    desc: "Sub-dermal quantum mesh nodes convert neural firing patterns into digital telemetry datasets.",
    icon: Network,
    glow: "rgba(123, 47, 255, 0.4)", // Purple
    iconColor: "#7B2FFF"
  },
  {
    id: "core",
    title: "AI Core",
    subtitle: "Sub-Cortex Coprocessor",
    desc: "Real-time cognition acceleration and mathematical processing layered directly inside neural paths.",
    icon: Cpu,
    glow: "rgba(255, 0, 170, 0.4)", // Pink
    iconColor: "#FF00AA"
  },
  {
    id: "cloud",
    title: "Cloud Intelligence",
    subtitle: "Global Swarm Network",
    desc: "Decentralized super-computing database, sharing knowledge Swarm-wide at speed of light.",
    icon: Server,
    glow: "rgba(0, 245, 255, 0.4)", // Cyan
    iconColor: "#00F5FF"
  }
];

const ArchitectureNode = ({ node, index }) => {
  const Icon = node.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-4xl mx-auto"
    >
      {/* Node Index Indicator */}
      <div className="hidden md:flex items-center justify-center font-orbitron font-extrabold text-sm text-white/20 w-8">
        0{index + 1}
      </div>

      {/* Node Container Card */}
      <div 
        className="flex-1 glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300 w-full"
        style={{
          boxShadow: `0 0 30px rgba(0, 0, 0, 0.5)`
        }}
      >
        {/* Subtle hover glow accent */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle 80px at 15% 50%, ${node.glow}, transparent 80%)`
          }}
        />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10 text-center sm:text-left">
          {/* Icon Shield */}
          <div className="relative p-4 rounded-2xl border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shrink-0">
            <Icon 
              className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" 
              style={{ 
                color: node.iconColor,
                filter: `drop-shadow(0 0 8px ${node.iconColor})`
              }} 
            />
          </div>

          <div>
            <span className="font-orbitron font-semibold text-[10px] uppercase tracking-wider text-muted mb-1 block">
              {node.subtitle}
            </span>
            <h3 className="font-orbitron font-extrabold text-xl text-white mb-2 group-hover:text-primary transition-colors">
              {node.title}
            </h3>
            <p className="font-inter text-muted text-sm leading-relaxed">
              {node.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Architecture = () => {
  return (
    <section id="architecture" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          System Topology
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight"
        >
          NEURAL ARCHITECTURE
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Architecture Flow List */}
      <div className="relative flex flex-col items-center gap-12 md:gap-16">
        {/* Animated Connecting Lines Vector */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Draw active animated pathway */}
            <path 
              d="M 190 60 V 780" 
              stroke="rgba(255,255,255,0.04)" 
              strokeWidth="2" 
              className="absolute left-1/2 transform -translate-x-[200px]"
            />
            
            {/* Pulsing signal nodes traveling downwards */}
            <circle r="4" fill="#00F5FF" filter="url(#glow)">
              <animateMotion
                path="M 190 60 V 780"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4" fill="#FF00AA" filter="url(#glow)">
              <animateMotion
                path="M 190 60 V 780"
                dur="7s"
                begin="2.3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4" fill="#7B2FFF" filter="url(#glow)">
              <animateMotion
                path="M 190 60 V 780"
                dur="7s"
                begin="4.6s"
                repeatCount="indefinite"
              />
            </circle>

            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            <ArchitectureNode node={node} index={index} />
            {/* Visual separator/indicator for mobile layouts */}
            {index < nodes.length - 1 && (
              <div className="flex md:hidden items-center justify-center p-2 text-primary/40 animate-pulse">
                <ArrowDown className="w-5 h-5" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Architecture;
