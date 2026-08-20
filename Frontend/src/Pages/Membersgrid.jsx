import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiUser } from "react-icons/fi";

const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,450;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap');
    .font-display { font-family: 'Fraunces', serif; }
    .font-body { font-family: 'Source Sans 3', sans-serif; }
  `}</style>
);

// Extracted from the provided member list — partial (screenshot was cut off).
// Add the remaining members and their expertise areas as needed.
const members = [
  { name: "Abhishesh Bajracharya", credential: "" },
  { name: "Arjun Subedi", credential: "" },
  { name: "Bhagabati Sedain", credential: "" },
  { name: "Bhesh R Sharma", credential: "PhD" },
  { name: "Binisha Shrestha", credential: "" },
  { name: "Bishnu Joshi", credential: "PhD" },
  { name: "Damodar Poudel", credential: "MD, FAAFP" },
  { name: "Dhiraj Acharya", credential: "PhD" },
  { name: "Dipak Uprety", credential: "" },
  { name: "Dipesh Dhakal", credential: "PhD" },
  { name: "Dip Raj Thapa", credential: "PhD" },
  { name: "Ekanath Khatiwada", credential: "" },
  { name: "Hem Raj Dhakal", credential: "PhD" },
  { name: "Jagannath Kafle", credential: "" },
  { name: "Krishna P Paudel", credential: "PhD" },
  { name: "Manakamana Khanal", credential: "PhD" },
  { name: "Milan Bimali", credential: "PhD" },
  { name: "Kamal Joshi", credential: "PhD" },
  { name: "Om Kurmi", credential: "PhD" },
  { name: "Padam Bhandari", credential: "" },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const accents = ["#0b1f5c", "#081540", "#0e2670"];
function accentFor(name) {
  const sum = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return accents[sum % accents.length];
}

function MemberCard({ person, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: Math.min(index, 12) * 0.03, ease: "easeOut" }}
      className="bg-white border border-[#1c2b2a]/[0.14] flex flex-col items-center text-center p-6"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: accentFor(person.name) }}
      >
        <span className="font-display text-[1.05rem] text-[#e8cf7a]/90">{initials(person.name)}</span>
      </div>
      <h4 className="font-display text-[1rem] text-[#081540] leading-snug">
        {person.name}
        {person.credential && <span className="text-[#c9a227]">, {person.credential}</span>}
      </h4>
      <p className="text-[0.75rem] tracking-[0.08em] uppercase text-[#4b5957] mt-1.5">Member</p>
    </motion.div>
  );
}

export default function MembersGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    return members.filter((m) => m.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="font-body bg-[#f6f3ec] text-[#1c2b2a] min-h-screen">
      <FontImport />

      <header className="bg-[#081540] text-[#f6f3ec]">
        <div className="max-w-6xl mx-auto px-8 pt-14 pb-12">
          <div className="flex items-center gap-2.5 mb-5 text-[12.5px] tracking-[0.16em] uppercase font-semibold text-[#e8cf7a]">
            <span className="w-6 h-px bg-[#e8cf7a]" />
            Our research community
          </div>
          <h1 className="font-display font-semibold leading-[1.06] text-[2.2rem] md:text-[2.8rem] max-w-[20ch]">
            NIRI members
          </h1>
          <p className="mt-4 max-w-[60ch] text-[1.02rem] text-[#f6f3ec]/80">
            A diverse community of researchers, academics, professionals, and experts contributing
            to NIRI's research and innovation initiatives.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <p className="text-[0.9rem] text-[#4b5957]">
            {filtered.length} {filtered.length === 1 ? "member" : "members"}
          </p>
          <div className="relative w-full sm:w-72">
            <FiSearch size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4b5957]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search members..."
              className="w-full bg-white border border-[#1c2b2a]/[0.18] pl-10 pr-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[#c9a227] transition-colors rounded-[1px]"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((person, i) => (
              <MemberCard key={person.name} person={person} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#4b5957] py-16">No members match "{query}".</p>
        )}
      </main>
    </div>
  );
}