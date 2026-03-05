'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { resumeData } from '@/app/lib/data';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.institution}</h3>
                  <p className="text-emerald-500 font-medium mb-4">{edu.degree}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/40">
                    {edu.dates && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.dates}
                      </div>
                    )}
                    {edu.extra && (
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Score: {edu.extra}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
