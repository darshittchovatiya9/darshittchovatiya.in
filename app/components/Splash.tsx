'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          DC<span className="text-emerald-500">.</span>
        </div>
      </motion.div>
      
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="mt-4 text-xs uppercase tracking-[0.3em] text-white font-mono"
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
}
