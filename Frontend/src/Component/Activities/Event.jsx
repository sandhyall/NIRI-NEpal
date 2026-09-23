import React from "react";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EVENTS = [
  {
    featured: true,
    tag: "Research Symposium",
    tagColor: "#c9a227",
    title: "NIRI Annual Research Symposium",
    date: "November 14, 2026",
    location: "Kathmandu, Nepal",
    copy: "NIRI's flagship annual symposium brings together researchers and practitioners to examine the prevalence, risk factors, and modern clinical management of non-communicable diseases (NCDs) in Nepal.",
    cta: "View Event Details",
    href: "#event-symposium",
  },
  {
    featured: false,
    tag: "Longitudinal Study",
    tagColor: "#071744",
    title: "NeFCoS Baseline Findings Dissemination",
    date: "Upcoming Session",
    location: "Lumbini & Online",
    copy: "Presenting key findings from the Nepal Family Cohort Study (NeFCoS), tracking multi-generational health, respiratory metrics, and community risk indexes across regions.",
    cta: "Explore Findings",
    href: "#event-nefcos",
  },
  {
    featured: false,
    tag: "Capacity Building",
    tagColor: "#c8102e",
    title: "Bioinformatics & Research Bootcamp",
    date: "Next Batch Opening",
    location: "Hybrid / Lalitpur",
    copy: "An intensive, hands-on training framework building foundational computational biology, genomic data analysis, and technical research competencies for young professionals.",
    cta: "Register Interest",
    href: "#event-bioinformatics",
  },
  {
    featured: false,
    tag: "Skill Development",
    tagColor: "#2D6A4F",
    title: "Essentials of Grant Writing Workshop",
    date: "Virtual Masterclass",
    location: "Online (Global)",
    copy: "Designed explicitly to equip early-career researchers and investigators with technical proposal structures, funding resource identification, and strategic grant drafting skills.",
    cta: "Learn More",
    href: "#event-grants",
  },
  {
    featured: false,
    tag: "Community Outreach",
    tagColor: "#D97706",
    title: "Senior Citizen Care & Public Health Training",
    date: "Field Initiative",
    location: "Upper Mustang, Nepal",
    copy: "Community-focused health interventions empowering local health volunteers and care providers with specialized geriatric care practices suited for high-altitude geographies.",
    cta: "View Initiative",
    href: "#event-community",
  },
];

const Events = () => {
  const [featured, ...rest] = EVENTS;

  return (
    <section
      id="events"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Section intro */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            FEATURED EVENTS, SYMPOSIUMS & WORKSHOPS
          </span>

          <h2
            className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Connect. Learn. Collaborate.
          </h2>

          <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
            From multidisciplinary research symposiums and large-scale public health 
            disseminations to technical bootcamps, NIRI creates dynamic platforms for 
            scholars, field experts, and community members across Nepal and beyond.
          </p>
        </div>

        {/* Event grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Featured card - Spans 2 rows on large screens */}
          <a
            href={featured.href}
            className="group flex flex-col justify-between bg-white p-7 sm:p-9 md:p-10 border border-[#14213d]/10
                       hover:border-[#14213d]/30 transition-all duration-300 lg:col-span-1 lg:row-span-2 shadow-sm hover:shadow-md
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: featured.tagColor }}
                  />
                  <span
                    className="text-[10px] sm:text-[11px] tracking-[0.22em] font-medium"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: featured.tagColor,
                    }}
                  >
                    {featured.tag.toUpperCase()}
                  </span>
                </div>
                <span className="text-[10px] bg-[#f7f4ec] text-[#14213d]/80 px-2.5 py-1 rounded tracking-wider font-mono">
                  FLAGSHIP
                </span>
              </div>

              <span
                className="block text-[10px] tracking-[0.2em] text-[#14213d]/40 mb-3"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                FEATURED EVENT
              </span>

              <h3
                className="text-[#14213d] text-2xl sm:text-3xl leading-tight mb-4 sm:mb-5 group-hover:text-[#c8102e] transition-colors"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
              >
                {featured.title}
              </h3>

              {/* Meta info tags */}
              <div className="flex flex-col gap-2 mb-5 pb-5 border-b border-[#14213d]/10 text-xs text-[#14213d]/70 font-mono">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#c9a227]" />
                  <span>{featured.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#c8102e]" />
                  <span>{featured.location}</span>
                </div>
              </div>

              <p className="text-[#14213d]/65 text-sm sm:text-[15px] leading-relaxed">
                {featured.copy}
              </p>
            </div>

            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#14213d] mt-8 sm:mt-10 group-hover:text-[#c8102e]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {featured.cta}
              <FaArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>

          {/* Secondary Cards Column Grid */}
          {rest.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="group flex flex-col justify-between bg-white p-6 sm:p-7 border border-[#14213d]/10
                         hover:border-[#14213d]/30 transition-all duration-300 shadow-sm hover:shadow-md lg:col-span-1
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: event.tagColor }}
                  />
                  <span
                    className="text-[10px] sm:text-[11px] tracking-[0.22em] font-medium"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: event.tagColor,
                    }}
                  >
                    {event.tag.toUpperCase()}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-lg sm:text-xl leading-tight mb-3 group-hover:text-[#c8102e] transition-colors"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {event.title}
                </h3>

                {/* Meta info tags */}
                <div className="flex items-center gap-4 mb-3 text-[11px] text-[#14213d]/60 font-mono">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#c9a227]" size={10} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[#c8102e]" size={10} />
                    {event.location}
                  </span>
                </div>

                <p className="text-[#14213d]/65 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {event.copy}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14213d] mt-6 group-hover:text-[#c8102e]"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {event.cta}
                <FaArrowRight
                  size={10}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Events;