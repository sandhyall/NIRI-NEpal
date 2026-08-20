import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFlask, FaLightbulb, FaGraduationCap, FaRocket, FaHandshake, FaBuilding } from "react-icons/fa";
import {
  FiBarChart2,
  FiUsers,
  FiBookOpen,
  FiGlobe,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiLinkedin,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,450;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap');
    .font-display { font-family: 'Fraunces', serif; }
    .font-body { font-family: 'Source Sans 3', sans-serif; }
  `}</style>
);

const PAPER = "#f6f3ec";
const PAPER_DEEP = "#efe9db";
const INK = "#1c2b2a";
const PINE = "#0b1f5c";
const PINE_DEEP = "#081540";
const GOLD = "#c9a227";
const GOLD_SOFT = "#e8cf7a";
const LINE = "rgba(28,43,42,0.14)";

function SectionHeading({ numeral, title }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="font-display italic text-[#c9a227]">{numeral}.</span>
      <h2 className="font-display text-[1.9rem] text-[#081540]">{title}</h2>
      <span className="flex-1 h-px bg-[#1c2b2a]/[0.14] ml-1.5" />
    </div>
  );
}

const whatWeDo = [
  { icon: FaFlask, text: "Conduct multidisciplinary research" },
  { icon: FiBarChart2, text: "Generate evidence for informed decision-making" },
  { icon: FaLightbulb, text: "Promote research and innovation" },
  { icon: FiUsers, text: "Support researchers and emerging professionals" },
  { icon: FaGraduationCap, text: "Provide training, mentorship, and capacity building" },
  { icon: FiBookOpen, text: "Disseminate research findings and knowledge" },
  { icon: FiGlobe, text: "Foster national and international research collaboration" },
  { icon: FaRocket, text: "Translate research into practical applications" },
];

const coreValues = [
  { icon: FiAward, title: "Excellence", text: "We are committed to maintaining high standards of quality, rigor, and integrity in research." },
  { icon: FaLightbulb, title: "Innovation", text: "We encourage creative thinking, new approaches, and innovative solutions to complex challenges." },
  { icon: FaHandshake, title: "Collaboration", text: "We believe meaningful research is strengthened through partnerships, interdisciplinary exchange, and shared knowledge." },
  { icon: FiShield, title: "Integrity", text: "We uphold transparency, ethical practices, accountability, and responsible research." },
  { icon: FiTrendingUp, title: "Impact", text: "We focus on research that can contribute to positive and measurable change in society." },
];

const history = [
  { year: "2020", title: "NIRI established", text: "Nexus Institute of Research and Innovation was established with a vision of creating a platform that promotes multidisciplinary research, innovation, and knowledge generation." },
  { year: "", title: "Building a research community", text: "NIRI began bringing together researchers, academics, professionals, and experts from different disciplines to encourage collaboration and knowledge exchange." },
  { year: "", title: "Expanding research activities", text: "The institute expanded its research activities across natural sciences, applied sciences, social sciences, health, technology, and other emerging areas." },
  { year: "", title: "Strengthening collaboration", text: "NIRI developed collaborations with researchers, academic institutions, organizations, and other stakeholders to strengthen research capacity and create opportunities for knowledge sharing." },
  { year: "", title: "Research for policy and practice", text: "NIRI continued to focus on generating evidence and analytical insights that can support informed policymaking and translate research findings into practical solutions." },
  { year: "Today", title: "Today", text: "NIRI continues to promote quality research, innovation, capacity building, collaboration, and evidence-based decision-making while contributing to Nepal's growing research ecosystem." },
];

const expertiseAreas = [
  "Natural Sciences", "Applied Sciences", "Social Sciences", "Health and Biomedical Research",
  "Information Technology", "Agriculture and Environment", "Statistics and Data Science",
  "Public Policy", "Entrepreneurship and Innovation", "Other emerging research areas",
];

// Featured preview only — full rosters live on the dedicated Board and Members pages.
const board = [
  { name: "Dip Raj Thapa", credential: "PhD", role: "Chairperson" },
  { name: "Puspa Raj Pant", credential: "PhD", role: "Director, Natural & Applied Sciences" },
  { name: "Hem Raj Dhakal", credential: "PhD", role: "Director, Social Sciences" },
  { name: "Reshma Shakya", credential: "", role: "Director, Finance & Admin." },
];

const members = [
  { name: "Bhesh R Sharma", credential: "PhD" },
  { name: "Dhiraj Acharya", credential: "PhD" },
  { name: "Krishna P Paudel", credential: "PhD" },
  { name: "Manakamana Khanal", credential: "PhD" },
];

function initials(name) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

const avatarAccents = ["#0b1f5c", "#081540", "#0e2670"];
function accentFor(name) {
  const sum = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return avatarAccents[sum % avatarAccents.length];
}

const collaborationAreas = [
  { icon: FaFlask, title: "Research partnerships", text: "Collaborate on multidisciplinary research projects and knowledge generation." },
  { icon: FaGraduationCap, title: "Academic partnerships", text: "Work with NIRI on research, student engagement, academic initiatives, and knowledge exchange." },
  { icon: FaBuilding, title: "Institutional collaboration", text: "Develop joint initiatives with organizations, government agencies, and development partners." },
  { icon: FiUsers, title: "Training and capacity building", text: "Collaborate on workshops, training programs, mentorship, and research capacity development." },
  { icon: FaLightbulb, title: "Knowledge and innovation", text: "Work together to transform research findings into practical solutions, innovations, and applications." },
  { icon: FiGlobe, title: "International collaboration", text: "Connect with NIRI to develop cross-border research partnerships and knowledge-sharing opportunities." },
];

const whyCollaborate = [
  "Multidisciplinary expertise",
  "Research-focused environment",
  "Diverse professional network",
  "Evidence-based approach",
  "Opportunities for knowledge exchange",
  "Commitment to research impact",
];

const faqs = [
  { q: "What is NIRI?", a: "NIRI, the Nexus Institute of Research and Innovation, is an independent, not-for-profit research institution committed to advancing multidisciplinary research and innovation." },
  { q: "When was NIRI established?", a: "NIRI was established in 2020." },
  { q: "What areas does NIRI work in?", a: "NIRI works across multidisciplinary areas including natural sciences, applied sciences, social sciences, health, technology, agriculture, policy, and other emerging fields." },
  { q: "Who can collaborate with NIRI?", a: "NIRI welcomes collaboration with researchers, universities, academic institutions, government organizations, development partners, private-sector organizations, communities, and international institutions." },
  { q: "How can I collaborate with NIRI?", a: "You can contact NIRI with your research idea, project proposal, institutional partnership proposal, or other collaboration opportunity. Our team can discuss potential areas of mutual interest." },
  { q: "Can students collaborate with NIRI?", a: "Students and early-career researchers may have opportunities to engage with NIRI through relevant research, training, mentorship, or other initiatives, depending on available programs and opportunities." },
  { q: "Does NIRI provide research training and mentorship?", a: "NIRI supports research capacity building through training, mentorship, knowledge-sharing activities, and related initiatives." },
  { q: "Can researchers from different disciplines work with NIRI?", a: "Yes. NIRI encourages multidisciplinary research and collaboration that brings together expertise from different fields." },
  { q: "How can I become a member of NIRI?", a: "Information about membership opportunities, eligibility, and the application process can be obtained by contacting NIRI." },
  { q: "How can I contact NIRI?", a: "For research, collaboration, membership, or other inquiries, please contact the NIRI team through the contact information provided on our website." },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-t border-[#1c2b2a]/[0.14] first:border-t-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-[1.05rem] text-[#081540]">{item.q}</span>
        <FiChevronDown
          size={18}
          className={`flex-none text-[#c9a227] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="text-[#4b5957] pb-5 pr-8 max-w-[70ch]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="font-body bg-[#f6f3ec] text-[#1c2b2a] min-h-screen">
      <FontImport />

      {/* Masthead */}
      <header className="relative overflow-hidden bg-[#081540] text-[#f6f3ec]">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] pointer-events-none"
          viewBox="0 0 1080 260"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,260 120,120 210,190 320,60 430,190 540,90 640,200 760,110 860,180 960,70 1080,170 1080,260 0,260"
            fill="#b8863f"
          />
        </svg>
        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-14 pb-20">
          <div className="flex items-center gap-2.5 mb-5 text-[12.5px] tracking-[0.16em] uppercase font-semibold text-[#e8cf7a]">
            <span className="w-6 h-px bg-[#e8cf7a]" />
            About the Nexus Institute for Research and Innovation
          </div>
          <h1 className="font-display font-semibold leading-[1.06] text-[2.4rem] md:text-[3.2rem] max-w-[20ch] mb-4">
            Advancing research. Inspiring innovation. Creating impact.
          </h1>
          <p className="max-w-[60ch] text-[1.08rem] text-[#f6f3ec]/80">
            NIRI is an independent, not-for-profit research institution committed to advancing
            multidisciplinary research and innovation in Nepal — connecting research with
            real-world challenges.
          </p>
        </div>
      </header>

      {/* Info strip */}
      <div className="bg-[#c9a227] text-[#081540]">
        <div className="max-w-5xl mx-auto px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-2 text-[0.92rem] font-semibold">
          <span>Established 2020</span>
          <span className="opacity-55 font-medium">·</span>
          <span>Independent, not-for-profit institution</span>
          <span className="opacity-55 font-medium">·</span>
          <span>Multidisciplinary research and innovation</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-8 pt-16 pb-10">
        {/* I. Who we are */}
        <SectionHeading numeral="I" title="Who we are" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 mb-6">
          <div className="text-[1rem] text-[#3a4644] leading-relaxed space-y-4">
            <p>
              Established in 2020, NIRI brings together researchers, academics, professionals, and
              experts from diverse fields to generate knowledge, strengthen research capacity, and
              contribute to evidence-based decision-making.
            </p>
            <p>
              Our work connects research with real-world challenges. Through research, training,
              mentorship, collaboration, and knowledge dissemination, we aim to create meaningful
              and sustainable impact in Nepal and beyond.
            </p>
          </div>
          <div className="bg-white border border-[#1c2b2a]/[0.14] p-8">
            <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-5">
              What we do
            </div>
            <ul className="space-y-4">
              {whatWeDo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex-none w-7 h-7 rounded-full bg-[#efe9db] flex items-center justify-center text-[#0b1f5c] mt-0.5">
                    <Icon size={14} strokeWidth={1.8} />
                  </span>
                  <span className="text-[0.95rem] text-[#1c2b2a]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* II. Mission & vision */}
        <SectionHeading numeral="II" title="Mission and vision" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#0b1f5c] text-[#f6f3ec] p-8">
            <h3 className="font-display text-[1.3rem] mb-3">Our mission</h3>
            <p className="text-[#f6f3ec]/80 leading-relaxed">
              To promote and strengthen multidisciplinary research in natural, applied, and social
              sciences; provide analytical inputs for evidence-based policymaking; disseminate
              substantive research findings; and translate research into practical applications,
              industries, startups, and practices.
            </p>
          </div>
          <div className="bg-white border border-[#1c2b2a]/[0.14] p-8">
            <h3 className="font-display text-[1.3rem] mb-3 text-[#081540]">Our vision</h3>
            <p className="text-[#4b5957] leading-relaxed">
              To establish NIRI as a leading institution for quality research and innovation in
              Nepal and beyond.
            </p>
          </div>
        </div>

        <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-5">
          Our core values
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-[#1c2b2a]/[0.14] bg-white mb-16">
          {coreValues.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`p-6 ${i !== 0 ? "border-t sm:border-t-0 lg:border-t-0 sm:border-l" : ""} border-[#1c2b2a]/[0.14]`}
            >
              <div className="w-9 h-9 rounded-full bg-[#efe9db] flex items-center justify-center text-[#0b1f5c] mb-4">
                <Icon size={16} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-[1.05rem] text-[#081540] mb-2">{title}</h4>
              <p className="text-[0.88rem] text-[#4b5957] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* III. Our history */}
        <SectionHeading numeral="III" title="Our history" />
        <div className="mb-16">
          {history.map((item, i) => (
            <div key={item.title} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex-none w-10 h-10 rounded-full bg-[#0b1f5c] text-[#e8cf7a] font-display italic text-[0.8rem] flex items-center justify-center">
                  {i + 1}
                </div>
                {i !== history.length - 1 && <div className="w-px flex-1 bg-[#1c2b2a]/[0.14] my-1" />}
              </div>
              <div className={`pb-10 ${i === history.length - 1 ? "pb-0" : ""}`}>
                {item.year && (
                  <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-1.5">
                    {item.year}
                  </div>
                )}
                <h4 className="font-display text-[1.15rem] text-[#081540] mb-1.5">{item.title}</h4>
                <p className="text-[#4b5957] max-w-[62ch] leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* IV. NIRI members */}
        <SectionHeading numeral="IV" title="NIRI members" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 mb-10">
          <div className="text-[1rem] text-[#3a4644] leading-relaxed space-y-4">
            <p>
              NIRI is supported by a diverse community of researchers, academics, professionals,
              and experts who contribute their knowledge, experience, and expertise to our
              research and innovation initiatives.
            </p>
            <p>
              Our members come from different academic and professional backgrounds, creating a
              multidisciplinary environment where ideas, knowledge, and perspectives can come
              together.
            </p>
          </div>
          <div>
            <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-4">
              Our members bring expertise in
            </div>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((area) => (
                <span
                  key={area}
                  className="text-[0.82rem] px-3.5 py-1.5 bg-[#efe9db] text-[#081540] border border-[#1c2b2a]/[0.1]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold">
            Meet our members
          </div>
          <a
            href="/members"
            className="text-[0.82rem] font-semibold text-[#0b1f5c] border-b border-[#c9a227] hover:text-[#081540] transition-colors"
          >
            View all members
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              className="bg-white border border-[#1c2b2a]/[0.14] flex flex-col items-center text-center p-7"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: accentFor(m.name) }}
              >
                <span className="font-display text-[1.05rem] text-[#e8cf7a]/90">{initials(m.name)}</span>
              </div>
              <h4 className="font-display text-[1.02rem] text-[#081540] leading-snug">
                {m.name}
                {m.credential && <span className="text-[#c9a227]">, {m.credential}</span>}
              </h4>
              <p className="text-[0.75rem] tracking-[0.08em] uppercase text-[#4b5957] mt-1.5">Member</p>
            </motion.div>
          ))}
        </div>

        {/* V. Board of directors */}
        <SectionHeading numeral="V" title="Board of directors" />
        <p className="text-[1rem] text-[#3a4644] leading-relaxed max-w-[68ch] mb-8">
          NIRI is guided by a dedicated Board of Directors comprising professionals and experts
          who provide strategic direction, leadership, and oversight to the organization. The
          Board supports NIRI's commitment to research excellence, institutional development,
          collaboration, and long-term impact.
        </p>
        <div className="flex items-center justify-end mb-5">
          <a
            href="/board"
            className="text-[0.82rem] font-semibold text-[#0b1f5c] border-b border-[#c9a227] hover:text-[#081540] transition-colors"
          >
            View full board
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {board.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              className="bg-white border border-[#1c2b2a]/[0.14] flex flex-col items-center text-center p-7"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: accentFor(m.name) }}
              >
                <span className="font-display text-[1.05rem] text-[#e8cf7a]/90">{initials(m.name)}</span>
              </div>
              <h4 className="font-display text-[1.02rem] text-[#081540] leading-snug">
                {m.name}
                {m.credential && <span className="text-[#c9a227]">, {m.credential}</span>}
              </h4>
              <p className="text-[0.78rem] text-[#4b5957] mt-1.5 mb-3">{m.role}</p>
              <a
                href="/board"
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#0b1f5c] border-b border-[#c9a227]"
              >
                <FiLinkedin size={12} />
                View full profile
              </a>
            </motion.div>
          ))}
        </div>

        {/* VI. Collaborate with us */}
        <SectionHeading numeral="VI" title="Collaborate with us" />
        <p className="text-[1rem] text-[#3a4644] leading-relaxed max-w-[68ch] mb-2">
          Research becomes more impactful when knowledge, expertise, and resources come together.
          NIRI welcomes opportunities to collaborate with researchers, universities, academic
          institutions, government agencies, development organizations, private-sector
          organizations, communities, and international partners.
        </p>
        <p className="text-[1rem] text-[#3a4644] leading-relaxed max-w-[68ch] mb-10">
          Whether you are interested in conducting research, developing a project, sharing
          expertise, supporting capacity building, or translating research into practice, we
          welcome meaningful collaboration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1c2b2a]/[0.14] bg-white mb-10">
          {collaborationAreas.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`p-7 ${i % 3 !== 0 ? "sm:border-l lg:border-l" : ""} ${i >= 3 ? "border-t" : i % 2 === 1 ? "border-t sm:border-t-0" : ""} border-[#1c2b2a]/[0.14]`}
            >
              <div className="w-9 h-9 rounded-full bg-[#efe9db] flex items-center justify-center text-[#0b1f5c] mb-4">
                <Icon size={16} strokeWidth={1.8} />
              </div>
              <h4 className="font-display text-[1.02rem] text-[#081540] mb-2">{title}</h4>
              <p className="text-[0.88rem] text-[#4b5957] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 mb-16">
          <div>
            <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[#c9a227] font-semibold mb-4">
              Why collaborate with NIRI
            </div>
            <ul className="space-y-2.5">
              {whyCollaborate.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.95rem] text-[#1c2b2a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0b1f5c] text-[#f6f3ec] p-8 flex flex-col justify-center">
            <h3 className="font-display text-[1.3rem] mb-2">Start a conversation</h3>
            <p className="text-[#f6f3ec]/80 mb-6">
              Have an idea for a research project or partnership? Let's explore how we can work
              together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#collaborate"
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e8cf7a] text-[#081540] font-semibold text-[0.9rem] px-5 py-3 rounded-[1px] transition-colors"
              >
                Collaborate with us
                <FiArrowRight size={14} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#f6f3ec]/40 hover:border-[#f6f3ec] text-[#f6f3ec] font-semibold text-[0.9rem] px-5 py-3 rounded-[1px] transition-colors"
              >
                Contact NIRI
              </a>
            </div>
          </div>
        </div>

        {/* VII. FAQ */}
        <SectionHeading numeral="VII" title="Frequently asked questions" />
        <p className="text-[1rem] text-[#3a4644] mb-6">
          Find answers to common questions about NIRI, our research activities, membership, and
          collaboration opportunities.
        </p>
        <div className="border border-[#1c2b2a]/[0.14] bg-white px-7">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-10 bg-[#efe9db] border border-[#1c2b2a]/[0.14] p-8 flex items-center justify-between flex-wrap gap-4 mb-16">
          <div>
            <h4 className="font-display text-[1.1rem] text-[#081540] mb-1">Still have a question?</h4>
            <p className="text-[#4b5957]">We're happy to hear from you.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0b1f5c] hover:bg-[#081540] text-[#f6f3ec] font-semibold text-[0.9rem] px-5 py-3 rounded-[1px] transition-colors whitespace-nowrap"
          >
            Contact us
            <FiArrowRight size={14} />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1c2b2a]/[0.14] py-8">
        <div className="max-w-5xl mx-auto px-8 flex justify-between flex-wrap gap-3 text-[0.85rem] text-[#5c6b68]">
          <div>
            <strong className="font-display font-semibold text-[#081540]">NIRI</strong> — Nexus
            Institute for Research and Innovation
          </div>
          <div>Lalitpur, Nepal · Registered not-for-profit-sharing institution</div>
        </div>
      </footer>
    </div>
  );
}