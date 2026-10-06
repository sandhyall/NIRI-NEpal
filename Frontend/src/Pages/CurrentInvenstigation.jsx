import React, { useState, useMemo } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";

const IMG = "https://nirinepal.org/wp-content/uploads";

// Source: nirinepal.org/niri-members and /social-sciences.
// `field` for people not listed on the Social Sciences page is inferred from their work
// (the Natural & Applied Sciences page was offline), so adjust if needed.
const investigatorsData = [
  {
    id: 1,
    name: "Om Kurmi, PhD",
    role: "Investigator, Natural & Applied Sciences",
    affiliation: "Coventry University, UK",
    field: "natural-applied",
    bio: "Associate Professor in Epidemiology and Evidence-based Healthcare Research. Chairs the European Respiratory Society's Respiratory Epidemiology Group and has set up a family cohort in two regions of Nepal to study child lung health.",
    expertise: ["Respiratory Epidemiology", "Environmental Health", "Observational Research"],
    image: `${IMG}/2022/12/7.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/omkurmi/",
      twitter: "https://twitter.com/omkurmi",
    },
  },
  {
    id: 2,
    name: "Tara Sigdel, PhD",
    role: "Director, Natural & Applied Sciences",
    affiliation: "University of California",
    field: "natural-applied",
    bio: "Associate Professor of Surgery who identifies non-invasive biomarkers for monitoring kidney transplant patients. Author of 90+ peer-reviewed papers and a NIRI founder, he also mentors public high school students in Nepal.",
    expertise: ["Biomarker Discovery", "Transplant Immunology", "Biochemistry"],
    image: `${IMG}/2022/12/11.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/tara-sigdel-2197204a",
      facebook: "https://www.facebook.com/tksigdel",
      youtube: "https://www.youtube.com/user/tksigdel",
    },
  },
  {
    id: 3,
    name: "Rajendra Pangeni, PhD",
    role: "Executive Director",
    affiliation: "NIRI",
    field: "natural-applied",
    bio: "Trained in cancer epigenetics during his PhD and postdoctoral fellowships at Northwestern University and City of Hope. Works on cancer genetics, metastasis, experimental therapeutics and drug discovery.",
    expertise: ["Cancer Epigenetics", "Cancer Epidemiology", "Drug Discovery"],
    image: `${IMG}/2022/12/10.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/rajendra-pangeni",
      twitter: "https://twitter.com/Rajendra078",
    },
  },
  {
    id: 4,
    name: "Tulasi Acharya, PhD",
    role: "Member, Social Sciences",
    affiliation: "South Georgia State College, USA",
    field: "social-sciences",
    bio: "Professor of Professional Writing and Public Administration. His research looks at marginalized communities, disability, gender and policy, using narrative analysis, critical theory and post-colonial frameworks.",
    expertise: ["Disability & Policy", "Gender Studies", "Narrative Analysis"],
    image: `${IMG}/2022/12/14.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/tulasi-acharya-ph-d-42649b11a",
      twitter: "https://twitter.com/tulsirames",
      facebook: "https://www.facebook.com/apersonwithbhav",
      youtube: "https://www.youtube.com/user/tacharya1",
    },
  },
  {
    id: 5,
    name: "Umed Pun, PhD",
    role: "Investigator, Natural & Applied Sciences",
    affiliation: "Agriculture and Forestry University, Nepal",
    field: "natural-applied",
    bio: "PhD from Lincoln University, New Zealand, with postdoctoral work in Japan. Former lecturer at IAAS, Tribhuvan University; since 2004 he has run an agro-based horticulture business in Nepal and taught as visiting and adjunct faculty.",
    expertise: ["Horticulture", "Agribusiness", "Floriculture"],
    image: `${IMG}/2025/08/38.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/umed-pun-70188826",
      twitter: "https://twitter.com/UmedPun",
      facebook: "https://www.facebook.com/umed.pun",
    },
  },
  {
    id: 6,
    name: "Saroj Kumar Sah, PhD",
    role: "Investigator, Natural & Applied Sciences",
    affiliation: "Brookhaven National Laboratory, USA",
    field: "natural-applied",
    bio: "Plant molecular biologist working on boosting oil synthesis in the leaves and stems of Arabidopsis, sugarcane and rice. Has also worked on abiotic stress, gene editing and ABA signaling.",
    expertise: ["Plant Molecular Biology", "Gene Editing", "Abiotic Stress"],
    image: `${IMG}/2022/12/28.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/saroj-kumar-sah/",
      twitter: "https://twitter.com/sarojbiotech",
      facebook: "https://www.facebook.com/Saroj1021",
    },
  },
  {
    id: 7,
    name: "Puspa Raj Pant, PhD",
    role: "Chairperson & Investigator, Social Sciences",
    affiliation: "University of Bristol, UK",
    field: "social-sciences",
    bio: "Public health researcher specializing in injury prevention, road safety and safety promotion, with over a decade of experience. Fellow of the Royal Society of Public Health and a visiting Fellow at Bristol since 2009.",
    expertise: ["Injury Prevention", "Road Safety", "Public Health Surveys"],
    image: `${IMG}/2022/12/8.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/pupant/",
      twitter: "https://twitter.com/Puspa_RPant",
      facebook: "https://www.facebook.com/puspa.pant",
    },
  },
  {
    id: 8,
    name: "Bhagabati Sedain",
    role: "Investigator, Social Sciences",
    affiliation: "Padmakanya Campus, Kathmandu",
    field: "social-sciences",
    bio: "Senior Lecturer and demographer completing a doctorate on the social impacts of road traffic injuries. Contributed to Nepal's National Injury Prevention Strategy and advises on low-cost municipal-level interventions.",
    expertise: ["Injury Research", "Drowning Prevention", "Demography"],
    image: `${IMG}/2023/07/PP.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/bhagabati-sedain-b3ba2819/",
      twitter: "https://twitter.com/Bhagabati5",
      facebook: "https://www.facebook.com/bhagabati.sedain",
    },
  },
  {
    id: 9,
    name: "Jagannath Kafle",
    role: "Investigator, Social Sciences",
    affiliation: "University of Turku, Finland",
    field: "social-sciences",
    bio: "Doctoral researcher in Economic Geography at the Turku School of Economics, with an MA in Economics from Tribhuvan University and an MBA from Finland. Focuses on aid, policy and development discourse, and sustainable agriculture.",
    expertise: ["Development Economics", "Policy Intervention", "Sustainability"],
    image: `${IMG}/2025/02/jagannath.png`,
    links: {
      facebook: "https://www.facebook.com/jagannath.kafle",
    },
  },
  {
    id: 10,
    name: "Milan Bimali, PhD",
    role: "Investigator, Natural & Applied Sciences",
    affiliation: "Biostatistics",
    field: "natural-applied",
    bio: "Biostatistician with graduate training in mathematics and biostatistics and a postgraduate position at Yale. Supports researchers with grant development, study design, data analysis and dissemination; co-chairs a committee of the American Statistical Association.",
    expertise: ["Biostatistics", "Study Design", "Data Analysis"],
    image: `${IMG}/2022/12/6.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/milan-bimali-611406a3",
      facebook: "https://www.facebook.com/mbimali",
    },
  },
  {
    id: 11,
    name: "Shyam Dumre, PhD",
    role: "Investigator, Natural & Applied Sciences",
    affiliation: "Central Department of Microbiology, Tribhuvan University",
    field: "natural-applied",
    bio: "Senior Research Scientist with a PhD in Molecular Biology and Immunology from Thammasat University, Thailand (2014) and an MSc in Medical Microbiology from Tribhuvan University.",
    expertise: ["Molecular Biology", "Immunology", "Medical Microbiology"],
    image: `${IMG}/2022/12/13.jpg`,
    links: {
      linkedin: "https://www.linkedin.com/in/ddumre",
      twitter: "https://twitter.com/spdumre",
      facebook: "https://www.facebook.com/shyam.dumre",
    },
  },
];

// Each field gets one colour, used for the tab dot, card edge, role and tags.
const FIELDS = {
  "social-sciences": { label: "Social Sciences", color: "#B4243B", tint: "#FBEDEF" },
  "natural-applied": { label: "Natural & Applied Sciences", color: "#0B6E7A", tint: "#E6F3F5" },
};

const socialMeta = {
  linkedin: { Icon: FaLinkedinIn, label: "LinkedIn" },
  twitter: { Icon: FaTwitter, label: "Twitter" },
  facebook: { Icon: FaFacebookF, label: "Facebook" },
  youtube: { Icon: FaYoutube, label: "YouTube" },
};

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Figtree:wght@400;500;600&display=swap');
.niri-head{font-family:'Bricolage Grotesque',system-ui,sans-serif}
.niri-body{font-family:'Figtree',system-ui,sans-serif}
@media (prefers-reduced-motion:reduce){.niri-body *{transition:none!important}}`;

const initials = (name) =>
  name
    .replace(/,.*$/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Photo({ person, color }) {
  const [failed, setFailed] = useState(false);

  if (!person.image || failed) {
    return (
      <div
        className="niri-head h-full w-full flex items-center justify-center text-3xl font-extrabold text-white select-none"
        style={{ background: color }}
      >
        {initials(person.name)}
      </div>
    );
  }

  return (
    <img
      src={person.image}
      alt={person.name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top"
    />
  );
}

function InvestigatorCard({ person }) {
  const [open, setOpen] = useState(false);
  const { color, tint } = FIELDS[person.field];
  const links = Object.entries(person.links);

  return (
    <article
      className="bg-white rounded-lg border border-slate-200 flex flex-col overflow-hidden"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <div className="flex gap-4 p-5">
        <div className="w-24 h-32 sm:w-28 sm:h-36 shrink-0 rounded-md overflow-hidden bg-slate-100">
          <Photo person={person} color={color} />
        </div>

        <div className="min-w-0">
          <h3 className="niri-head text-xl font-extrabold leading-tight text-slate-900">
            {person.name}
          </h3>
          <p className="text-sm font-semibold mt-1" style={{ color }}>
            {person.role}
          </p>
          <p className="text-sm text-slate-500 mt-0.5">{person.affiliation}</p>

          <ul className="flex flex-wrap gap-1.5 mt-3">
            {person.expertise.map((skill) => (
              <li
                key={skill}
                className="text-xs font-medium px-2 py-0.5 rounded"
                style={{ background: tint, color }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-5 pb-4">
        <p
          className={`text-sm leading-relaxed text-slate-700 ${open ? "" : "line-clamp-3"}`}
        >
          {person.bio}
        </p>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-1.5 text-sm font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          {open ? "Show less" : "Read full bio"}
        </button>
      </div>

      {links.length > 0 && (
        <div className="mt-auto px-5 py-3 border-t border-slate-100 flex gap-2">
          {links.map(([key, href]) => {
            const { Icon, label } = socialMeta[key];
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on ${label}`}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-colors hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <Icon size={13} />
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}

const CurrentInvestigators = () => {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c = { all: investigatorsData.length };
    investigatorsData.forEach((p) => (c[p.field] = (c[p.field] || 0) + 1));
    return c;
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return investigatorsData.filter((p) => {
      if (active !== "all" && p.field !== active) return false;
      if (!q) return true;
      return [p.name, p.role, p.affiliation, ...p.expertise]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [active, query]);

  const tabs = [
    { key: "all", label: "All" },
    ...Object.entries(FIELDS).map(([key, f]) => ({ key, label: f.label, color: f.color })),
  ];

  return (
    <section className="niri-body bg-[#F4F7F9] min-h-screen py-14 px-4 sm:px-6 lg:px-8 text-slate-900">
      <style>{FONTS}</style>

      <div className="max-w-6xl mx-auto">
        <header className="max-w-2xl mb-10">
          <h1 className="niri-head text-4xl sm:text-5xl font-extrabold tracking-tight">
            Current Investigators
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {counts.all} researchers across {Object.keys(FIELDS).length} fields,
            working from Nepal, the UK, the US, Finland and beyond.
          </p>
        </header>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div role="group" aria-label="Filter by field" className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const selected = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  aria-pressed={selected}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                    selected
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {t.color && (
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: t.color, boxShadow: selected ? "0 0 0 2px #fff" : "none" }}
                    />
                  )}
                  {t.label}
                  <span className={selected ? "text-white/70" : "text-slate-400"}>
                    {counts[t.key]}
                  </span>
                </button>
              );
            })}
          </div>

          <label className="relative block md:w-72">
            <span className="sr-only">Search investigators</span>
            <FaSearch
              size={13}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, topic or university"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-900"
            />
          </label>
        </div>

        {list.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {list.map((person) => (
              <InvestigatorCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-slate-300 rounded-lg py-14 px-6 text-center">
            <p className="niri-head text-xl font-extrabold">No investigators match “{query}”</p>
            <p className="mt-2 text-slate-600">Try a shorter search, or switch to another field.</p>
            <button
              onClick={() => {
                setQuery("");
                setActive("all");
              }}
              className="mt-5 px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentInvestigators;