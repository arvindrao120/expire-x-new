"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DynamicText from "@/components/kokonutui/dynamic-text";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#redGradient)"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.7, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}

        <defs>
          <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export interface BackgroundPathsProps {
  title?: string;
}

export function BackgroundPaths({
  title = `Transform Your Business with Expert Solutions`,
}: BackgroundPathsProps) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black">
      {/* Floating SVG Background */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto text-xs md:text-sm flex items-center justify-center gap-3 
                       border-2 py-4 px-4 md:font-semibold rounded-full border-red-300 
                       shadow-lg shadow-red-400/20 animate-pulse max-w-2xl"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-yellow-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
            </svg>
            India’s Fastest-Growing Performance Marketing Agency for Lead
            Generation Brands
          </motion.span>

          {/* Heading */}
          <h1 className="text-5xl  md:text-7xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                               bg-gradient-to-r from-red-100 to-red-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Intro Text */}
          <div className="text-xl font-medium text-gray-800 dark:text-gray-200">
            Transforming ideas into powerful digital experiences, combining
            marketing, technology, and design with specialized services in
          </div>
          <DynamicText />

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              className="rounded-[1.15rem] cursor-pointer px-8 py-6 text-lg font-semibold backdrop-blur-md 
                         bg-red-950/95 hover:bg-red-900/90 
                         text-red-100 transition-all duration-300 
                         border border-red-800/50 hover:shadow-md hover:shadow-red-700/60"
            >
              Discover Excellence →
            </Button>
            <Button
              variant="outline"
              className="rounded-[1.15rem] cursor-pointer px-8 py-6 text-lg font-semibold backdrop-blur-md 
                         bg-red-950/95 hover:bg-red-900/90 
                         text-red-100 transition-all duration-300 
                         border border-red-800/50 hover:shadow-md hover:shadow-red-700/60"
            >
              Join Now →
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
