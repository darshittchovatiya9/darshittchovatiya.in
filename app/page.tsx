'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Experience from '@/app/components/Experience';
import Achievements from '@/app/components/Achievements';
import Skills from '@/app/components/Skills';
import Education from '@/app/components/Education';
import AnimatedBackground from '@/app/components/AnimatedBackground';
import Splash from '@/app/components/Splash';
import Projects from '@/app/components/Projects';

export default function PortfolioPage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="relative bg-black text-white selection:bg-emerald-500 selection:text-black">
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <AnimatedBackground />
          <Navbar />
          
          <div className="relative z-10">
            <Hero />
            
            <div id="impact">
              <Achievements />
            </div>

            <div id="projects">
               <Projects /> 
            </div>
            
            <Experience />
            
            <div id="skill">
              <Skills />
            </div>
            
            <Education />
            
            <footer className="py-12 px-6 border-t border-white/10 text-center">
              <p className="text-white/20 text-sm font-mono">
                &copy; {new Date().getFullYear()} Darshit Chovatiya. Built with Next.js & Framer Motion.
              </p>
            </footer>
          </div>
        </>
      )}
    </main>
  );
}
