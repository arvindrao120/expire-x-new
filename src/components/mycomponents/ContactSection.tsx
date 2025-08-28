"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  CheckCircle,
  Send,
  User,
  MessageCircle,
  Globe,
  Loader,
  AlertCircle,
  ChevronDown,
Briefcase
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const cardRef = useRef(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "13759b6a-6a22-45b7-8d74-017ce35715b7",
          ...formData,
          subject: "New Contact Form Submission",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          service: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "empirexmarketingsol@gmail.com",
      href: "mailto:empirexmarketingsol@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "+91 9509388090",
      href: "tel: +919509388090",
    },
  ];

  const whyChooseUs = [
    "Expert team with proven track record",
    "Customized solutions for your business",
    "24/7 support and maintenance",
    "Results-driven approach",
  ];

  const services = [
    "Web Development",
    "App Development",
    "AI Agents & Automation",
    "Video Editing",
    "Ad Shooting & Production",
    "Performance Marketing",
    "Business Websites",
    "Portfolio Websites",
    "Custom Web Applications",
    "Online Stores (E-commerce)",
    "Landing Page Design",
    "Website Hosting & Maintenance",
    "Cross-Platform Solutions",
    "Offline Functionality",
    "API Integration",
    "App Store Deployment",
    "Workflow Automation",
    "Chatbot / WhatsApp Integration",
    "CRM & Automation",
    "Data-Driven Insights",
    "Cinematic Editing",
    "Motion Graphics",
    "Color Grading",
    "Sound Design",
    "Creative Storyboarding",
    "Professional Filming",
    "Brand-Centric Messaging",
    "Post-Production Editing",
    "Google Ads",
    "Facebook / Instagram Ads",
    "SEO (Rank on Google)",
    "Social Media Marketing",
    "Email Marketing",
    "Conversion Optimization",
    "Influencer / Affiliate Marketing",
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "India",
    "Japan",
    "South Korea",
    "Singapore",
    "Brazil",
    "Mexico",
    "Argentina",
    "UAE",
    "Saudi Arabia",
    "South Africa",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Let&#39;s Start Your Project
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with us today for a
            free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-red-400">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-red-600/20 transition-all duration-300 group transform hover:translateZ-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-red-200 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {item.detail}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-red-400">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group transform hover:translateX-2 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-red-300 transition-colors duration-300 group-hover:scale-125"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            ref={cardRef}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We&#39;ll get back to you soon!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/15 focus:border-red-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/15 focus:border-red-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Mobile Number"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/15 focus:border-red-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Country Dropdown */}
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:bg-white/15 focus:border-red-400 focus:outline-none transition-all appearance-none cursor-pointer"
                    style={{
                      colorScheme: "dark",
                      borderRadius: "12px",
                    }}
                  >
                    <option
                      value=""
                      style={{
                        background: "#1f2937",
                        color: "#d1d5db",
                        borderRadius: "8px",
                      }}
                    >
                      -- Select Country --
                    </option>
                    {countries.map((country, i) => (
                      <option
                        key={i}
                        value={country}
                        style={{
                          background: "#1f2937",
                          color: "#ffffff",
                          borderRadius: "8px",
                          padding: "8px",
                        }}
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                 <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:bg-white/15 focus:border-red-400 focus:outline-none transition-all appearance-none cursor-pointer"
                    style={{
                      colorScheme: "dark",
                      borderRadius: "12px",
                    }}
                  >
                    <option
                      value=""
                      style={{
                        background: "#1f2937",
                        color: "#d1d5db",
                        borderRadius: "8px",
                      }}
                    >
                      -- Select a Service --
                    </option>
                    {services.map((service, i) => (
                      <option
                        key={i}
                        value={service}
                        style={{
                          background: "#1f2937",
                          color: "#ffffff",
                          borderRadius: "8px",
                          padding: "8px",
                        }}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Your Message..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 resize-none focus:bg-white/15 focus:border-red-400 focus:outline-none transition-all"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-600/20 border border-red-400/30 text-red-300 rounded-xl flex items-center">
                    <AlertCircle className="mr-3 flex-shrink-0" size={20} />
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin mr-2" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send
                          className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                          size={20}
                        />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
