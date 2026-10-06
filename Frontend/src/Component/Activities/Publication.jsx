import React, { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaExternalLinkAlt,
  FaFileAlt,
  FaSearch,
  FaTimes,
  FaUserEdit,
} from "react-icons/fa";

// Types are only labelled when the citation itself says so
// (systematic review, study protocol, editorial, book chapter); everything else is "Journal Article".
const publications = [
  // ---------- 2026 ----------
  {
    id: 1,
    year: "2026",
    type: "Journal Article",
    title: "Ethnic disparities in cancer prevalence in Nepal from a 6-year analysis of a single tertiary hospital cancer registry",
    authors: "Karki P, Parajuli S, Gandhi M, Bimali M, Sigdel T, Sapkota S, Adhikari A, Pandit S, Pangeni RP",
    journal: "Discover Public Health",
    cite: "2026;23:282",
    link: "https://doi.org/10.1186/s12982-026-01607-9",
    featured: true,
  },
  {
    id: 2,
    year: "2026",
    type: "Journal Article",
    title: "Emerging biomarkers for transplant diagnostics for long-term graft survival",
    authors: "Dahal RP, Sigdel TK",
    journal: "SM Journal of Nephrology and Kidney Diseases",
    cite: "",
    link: "https://jsmcentral.org/articles/sm-journal-of-nephrology-and-kidney-diseases/smjnkd-v6-1038.pdf",
  },
  {
    id: 3,
    year: "2026",
    type: "Book Chapter",
    title: "Production strategies and management practices for Cymbidium cut flower orchids",
    authors: "Pun UK, Shrestha S, Bhandari N, Dahal J",
    journal: "Forest Based Orchids",
    cite: "2026; pp. 293–308",
    link: "https://doi.org/10.1007/978-981-92-0096-2_11",
  },
  {
    id: 4,
    year: "2026",
    type: "Journal Article",
    title: "Cytokine storm",
    authors: "Karki R, Netea MG, Diorio C, Kanneganti TD",
    journal: "Nature Reviews Disease Primers",
    cite: "2026;12:1",
    link: "https://doi.org/10.1038/s41572-025-00677-4",
  },

  // ---------- 2025 ----------
  {
    id: 5,
    year: "2025",
    type: "Journal Article",
    title: "Role of alumni associations in their alma mater: An exploratory study on higher education institutions of Kathmandu Valley",
    authors: "Thapa P, Parajuli S, Acharya T, Pun U",
    journal: "Social Sciences & Humanities Open",
    cite: "2025;12:102184",
    link: "https://doi.org/10.1016/j.ssaho.2025.102184",
  },
  {
    id: 6,
    year: "2025",
    type: "Systematic Review",
    title: "Circulating miR-542-3p as a Prognostic Marker for Hepatocellular Carcinoma: A Systematic Review and Meta-Analysis",
    authors: "Balakrishnan R, Subbarayan R, Kuppusamy M, Shrestha R, Radhakrishnan A, Chauhan A",
    journal: "Journal of Cellular and Molecular Medicine",
    cite: "2025;29(14):e70748",
    link: "https://doi.org/10.1111/jcmm.70748",
  },
  {
    id: 7,
    year: "2025",
    type: "Journal Article",
    title: "Epithelial-Mesenchymal Transition in Cancer: Insights Into Therapeutic Targets and Clinical Implications",
    authors: "Srinivasan D, Balakrishnan R, Chauhan A, Kumar J, Girija DM, Shrestha R, Shrestha R, Subbarayan R",
    journal: "MedComm",
    cite: "2025;6(9):e70333",
    link: "https://doi.org/10.1002/mco2.70333",
  },
  {
    id: 8,
    year: "2025",
    type: "Journal Article",
    title: "A call for action to address the burden of drowning in Nepal",
    authors: "Pant PR, Sedain B, Cenderadewi M",
    journal: "Europasian Journal of Medical Sciences",
    cite: "2025;7(10)",
    link: "https://europasianjournals.org/ejms/index.php/ejms/article/view/544",
  },
  {
    id: 9,
    year: "2025",
    type: "Journal Article",
    title: "Historic First Global Status Report on Drowning Prevention Highlights Challenges and Opportunities for Preventing Drowning Among Children and Adolescents",
    authors: "Pati S, Chauhan A, Pant PR, Sedain B, Peden AE",
    journal: "Journal of Paediatrics and Child Health",
    cite: "2025",
    link: "https://doi.org/10.1111/jpc.70057",
  },
  {
    id: 10,
    year: "2025",
    type: "Journal Article",
    title: "Radiation therapy-induced normal tissue damage: involvement of EMT pathways and role of FLASH-RT in reducing toxicities",
    authors: "Srinivasan D, Subbarayan R, Krishnan M, Balakrishna R, Adtani P, Shrestha R, Chauhan A, Babu S, Radhakrishnan A",
    journal: "Radiation and Environmental Biophysics",
    cite: "2025",
    link: "https://doi.org/10.1007/s00411-024-01102-2",
  },
  {
    id: 11,
    year: "2025",
    type: "Journal Article",
    title: "Enhancing Colorectal Cancer Treatment: The Role of Bifidobacterium in Modulating Gut Immunity and Mitigating Capecitabine-Induced Toxicity",
    authors: "Aswathi R, Srinivasan D, Subbarayan R, Chauhan A, Krishnamoorthy L, Kumar J, Krishnan M, Shrestha R",
    journal: "Molecular Nutrition & Food Research",
    cite: "2025:e70023",
    link: "https://doi.org/10.1002/mnfr.70023",
  },

  // ---------- 2024 ----------
  {
    id: 12,
    year: "2024",
    type: "Journal Article",
    title: "Exploring Health Resilience Practices in Lumbini, Karnali, and Sudurpaschim Provinces",
    authors: "Pant PR, Bhatt DC, Bhandari CS, Air AB, Pant PR, Parajuli S, Sedain B",
    journal: "Journal of Durgalaxmi",
    cite: "2024;3(1):192–215",
    link: "https://doi.org/10.3126/jdl.v3i1.73870",
  },
  {
    id: 13,
    year: "2024",
    type: "Journal Article",
    title: "Impact of Technology in Classrooms in the Colleges of Kathmandu: Challenges and Policy Recommendations",
    authors: "Acharya T, Dhungana GK",
    journal: "International Journal of Higher Education",
    cite: "2024;13(4):10",
    link: "https://doi.org/10.5430/ijhe.v13n4p10",
  },
  {
    id: 14,
    year: "2024",
    type: "Study Protocol",
    title: "Nepal Family Cohort study: a study protocol",
    authors: "Kurmi OP, Chaudhary N, Delanerolle G, et al.",
    journal: "BMJ Open",
    cite: "2024;14:e088896",
    link: "https://doi.org/10.1136/bmjopen-2024-088896",
  },
  {
    id: 15,
    year: "2024",
    type: "Journal Article",
    title: "Drowning Prevention should be a Public Health Issue in Nepal",
    authors: "Hossain MS, Pant PR, van Teijlingen E, Sedain B, Rahman A",
    journal: "International Journal of Social Sciences and Management",
    cite: "2024;11(4):83–87",
    link: "https://doi.org/10.3126/ijssm.v11i4.70644",
  },
  {
    id: 16,
    year: "2024",
    type: "Editorial",
    title: "Editorial: The role of lipids in abiotic stress responses",
    authors: "Sah SK, Sofo A",
    journal: "Frontiers in Plant Science",
    cite: "2024;15",
    link: "https://doi.org/10.3389/fpls.2024.1378485",
  },
  {
    id: 17,
    year: "2024",
    type: "Journal Article",
    title: "Reshaping the fabric of health: a call for improving the respiratory health of textile workers in low- and middle-income countries",
    authors: "Adhikari TB, Sigsgaard T, Kallestrup P, Kurmi O",
    journal: "European Respiratory Journal",
    cite: "2024;63(1):2301803",
    link: "https://doi.org/10.1183/13993003.01803-2023",
  },
  {
    id: 18,
    year: "2024",
    type: "Book Chapter",
    title: "An Overview of Epigenetics and Cancer",
    authors: "Pangeni RP",
    journal: "Cancer Epigenetics and Nanomedicine, Targeting the Right Player Nanotechnology (Elsevier)",
    cite: "2024; pp. 145–167",
    link: "https://www.sciencedirect.com/science/article/abs/pii/B9780443132094000118",
  },

  // ---------- 2023 ----------
  {
    id: 19,
    year: "2023",
    type: "Journal Article",
    title: "Senior Citizens in Nepal: Policy Gaps and Recommendations",
    authors: "Acharya T, Dhungana GK, Traille K, Dhakal H",
    journal: "Gerontology and Geriatric Medicine",
    cite: "2023",
    link: "https://doi.org/10.1177/23337214231179902",
  },
  {
    id: 20,
    year: "2023",
    type: "Journal Article",
    title: "Regulated cell death pathways and their roles in homeostasis, infection, inflammation, and tumorigenesis",
    authors: "Lee E, Song C, Bae S, Ha K, Karki R",
    journal: "Experimental & Molecular Medicine",
    cite: "2023;55(8):1632–1643",
    link: "https://doi.org/10.1038/s12276-023-01069-y",
  },

  // ---------- 2022 ----------
  {
    id: 21,
    year: "2022",
    type: "Journal Article",
    title: "The role of NSD1, NSD2, and NSD3 histone methyltransferases in solid tumors",
    authors: "Topchu I, Pangeni RP, Bychkov I, et al.",
    journal: "Cellular and Molecular Life Sciences",
    cite: "2022;79:285",
    link: "https://doi.org/10.1007/s00018-022-04321-2",
  },
  {
    id: 22,
    year: "2022",
    type: "Journal Article",
    title: "Genome-wide methylation analyses identifies non-coding RNA genes dysregulated in breast tumors that metastasize to the brain",
    authors: "Pangeni RP, Olivaries I, Huen D, Buzatto VC, Dawson TP, Ashton KM, Davis C, Brodbelt AR, Jenkinson MD, Bièche I, Yang L, Latif F, Darling JL, Warr TJ, Morris MR",
    journal: "Scientific Reports",
    cite: "2022;12(1):1102",
    link: "https://pubmed.ncbi.nlm.nih.gov/35058523/",
  },
  {
    id: 23,
    year: "2022",
    type: "Journal Article",
    title: "Rational Primer and Probe Construction in PCR-Based Assays for the Efficient Diagnosis of Drifting Variants of SARS-CoV-2",
    authors: "Rana RSJB, Pokhrel N, Dulal S",
    journal: "Advances in Virology",
    cite: "2022; Article ID 2965666",
    link: "https://doi.org/10.1155/2022/2965666",
  },
  {
    id: 24,
    year: "2022",
    type: "Journal Article",
    title: "Prevalence and factors associated with self-reported injuries in Nepal: a secondary analysis of the nationally representative cross-sectional STEPS Survey, 2019",
    authors: "Dhimal M, Poudyal A, Bista B, et al.",
    journal: "BMJ Open",
    cite: "2022;12:e060561",
    link: "https://doi.org/10.1136/bmjopen-2021-060561",
  },

  // ---------- 2021 ----------
  {
    id: 25,
    year: "2021",
    type: "Journal Article",
    title: "A social construction of disability: Women with disabilities and policy problems in Nepal",
    authors: "Acharya T",
    journal: "International Journal of Intellectual Disability – Rehabilitation Journals",
    cite: "2021",
    link: "https://www.rehabilitationjournals.com/intellectual-disability-Journal/archives/2021.v2.i1.A.8",
  },
  {
    id: 26,
    year: "2021",
    type: "Systematic Review",
    title: "The Effects of Household Air Pollution (HAP) on Lung Function in Children: A Systematic Review",
    authors: "Aithal SS, Gill S, Satia I, Tyagi SK, Bolton CE, Kurmi OP",
    journal: "International Journal of Environmental Research and Public Health",
    cite: "2021;18(22):11973",
    link: "https://doi.org/10.3390/ijerph182211973",
  },
  {
    id: 27,
    year: "2021",
    type: "Journal Article",
    title: "From lockdown to vaccines: challenges and response in Nepal during the COVID-19 pandemic",
    authors: "Kansakar S, Dumre SP, Raut A, Huy NT",
    journal: "Lancet Respiratory Medicine",
    cite: "2021;9(7):694–695",
    link: "https://pubmed.ncbi.nlm.nih.gov/33932347/",
  },
];

const publicationTypes = [
  "All",
  "Journal Article",
  "Systematic Review",
  "Study Protocol",
  "Book Chapter",
  "Editorial",
];

const years = ["All", ...Array.from(new Set(publications.map((p) => p.year)))];

const Publications = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [activeYear, setActiveYear] = useState("All");

  const filtersActive = search || activeType !== "All" || activeYear !== "All";

  const resetFilters = () => {
    setSearch("");
    setActiveType("All");
    setActiveYear("All");
  };

  const filteredPublications = useMemo(() => {
    const q = search.trim().toLowerCase();
    return publications.filter((p) => {
      const matchesType = activeType === "All" || p.type === activeType;
      const matchesYear = activeYear === "All" || p.year === activeYear;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q) ||
        p.year.includes(q);
      return matchesType && matchesYear && matchesSearch;
    });
  }, [search, activeType, activeYear]);

  const featuredPublication = useMemo(
    () => publications.find((p) => p.featured),
    []
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0A192F] py-24 text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D31027]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#002B66]/40 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-[#D31027]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 backdrop-blur-sm">
              <FaBookOpen className="text-red-500" />
              <span>Research & Knowledge Portal</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              NIRI <span className="text-[#D31027]">Publications</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Peer-reviewed articles, book chapters and other scholarly work by NIRI investigators
              and collaborators, advancing multidisciplinary evidence in Nepal and beyond.
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-400">
              {publications.length} publications · {years.length - 1} years
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      {!filtersActive && featuredPublication && (
        <section className="mx-auto max-w-7xl px-6 -mt-10 lg:px-8 relative z-10">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5 transition duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-12">
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
                    <p className="text-xs font-medium text-slate-300">Published in</p>
                    <p className="text-sm font-semibold text-white">
                      {featuredPublication.journal}
                      {featuredPublication.cite && ` · ${featuredPublication.cite}`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
                <div>
                  <h3 className="text-2xl font-bold leading-snug text-[#0A192F] md:text-3xl">
                    {featuredPublication.title}
                  </h3>

                  <div className="mt-4 flex items-start gap-2 text-sm font-semibold text-[#D31027]">
                    <FaUserEdit className="mt-0.5 shrink-0" />
                    <span>{featuredPublication.authors}</span>
                  </div>
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

      {/* ================= CONTROLS ================= */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31027]">
              Knowledge Repository
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#0A192F]">
              Explore Our Research
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Type pills */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl bg-slate-200/60 p-1">
              {publicationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  aria-pressed={activeType === type}
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

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Year */}
              <select
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                aria-label="Filter by year"
                className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 shadow-sm focus:border-[#002B66] focus:outline-none focus:ring-2 focus:ring-[#002B66]/20"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y === "All" ? "All years" : y}
                  </option>
                ))}
              </select>

              {/* Search */}
              <div className="relative w-full sm:w-72">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <FaSearch className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search title, author or journal..."
                  aria-label="Search publications"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-[#002B66] focus:outline-none focus:ring-2 focus:ring-[#002B66]/20"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                  >
                    <FaTimes className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-6 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span>
            Showing {filteredPublications.length} of {publications.length} publications
          </span>
          {filtersActive && (
            <button onClick={resetFilters} className="text-[#D31027] hover:underline">
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
                <div>
                  <div className="relative flex h-28 items-center justify-between bg-gradient-to-r from-[#0A192F] to-[#002B66] px-6 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md transition group-hover:scale-110">
                      <FaFileAlt className="text-xl text-red-400" />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {publication.year}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D31027]">
                      {publication.type}
                    </span>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-[#0A192F] transition group-hover:text-[#D31027] line-clamp-4">
                      {publication.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-xs font-semibold text-slate-500">
                      {publication.authors}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      <span className="italic">{publication.journal}</span>
                      {publication.cite && (
                        <span className="text-slate-400"> · {publication.cite}</span>
                      )}
                    </p>
                  </div>
                </div>

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
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <FaSearch className="mx-auto text-4xl text-slate-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800">
              No publications match your filter
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try adjusting your search terms or selecting another category or year.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 text-sm font-semibold text-[#D31027] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A192F] via-[#002B66] to-[#0A192F] py-16 text-white">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#D31027]/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:p-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Interested in Collaborating?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Explore our ongoing research programs, join multidisciplinary projects, or
                contribute to generating high-impact evidence in Nepal.
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