import React from "react";
import {
  FaFlask,
  FaChalkboardTeacher,
  FaBalanceScale,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const PILLARS = [
  {
    icon: FaFlask,
    title: "Research & Innovation",
    copy: "We conduct fundamental and applied research addressing emerging challenges across diverse disciplines.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Capacity Building",
    copy: "We strengthen the skills of students, researchers, and professionals through training, workshops, seminars, and mentorship.",
  },
  {
    icon: FaBalanceScale,
    title: "Evidence & Policy",
    copy: "We generate and translate research evidence to support informed policies and decision-making.",
  },
  {
    icon: FaHandshake,
    title: "Collaboration & Knowledge Exchange",
    copy: "We connect researchers, institutions, and communities to foster collaboration and share knowledge.",
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="relative bg-white px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-32 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] font-medium text-[#c8102e] mb-4 sm:mb-5 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            What We Do
          </span>

          <h2
            className="text-[#14213d] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.12] tracking-tight mb-6"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Research for a better future
          </h2>

          <p className="text-[#14213d]/70 text-base sm:text-lg leading-relaxed font-normal">
            NIRI conducts multidisciplinary research and develops evidence-based
            solutions that contribute to scientific advancement, informed
            decision-making, and sustainable development.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group pt-6 border-t-2 border-[#14213d]/10 hover:border-[#c9a227] transition-all duration-300"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 mb-6
                             bg-[#071744] text-[#c9a227] group-hover:bg-[#c9a227] group-hover:text-[#071744]
                             transition-colors duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </div>

                <h3
                  className="text-[#14213d] text-xl sm:text-2xl mb-3 tracking-tight"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {pillar.title}
                </h3>

                <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed max-w-lg">
                  {pillar.copy}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 sm:mt-20 flex justify-center sm:justify-start">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase
                       shadow-md hover:shadow-lg hover:bg-[#a80d26] transition-all duration-300
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071744] focus-visible:ring-offset-2"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Explore Our Work
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;