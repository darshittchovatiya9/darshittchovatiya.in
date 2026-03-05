'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { resumeData } from '@/app/lib/data';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                  expandedIndex === index 
                    ? 'bg-white/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="p-2 rounded-full bg-white/5 text-white/40">
                      {expandedIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-white/40 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 mt-4">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-white/60 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      
                      {exp.metrics && (
                        <div className="flex flex-wrap gap-2 mt-6">
                          {exp.metrics.map((metric, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-emerald-500" />
                <h3 className="text-xl font-bold text-white">Impact Highlights</h3>
              </div>
              <div className="space-y-4">
                {resumeData.experience[0].bullets.slice(0, 2).map((bullet, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-white/60 italic">
                    &quot;{bullet}&quot;
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">What I Bring</h3>
              <div className="space-y-4">
                {resumeData.whatIBring.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
