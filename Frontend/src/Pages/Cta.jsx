import React from "react";
import {
  ArrowRight,
  Microscope,
  GraduationCap,
  Briefcase,
  Building2,
  Network,
} from "lucide-react";

const AUDIENCES = [
  { label: "Researchers", icon: Microscope },
  { label: "Students", icon: GraduationCap },
  { label: "Professionals", icon: Briefcase },
  { label: "Institutions", icon: Building2 },
  { label: "Organizations", icon: Network },
];

// Sparse node positions (in % of the section) used to draw the
// background research-network motif. Kept few and asymmetric so it
// reads as a diagram, not decoration.
const NODES = [
  { x: 8, y: 18, r: 2.4 },
  { x: 18, y: 42, r: 1.6 },
  { x: 6, y: 70, r: 1.8 },
  { x: 92, y: 22, r: 2.2 },
  { x: 84, y: 52, r: 1.6 },
  { x: 94, y: 78, r: 2 },
  { x: 50, y: 6, r: 1.4 },
  { x: 50, y: 94, r: 1.4 },
];

const EDGES = [
  [0, 1],
  [1, 2],
  [0, 6],
  [3, 4],
  [4, 5],
  [3, 6],
  [5, 7],
  [2, 7],
];

const CTA = () => {
  return (
    <section
      id="get-involved"
      className="relative bg-[#071744] px-5 sm:px-6 md:px-12 py-20 sm:py-28 md:py-32 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

        @media (prefers-reduced-motion: no-preference) {
          .niri-node { animation: niri-pulse 5s ease-in-out infinite; }
          .niri-node:nth-of-type(2) { animation-delay: 1.1s; }
          .niri-node:nth-of-type(5) { animation-delay: 2.3s; }
          .niri-node:nth-of-type(7) { animation-delay: 0.6s; }
        }
        @keyframes niri-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.9; }
        }
      `}</style>

      {/* radial depth wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      {/* research-network motif */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g stroke="#c9a227" strokeOpacity="0.16" strokeWidth="1">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={`${NODES[a].x}%`}
              y1={`${NODES[a].y}%`}
              x2={`${NODES[b].x}%`}
              y2={`${NODES[b].y}%`}
            />
          ))}
        </g>
        {NODES.map((n, i) => (
          <circle
            key={i}
            className="niri-node"
            cx={`${n.x}%`}
            cy={`${n.y}%`}
            r={n.r}
            fill="#c9a227"
            fillOpacity="0.55"
          />
        ))}
      </svg>

      {/* frame with corner ticks, echoes the hero's corner treatment */}
      <div className="absolute inset-0 pointer-events-none m-4 sm:m-6">
        <div className="absolute inset-0 border border-white/[0.07]" />
        {["-top-px -left-px", "-top-px -right-px", "-bottom-px -left-px", "-bottom-px -right-px"].map(
          (pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} w-3 h-3 border-[#c9a227]/50 ${
                i === 0
                  ? "border-t border-l"
                  : i === 1
                  ? "border-t border-r"
                  : i === 2
                  ? "border-b border-l"
                  : "border-b border-r"
              }`}
            />
          )
        )}
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <span
          className="inline-block text-[11px] tracking-[0.3em] text-[#c9a227] mb-5 sm:mb-6"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          JOIN NIRI
        </span>

        <h2
          className="text-white text-[28px] sm:text-[38px] md:text-[46px] leading-[1.15] mb-6 sm:mb-7"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
        >
          Be part of the research &amp; innovation community
        </h2>

        <p className="text-white/70 text-[15px] sm:text-base leading-relaxed mb-3 max-w-xl mx-auto">
          Research creates impact when knowledge is shared, ideas are
          connected, and people work together.
        </p>
        <p className="text-white/70 text-[15px] sm:text-base leading-relaxed max-w-xl mx-auto">
          Whether you are a researcher, student, professional, institution,
          or organization, connect with NIRI and contribute to a stronger
          research and innovation ecosystem.
        </p>

        {/* audience tags — each one names a group the copy above already
            promised a place for, so the row earns its spot rather than
            decorating the page */}
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-9">
          {AUDIENCES.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/15 text-white/75 text-[12px] tracking-wide
                         hover:border-[#c9a227]/60 hover:text-white transition-colors"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <Icon size={13} strokeWidth={1.75} className="text-[#c9a227]" />
              {label}
            </li>
          ))}
        </ul>

        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mt-9 sm:mt-11">
          <a
            href="#get-involved-form"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#c9a227] text-[#071744] text-sm font-semibold tracking-wide
                       hover:bg-[#e0b62c] transition-colors w-full xs:w-auto
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071744]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Get Involved
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/40 text-white text-sm font-semibold tracking-wide
                       hover:bg-white/10 transition-colors w-full xs:w-auto
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Contact NIRI
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;