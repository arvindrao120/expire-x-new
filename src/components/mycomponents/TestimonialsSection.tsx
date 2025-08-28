'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  testimonial: string;
  initials: string;
  color: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Kim",
      position: "CEO",
      company: "TechStart Solutions",
      rating: 5,
      testimonial:
        "AdavTech Agency transformed our online presence completely. Their marketing strategies increased our leads by 300% in just 3 months. Highly recommended!",
      initials: "SK",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      name: "Michael Johnson",
      position: "Founder",
      company: "Fashion Forward",
      rating: 4,
      testimonial:
        "The development team built us a fantastic e-commerce platform. The attention to detail and technical expertise is outstanding. Our sales have doubled!",
      initials: "MJ",
      color: "from-red-600 to-orange-500",
    },
    {
      id: 3,
      name: "Anita Patel",
      position: "Director",
      company: "Growth Dynamics",
      rating: 5,
      testimonial:
        "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget. Looking forward to future projects!",
      initials: "AP",
      color: "from-red-700 to-red-500",
    },
  ];

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        } transition-colors duration-300`}
      />
    ));
  };

  return (
    <section className=" bg-gradient-to-br from-black via-gray-950 to-black text-white py-16 px-4 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-32 w-96 h-96 bg-gradient-to-br from-red-700/40 to-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-[30rem] h-[30rem] bg-gradient-to-tr from-red-600/30 to-orange-500/20 rounded-full blur-[140px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 -left-20 w-[28rem] h-[28rem] bg-gradient-to-r from-red-500/20 to-pink-600/20 rounded-full blur-[100px] animate-[pulse_7s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real feedback from businesses we&#39;ve helped transform and grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:bg-white/10 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-2 hover:scale-105 ${
                index === currentIndex ? "ring-2 ring-red-500/60" : ""
              }`}
            >
              <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                &#34;{testimonial.testimonial.length > 120
                  ? testimonial.testimonial.substring(0, 120) + "..."
                  : testimonial.testimonial}&#34;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs">{testimonial.position}</p>
                  <p className="text-red-400 text-xs font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
