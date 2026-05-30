import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Activity, Zap, ShieldCheck } from 'lucide-react';

const techModules = [
  {
    title: "Neural Sync",
    desc: "Establish instantaneous, bi-directional coupling between cerebral synaptic pathways and artificial intelligence networks.",
    icon: Network,
    glowColor: "rgba(0, 245, 255, 0.4)", // Cyan
    borderColor: "rgba(0, 245, 255, 0.2)",
    label: "Duplex Link"
  },
  {
    title: "Bio Augmentation",
    desc: "Overhaul and augment physical constraints using advanced motor neural implants and high-grade molecular structures.",
    icon: Activity,
    glowColor: "rgba(123, 47, 255, 0.4)", // Purple
    borderColor: "rgba(123, 47, 255, 0.2)",
    label: "Soma Upgrade"
  },
  {
    title: "Quantum Processing",
    desc: "Accelerate mental computing capacity and decision trees utilizing localized sub-cortex quantum core integration.",
    icon: Zap,
    glowColor: "rgba(255, 0, 170, 0.4)", // Pink
    borderColor: "rgba(255, 0, 170, 0.2)",
    label: "Cognitive Boost"
  },
  {
    title: "Cyber Security",
    desc: "Enforce state-of-the-art cryptographic encryptions protecting neural memory buffers and personal digital soul assets.",
    icon: ShieldCheck,
    glowColor: "rgba(0, 245, 255, 0.4)", // Cyan
    borderColor: "rgba(0, 245, 255, 0.2)",
    label: "Shield Active"
  }
];

const TiltCard = ({ module, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    // Convert mouse position to degrees of rotation (max 10 degrees)
    const rotX = (-y / (height / 2)) * 8;
    const rotY = (x / (width / 2)) * 8;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate mouse percentage for gradient background glow positions
    const glowX = ((e.clientX - rect.left) / width) * 100;
    const glowY = ((e.clientY - rect.top) / height) * 100;
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = module.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
        borderColor: isHovered ? module.glowColor.replace('0.4', '0.6') : 'rgba(255, 255, 255, 0.07)'
      }}
      className="relative flex flex-col justify-between p-8 rounded-2xl glass-panel border h-[340px] overflow-hidden cursor-pointer group"
    >
      {/* Dynamic Hover Radial Light Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 120px at ${glowPosition.x}% ${glowPosition.y}%, ${module.glowColor}, transparent 70%)`
        }}
      />

      {/* Cyber Corner Grid Styling */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 opacity-40 group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/5 opacity-40 group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-300" />

      {/* Card Header */}
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition duration-300">
            <Icon 
              className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6"
              style={{
                color: isHovered ? '#FFFFFF' : module.glowColor.replace('0.4', '1'),
                filter: isHovered ? `drop-shadow(0 0 8px ${module.glowColor})` : 'none'
              }}
            />
          </div>
          
          <span 
            className="text-[10px] font-orbitron font-semibold uppercase tracking-widest px-2 py-0.5 rounded border"
            style={{ 
              color: isHovered ? '#FFFFFF' : module.glowColor.replace('0.4', '1'),
              borderColor: isHovered ? module.glowColor : 'rgba(255, 255, 255, 0.1)',
              background: isHovered ? module.glowColor.replace('0.4', '0.1') : 'transparent'
            }}
          >
            {module.label}
          </span>
        </div>

        <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-primary transition duration-300">
          {module.title}
        </h3>
        
        <p className="font-inter text-muted text-sm leading-relaxed group-hover:text-white/80 transition duration-300">
          {module.desc}
        </p>
      </div>

      {/* Dynamic Glow Line Indicator at Bottom */}
      <div className="w-full h-[1px] bg-white/10 mt-6 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"
          style={{
            background: `linear-gradient(to right, transparent, ${module.glowColor.replace('0.4', '1')}, transparent)`
          }}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="technology" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          Neural Integration Core
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight"
        >
          TECHNOLOGY <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,47,255,0.2)]">MODULES</span>
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Staggered Grid Layout */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {techModules.map((module, index) => (
          <TiltCard key={index} module={module} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
