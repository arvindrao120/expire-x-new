"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Code,
  TrendingUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";

const AgencyFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Show scroll to top button when scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const marketingTeam = {
    title: "Marketing ",
    icon: <TrendingUp className="w-8 h-8" />,
    email: "empirexmarketingsol@gmail.com",
    phone: "+91 9509388090",
    services: [
      "Digital Marketing Strategy",
      "SEO & SEM Optimization",
      "Social Media Management",
      "Brand Development",
      "Performance Analytics",
      "Content Marketing",
    ],
    gradient:
      "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10",
  };

  const developmentTeam = {
    title: "Development ",
    icon: <Code className="w-8 h-8" />,
    email: "arvindrao120@gmail.com",
    phone: "+917728955910",
    services: [
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "API Integration",
      "Database Design",
      " Deployment",
    ],
    gradient:
      "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10",
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="group cursor-pointer mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={100}
                  priority // for above-the-fold images
                />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Transforming businesses through innovative marketing strategies
              and cutting-edge development solutions. Your success is our
              mission.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-red-400">150+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-red-400">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* Time */}
            <div className="text-center p-3 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-lg border border-red-500/30">
              <p className="text-red-300 text-sm">Current Time (PST)</p>
              <p className="text-white font-bold text-lg">
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
              </p>
            </div>
          </div>

          {/* Team Divisions */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Marketing Division */}
              <div
                className={`relative group bg-gradient-to-br ${developmentTeam.gradient} p-8 rounded-3xl shadow-2xl`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      {marketingTeam.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#DD000A]">
                        {marketingTeam.title}
                      </h3>
                      <p className="text-red-300 text-sm">
                        Creative & Strategic
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4 mb-6">
                    <a
                      href={`mailto:${marketingTeam.email}`}
                      className="flex items-center gap-3 text-white/90 hover:text-white"
                    >
                      <Mail className="w-5 h-5 text-red-200" />
                      <span className="font-medium">{marketingTeam.email}</span>
                    </a>
                    <a
                      href={`tel:${marketingTeam.phone}`}
                      className="flex items-center gap-3 text-white/90 hover:text-white"
                    >
                      <Phone className="w-5 h-5 text-red-200" />
                      <span className="font-medium">{marketingTeam.phone}</span>
                    </a>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Our Expertise
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {marketingTeam.services.map((service, index) => (
                        <div
                          key={index}
                          className="text-sm text-red-100 hover:text-white flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                        >
                          <div className="w-1.5 h-1.5 bg-red-200 rounded-full"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Division */}
              <div
                className={`relative group bg-gradient-to-br ${developmentTeam.gradient} p-8 rounded-3xl shadow-2xl`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      {developmentTeam.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#DD000A]">
                        {developmentTeam.title}
                      </h3>
                      <p className="text-red-300 text-sm">
                        Technical & Innovative
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-4 mb-6">
                    <a
                      href={`mailto:${developmentTeam.email}`}
                      className="flex items-center gap-3 text-white/90 hover:text-white"
                    >
                      <Mail className="w-5 h-5 text-gray-300" />
                      <span className="font-medium">
                        {developmentTeam.email}
                      </span>
                    </a>
                    <a
                      href={`tel:${developmentTeam.phone}`}
                      className="flex items-center gap-3 text-white/90 hover:text-white"
                    >
                      <Phone className="w-5 h-5 text-gray-300" />
                      <span className="font-medium">
                        {developmentTeam.phone}
                      </span>
                    </a>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Our Expertise
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {developmentTeam.services.map((service, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-200 hover:text-white flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Footer Social */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 p-8 bg-white/5 rounded-2xl border border-white/10">
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Quick Links
              <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-red-400 transition-all flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Connect With Us
              <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
            </h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for the latest updates, insights, and behind-the-scenes
              content from our agency.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <span>
              Arvind Yadav & the Empire-X Team © {new Date().getFullYear()}. All
              rights reserved.
            </span>
          </div>
          <div className="text-sm text-gray-400">
            Version 2.1.0 • Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default AgencyFooter;
