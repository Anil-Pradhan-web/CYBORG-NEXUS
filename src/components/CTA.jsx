import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Terminal, AlertTriangle, X, CheckCircle, ChevronRight } from 'lucide-react';

const CTA = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({ name: '', hemisphere: 'analytical', overclock: '10' });
  const [stage, setStage] = useState('input'); // input -> calibrating -> success
  const [loadingText, setLoadingText] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Calibration loading simulation texts
  const calibrationSteps = [
    "Establishing peer-to-peer quantum connection...",
    "Scanning user cerebral hemisphere density...",
    "Injecting temporary sensory telemetry meshes...",
    "Calibrating sub-cortex processor frequencies...",
    "Encrypting memory buffer blocks (AES-Neural)...",
    "Finalizing bio-mechanical node synchronization..."
  ];

  const handleOpen = () => {
    setStage('input');
    setLoadingProgress(0);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setStage('calibrating');
    let stepIdx = 0;
    setLoadingText(calibrationSteps[0]);

    // Progress bar and loading steps simulation
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + 1;
        
        // Update steps based on progress percent
        const textIdx = Math.floor((next / 100) * calibrationSteps.length);
        if (textIdx !== stepIdx && textIdx < calibrationSteps.length) {
          stepIdx = textIdx;
          setLoadingText(calibrationSteps[textIdx]);
        }

        if (next >= 100) {
          clearInterval(interval);
          setStage('success');
          return 100;
        }
        return next;
      });
    }, 45);
  };

  return (
    <section className="relative py-24 md:py-36 w-full overflow-hidden">
      {/* Visual Background Pulse Grid */}
      <div className="absolute inset-0 bg-[#050816] -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main CTA Section */}
      <div className="w-full max-w-5xl mx-auto px-4 text-center z-10 relative">
        <div className="glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden border border-white/5">
          {/* Ambient light pulse inside card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-[80px] animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-[80px] animate-pulse" />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight leading-none"
          >
            THE FUTURE IS NOT ARTIFICIAL.
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,245,255,0.2)]">THE FUTURE IS INTEGRATED.</span>
          </motion.h2>

          {/* Subheading Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Step beyond biological constraints. Sync your consciousness into the global mesh 
            and unlock infinite cognitive processing.
          </motion.p>

          {/* Become a Cyborg Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block"
          >
            {/* Pulsing ring outer glow */}
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-accent opacity-75 blur-xl group-hover:opacity-100 animate-pulse duration-1000"></span>
            
            <button
              onClick={handleOpen}
              className="relative px-10 py-5 rounded-xl font-orbitron font-black text-sm tracking-[0.2em] bg-gradient-to-r from-primary via-secondary to-accent text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_40px_rgba(0,245,255,0.6)] cursor-pointer"
            >
              BECOME A CYBORG
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Details */}
      <footer className="w-full max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-muted font-inter text-xs relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="font-orbitron font-bold text-sm tracking-widest text-white/50">
            CYBORG NEXUS
          </div>
          <div className="flex items-center gap-6 font-orbitron tracking-wider text-[10px]">
            <a href="#evolution" className="hover:text-primary transition-colors">Evolution</a>
            <a href="#technology" className="hover:text-primary transition-colors">Modules</a>
            <a href="#stats" className="hover:text-primary transition-colors">Performance</a>
            <a href="#architecture" className="hover:text-primary transition-colors">Topology</a>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-white/30 leading-relaxed mb-4">
          WARNING: Neural integration is an irreversible process. Cybernetic core augmentation is subject to 
          local compliance laws. Side effects may include synthetic sensory overload, database dependency, and memory buffer bleed.
        </p>
        <p>&copy; 2085 Cyborg Nexus Inc. Beyond Human, Beyond Machine.</p>
      </footer>

      {/* Futuristic Calibration Terminal Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            
            {/* Backdrop click close */}
            <div className="absolute inset-0" onClick={handleClose} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
              className="relative w-full max-w-lg rounded-2xl border border-primary/30 bg-[#070b1e] p-6 md:p-8 overflow-hidden z-10 shadow-[0_0_50px_rgba(0,245,255,0.15)]"
            >
              {/* Terminal scanline overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-40" />

              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 text-muted hover:text-white transition duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Stage 1: Registration Input Form */}
              {stage === 'input' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-primary/20 pb-3">
                    <Terminal className="w-5 h-5 text-primary" />
                    <h3 className="font-orbitron font-extrabold text-lg text-white tracking-widest uppercase">
                      Synaptic Calibration
                    </h3>
                  </div>

                  <p className="font-inter text-xs text-muted leading-relaxed">
                    Input your neural identifiers below to analyze compatibility and calibrate your quantum receiver frequencies.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-orbitron text-[10px] tracking-wider text-muted uppercase mb-2">
                        Citizen Name / ID
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Neo Vance-08"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white font-inter text-sm focus:border-primary focus:outline-none transition duration-200"
                      />
                    </div>

                    <div>
                      <label className="block font-orbitron text-[10px] tracking-wider text-muted uppercase mb-2">
                        Dominant Brain Hemisphere
                      </label>
                      <select 
                        value={formData.hemisphere}
                        onChange={(e) => setFormData({...formData, hemisphere: e.target.value})}
                        className="w-full bg-[#050816] border border-white/10 rounded-lg p-3 text-white font-inter text-sm focus:border-primary focus:outline-none transition duration-200"
                      >
                        <option value="analytical">Analytical (Logical Swarm Routing)</option>
                        <option value="creative">Creative (Sensory Synthesis Engine)</option>
                        <option value="balanced">Symmetric (Dual Core Synchronicity)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-orbitron text-[10px] tracking-wider text-muted uppercase mb-2">
                        Cognitive Overclock Ratio
                      </label>
                      <div className="flex items-center gap-4">
                        <input 
                          type="range" 
                          min="1" 
                          max="25" 
                          value={formData.overclock}
                          onChange={(e) => setFormData({...formData, overclock: e.target.value})}
                          className="flex-1 accent-primary h-1 bg-[#050816] rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="font-orbitron font-black text-sm text-primary border border-primary/20 px-3 py-1 rounded bg-primary/5 min-w-[65px] text-center">
                          {formData.overclock}00%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-inter text-[#FF00AA]/80 bg-[#FF00AA]/5 border border-[#FF00AA]/20 p-3 rounded-lg">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Confirming sync triggers automatic synapse binding. Revocation is unavailable.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-orbitron font-bold text-xs tracking-widest bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_0_20px_rgba(0,245,255,0.15)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    CALIBRATE RECEIVERS
                  </button>
                </form>
              )}

              {/* Stage 2: Simulating Calibration */}
              {stage === 'calibrating' && (
                <div className="py-8 text-center space-y-8">
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div className="absolute -inset-4 rounded-full border border-primary/30 animate-ping opacity-40" />
                      <div className="relative p-6 rounded-full border border-primary/25 bg-[#050816]">
                        <Cpu className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-orbitron font-extrabold text-sm tracking-widest text-white uppercase animate-pulse">
                      CALIBRATING Telemetry...
                    </h4>
                    <p className="font-inter text-xs text-primary/75 h-8 flex items-center justify-center px-4 max-w-sm mx-auto">
                      {loadingText}
                    </p>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="max-w-xs mx-auto space-y-2">
                    <div className="h-1.5 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-100 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-orbitron text-muted tracking-widest">
                      <span>SYNC</span>
                      <span>{loadingProgress}%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 3: Success Screen */}
              {stage === 'success' && (
                <div className="py-8 text-center space-y-8">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-full bg-primary/10 blur" />
                      <div className="relative p-5 rounded-full border border-primary/40 bg-[#050816]">
                        <CheckCircle className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-orbitron font-black text-2xl text-white tracking-widest uppercase">
                      SYNC SUCCESSFUL
                    </h3>
                    <p className="font-inter text-xs text-muted leading-relaxed max-w-xs mx-auto">
                      Welcome, <span className="text-white font-bold">{formData.name}</span>. Your {formData.hemisphere} hemisphere is connected. Neural buffer channels are open.
                    </p>
                  </div>

                  {/* System Credentials Box */}
                  <div className="bg-[#050816] border border-white/5 p-4 rounded-xl max-w-xs mx-auto text-left font-mono text-[10px] text-primary/75 space-y-1 relative">
                    <div className="absolute top-2 right-2 text-white/10 uppercase font-orbitron text-[8px] tracking-widest">SYSTEM</div>
                    <div>CYBORG_ID: NEXUS-{Math.floor(1000 + Math.random() * 9000)}</div>
                    <div>COGNITION: +{formData.overclock}00%</div>
                    <div>SWARM_CORE: #85-DECEN</div>
                    <div>STATUS: OPERATIONAL</div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs tracking-widest border border-primary/30 hover:border-primary text-white hover:bg-primary/5 transition duration-200 cursor-pointer"
                  >
                    DISMISS TERMINAL
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTA;
