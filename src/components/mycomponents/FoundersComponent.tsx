"use client";

import Image from "next/image";

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  TrendingUp,
  Code,
  Eye,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

type Founder = {
  name: string;
  role: string;
  description: string;
  skills: string[];
  image?: string;
};

const founders: Founder[] = [
  {
    name: "Himanshu Yadav",
    role: "Founder & Marketing Expert",
    description:
      "A creative strategist and results-driven marketer who specializes in building high-converting ad campaigns and funnel systems. Himanshu leads the performance vision behind every EmpireX success story.",
    skills: ["Digital Marketing", "Strategy", "Growth", "Analytics"],
   image: "/images/arvind.jpg",
  },
  {
    name: "Arvind Yadav",
    role: "Co-Founder & Full Stack Developer",
    description:
      "Full Stack Developer skilled in MERN stack, creating scalable web applications with clean code, responsive design, and secure APIs. Passionate about problem-solving, innovation, and delivering impactful user experiences.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/arvind.jpg",
  },
];

type FounderCardProps = {
  founder: Founder;
  index: number;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  primaryIcon: React.ElementType;
  portfolioUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
  isVisible: boolean;
  mouseX: number;
  mouseY: number;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
};

const FounderCard: React.FC<FounderCardProps> = ({
  founder,
  index,
  gradientFrom,
  gradientTo,
  accentColor,
  primaryIcon: PrimaryIcon,
  portfolioUrl,
  linkedinUrl,
  githubUrl,
  email,
  isVisible,
  mouseX,
  mouseY,
  onMouseMove,
  onMouseLeave,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate deterministic positions based on founder index
  const getParticlePositions = () => {
    const positions = [];
    const seed = index * 1000;
    for (let i = 0; i < 8; i++) {
      // Simple deterministic "random" based on index and i
      const x = ((seed + i * 37) % 100);
      const y = ((seed + i * 73) % 100);
      const delay = ((seed + i * 17) % 3000) / 1000;
      const duration = 2 + ((seed + i * 23) % 3000) / 1000;
      
      positions.push({ x, y, delay, duration });
    }
    return positions;
  };

  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-700 ease-out
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      hover:scale-105 hover:-translate-y-2`}
      style={{
        transitionDelay: `${index * 200}ms`,
        transform: `perspective(1000px) rotateX(${mouseY * 0.1}deg) rotateY(${
          mouseX * 0.1
        }deg)`,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Card Background with Dark Glassmorphism */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-red-500/20 overflow-hidden">
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10 
            transition-all duration-500 group-hover:opacity-20`}
        />

        {/* Red Glow Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-900/5 
          opacity-50 group-hover:opacity-70 transition-all duration-500"
        />

        {/* Floating Particles - Only render after mount */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {getParticlePositions().map((particle, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-red-500 rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
                }}
              />
            ))}
          </div>
        )}

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-500/20 to-transparent rounded-tr-full" />

        {/* Profile Image Container */}
        <div className="relative mx-auto w-32 h-32 mb-6 group/image">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full 
            animate-spin-slow opacity-30 group-hover/image:opacity-50 transition-all duration-500`}
          />

          {/* Red Ring Animation */}
          <div className="absolute inset-0 border-2 border-red-500/50 rounded-full animate-pulse" />

          <div
            className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full 
            flex items-center justify-center overflow-hidden transform transition-all duration-500 
            group-hover:scale-110 shadow-2xl border border-red-500/30"
          >
            {founder.image ? (
              <Image
                src={founder.image}
                className="w-full h-full object-cover rounded-full"
                alt="Logo"
                height={100}
                width={100}
                priority // for above-the-fold images
              />
            ) : (
              <User size={52} className="text-red-400" />
            )}

            {/* Icon Overlay */}
            <div
              className={`absolute top-2 right-2 w-8 h-8 ${accentColor} rounded-full 
              flex items-center justify-center shadow-lg transform transition-all duration-300
              group-hover:scale-110 group-hover:rotate-12 border border-red-400/50`}
            >
              <PrimaryIcon size={14} className="text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {founder.name}
          </h3>

          <p className="text-sm font-semibold text-red-400 mb-4 tracking-wide uppercase drop-shadow-lg">
            {founder.role}
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
            {founder.description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {founder.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-red-900/50 text-red-300 border border-red-500/30
                  rounded-full transition-transform hover:scale-110 cursor-pointer hover:bg-red-800/60
                  hover:text-red-200 hover:border-red-400/50 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3">
            {/* Portfolio Button */}
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/btn flex items-center gap-2 px-4 py-2 ${accentColor} text-white 
                rounded-xl font-medium text-sm shadow-2xl hover:shadow-red-500/25 transform transition-all 
                duration-300 hover:scale-105 hover:-translate-y-1 border border-red-400/50 
                hover:border-red-300 backdrop-blur-sm`}
            >
              <Eye size={16} />
              <span>Portfolio</span>
              <ExternalLink
                size={12}
                className="transform group-hover/btn:translate-x-1 transition-transform"
              />
            </a>

            {/* Social Links */}
            <div className="flex gap-2">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/80 hover:bg-red-900/60 border border-gray-700/50 
                    hover:border-red-500/50 rounded-xl flex items-center justify-center transform 
                    transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <Linkedin
                    size={16}
                    className="text-red-400 hover:text-red-300"
                  />
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/80 hover:bg-red-900/60 border border-gray-700/50 
                    hover:border-red-500/50 rounded-xl flex items-center justify-center transform 
                    transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <Github
                    size={16}
                    className="text-red-400 hover:text-red-300"
                  />
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="w-10 h-10 bg-gray-800/80 hover:bg-red-900/60 border border-gray-700/50 
                    hover:border-red-500/50 rounded-xl flex items-center justify-center transform 
                    transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <Mail size={16} className="text-red-400 hover:text-red-300" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoundersComponent: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-red-900/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-600/15 to-red-800/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-900/50 to-gray-800/50 px-4 py-2 rounded-full text-sm font-medium text-red-300 mb-6 border border-red-500/30 backdrop-blur-sm">
            <User size={16} className="text-red-400" />
            Leadership Team
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-2xl">
            Meet Our Founders
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Two industry experts who combined their passion and expertise to
            create exceptional digital solutions that transform businesses in
            the digital age.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <FounderCard
            founder={founders[0]}
            index={0}
            gradientFrom="from-red-500"
            gradientTo="to-red-700"
            accentColor="bg-gradient-to-r from-red-600 to-red-700"
            primaryIcon={TrendingUp}
            portfolioUrl="https://himanshu-portfolio.com"
            linkedinUrl="https://linkedin.com/in/himanshu-yadav"
            githubUrl="https://github.com/himanshu-yadav"
            email="himanshu@company.com"
            isVisible={isVisible}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />

          <FounderCard
            founder={founders[1]}
            index={1}
            gradientFrom="from-red-500"
            gradientTo="to-red-800"
            accentColor="bg-gradient-to-r from-red-600 to-red-700"
            primaryIcon={Code}
            portfolioUrl="https://arvind-portfolio.com"
            linkedinUrl="https://linkedin.com/in/arvind-yadav"
            githubUrl="https://github.com/arvind-yadav"
            email="arvind@company.com"
            isVisible={isVisible}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400 mb-6">Ready to work with our team?</p>
          <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg cursor-pointer shadow-2xl hover:shadow-red-500/25 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-red-500/50 hover:border-red-400 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              Get In Touch
              <ExternalLink
                size={20}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FoundersComponent;