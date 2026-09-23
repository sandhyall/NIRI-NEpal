import React from "react";
import { FaArrowRight, FaRegCalendarAlt, FaTag } from "react-icons/fa";

const NEWS = [
  {
    tag: "Research & Community",
    tagColor: "#c8102e",
    date: "June 7, 2026",
    title: "Healthcare Gaps & Loneliness Among Elderly in Upper Mustang",
    copy: "A landmark study by NIRI and Kalasha Foundation highlights critical health, nutrition, and emotional well-being challenges facing senior citizens in Lomanthang.",
    href: "#news-upper-mustang",
    featured: true,
  },
  {
    tag: "Longitudinal Study",
    tagColor: "#071744",
    date: "May 2026",
    title: "NIRI Successfully Disseminates NeFCoS Baseline Findings",
    copy: "Presenting foundational insights from the Nepal Family Cohort Study (NeFCoS) at Lumbini Buddhist University to address the rising burden of NCDs.",
    href: "#news-nefcos",
    featured: false,
  },
  {
    tag: "Capacity Building",
    tagColor: "#c9a227",
    date: "April 2026",
    title: "NIRI Bioinformatics Bootcamp 2025/2026 Concludes Successfully",
    copy: "Empowering the largest cohort to date with advanced computational biology skills, genomic data tools, and practical research competencies.",
    href: "#news-bioinformatics",
    featured: false,
  },
  {
    tag: "Public Health",
    tagColor: "#2D6A4F",
    date: "July 25, 2025",
    title: "Drowning Is Preventable: A Call to Action",
    copy: "Raising critical community awareness and promoting evidence-based safety guidelines on the occasion of World Drowning Prevention Day.",
    href: "#news-drowning-prevention",
    featured: false,
  },
  {
    tag: "Institutional Partnership",
    tagColor: "#457B9D",
    date: "March 2026",
    title: "NIRI & Madan Bhandari Academy of Health Sciences Sign MoU",
    copy: "Establishing a strategic academic framework to boost joint medical research, institutional collaboration, and student training programs.",
    href: "#news-mbahs-mou",
    featured: false,
  },
  {
    tag: "National Summit",
    tagColor: "#D97706",
    date: "Early 2026",
    title: "NIRI at the National Health Summit: Research for Impact",
    copy: "Sharing empirical evidence and driving multi-sectoral dialogues with health policy-makers and population scientists in Kathmandu.",
    href: "#news-health-summit",
    featured: false,
  },
];

const News = () => {
  return (
    <section
      id="news"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Section intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span
              className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5 font-semibold"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              LATEST NEWS, INSIGHTS & ANNOUNCEMENTS
            </span>

            <h2
              className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-4 sm:mb-5"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
            >
              Latest from NIRI
            </h2>

            <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
              Stay updated on our latest field investigations, institutional milestones, 
              peer-reviewed research dissemination, and community-level public health interventions across Nepal.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#news-all"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#14213d] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase
                         hover:bg-[#c8102e] transition-colors duration-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              View All Articles
              <FaArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* News cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {NEWS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`group flex flex-col justify-between bg-white p-7 sm:p-8 border border-[#14213d]/10
                         hover:border-[#14213d]/30 transition-all duration-300 shadow-sm hover:shadow-md
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] ${
                           item.featured ? "lg:border-l-4 lg:border-l-[#c8102e]" : ""
                         }`}
            >
              <div>
                {/* Meta details header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#14213d]/10">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.tagColor }}
                    />
                    <span
                      className="text-[10px] sm:text-[11px] tracking-[0.18em] font-medium uppercase"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        color: item.tagColor,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <span
                    className="flex items-center gap-1.5 text-[11px] text-[#14213d]/60 font-mono"
                  >
                    <FaRegCalendarAlt size={10} className="text-[#c9a227]" />
                    {item.date}
                  </span>
                </div>

                {item.featured && (
                  <span
                    className="inline-block text-[9px] uppercase bg-[#c8102e]/10 text-[#c8102e] px-2 py-0.5 rounded tracking-widest font-mono mb-2 font-semibold"
                  >
                    Top Story
                  </span>
                )}

                <h3
                  className="text-[#14213d] text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#c8102e] transition-colors"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>

                <p className="text-[#14213d]/65 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {item.copy}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#14213d]/5 flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14213d] group-hover:text-[#c8102e] transition-colors"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Read Full Update
                </span>
                <span className="w-7 h-7 rounded-full bg-[#f7f4ec] group-hover:bg-[#c8102e] group-hover:text-white flex items-center justify-center transition-all duration-300 text-[#14213d]">
                  <FaArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;