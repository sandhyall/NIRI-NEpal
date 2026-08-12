import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.mp4";
import nr from "../../assets/nn.jpg";
import nir from "../../assets/niri.jpeg";

const STATS = [
  { value: "120+", label: "Active Investigators" },
  { value: "40+", label: "Research Projects" },
  { value: "15", label: "Years of Fieldwork" },
];

const FEATURES = [
  {
    image: nr,
    eyebrow: "Field Research",
    title: "Grounded in Nepal, built for rigor",
    copy: "Our investigators work directly in the communities and terrain they study, pairing local knowledge with disciplined methodology.",
  },
  {
    image: nir,
    eyebrow: "Institute",
    title: "A home for independent inquiry",
    copy: "NIRI supports researchers with the infrastructure, mentorship, and funding pathways needed to see a project through.",
  },
];

function PlayToggle({ videoRef }) {
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause background video" : "Play background video"}
      className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border border-white/30 bg-black/30 backdrop-blur-sm
                 text-white text-[10px] sm:text-xs tracking-wide hover:bg-black/50 transition-colors
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      {playing ? <FaPause size={10} /> : <FaPlay size={10} />}
      <span className="hidden xs:inline">{playing ? "Pause" : "Play"}</span>
    </button>
  );
}

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <section className="relative w-full h-[100svh] sm:h-[88vh] min-h-[520px] sm:min-h-[560px] overflow-hidden bg-[#071744]">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={hero}
          autoPlay
          loop
          muted
          playsInline
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,23,68,0.75) 0%, rgba(7,23,68,0.45) 40%, rgba(7,23,68,0.85) 100%)",
          }}
        />

        <PlayToggle videoRef={videoRef} />

        <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          <span
            className="inline-block w-fit text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-[#c9a227] mb-4 sm:mb-5 px-2.5 py-1 sm:px-3 sm:py-1 border border-[#c9a227]/50"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            NEXUS SEARCH INSTITUTE
          </span>

          <h1
            className="text-white text-[32px] xs:text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] leading-[1.1] sm:leading-[1.05] max-w-3xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Independent research,
            <br />
            rooted in Nepal.
          </h1>

          <p className="text-white/80 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-xl leading-relaxed">
            NIRI backs investigators asking questions that matter to Nepal's
            future — from public health to policy to the environment — with the
            rigor to make the answers count.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-9">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#c8102e] text-white text-sm font-semibold tracking-wide
               hover:bg-[#a80d26] transition-colors
               focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Explore Our Research
              <FaArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="flex items-center justify-center px-6 py-3 border border-white/40 text-white text-sm font-semibold tracking-wide
               hover:bg-white/10 transition-colors
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              About the Institute
            </a>
          </div>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-x-4 sm:gap-x-10 gap-y-4 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15 max-w-2xl">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-white text-xl sm:text-2xl md:text-3xl"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/60 text-[9px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.18em] mt-1"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {stat.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="group">
              <div className="relative overflow-hidden aspect-[4/3] mb-5 sm:mb-6 border-t-2 border-[#c9a227]">
                <img
                  src={feature.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <span
                className="block text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#c8102e] mb-2"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {feature.eyebrow.toUpperCase()}
              </span>
              <h3
                className="text-[#14213d] text-xl sm:text-2xl mb-2.5 sm:mb-3"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h3>
              <p className="text-[#14213d]/70 text-sm sm:text-[15px] leading-relaxed">
                {feature.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
