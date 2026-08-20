import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFacebook, FiLinkedin, FiYoutube, FiUser } from "react-icons/fi";

const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,450;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap');
    .font-display { font-family: 'Fraunces', serif; }
    .font-body { font-family: 'Source Sans 3', sans-serif; }
  `}</style>
);

// TODO: assign each director's real category from your records —
// values must match one of the `tabs` keys below.
const directors = [
  { name: "Dip Raj Thapa", credential: "PhD", category: "chairperson", socials: ["linkedin", "youtube"] },
  { name: "Dipak Uprety", credential: "", category: "natural-applied", socials: ["facebook"] },
  { name: "Ekanath Khatiwada", credential: "", category: "natural-applied", socials: ["facebook", "linkedin"] },
  { name: "Hem Raj Dhakal", credential: "PhD", category: "social-sciences", socials: ["linkedin"] },
  { name: "Om Kurmi", credential: "PhD", category: "social-sciences", socials: ["linkedin", "youtube", "facebook"] },
  { name: "Puspa Raj Pant", credential: "PhD", category: "natural-applied", socials: ["linkedin", "facebook"] },
  { name: "Rajendra Pangeni", credential: "", category: "natural-applied", socials: ["linkedin", "youtube"] },
  { name: "Reshma Shakya", credential: "", category: "finance-admin", socials: ["linkedin", "facebook"] },
  { name: "Shyam Dumre", credential: "", category: "social-sciences", socials: ["facebook", "linkedin"] },
  { name: "Tara Sigdel", credential: "PhD", category: "natural-applied", socials: ["linkedin", "youtube"] },
  { name: "Tulasi Acharya", credential: "PhD", category: "finance-admin", socials: ["facebook", "linkedin"] },
];

const tabs = [
  { key: "all", label: "Board of Directors" },
  { key: "chairperson", label: "Chairperson" },
  { key: "natural-applied", label: "Directors (Natural & Applied Sciences)" },
  { key: "social-sciences", label: "Directors (Social Sciences)" },
  { key: "finance-admin", label: "Director (Finance & Admin.)" },
];

const socialIcon = { facebook: FiFacebook, linkedin: FiLinkedin, youtube: FiYoutube };

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Deterministic subtle accent variation so the grid doesn't feel uniform
const accents = ["#0b1f5c", "#081540", "#0e2670"];
function accentFor(name) {
  const sum = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return accents[sum % accents.length];
}

function DirectorCard({ person }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="bg-white border border-[#1c2b2a]/[0.14] group"
    >
      <div
        className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden relative"
        style={{ backgroundColor: accentFor(person.name) }}
      >
        <span className="font-display text-[2.4rem] text-[#e8cf7a]/90 select-none">
          {initials(person.name)}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div className="p-5">
        <h4 className="font-display text-[1.02rem] text-[#081540] leading-snug">
          {person.name}
          {person.credential && (
            <span className="text-[#c9a227]">, {person.credential}</span>
          )}
        </h4>
        <p className="text-[0.75rem] tracking-[0.08em] uppercase text-[#4b5957] mt-1.5">
          {tabs.find((t) => t.key === person.category)?.label.replace(/^Board of Directors$/, "Director") ||
            "Board of Directors"}
        </p>

        {person.socials?.length > 0 && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#1c2b2a]/[0.1]">
            {person.socials.map((s) => {
              const Icon = socialIcon[s];
              return (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-7 h-7 rounded-full bg-[#efe9db] flex items-center justify-center text-[#0b1f5c] hover:bg-[#0b1f5c] hover:text-[#e8cf7a] transition-colors"
                >
                  <Icon size={13} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function BoardOfDirectors() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? directors : directors.filter((d) => d.category === active)),
    [active]
  );

  return (
    <div className="font-body bg-[#f6f3ec] text-[#1c2b2a] min-h-screen">
      <FontImport />

      <header className="bg-[#081540] text-[#f6f3ec]">
        <div className="max-w-6xl mx-auto px-8 pt-14 pb-12">
          <div className="flex items-center gap-2.5 mb-5 text-[12.5px] tracking-[0.16em] uppercase font-semibold text-[#e8cf7a]">
            <span className="w-6 h-px bg-[#e8cf7a]" />
            Leadership and governance
          </div>
          <h1 className="font-display font-semibold leading-[1.06] text-[2.2rem] md:text-[2.8rem] max-w-[20ch]">
            Board of Directors
          </h1>
          <p className="mt-4 max-w-[60ch] text-[1.02rem] text-[#f6f3ec]/80">
            NIRI is guided by a dedicated Board of Directors comprising professionals and experts
            who provide strategic direction, leadership, and oversight to the organization.
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-[#1c2b2a]/[0.14] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-8 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className="relative px-4 py-4 text-[0.82rem] font-semibold whitespace-nowrap transition-colors"
                style={{ color: active === t.key ? "#081540" : "#4b5957" }}
              >
                {t.label}
                {active === t.key && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#c9a227]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((person) => (
              <DirectorCard key={person.name} person={person} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#4b5957] py-16">No directors found in this category.</p>
        )}
      </main>
    </div>
  );
}