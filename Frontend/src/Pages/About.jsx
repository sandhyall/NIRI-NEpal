import React from "react";
import { FaArrowRight } from "react-icons/fa";
import niri from "../assets/niri.jpeg";

const FACTS = [
  { label: "Founded", value: "2020" },
  { label: "Status", value: "Not-for-profit" },
  { label: "Based in", value: "Nepal" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[0.85fr_1fr] gap-10 sm:gap-14 md:gap-20 items-center">
        <div className="relative">
          <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[4/5] border-t-2 border-[#c9a227]">
            <img
              src={niri}
              alt="Researchers at the Nexus Institute of Research and Innovation"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 flex flex-col items-center justify-center
                       w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#071744] border border-[#c9a227]/60 text-white text-center"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#c9a227]">
              EST.
            </span>
            <span className="text-lg sm:text-xl font-medium leading-none mt-0.5">
              2020
            </span>
            <span className="text-[7px] sm:text-[8px] tracking-[0.15em] text-white/60 mt-1 px-2 leading-tight">
              NEPAL
            </span>
          </div>
        </div>

        <div>
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            ABOUT NIRI
          </span>

          <h2
            className="text-[#14213d] text-[30px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-6 sm:mb-8 max-w-xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Advancing knowledge. Driving innovation. Creating impact.
          </h2>

          <div className="space-y-4 text-[#14213d]/75 text-[15px] sm:text-base leading-relaxed max-w-xl">
            <p>
              The Nexus Institute of Research and Innovation (NIRI) is an
              independent, not-for-profit research institution committed to
              advancing multidisciplinary research and innovation in Nepal.
            </p>
            <p>
              Established in 2020, NIRI brings together researchers,
              professionals, and institutions to generate high-quality evidence,
              strengthen research capacity, and address critical challenges
              facing society. Through research, collaboration, training, and
              knowledge dissemination, NIRI works to transform evidence into
              meaningful impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#14213d]/10 max-w-xl">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <div
                  className="text-[#14213d] text-base sm:text-lg"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {fact.value}
                </div>
                <div
                  className="text-[#14213d]/50 text-[10px] sm:text-[11px] tracking-[0.18em] mt-1"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {fact.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#about-niri"
            className="group inline-flex items-center gap-2 mt-9 sm:mt-11 px-6 py-3 bg-[#071744] text-white text-sm font-semibold tracking-wide
                       hover:bg-[#0b1f5c] transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ec]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Learn More About NIRI
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

export default About;
