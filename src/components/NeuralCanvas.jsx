import React, { useEffect, useRef } from 'react';

const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 180, // Influence radius
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particles system parameters
    const particleCount = Math.min(70, Math.floor((canvas.width * canvas.height) / 25000));
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        // Speeds
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseColor = '#00F5FF'; // Primary cyan
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.pulseAngle = Math.random() * Math.PI;
      }

      update() {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Pull towards mouse
            this.x += (dx / distance) * force * 0.8;
            this.y += (dy / distance) * force * 0.8;
          }
        }

        // Pulse logic
        this.pulseAngle += this.pulseSpeed;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Calculate alpha based on pulse
        const alpha = 0.4 + Math.sin(this.pulseAngle) * 0.4;
        ctx.fillStyle = `rgba(0, 245, 255, ${alpha})`;
        
        // Shadow glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00F5FF';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw background grid lines
    const drawGrid = (offset) => {
      ctx.strokeStyle = 'rgba(123, 47, 255, 0.04)'; // Deep Purple grid lines
      ctx.lineWidth = 1;

      const gridSize = 80;
      
      // Vertical grid lines
      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal grid lines
      for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    let gridOffset = 0;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw drift grid
      gridOffset += 0.15;
      drawGrid(gridOffset);

      // 2. Update and draw connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            // Gradient connecting line
            const alpha = (140 - distance) / 140 * 0.25;
            
            // Generate glowing lines
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // 3. Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // 4. Draw mouse node connection indicator
      if (mouse.x !== null && mouse.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 0, 170, 0.8)'; // Accent pink for mouse center
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#FF00AA';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw mouse outer sensor ring
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 0, 170, 0.05)';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 bg-[#050816]"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default NeuralCanvas;
