import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statItems = [
  {
    target: 1024,
    suffix: "",
    label: "Recording Channels",
    desc: "Individual microelectrode nodes capturing synaptic impulses across motor and sensory cortex regions."
  },
  {
    target: 99.4,
    suffix: "%",
    label: "Signal-to-Noise Ratio",
    desc: "State-of-the-art accuracy in translating biological electrical intent into digital input commands."
  },
  {
    target: 8,
    suffix: "ms",
    label: "Telemetry Latency",
    desc: "Instant processing loop, matching natural biological muscle response speed."
  },
  {
    target: 24,
    suffix: "Hrs",
    label: "Continuous Runtime",
    desc: "Wireless battery lifetime supporting a full day of independent environmental control."
  }
];

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 1800; // ms
    const startTime = performance.now();

    const run = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
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
    <span ref={ref} className="font-orbitron font-black text-4xl sm:text-5xl text-white tracking-tight">
      {count}
      <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,245,255,0.3)] ml-0.5">
        {suffix}
      </span>
    </span>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 bg-[#050816]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          ENGINEERING CAPABILITIES
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          INTERFACE SPECIFICATIONS
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left: Custom SVG Cybernetic Head Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full lg:w-[45%] flex justify-center px-4"
        >
          <div className="relative w-full max-w-[380px] aspect-square rounded-3xl border border-white/5 bg-white/3 backdrop-blur-md p-6 flex items-center justify-center shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/5 opacity-40" />
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />

            <svg 
              className="w-full h-full relative z-10" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid backdrops */}
              <path d="M 50,0 L 50,400 M 100,0 L 100,400 M 150,0 L 150,400 M 200,0 L 200,400 M 250,0 L 250,400 M 300,0 L 300,400 M 350,0 L 350,400" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
              <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200 M 0,250 L 400,250 M 0,300 L 400,300 M 0,350 L 400,350" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />

              {/* Face Contour Line */}
              <path 
                d="M 120 320 C 120 320 110 280 110 240 C 110 180 140 100 200 100 C 270 100 290 140 290 200 C 290 230 280 250 280 280 C 280 300 290 320 290 320" 
                stroke="rgba(255, 255, 255, 0.12)" 
                strokeWidth="2" 
                strokeLinecap="round"
              />

              {/* Animating Circuit Pathways */}
              <path className="circuit-line" d="M 200 120 H 230 L 250 140 H 280" stroke="#00F5FF" strokeWidth="2" filter="url(#glow)" />
              <path className="circuit-line" d="M 210 150 L 180 170 H 140" stroke="#7B2FFF" strokeWidth="1.5" />
              <path className="circuit-line" d="M 220 180 H 260 L 275 195 V 225" stroke="#FF00AA" strokeWidth="1.5" filter="url(#glow)" />
              <path className="circuit-line" d="M 170 210 H 130 L 115 225 V 250" stroke="#00F5FF" strokeWidth="1.5" />
              <path className="circuit-line" d="M 230 230 H 200 L 185 245 H 155" stroke="#7B2FFF" strokeWidth="2" filter="url(#glow)" />

              {/* Circuit Nodes */}
              <circle cx="200" cy="120" r="3.5" fill="#00F5FF" />
              <circle cx="280" cy="140" r="4.5" fill="#FF00AA" filter="url(#glow)" />
              <circle cx="140" cy="170" r="3.5" fill="#7B2FFF" />
              <circle cx="220" cy="180" r="3.5" fill="#00F5FF" />
              <circle cx="275" cy="225" r="3.5" fill="#FF00AA" />
              <circle cx="115" cy="250" r="4.5" fill="#00F5FF" filter="url(#glow)" />
              <circle cx="155" cy="245" r="3.5" fill="#7B2FFF" />

              {/* Cortex Hub */}
              <g filter="url(#glow)">
                <circle cx="200" cy="190" r="14" fill="rgba(123,47,255,0.15)" stroke="#7B2FFF" strokeWidth="1.5" />
                <circle cx="200" cy="190" r="6" fill="#00F5FF" />
              </g>

              {/* Outer HUD decor */}
              <circle cx="200" cy="200" r="130" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="4, 8" />
              <path d="M 80 80 H 105 M 80 80 V 105" stroke="rgba(0, 245, 255, 0.25)" strokeWidth="1.5" />
              <path d="M 320 80 H 295 M 320 80 V 105" stroke="rgba(0, 245, 255, 0.25)" strokeWidth="1.5" />
              <path d="M 80 320 H 105 M 80 320 V 295" stroke="rgba(0, 245, 255, 0.25)" strokeWidth="1.5" />
              <path d="M 320 320 H 295 M 320 320 V 295" stroke="rgba(0, 245, 255, 0.25)" strokeWidth="1.5" />
            </svg>
          </div>
        </motion.div>

        {/* Right: Metrics Grid */}
        <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-0">
          {statItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden group hover:border-primary/25 transition duration-300"
            >
              {/* Corner mark */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-primary/30 transition-all duration-300" />
              
              <div className="mb-2">
                <Counter target={item.target} suffix={item.suffix} />
              </div>
              
              <h4 className="font-orbitron font-bold text-sm tracking-wider text-white mb-1.5 group-hover:text-primary transition-colors">
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
