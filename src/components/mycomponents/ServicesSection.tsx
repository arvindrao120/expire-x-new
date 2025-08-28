"use client";

import React from "react";
import { Code, BarChart3, Smartphone, Bot, Video, Camera } from "lucide-react";

interface ServiceFeature {
  name: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: ServiceFeature[];
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 7,
      title: "Performance Marketing",
      description:
        "Data-driven marketing strategies focused on measurable growth, optimized ROI, and scalable customer acquisition.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      features: [
        { name: "ROI Optimization" },
        { name: "Targeted Campaigns" },
        { name: "Analytics & Tracking" },
        { name: "Scalable Growth" },
      ],
    },

    {
      id: 2,
      title: "Web Development",
      description:
        "Custom web applications and websites built with modern technologies to optimize performance and user experience.",
      icon: <Code className="w-8 h-8 text-white" />,
      features: [
        { name: "Full-Stack Development" },
        { name: "Scalable Web Applications" },
        { name: "API Integration" },
        { name: "Modern UI/UX" },
      ],
    },
    {
      id: 3,
      title: "App Development",
      description:
        "Custom mobile and web applications built for seamless performance, engaging user experiences, and long-term growth.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      features: [
        { name: "Cross-Platform Solutions" },
        { name: "Offline Functionality" },
        { name: "App Store Deployment" },
        { name: "Performance Optimization" },
      ],
    },

    {
      id: 4,
      title: "AI Agents & Automation",
      description:
        "Intelligent automation solutions powered by AI agents to streamline workflows, reduce costs, and boost productivity.",
      icon: <Bot className="w-8 h-8 text-white" />,
      features: [
        { name: "Workflow Automation" },
        { name: "Intelligent Chatbots" },
        { name: "Data-Driven Insights" },
        { name: "Process Optimization" },
      ],
    },
    {
      id: 5,
      title: "Ad Shooting & Production",
      description:
        "High-quality ad production that captures attention, tells your brand story, and drives customer engagement.",
      icon: <Camera className="w-8 h-8 text-white" />,
      features: [
        { name: "Creative Storyboarding" },
        { name: "Professional Filming" },
        { name: "Brand-Centric Messaging" },
        { name: "Post-Production Editing" },
      ],
    },
    {
      id: 6,
      title: "Video Editing",
      description:
        "Creative video editing solutions that transform raw footage into engaging, high-quality content for brands and businesses.",
      icon: <Video className="w-8 h-8 text-white" />,
      features: [
        { name: "Cinematic Editing" },
        { name: "Motion Graphics" },
        { name: "Color Grading" },
        { name: "Sound Design" },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-red-600/40">
              🚀 What We Offer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-200 via-white to-red-200 bg-clip-text text-transparent">
            Our Services
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions that combine marketing excellence with
            technical innovation to drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-500 ease-out cursor-pointer hover:-translate-y-3 hover:bg-red-600/15 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/30"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-red-500/40 group-hover:shadow-red-500/60">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-200 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-gray-200 mb-6 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-400 group-hover:text-gray-200 group-hover:translate-x-2 transition-all duration-300"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="w-2 h-2 bg-red-500 group-hover:bg-red-300 rounded-full mr-3 transition-colors duration-300" />
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-[1px]">
                <div className="w-full h-full bg-gray-900/90 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
