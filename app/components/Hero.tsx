'use client';
 
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { resumeData } from '@/app/lib/data';
 
const HERO_DATA_POINTS = [
  { id: 0, top: '25%', left: '30%', duration: 7, xMove: 25, yMove: -15 },
  { id: 1, top: '65%', left: '20%', duration: 9, xMove: -20, yMove: 25 },
  { id: 2, top: '45%', left: '75%', duration: 6, xMove: 15, yMove: 15 },
  { id: 3, top: '80%', left: '60%', duration: 8, xMove: -25, yMove: -20 },
  { id: 4, top: '15%', left: '85%', duration: 10, xMove: 12, yMove: 28 },
];
 
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
 
  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);
 
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
 
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
 
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const cvUrl = "/Darshit Chovatiya CV.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Darshit_Chovatiya_CV.pdf';
    link.click();
  }
 
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Interactive Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
          style={{
            x: glowX,
            y: glowY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
 
        {/* Atmospheric Gradients */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[80%] h-[80%] bg-emerald-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full"
        />
        
        {/* Animated Technical Grid Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
 
        {/* Floating Data Points (Decorative) */}
        <div className="absolute inset-0">
          {HERO_DATA_POINTS.map((point) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
                x: [0, point.xMove, 0],
                y: [0, point.yMove, 0]
              }}
              transition={{
                duration: point.duration,
                repeat: Infinity,
                delay: point.id * 2
              }}
              className="absolute w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              style={{
                top: point.top,
                left: point.left,
              }}
            />
          ))}
        </div>
      </div>
 
      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-6">
            Available for opportunities
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            {resumeData.basics.name}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium text-white/60 mb-8">
            {resumeData.basics.title}
          </h2>
          
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mb-12 leading-relaxed">
            {resumeData.basics.summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToExperience}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 transition-colors hover:bg-emerald-500 hover:text-white"
            >
              View Experience
              <ArrowDown className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full flex items-center gap-2 transition-colors hover:bg-white/10"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
 
 