'use client';
 
import React from 'react';
import { motion, Variants } from 'motion/react';
import { Code2, Database, Layout, Server, Cpu, Globe } from 'lucide-react';
import { resumeData } from '../lib/data';
 
const iconMap: Record<string, any> = {
  "Front-End": Layout,
  "Back-End": Server,
  "Databases": Database,
  "Default": Cpu
};
 
const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
 
const skillVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.4
    }
  })
};
 
export default function Skills() {
  const categories = Object.entries(resumeData.technicalSkills);
 
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>
 
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Toolkit</h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-emerald-500 rounded-full" />
              <span className="text-xs font-mono text-white/20 uppercase tracking-[0.3em]">Stack Mastery</span>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-md text-sm md:text-right leading-relaxed"
          >
            A curated selection of technologies I use to build high-performance,
            scalable, and accessible digital experiences.
          </motion.p>
        </div>
 
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {categories.map(([category, skills], idx) => {
            const Icon = iconMap[category] || iconMap.Default;
            // Define grid spans for a bento feel
            const gridSpan = category === "Front-End" ? "md:col-span-4" : "md:col-span-2";
            
            return (
              <motion.div
                key={category}
                custom={idx}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className={`${gridSpan} relative group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                      <Icon className="w-6 h-6 text-emerald-500" />
                    </div>
                  </div>
 
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                    {category}
                  </h3>
 
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill}
                        custom={sIdx}
                        variants={skillVariants}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/60 hover:text-white hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all cursor-default flex items-center gap-2 group/skill"
                      >
                        <div className="w-1 h-1 rounded-full bg-emerald-500/40 group-hover/skill:bg-emerald-500 transition-colors" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
 
                {/* Decorative Background Icon */}
                <Icon className="absolute -bottom-8 -right-8 w-32 h-32 text-white/[0.02] -rotate-12 group-hover:scale-110 group-hover:text-emerald-500/[0.03] transition-all duration-700" />
              </motion.div>
            );
          })}
 
          {/* Extra Bento Cell for "Philosophy" or "Stats" to complete the grid */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-2 relative group overflow-hidden rounded-[2rem] bg-emerald-500 text-black p-8"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <Globe className="w-8 h-8 mb-6" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Always Evolving</h3>
                <p className="text-sm font-medium opacity-80 leading-relaxed">
                  Passionate about staying at the forefront of the JavaScript ecosystem.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-20">
              <div className="w-32 h-32 border-[16px] border-black rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}