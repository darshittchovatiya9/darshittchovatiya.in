'use client';
 
import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
 
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
            
            <div id="toolkit">
              <Skills />
            </div>
            
            <Education />
 
            <div id="contact">
              <Contact />
            </div>
            
            <footer className="py-12 px-6 border-t border-white/10 text-center">
              <p className="text-white/20 text-sm font-mono">
                &copy; {new Date().getFullYear()} Darshitt Chovatiya. Built with Next.js & Framer Motion.
              </p>
            </footer>
          </div>
        </>
      )}
    </main>
  );
}
 
 