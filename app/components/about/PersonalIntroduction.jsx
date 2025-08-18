"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LuGlobe,  } from "react-icons/lu";
import HeroImage from "../../resources/images/hero.jpg";

const translations = [
  { language: "English", message: "Hey, I'm Darshit" },
  { language: "Hindi", message: "नमस्ते, मैं दर्शित हूँ" },
  { language: "Gujarati", message: "હાય, હું દર્શિત છું" },
  { language: "Spanish", message: "Hola, soy Darshit" },
  { language: "French", message: "Salut, je suis Darshit" },
  { language: "German", message: "Hallo, ich bin Darshit" },
  { language: "Japanese", message: "こんにちは、ダルシットです" },
  { language: "Chinese", message: "嗨，我是 Darshit" },
  { language: "Arabic", message: "مرحبا، أنا دارشيت" },
  { language: "Italian", message: "Ciao, sono Darshit" },
  { language: "Russian", message: "Привет, я Даршит" },
];

const PersonalIntroduction = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % translations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 md:mt-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src={HeroImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col p-6 sm:p-8">
          <motion.div
            className="mt-[175px] pt-8 sm:pt-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 text-white">
              <h2 className="font-medium uppercase tracking-wider flex items-center text-sm sm:text-base">
                <LuGlobe className="mr-2" size={18} />
                About me
              </h2>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={translations[index].language}
                  className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="block text-sm sm:text-base text-gray-300 mb-1 uppercase">
                    {translations[index].language}
                  </span>
                  {translations[index].message}
                  <span className="animate-wave inline-block ml-2">👋</span>
                </motion.h1>
              </AnimatePresence>
              <motion.p
                className="mt-4 sm:mt-6 text-base sm:text-lg font-light leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Passionate Frontend Developer from Surat, pushing the boundaries
                of web technology to create immersive digital experiences.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalIntroduction;
