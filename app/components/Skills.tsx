'use client';

import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '@/app/lib/data';

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(resumeData.technicalSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/70 hover:text-white hover:border-emerald-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
