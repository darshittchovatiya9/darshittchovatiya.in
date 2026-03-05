'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Target, Award } from 'lucide-react';
import { resumeData } from '@/app/lib/data';

export default function Achievements() {
  // Extracting key achievements from resume bullets
  const achievements = [
    {
      title: "Production Ready Apps",
      value: "3",
      context: "Developed and deployed full-stack MERN applications",
      icon: Trophy,
      color: "from-yellow-500/20 to-transparent"
    },
    {
      title: "Industry Experience",
      value: "2+",
      context: "Years of professional software development",
      icon: Star,
      color: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Tech Stack",
      value: "MERN",
      context: "Expertise in MongoDB, Express, React, Node",
      icon: Target,
      color: "from-blue-500/20 to-transparent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Key Impact</h2>
          <p className="text-white/40 max-w-xl mx-auto">Measurable results and key milestones from my professional journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.color} border border-white/10 overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <item.icon className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tighter">{item.value}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.context}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-mono text-white/60">Associate of Engineering</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-mono text-white/60">Web/Multimedia Management</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-mono text-white/60">MERN Stack Expert</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
