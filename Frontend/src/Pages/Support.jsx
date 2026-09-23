import React from "react";
import { FaArrowRight, FaHandHoldingHeart, FaUniversity, FaHandshake, FaGlobe } from "react-icons/fa";

const SUPPORT_OPTIONS = [
  {
    icon: <FaHandHoldingHeart className="text-[#c8102e]" size={24} />,
    title: "Research Philanthropy",
    copy: "Support independent scientific inquiries, community health surveys, and longitudinal studies addressing pressing non-communicable diseases in Nepal.",
    badge: "For Individuals",
    href: "#support-donate",
  },
  {
    icon: <FaUniversity className="text-[#071744]" size={24} />,
    title: "Institutional Grants & Funding",
    copy: "Partner with NIRI as a funding body, academic institution, or international NGO to scale up evidence-based public health interventions.",
    badge: "For Organizations",
    href: "#support-grants",
  },
  {
    icon: <FaHandshake className="text-[#c9a227]" size={24} />,
    title: "Corporate Social Responsibility (CSR)",
    copy: "Sponsor regional health camps, senior citizen care initiatives, and capacity-building technical workshops in remote geographies.",
    badge: "For Businesses",
    href: "#support-csr",
  },
  {
    icon: <FaGlobe className="text-[#2D6A4F]" size={24} />,
    title: "Global Academic Partnerships",
    copy: "Collaborate on joint peer-reviewed publications, researcher exchange programs, and cross-border bioinformatics training modules.",
    badge: "For Universities",
    href: "#support-partnerships",
  },
];

const SupportSection = () => {
  return (
    <section
      id="support"
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
            SUPPORT OUR MISSION
          </span>

          <h2
            className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Empowering Research. Shaping Public Health.
          </h2>

          <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
            Independent research is vital for creating sustainable health solutions in Nepal. 
            Your support enables NIRI to conduct rigorous field investigations, train early-career 
            scientists, and turn empirical evidence into actionable policy change.
          </p>
        </div>

        {/* Support Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {SUPPORT_OPTIONS.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#14213d]/10
                         hover:border-[#14213d]/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#f7f4ec] rounded flex items-center justify-center border border-[#14213d]/5">
                    {item.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.15px] px-2.5 py-1 bg-[#14213d]/5 text-[#14213d]/80 font-mono uppercase rounded">
                    {item.badge}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-xl leading-snug mb-3 group-hover:text-[#c8102e] transition-colors"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>

                <p className="text-[#14213d]/65 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.copy}
                </p>
              </div>

              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14213d] group-hover:text-[#c8102e] transition-colors uppercase font-mono pt-4 border-t border-[#14213d]/5"
              >
                Get Involved <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Partnership Contact Callout Box */}
        <div className="bg-[#14213d] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#14213d]/20">
          <div className="max-w-2xl">
            <span
              className="inline-block text-[11px] tracking-[0.3em] text-[#c9a227] mb-3 font-mono uppercase"
            >
              COLLABORATE WITH NIRI
            </span>
            <h3
              className="text-2xl sm:text-3xl mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
            >
              Have a specific proposal or institutional inquiry?
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We welcome dialogue with academic researchers, global health funds, and philanthropic leaders 
              committed to transforming healthcare frameworks across the region.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:support@nirinepal.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase
                         hover:bg-[#a80d26] transition-colors duration-300 font-mono"
            >
              Contact Partnership Team
              <FaArrowRight size={11} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportSection;