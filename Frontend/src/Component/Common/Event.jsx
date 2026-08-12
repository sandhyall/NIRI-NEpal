import React from "react";
import { FaArrowRight } from "react-icons/fa";

const EVENTS = [
  {
    featured: true,
    tag: "Research Symposium",
    tagColor: "#c9a227",
    title: "NIRI Annual Research Symposium",
    copy: "NIRI's flagship annual symposium brings together researchers and practitioners to examine the prevalence, risk factors, and management of non-communicable diseases in Nepal.",
    cta: "View Event",
    href: "#event-symposium",
  },
  {
    featured: false,
    tag: "Webinar Series",
    tagColor: "#c8102e",
    title: "NIRI Webinars",
    copy: "A monthly webinar series giving researchers and professionals a platform to share findings and build connections across Nepal's research community.",
    cta: "Explore Event",
    href: "#event-webinars",
  },
  {
    featured: false,
    tag: "Training & Workshop",
    tagColor: "#071744",
    title: "Bioinformatics & Research Training",
    copy: "A hands-on training programme building foundational bioinformatics skills for students, researchers, and professionals.",
    cta: "View All Events",
    href: "#events-all",
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
        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            FEATURED EVENTS & WEBINARS
          </span>

          <h2
            className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Connect. Learn. Collaborate.
          </h2>

          <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
            From expert-led webinars and research symposiums to specialized
            workshops and training programs, NIRI creates platforms for
            researchers, professionals, students, and communities to
            exchange knowledge and build meaningful collaborations.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured card */}
          <a
            href={featured.href}
            className="group flex flex-col justify-between bg-white p-7 sm:p-9 md:p-10 border border-[#14213d]/10
                       hover:border-[#14213d]/25 transition-colors md:row-span-2
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: featured.tagColor }}
                />
                <span
                  className="text-[10px] sm:text-[11px] tracking-[0.22em]"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: featured.tagColor,
                  }}
                >
                  {featured.tag.toUpperCase()}
                </span>
              </div>

              <span
                className="block text-[10px] tracking-[0.2em] text-[#14213d]/40 mb-3"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                FEATURED EVENT
              </span>

              <h3
                className="text-[#14213d] text-2xl sm:text-3xl leading-tight mb-4 sm:mb-5"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
              >
                {featured.title}
              </h3>

              <p className="text-[#14213d]/65 text-sm sm:text-[15px] leading-relaxed max-w-md">
                {featured.copy}
              </p>
            </div>

            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#14213d] mt-8 sm:mt-10"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {featured.cta}
              <FaArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>

          {/* Secondary cards */}
          {rest.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="group flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#14213d]/10
                         hover:border-[#14213d]/25 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            >
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: event.tagColor }}
                  />
                  <span
                    className="text-[10px] sm:text-[11px] tracking-[0.22em]"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: event.tagColor,
                    }}
                  >
                    {event.tag.toUpperCase()}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-xl sm:text-2xl leading-tight mb-3 sm:mb-4"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {event.title}
                </h3>

                <p className="text-[#14213d]/65 text-sm leading-relaxed">
                  {event.copy}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#14213d] mt-6 sm:mt-8"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {event.cta}
                <FaArrowRight
                  size={11}
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