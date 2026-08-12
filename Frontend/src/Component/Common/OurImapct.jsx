import React from "react";
import { FaArrowRight } from "react-icons/fa";

const STATS = [
  { value: "10+", label: "Research Projects" },
  { value: "40+", label: "Researchers & Professionals" },
  { value: "20+", label: "Publications" },
  { value: "10+", label: "Investigators" },
];

const Impact = () => {
  return (
    <section
      id="impact"
      className="relative bg-[#071744] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <span
        className="hidden md:block absolute top-10 right-10 text-[11px] tracking-[0.3em] text-white/20"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        03 / OUR IMPACT
      </span>

      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c9a227] mb-4 sm:mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            OUR IMPACT
          </span>

          <h2
            className="text-white text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Making research matter
          </h2>

          <p className="text-white/70 text-[15px] sm:text-base leading-relaxed">
            Our work brings together research, expertise, collaboration, and
            innovation to create knowledge that can contribute to meaningful
            change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12 pb-12 sm:pb-16 border-b border-white/15">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-[#c9a227] pl-4 sm:pl-5"
            >
              <div
                className="text-white text-4xl sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/55 text-[10px] sm:text-[11px] tracking-[0.16em] mt-2 sm:mt-3 leading-snug"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-10 sm:mt-12">
          <div className="max-w-xl">
            <span
              className="block text-[10px] sm:text-[11px] tracking-[0.25em] text-white/40 mb-3"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              UNDER THE NUMBERS
            </span>
            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">
              From research and publications to capacity-building initiatives
              and collaborations, NIRI continues to expand its contribution to
              Nepal's research and innovation ecosystem.
            </p>
          </div>

          <a
            href="#impact-detail"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-semibold tracking-wide
                       hover:bg-white/10 transition-colors shrink-0 w-fit
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            View Our Impact
            <FaArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
