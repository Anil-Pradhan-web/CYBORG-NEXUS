import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Accessibility, Terminal, ShieldAlert, Radio } from 'lucide-react';

const techModules = [
  {
    title: "Motor Assistive Bridge",
    desc: "Restores digital autonomy for patients with motor paralysis. Decodes neural intention into keyboard, mouse, and external hardware triggers.",
    icon: Accessibility,
    glowColor: "rgba(0, 245, 255, 0.4)",
    borderColor: "rgba(0, 245, 255, 0.2)",
    label: "Assistive Tech"
  },
  {
    title: "Advanced Neural Decoding",
    desc: "Adapts deep learning algorithms to translate neural electrical impulses into high-accuracy actions with less than 10 minutes of calibration.",
    icon: Terminal,
    glowColor: "rgba(123, 47, 255, 0.4)",
    borderColor: "rgba(123, 47, 255, 0.2)",
    label: "Cortex NLP"
  },
  {
    title: "Data Sovereignty & Privacy",
    desc: "Secures synaptic outputs via localized on-device encryption. Raw neural signals are processed inside personal hardware and never stored on cloud servers.",
    icon: ShieldAlert,
    glowColor: "rgba(255, 0, 170, 0.4)",
    borderColor: "rgba(255, 0, 170, 0.2)",
    label: "Privacy First"
  },
  {
    title: "Wireless Bio-Telemetry",
    desc: "Utilizes sub-dermal low-energy Bluetooth telemetry and wireless induction recharging, providing 24 hours of autonomous device communication.",
    icon: Radio,
    glowColor: "rgba(0, 245, 255, 0.4)",
    borderColor: "rgba(0, 245, 255, 0.2)",
    label: "Safe Power"
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
    
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    const rotX = (-y / (height / 2)) * 6;
    const rotY = (x / (width / 2)) * 6;

    setRotateX(rotX);
    setRotateY(rotY);

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.4s ease-out',
        borderColor: isHovered ? module.glowColor.replace('0.4', '0.6') : 'rgba(255, 255, 255, 0.07)'
      }}
      className="relative flex flex-col justify-between p-6 rounded-2xl glass-panel border min-h-[320px] overflow-hidden cursor-pointer group w-full"
    >
      {/* Dynamic Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 120px at ${glowPosition.x}% ${glowPosition.y}%, ${module.glowColor}, transparent 70%)`
        }}
      />

      {/* Grid Corner Decor */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/5 opacity-30 group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/5 opacity-30 group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-300" />

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition duration-300">
            <Icon 
              className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6"
              style={{
                color: isHovered ? '#FFFFFF' : module.glowColor.replace('0.4', '1'),
                filter: isHovered ? `drop-shadow(0 0 6px ${module.glowColor})` : 'none'
              }}
            />
          </div>
          
          <span 
            className="text-[9px] font-orbitron font-semibold uppercase tracking-widest px-2 py-0.5 rounded border"
            style={{ 
              color: isHovered ? '#FFFFFF' : module.glowColor.replace('0.4', '1'),
              borderColor: isHovered ? module.glowColor : 'rgba(255, 255, 255, 0.1)',
              background: isHovered ? module.glowColor.replace('0.4', '0.05') : 'transparent'
            }}
          >
            {module.label}
          </span>
        </div>

        <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-primary transition duration-300">
          {module.title}
        </h3>
        
        <p className="font-inter text-muted text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition duration-300">
          {module.desc}
        </p>
      </div>

      {/* bottom indicator line */}
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
    <section id="technology" className="relative py-24 md:py-32 w-full max-w-7xl mx-auto px-4 bg-[#050816]">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-xs tracking-[0.3em] text-primary mb-3 uppercase"
        >
          CORE APPLICATIONS
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          NEURAL INTERFACE MODULES
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Features Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full"
      >
        {techModules.map((module, index) => (
          <TiltCard key={index} module={module} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
