import React, { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaFileAlt,
  FaSearch,
  FaTimes,
  FaUserEdit,
} from "react-icons/fa";

const publications = [
  {
    id: 1,
    title:
      "Research and Innovation for Improving Health and Wellbeing in Nepal",
    authors: "NIRI Research Team",
    type: "Research Article",
    year: "2026",
    journal: "NIRI Publications",
    description:
      "This publication highlights recent research activities, findings, and innovations contributing to health and wellbeing in Nepal.",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Community-Based Research and Health Promotion",
    authors: "NIRI Research Team",
    type: "Research Article",
    year: "2025",
    journal: "NIRI Publications",
    description:
      "A research publication focusing on community-based approaches, health promotion, and evidence-based interventions.",
    link: "#",
  },
  {
    id: 3,
    title: "Senior Citizen Care and Support in Nepal",
    authors: "NIRI Research Team",
    type: "Research Report",
    year: "2025",
    journal: "NIRI",
    description:
      "A report exploring issues related to senior citizen care, support systems, and opportunities for improving elderly wellbeing.",
    link: "#",
  },
  {
    id: 4,
    title: "Drowning Prevention and Community Awareness",
    authors: "NIRI Research Team",
    type: "Research Report",
    year: "2024",
    journal: "NIRI",
    description:
      "Research and community advocacy activities related to drowning prevention and public awareness.",
    link: "#",
  },
  {
    id: 5,
    title: "Health Research and Evidence Generation",
    authors: "NIRI Research Team",
    type: "Research Article",
    year: "2024",
    journal: "NIRI Publications",
    description:
      "An overview of health research initiatives and evidence-generation activities conducted through multidisciplinary collaboration.",
    link: "#",
  },
  {
    id: 6,
    title: "Community Health and Research Collaboration",
    authors: "NIRI Research Team",
    type: "Journal Article",
    year: "2023",
    journal: "NIRI Publications",
    description:
      "This publication presents collaborative approaches to research and community health initiatives.",
    link: "#",
  },
];

const publicationTypes = [
  "All",
  "Research Article",
  "Research Report",
  "Journal Article",
];

const Publications = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");

  const filteredPublications = useMemo(() => {
    return publications.filter((publication) => {
      const matchesType =
        activeType === "All" || publication.type === activeType;

      const searchText = search.toLowerCase();

      const matchesSearch =
        publication.title.toLowerCase().includes(searchText) ||
        publication.authors.toLowerCase().includes(searchText) ||
        publication.year.includes(searchText);

      return matchesType && matchesSearch;
    });
  }, [search, activeType]);

  const featuredPublication = useMemo(
    () => publications.find((publication) => publication.featured),
    []
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0A192F] py-24 text-white">
        {/* NIRI Brand Accent Glows */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D31027]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#002B66]/40 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-[#D31027]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 backdrop-blur-sm">
              <FaBookOpen className="text-red-500" />
              <span>Research & Knowledge Portal</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              NIRI <span className="text-[#D31027]">Publications</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Explore our comprehensive library of research papers, policy briefs, institutional reports, 
              and peer-reviewed journal articles advancing multidisciplinary evidence in Nepal.
            </p>

          </div>
        </div>
      </section>

      {/* ================= FEATURED PUBLICATION ================= */}
      {!search && activeType === "All" && featuredPublication && (
        <section className="mx-auto max-w-7xl px-6 -mt-10 lg:px-8 relative z-10">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5 transition duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-12">
              
              {/* Highlight Sidebar */}
              <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#0A192F] via-[#002B66] to-[#0A192F] p-8 text-white lg:col-span-5 lg:p-12">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#D31027]/20 blur-2xl" />

                <div>
                  <span className="inline-block rounded-md bg-[#D31027] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Featured Work
                  </span>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="text-3xl font-black text-white">{featuredPublication.year}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-red-400">
                      {featuredPublication.type}
                    </span>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 text-white/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                    <FaFileAlt className="text-2xl text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-300">Source</p>
                    <p className="text-sm font-semibold text-white">{featuredPublication.journal}</p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
                <div>
                  <h3 className="text-2xl font-bold leading-snug text-[#0A192F] md:text-3xl">
                    {featuredPublication.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#D31027]">
                    <FaUserEdit />
                    <span>{featuredPublication.authors}</span>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {featuredPublication.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={featuredPublication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#002B66] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#002B66]/50"
                  >
                    <span>Read Full Publication</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= CONTROLS & FILTER SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 pb-8">
          
          {/* Section Heading */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31027]">
              Knowledge Repository
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#0A192F]">
              Explore Our Research
            </h2>
          </div>

          {/* Search & Tabs Wrapper */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <FaSearch className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search publications..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-[#002B66] focus:outline-none focus:ring-2 focus:ring-[#002B66]/20"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl bg-slate-200/60 p-1">
              {publicationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                    activeType === type
                      ? "bg-[#0A192F] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= PUBLICATIONS GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        
        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span>Showing {filteredPublications.length} Publication(s)</span>
          {(search || activeType !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setActiveType("All");
              }}
              className="text-[#D31027] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredPublications.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPublications.map((publication) => (
              <article
                key={publication.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300"
              >
                {/* Card Header Top */}
                <div>
                  <div className="relative flex h-28 items-center justify-between bg-gradient-to-r from-[#0A192F] to-[#002B66] px-6 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md transition group-hover:scale-110">
                      <FaFileAlt className="text-xl text-red-400" />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {publication.year}
                    </span>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D31027]">
                        {publication.type}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {publication.journal}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-[#0A192F] transition group-hover:text-[#D31027]">
                      {publication.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-slate-500">
                      By {publication.authors}
                    </p>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                      {publication.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-[#002B66] transition group-hover:bg-[#002B66] group-hover:text-white"
                  >
                    <span>Read Publication</span>
                    <FaArrowRight className="text-slate-400 group-hover:text-white transition" />
                  </a>
                </div>

              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <FaSearch className="mx-auto text-4xl text-slate-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800">No publications match your filter</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try adjusting your search terms or selecting another category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveType("All");
              }}
              className="mt-4 text-sm font-semibold text-[#D31027] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A192F] via-[#002B66] to-[#0A192F] py-16 text-white">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#D31027]/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:p-12">
            
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Interested in Collaborating?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Explore our ongoing research programs, join multidisciplinary projects, or contribute to generating high-impact evidence in Nepal.
              </p>
            </div>

            <a
              href="/research"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#D31027] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              <span>Explore Research Areas</span>
              <FaArrowRight className="text-xs" />
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Publications;