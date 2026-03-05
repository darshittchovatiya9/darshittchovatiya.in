'use client';
 
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { resumeData } from '../lib/data';
 
const CONTACT_NODES = [
  { id: 0, top: '25%', left: '30%', duration: 7, xMove: 40, yMove: -30 },
  { id: 1, top: '65%', left: '20%', duration: 9, xMove: -50, yMove: 40 },
  { id: 2, top: '45%', left: '75%', duration: 6, xMove: 30, yMove: 30 },
  { id: 3, top: '80%', left: '60%', duration: 8, xMove: -40, yMove: -35 },
  { id: 4, top: '15%', left: '85%', duration: 10, xMove: 25, yMove: 45 },
  { id: 5, top: '35%', left: '15%', duration: 7.5, xMove: 35, yMove: 25 },
  { id: 6, top: '75%', left: '80%', duration: 8.5, xMove: -30, yMove: -40 },
  { id: 7, top: '20%', left: '50%', duration: 6.5, xMove: 20, yMove: -20 },
];
 
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Connectors Animation */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0 100 Q 250 50 500 100 T 1000 100"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 200 Q 300 150 600 200 T 1200 200"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
 
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Let&apos;s build <br />
              <span className="text-emerald-500 italic">something</span> great.
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-md leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
 
            <div className="space-y-6">
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="group flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/20 uppercase tracking-widest group-hover:text-white/60">Email Me</p>
                  <p className="text-lg font-medium text-white">{resumeData.basics.email}</p>
                </div>
                <Send className="w-5 h-5 ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
 
              <div className="flex flex-col gap-4">
                {resumeData.basics.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    {link.label === 'LinkedIn' ? (
                      <Linkedin className="w-5 h-5 text-emerald-500" />
                    ) : link.label === 'GitHub' ? (
                      <Github className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-emerald-500" />
                    )}
                    <span className="text-sm font-medium text-white/60 group-hover:text-white">{link.label}</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden group">
              {/* Animated Floating Nodes */}
              {CONTACT_NODES.map((node) => (
                <motion.div
                  key={node.id}
                  className="absolute w-2 h-2 bg-emerald-500 rounded-full"
                  animate={{
                    x: [0, node.xMove, 0],
                    y: [0, node.yMove, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: node.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: node.left,
                    top: node.top,
                  }}
                />
              ))}
              
              <div className="text-center z-10 p-12">
                <div className="w-24 h-24 rounded-full bg-emerald-500 mx-auto mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)]">
                  <Send className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to start?</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Click the email button or reach out on LinkedIn. I usually respond within 24 hours.
                </p>
              </div>
 
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-emerald-500/10 rounded-full scale-75 animate-[ping_10s_linear_infinite]" />
              <div className="absolute inset-0 border border-emerald-500/5 rounded-full scale-110 animate-[ping_15s_linear_infinite]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 
 