import React, { useState } from "react";
import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaUniversity,
  FaHandshake,
  FaGlobe,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";

// Put fonepay-qr.png in your project's public folder (served at /fonepay-qr.png),
// or change this path to wherever you keep the image.
const QR_SRC = "/fonepay-qr.png";
import  pay from "../assets/fonepay-qr.png";

const BANK_DETAILS = [
  { label: "Bank Name", value: "Nabil Bank Limited" },
  { label: "Bank Address", value: "Kumaripati Branch, Lalitpur, Nepal" },
  { label: "Account Name", value: "Nexus Institute of Research and Innovation" },
  { label: "Account Number", value: "08301017500184", copyable: true },
];

const FONEPAY = {
  name: "Nexus Institute Of Research & Innovation",
  terminal: "2222020011247778",
  address: "Mahalaxmi MC",
};

const SUPPORT_OPTIONS = [
  {
    icon: <FaHandHoldingHeart className="text-[#c8102e]" size={24} />,
    title: "Research Philanthropy",
    copy: "Support independent scientific inquiries, community health surveys, and longitudinal studies addressing pressing non-communicable diseases in Nepal.",
    badge: "For Individuals",
    href: "#support-donate",
  },
  {
    icon: <FaUniversity className="text-[#071744]" size={24} />,
    title: "Institutional Grants & Funding",
    copy: "Partner with NIRI as a funding body, academic institution, or international NGO to scale up evidence-based public health interventions.",
    badge: "For Organizations",
    href: "#support-grants",
  },
  {
    icon: <FaHandshake className="text-[#c9a227]" size={24} />,
    title: "Corporate Social Responsibility (CSR)",
    copy: "Sponsor regional health camps, senior citizen care initiatives, and capacity-building technical workshops in remote geographies.",
    badge: "For Businesses",
    href: "#support-csr",
  },
  {
    icon: <FaGlobe className="text-[#2D6A4F]" size={24} />,
    title: "Global Academic Partnerships",
    copy: "Collaborate on joint peer-reviewed publications, researcher exchange programs, and cross-border bioinformatics training modules.",
    badge: "For Universities",
    href: "#support-partnerships",
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable; ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy account number"
      className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 border border-[#14213d]/15 text-[#14213d]/70 hover:text-[#c8102e] hover:border-[#c8102e] transition-colors"
    >
      {copied ? <FaCheck size={10} /> : <FaRegCopy size={10} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

const SupportSection = () => {
  return (
    <section
      id="support"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Section Intro */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 sm:mb-5 font-semibold uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            SUPPORT OUR MISSION
          </span>

          <h2
            className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-5 sm:mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
          >
            Empowering Research. Shaping Public Health.
          </h2>

          <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
            Independent research is vital for creating sustainable health solutions in Nepal.
            Your support enables NIRI to conduct rigorous field investigations, train early-career
            scientists, and turn empirical evidence into actionable policy change.
          </p>
        </div>

        {/* Support Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {SUPPORT_OPTIONS.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#14213d]/10
                         hover:border-[#14213d]/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#f7f4ec] rounded flex items-center justify-center border border-[#14213d]/5">
                    {item.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.15em] px-2.5 py-1 bg-[#14213d]/5 text-[#14213d]/80 font-mono uppercase rounded">
                    {item.badge}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-xl leading-snug mb-3 group-hover:text-[#c8102e] transition-colors"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>

                <p className="text-[#14213d]/65 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.copy}
                </p>
              </div>

              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14213d] group-hover:text-[#c8102e] transition-colors uppercase font-mono pt-4 border-t border-[#14213d]/5"
              >
                Get Involved{" "}
                <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Donate: bank transfer + Fonepay QR */}
        <div id="support-donate" className="scroll-mt-24 mb-16">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h3
              className="text-[#14213d] text-2xl sm:text-3xl mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
            >
              Ways to give
            </h3>
            <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed mb-3">
              Building a research institution in Nepal is a long-term commitment and a team effort.
              NIRI welcomes support from people in the country and abroad: monetary donations,
              scholarships for students and interns, salary support for research staff, project
              funding, laboratory equipment, and the setting up of laboratories.
            </p>
            <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
              You can give by bank transfer or by scanning the Fonepay QR code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Bank details */}
            <div className="bg-white border border-[#14213d]/10 shadow-sm p-6 sm:p-8">
              <h4
                className="text-[#071744] text-xl mb-6"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
              >
                NIRI Bank Details
              </h4>

              <dl className="divide-y divide-[#14213d]/10">
                {BANK_DETAILS.map((row) => (
                  <div
                    key={row.label}
                    className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4"
                  >
                    <dt className="text-xs text-[#14213d]/55 sm:w-36 shrink-0">{row.label}</dt>
                    <dd className="flex-1 flex items-center justify-between gap-3 text-[#14213d] text-sm sm:text-[15px] font-medium">
                      <span className={row.copyable ? "font-mono tracking-wide" : ""}>
                        {row.value}
                      </span>
                      {row.copyable && <CopyButton text={row.value} />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Fonepay QR */}
            <div className="bg-white border border-[#14213d]/10 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <img
                src={pay}
                alt="Fonepay QR code for Nexus Institute of Research & Innovation"
                loading="lazy"
                className="w-48 sm:w-52 h-auto border border-[#14213d]/10"
              />
              <div className="text-center sm:text-left">
                <h4
                  className="text-[#071744] text-xl mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  Pay with Fonepay
                </h4>
                <p className="text-[#14213d]/70 text-sm leading-relaxed mb-4">
                  Open your Fonepay member mobile banking app, digital wallet or UnionPay app, scan
                  the code, confirm the payment details and pay.
                </p>
                <p className="text-[#14213d] text-sm font-medium">{FONEPAY.name}</p>
                <p className="text-[#14213d]/60 text-xs mt-1">
                  Terminal: <span className="font-mono">{FONEPAY.terminal}</span>
                </p>
                <p className="text-[#14213d]/60 text-xs">Address: {FONEPAY.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Contact Callout Box */}
        <div className="bg-[#14213d] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#14213d]/20">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] tracking-[0.3em] text-[#c9a227] mb-3 font-mono uppercase">
              COLLABORATE WITH NIRI
            </span>
            <h3
              className="text-2xl sm:text-3xl mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
            >
              Have a specific proposal or institutional inquiry?
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We welcome dialogue with academic researchers, global health funds, and philanthropic
              leaders committed to transforming healthcare frameworks across the region.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:support@nirinepal.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase
                         hover:bg-[#a80d26] transition-colors duration-300 font-mono"
            >
              Contact Partnership Team
              <FaArrowRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;