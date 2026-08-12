import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const EXPLORE_LINKS = [
  { label: "About NIRI", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Programs", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
  { label: "Our Team", href: "#team" },
];

const INVOLVED_LINKS = [
  { label: "Research Opportunities", href: "#research-opportunities" },
  { label: "Internships", href: "#internships" },
  { label: "Collaborate With Us", href: "#collaborate" },
  { label: "Join Our Community", href: "#join-community" },
];

const SOCIALS = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/NIRINepal.org/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/nirinepal/",
  },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/niri_nepal" },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nirinepal/",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@NIRINepal",
  },
];

const Footer = () => {
  return (
    <footer
      className="relative bg-[#071744] px-5 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-8 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,162,39,0.55) 50%, transparent)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 sm:gap-10 md:gap-8 pb-12 sm:pb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={logo}
                alt="NIRI Logo"
                className="w-[92px] h-[92px] object-contain"
              />
              <span
                className="text-white text-2xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                }}
              >
                NIRI
              </span>
            </div>
            <div
              className="text-[#c9a227] text-[11px] tracking-[0.15em] mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              NEXUS INSTITUTE OF RESEARCH AND INNOVATION
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Advancing multidisciplinary research and innovation for a better
              future.
            </p>

            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 border border-white/20 text-white/70
                               hover:border-[#c9a227] hover:text-[#c9a227] transition-colors
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h4
              className="text-white text-[11px] tracking-[0.25em] mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Involved */}
          <nav aria-label="Get Involved">
            <h4
              className="text-white text-[11px] tracking-[0.25em] mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              GET INVOLVED
            </h4>
            <ul className="space-y-3">
              {INVOLVED_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-[11px] tracking-[0.25em] mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              CONTACT
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <FaMapMarkerAlt
                  size={13}
                  className="mt-0.5 text-[#c9a227] shrink-0"
                />
                <span>Lalitpur, Nepal</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <FaEnvelope
                  size={13}
                  className="mt-0.5 text-[#c9a227] shrink-0"
                />
                <a
                  href="mailto:office@nirinepal.org"
                  className="hover:text-white transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
                >
                  office@nirinepal.org
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <FaPhoneAlt
                  size={12}
                  className="mt-0.5 text-[#c9a227] shrink-0"
                />
                <a
                  href="tel:+9779848866260"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
                >
                  +977 9848866260
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-xs text-center sm:text-left"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            © 2026 Nexus Institute of Research and Innovation. All rights
            reserved.
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-white/50 text-xs tracking-wide hover:text-[#c9a227] transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            BACK TO TOP
            <FaArrowUp
              size={11}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
