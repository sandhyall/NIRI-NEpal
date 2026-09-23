import React, { useState, useMemo } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
  FaFilePdf,
  FaNewspaper,
  FaSearch,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const newsletters = [
  {
    id: 1,
    volume: "VOL 4",
    issue: "ISSUE 1",
    date: "March 2026",
    title: "NIRI Newsletter",
    description:
      "Explore NIRI's latest research activities, publications, projects, training programs, and institutional updates.",
    pdf: "#",
    featured: true,
  },
  {
    id: 2,
    volume: "VOL 3",
    issue: "ISSUE 2",
    date: "June 2025",
    title: "NIRI Newsletter",
    description:
      "Updates on Senior Citizen Care training, research activities, publications, and community programs.",
    pdf: "https://nirinepal.org/wp-content/uploads/2025/07/NIRINewsLetter_June2025.pdf",
  },
  {
    id: 3,
    volume: "VOL 3",
    issue: "ISSUE 1",
    date: "March 2025",
    title: "NIRI Newsletter",
    description:
      "Highlights from the Bioinformatics Bootcamp, Senior Citizen Care research, COPD screening camp, and new publications.",
    pdf: "https://nirinepal.org/wp-content/uploads/2025/04/NIRI_Newsletter_Mar2025Vol3Issue1.pdf",
  },
  {
    id: 4,
    volume: "VOL 2",
    issue: "ISSUE 4",
    date: "December 2024",
    title: "NIRI Newsletter",
    description:
      "NIRI research, upcoming Bioinformatics Bootcamp, drowning prevention advocacy, partnerships, and organizational updates.",
    pdf: "https://nirinepal.org/wp-content/uploads/2024/12/NIRI_Newsletter_Dec2024Vol2Issue4.pdf",
  },
  {
    id: 5,
    volume: "VOL 2",
    issue: "ISSUE 3",
    date: "September 2024",
    title: "NIRI Newsletter",
    description:
      "Discover NIRI's latest research initiatives, activities, collaborations, and institutional developments.",
    pdf: "#",
  },
  {
    id: 6,
    volume: "VOL 2",
    issue: "ISSUE 2",
    date: "June 2024",
    title: "NIRI Newsletter",
    description:
      "Read about NIRI's recent research, capacity-building activities, and community engagement.",
    pdf: "#",
  },
  {
    id: 7,
    volume: "VOL 2",
    issue: "ISSUE 1",
    date: "March 2024",
    title: "NIRI Newsletter",
    description:
      "NIRI's research and innovation updates, events, partnerships, and publications.",
    pdf: "#",
  },
  {
    id: 8,
    volume: "VOL 2",
    issue: "ISSUE 2",
    date: "December 2023",
    title: "NIRI Newsletter",
    description:
      "A collection of NIRI research activities, announcements, and organizational updates.",
    pdf: "#",
  },
  {
    id: 9,
    volume: "VOL 1",
    issue: "ISSUE 1",
    date: "February 2023",
    title: "NIRI Newsletter",
    description:
      "The first NIRI newsletter featuring research, innovation, activities, and institutional highlights.",
    pdf: "#",
  },
];

const Newsletter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter newsletters based on search term
  const filteredNewsletters = useMemo(() => {
    return newsletters.filter((item) => {
      const term = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.volume.toLowerCase().includes(term) ||
        item.issue.toLowerCase().includes(term) ||
        item.date.toLowerCase().includes(term)
      );
    });
  }, [searchQuery]);

  const featuredNewsletter = useMemo(
    () => newsletters.find((n) => n.featured),
    []
  );

  const archiveNewsletters = useMemo(
    () => filteredNewsletters.filter((n) => !n.featured),
    [filteredNewsletters]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0A192F] text-white py-24">
        {/* Decorative Graphic Elements (NIRI Red & Blue Glows) */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D31027]/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#003366]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-[#D31027]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 backdrop-blur-sm">
              <FaNewspaper className="text-red-500" />
              <span>Official Publications</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              NIRI <span className="text-[#D31027]">Newsletter</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Stay connected with our quarterly updates on cutting-edge multidisciplinary 
              research, publications, capacity-building workshops, and strategic community partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SEARCH & SECTION HEADER ================= */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31027]">
              Archive & Releases
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#0A192F]">
              Explore Publications
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <FaSearch className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search volume, topic, date..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURED NEWSLETTER ================= */}
      {!searchQuery && featuredNewsletter && (
        <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="group overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5 transition duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-12">
              
              {/* Left Highlight Box */}
              <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#0A192F] to-[#002B66] p-8 text-white lg:col-span-5 lg:p-12">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#D31027]/20 blur-2xl" />
                
                <div>
                  <span className="inline-block rounded-md bg-[#D31027] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Latest Issue
                  </span>
                  
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-sm font-semibold tracking-widest text-slate-300">
                      {featuredNewsletter.volume}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm font-semibold tracking-widest text-red-400">
                      {featuredNewsletter.issue}
                    </span>
                  </div>

                  <h3 className="mt-2 text-3xl font-extrabold text-white">
                    {featuredNewsletter.date}
                  </h3>
                </div>

                <div className="mt-12 flex items-center gap-4 text-white/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                    <FaFilePdf className="text-2xl text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-300">Format</p>
                    <p className="text-sm font-semibold text-white">PDF Document</p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <FaCalendarAlt className="text-[#D31027]" />
                    <span>Published {featuredNewsletter.date}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[#0A192F] md:text-3xl">
                    {featuredNewsletter.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {featuredNewsletter.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  {featuredNewsletter.pdf !== "#" ? (
                    <a
                      href={featuredNewsletter.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl bg-[#002B66] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#002B66]/50"
                    >
                      <span>Read Full Newsletter</span>
                      <FaArrowRight className="text-xs" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= ARCHIVE GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        {archiveNewsletters.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <FaFilePdf className="mx-auto text-4xl text-slate-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800">No newsletters found</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try adjusting your search criteria to find previous issues.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-sm font-semibold text-[#D31027] hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {archiveNewsletters.map((newsletter) => {
              const hasPdf = newsletter.pdf !== "#";
              return (
                <article
                  key={newsletter.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300"
                >
                  {/* Card Top / Header */}
                  <div>
                    <div className="relative flex h-36 items-center justify-between bg-gradient-to-r from-[#0A192F] to-[#002B66] p-6 text-white">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                          {newsletter.volume}
                        </span>
                        <h4 className="text-2xl font-black tracking-tight text-white">
                          {newsletter.issue}
                        </h4>
                      </div>
                      
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md transition group-hover:scale-110">
                        <FaFilePdf className="text-2xl text-red-400" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <FaCalendarAlt className="text-[#D31027]" />
                        <span>{newsletter.date}</span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-[#0A192F] group-hover:text-[#D31027] transition">
                        {newsletter.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                        {newsletter.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 pb-6 pt-2">
                    {hasPdf ? (
                      <a
                        href={newsletter.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-[#002B66] transition group-hover:bg-[#002B66] group-hover:text-white"
                      >
                        <span>Download PDF</span>
                        <FaDownload className="text-slate-400 group-hover:text-white transition" />
                      </a>
                    ) : (
                      <div className="inline-flex w-full items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-xs font-semibold text-slate-400">
                        <span>Archive PDF Unavailable</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= SUBSCRIBE / COMMUNITY CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A192F] via-[#002B66] to-[#0A192F] py-16 text-white">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#D31027]/20 blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:p-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Stay Connected with NIRI
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Receive instant notifications about upcoming research publications, training opportunities, and institutional updates directly to your inbox.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#D31027] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              <span>Join NIRI Community</span>
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Newsletter;