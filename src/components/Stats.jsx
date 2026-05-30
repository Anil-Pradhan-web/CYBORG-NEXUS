import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statItems = [
  {
    target: 98.7,
    suffix: "%",
    label: "Neural Accuracy",
    desc: "Precision rate of synapses communicating directly with quantum AI layers without telemetry loss."
  },
  {
    target: 12,
    suffix: "ms",
    label: "Brain-AI Latency",
    desc: "Speed of bi-directional telemetry signals, matching biological nervous system pathways."
  },
  {
    target: 500,
    suffix: "M",
    label: "Connected Minds",
    desc: "Active users globally integrated into the Cyborg Nexus neural grid swarm."
  },
  {
    target: 250,
    suffix: "x",
    label: "Cognitive Speed",
    desc: "Average computational multiplier achieved post quantum-core integration."
  }
];

// Animate count-up component
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 2000; // ms
    const startTime = performance.now();

    const run = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;

      if (target % 1 === 0) {
        setCount(Math.floor(currentVal));
      } else {
        setCount(parseFloat(currentVal.toFixed(1)));
      }

      if (progress < 1) {
        requestAnimationFrame(run);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(run);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
      {count}
      <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,245,255,0.4)]">
        {suffix}
      </span>
    </span>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4">
      {/* Radial Highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          Performance Metrics
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight"
        >
          WHY CYBORG NEXUS
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left: Premium SVG Cybernetic Head Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="w-full lg:w-[45%] flex justify-center"
        >
          <div className="relative w-full max-w-[400px] aspect-square rounded-3xl border border-white/5 bg-white/3 backdrop-blur-md p-6 flex items-center justify-center shadow-2xl overflow-hidden group">
            {/* Ambient Background Circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/5 opacity-50" />
            <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl group-hover:scale-125 transition duration-500" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-accent/10 blur-3xl group-hover:scale-125 transition duration-500" />

            {/* Glowing Face Outline Vector */}
            <svg 
              className="w-full h-full relative z-10" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Defs for gradients & glows */}
              <defs>
                <linearGradient id="cyberGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00F5FF" />
                  <stop offset="50%" stopColor="#7B2FFF" />
                  <stop offset="100%" stopColor="#FF00AA" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid backdrop */}
              <path d="M 50,0 L 50,400 M 100,0 L 100,400 M 150,0 L 150,400 M 200,0 L 200,400 M 250,0 L 250,400 M 300,0 L 300,400 M 350,0 L 350,400" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
              <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200 M 0,250 L 400,250 M 0,300 L 400,300 M 0,350 L 400,350" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

              {/* Head Silhouette Contour - Premium Cyber styling */}
              <path 
                d="M 120 320 C 120 320 110 280 110 240 C 110 180 140 100 200 100 C 270 100 290 140 290 200 C 290 230 280 250 280 280 C 280 300 290 320 290 320" 
                stroke="rgba(255, 255, 255, 0.15)" 
                strokeWidth="2" 
                strokeLinecap="round"
              />

              {/* Brain Neural Circuit overlay (Primary Cyan) */}
              <path 
                className="circuit-line" 
                d="M 200 120 H 230 L 250 140 H 280" 
                stroke="#00F5FF" 
                strokeWidth="2.5" 
                filter="url(#glow)"
              />
              <path 
                className="circuit-line" 
                d="M 210 150 L 180 170 H 140" 
                stroke="#7B2FFF" 
                strokeWidth="2" 
                filter="url(#glow)"
              />
              <path 
                className="circuit-line" 
                d="M 220 180 H 260 L 275 195 V 225" 
                stroke="#FF00AA" 
                strokeWidth="2" 
                filter="url(#glow)"
              />
              <path 
                className="circuit-line" 
                d="M 170 210 H 130 L 115 225 V 250" 
                stroke="#00F5FF" 
                strokeWidth="2" 
              />
              <path 
                className="circuit-line" 
                d="M 230 230 H 200 L 185 245 H 155" 
                stroke="#7B2FFF" 
                strokeWidth="2.5" 
                filter="url(#glow)"
              />

              {/* Core Nodes */}
              <circle cx="200" cy="120" r="4" fill="#00F5FF" filter="url(#glow)" />
              <circle cx="280" cy="140" r="5" fill="#FF00AA" filter="url(#glow)" />
              <circle cx="140" cy="170" r="4" fill="#7B2FFF" />
              <circle cx="220" cy="180" r="4" fill="#00F5FF" />
              <circle cx="275" cy="225" r="4" fill="#FF00AA" />
              <circle cx="115" cy="250" r="5" fill="#00F5FF" filter="url(#glow)" />
              <circle cx="155" cy="245" r="4" fill="#7B2FFF" />

              {/* Central Cortex Power Node */}
              <g filter="url(#glow)">
                <circle cx="200" cy="190" r="16" fill="rgba(123,47,255,0.2)" stroke="#7B2FFF" strokeWidth="2" />
                <circle cx="200" cy="190" r="8" fill="#00F5FF" />
              </g>
              <path d="M 200 174 V 206 M 184 190 H 216" stroke="#00F5FF" strokeWidth="1.5" opacity="0.7" />

              {/* Surrounding HUD telemetry lines */}
              <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5, 10" />
              <path d="M 80 80 H 120 M 80 80 V 120" stroke="rgba(0, 245, 255, 0.3)" strokeWidth="2" />
              <path d="M 320 80 H 280 M 320 80 V 120" stroke="rgba(0, 245, 255, 0.3)" strokeWidth="2" />
              <path d="M 80 320 H 120 M 80 320 V 280" stroke="rgba(0, 245, 255, 0.3)" strokeWidth="2" />
              <path d="M 320 320 H 280 M 320 320 V 280" stroke="rgba(0, 245, 255, 0.3)" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>

        {/* Right: Counters Grid */}
        <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden group hover:border-primary/25 transition duration-300"
            >
              {/* Mini corner indicators */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-primary/30 transition-all duration-300" />
              
              <div className="mb-2">
                <Counter target={item.target} suffix={item.suffix} />
              </div>
              
              <h4 className="font-orbitron font-bold text-sm tracking-wider text-white mb-2 group-hover:text-primary transition-colors">
                {item.label}
              </h4>
              
              <p className="font-inter text-muted text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
