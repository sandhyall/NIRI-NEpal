import React from "react";
import { FaArrowRight, FaUniversity, FaHandshake, FaGlobeAmericas, FaBuilding } from "react-icons/fa";

const PARTNERSHIP_TYPES = [
  {
    icon: <FaUniversity className="text-[#071744]" size={26} />,
    title: "Academic & Research Universities",
    tag: "Joint Studies & Fellowships",
    copy: "Collaborate on peer-reviewed publications, student exchange programs, data-sharing frameworks, and joint bioinformatics or public health training modules.",
    href: "#partner-academic",
  },
  {
    icon: <FaGlobeAmericas className="text-[#c8102e]" size={26} />,
    title: "NGOs & Global Health Foundations",
    tag: "Field Programs & Interventions",
    copy: "Partner with us to scale up community health camps, senior citizen care initiatives, and evidence-based public health campaigns across rural and high-altitude regions.",
    href: "#partner-ngo",
  },
  {
    icon: <FaBuilding className="text-[#2D6A4F]" size={26} />,
    title: "Corporate & Industry Leaders",
    tag: "CSR & Innovation Sponsorship",
    copy: "Align your corporate social responsibility (CSR) goals with meaningful scientific research, technology integration, and community welfare programs in Nepal.",
    href: "#partner-corporate",
  },
  {
    icon: <FaHandshake className="text-[#c9a227]" size={26} />,
    title: "Government & Policy Bodies",
    tag: "National Health Impact",
    copy: "Leverage NIRI's empirical research data, longitudinal findings (like NeFCoS), and expert advisory support to shape provincial and national health policies.",
    href: "#partner-government",
  },
];

const PartnerWithUs = () => {
  return (
    <section
      id="partner-with-us"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5 font-semibold uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            COLLABORATE FOR GREATER IMPACT
          </span>

          <h2
            className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Partner With NIRI
          </h2>

          <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
            Solving complex public health challenges requires collective effort. NIRI actively collaborates 
            with domestic and international institutions, academic bodies, and organizations committed to advancing research and community well-being.
          </p>
        </div>

        {/* Partnership Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PARTNERSHIP_TYPES.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-9 border border-[#14213d]/10 flex flex-col justify-between
                         hover:border-[#14213d]/30 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#f7f4ec] rounded flex items-center justify-center border border-[#14213d]/5">
                    {item.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.15px] px-3 py-1 bg-[#14213d]/5 text-[#14213d]/80 font-mono uppercase rounded">
                    {item.tag}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-xl sm:text-2xl leading-snug mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>

                <p className="text-[#14213d]/65 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {item.copy}
                </p>
              </div>

              <div className="pt-4 border-t border-[#14213d]/10">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14213d] hover:text-[#c8102e] transition-colors uppercase font-mono"
                >
                  Explore Collaboration <FaArrowRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Contact Callout Box */}
        <div className="bg-[#14213d] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#14213d]/20">
          <div className="max-w-2xl">
            <span
              className="inline-block text-[11px] tracking-[0.3em] text-[#c9a227] mb-3 font-mono uppercase"
            >
              START A CONVERSATION
            </span>
            <h3
              className="text-2xl sm:text-3xl mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
            >
              Ready to build an institutional partnership?
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Our executive board and research committee welcome structured discussions on joint grants, academic memoranda of understanding (MoUs), and collaborative initiatives.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:partnerships@nirinepal.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase
                         hover:bg-[#a80d26] transition-colors duration-300 font-mono"
            >
              Contact Partnership Office
              <FaArrowRight size={11} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerWithUs;