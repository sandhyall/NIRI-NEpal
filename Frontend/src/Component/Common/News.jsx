import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NEWS = [
  {
    tag: "Research & Updates",
    tagColor: "#c8102e",
    title: "Drowning Is Preventable: A Call to Action",
    copy: "Raising awareness and promoting evidence-based approaches to drowning prevention.",
    href: "#news-drowning-prevention",
  },
  {
    tag: "Community & Capacity Building",
    tagColor: "#c9a227",
    title: "Strengthening Community Healthcare Capacity",
    copy: "Supporting local health professionals and communities through targeted training and knowledge sharing.",
    href: "#news-community-healthcare",
  },
  {
    tag: "Research Dissemination",
    tagColor: "#071744",
    title: "Sharing Evidence for Better Decision-Making",
    copy: "NIRI continues to disseminate research findings and engage stakeholders in meaningful dialogue.",
    href: "#news-research-dissemination",
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
        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            LATEST NEWS & UPDATES
          </span>

          <h2
            className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Latest from NIRI
          </h2>

          <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
            Stay informed about NIRI's latest research activities,
            publications, events, achievements, and community initiatives.
          </p>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {NEWS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#14213d]/10
                         hover:border-[#14213d]/25 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            >
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.tagColor }}
                  />
                  <span
                    className="text-[10px] sm:text-[11px] tracking-[0.2em]"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: item.tagColor,
                    }}
                  >
                    {item.tag.toUpperCase()}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-xl sm:text-2xl leading-tight mb-3 sm:mb-4"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>

                <p className="text-[#14213d]/65 text-sm sm:text-[15px] leading-relaxed">
                  {item.copy}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#14213d] mt-7 sm:mt-8"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Read More
                <FaArrowRight
                  size={11}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
          <a
            href="#news-all"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#c8102e] text-white text-sm font-semibold tracking-wide
                       hover:bg-[#a80d26] transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071744] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ec]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            View All News
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

export default News;