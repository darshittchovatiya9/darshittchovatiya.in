'use client';
 
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { resumeData } from '@/app/lib/data';
import Image from 'next/image';
 
export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const projects = resumeData.projects || [];
 
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };
  
 
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
 
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };
 
  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Projects</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full" />
          </motion.div>
 
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all group"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>
        </div>
 
        <div className="relative h-[500px] md:h-[400px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
 
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl">
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full opacity-50" />
                  <div className="relative aspect-video rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden group">
                    {/* <Code2 className="w-20 h-20 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-xs font-mono text-emerald-400">Project Visualization</span>
                    </div> */}
                    
                    <Image
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                  </div>
                </div>
 
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
 
                  <div className="mt-auto flex items-center gap-6">
                    <a
                      href={projects[currentIndex].links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors group/link"
                    >
                      <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      Source Code
                    </a>
                    <a
                      href={projects[currentIndex].links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}