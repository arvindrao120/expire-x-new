"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layers,
  Video,
  Smartphone,
  Palette,
  BarChart3,
  Target,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Arvind Yadav",
    role: "Technical Advisor",
    description:
      "IIT Kharagpur alumnus and current PhD scholar at IIT Madras, guiding our tech vision with deep expertise in research-driven development and scalable systems.",
    icon: Code,
    image: "/images/arvind.jpg",
  },
  {
    name: "Rohit Yadav",
    role: "Node.js Developer & Cloud Architect",
    description:
      "Experienced in building scalable backend systems with expertise in AWS infrastructure and DevOps.",
    icon: Database,
    image: "/images/arvind.jpg",
  },
  {
    name: "Arvind ",
    role: "Full Stack Developer",
    description:
      "Passionate MERN Stack developer and founder with a strong vision for building scalable tech solutions and empowering teams to innovate.",
    icon: Layers,
    image: "/images/arvind.jpg",
  },
  {
    name: "Ravinder",
    role: "Backend Developer & Video Editor",
    description:
      "Multitalented developer and editor experienced in Node.js, video scripting, and post-production.",
    icon: Video,
    image: "/images/arvind.jpg",
  },
  {
    name: "Himanshi",
    role: "Mobile App Developer",
    description:
      "Skilled Flutter developer crafting seamless, high-performance mobile experiences for both Android and iOS platforms.",
    icon: Smartphone,
    image: "/images/arvind.jpg",
  },
  {
    name: "Yashika Gupta",
    role: "UI/UX Designer",
    description:
      "Creative designer focused on crafting intuitive and beautiful user experiences.",
    icon: Palette,
    image: "/images/arvind.jpg",
  },
  {
    name: "Aman Kumar",
    role: "Marketing Head",
    description:
      "Digital marketing strategist who connects products with the right audience.",
    icon: BarChart3,
    image: "/images/arvind.jpg",
  },
  {
    name: "Hitesh",
    role: "Marketing Specialist",
    description:
      "Driven marketing expert skilled in branding, outreach, and customer engagement strategies.",
    icon: Target,
    image: "/images/arvind.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
  icon: React.ElementType;
  image: string;
};

const TeamCard = ({ member }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      variants={{cardVariants}}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative w-full max-w-sm mx-auto sm:h-[380px] h-auto"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />

      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 border border-red-900/30 rounded-2xl p-6 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 flex flex-col justify-between h-full">
        {/* Profile section */}
        <div className="relative z-10 flex flex-col items-center text-center mb-4">
          <div className="relative mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 rounded-full opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
              <div className="relative w-40 h-40 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-red-600/30 group-hover:border-red-500/60 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={100}
                  width={100}
                  className="object-cover rounded-full shadow-lg"
               
                />
              </div>
            </div>
          </div>

          <motion.h3
            className="text-xl font-bold text-white mb-1 group-hover:text-red-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {member.name}
          </motion.h3>

          <p className="text-red-400 font-medium mb-3 group-hover:text-red-300 transition-colors duration-300">
            {member.role}
          </p>
        </div>

        {/* Description */}
        <div className="relative z-10 flex-1 overflow-hidden">
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
            {member.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-600/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const RedTeamSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate deterministic positions for background elements
  const getBackgroundElements = () => {
    const elements = [];
    for (let i = 0; i < 20; i++) {
      // Simple deterministic "random" based on index
      const x1 = (i * 37) % 100;
      const y1 = (i * 73) % 100;
      const x2 = ((i + 10) * 41) % 100;
      const y2 = ((i + 10) * 79) % 100;
      const duration = 10 + (i * 23) % 20;
      
      elements.push({
        id: i,
        x: [x1, x2],
        y: [y1, y2],
        duration,
        left: (i * 17) % 100,
        top: (i * 43) % 100,
      });
    }
    return elements;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 py-20 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Animated background elements - Only render after mount */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {getBackgroundElements().map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-2 h-2 bg-red-500/20 rounded-full"
              animate={{
                x: element.x,
                y: element.y,
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: element.left + "%",
                top: element.top + "%",
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-red-950/50 border border-red-800/30 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">
              Our Dream Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Meet The </span>
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-500 bg-clip-text text-transparent">
              Minds
            </span>
            <span className="text-white"> Behind The Magic</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            The brilliant individuals who turn your ideas into reality with
            passion and expertise.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center max-w-8xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RedTeamSection;