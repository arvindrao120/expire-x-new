"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ use framer-motion (not motion/react)

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "Full-Stack Web Development", language: "English" },
  { text: "Performance Marketing & CPA Growth", language: "English" },
  { text: "Mobile App Development", language: "English" },
  { text: "Creative UI/UX Design", language: "English" },
  { text: "SEO & Lead Generation", language: "English" },
  { text: "Data-Driven Digital Strategy", language: "English" },
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); // ⏳ slower so animation can finish before switching

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 },
  };

  return (
    <section
      className="flex items-center justify-center gap-1"
      aria-label="Dynamic rotating greetings"
    >
      <div className="relative h-12 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait"> {/* ✅ ensures exit finishes before new enters */}
          <motion.div
            key={currentIndex}
            className="absolute flex items-center text-xl font-semibold text-gray-800 dark:text-gray-200"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {greetings[currentIndex].text}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DynamicText;
