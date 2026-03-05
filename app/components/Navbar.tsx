'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '@/app/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skill', href: '#skill' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-white"
          >
            Darshit<span className="text-emerald-500">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-white/10" />
            <div className="flex items-center gap-4">
              <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${resumeData.basics.email}`} className="text-white/40 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href={resumeData.basics.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/60 hover:text-emerald-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
