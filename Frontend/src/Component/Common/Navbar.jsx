// import React, { useState, useRef, useEffect, useCallback } from "react";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
//   FaBars,
//   FaTimes,
//   FaChevronDown,
// } from "react-icons/fa";
// import logo from "../../assets/logo.jpeg";
// import { Link } from "react-router-dom";

// const CONTACT_EMAIL = "office@nirinepal.org";

// const SOCIAL_LINKS = [
//   { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
//   { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
//   { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
//   { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
// ];

// const TOP_BAR_BUTTONS = [
//   { label: "NIRI Email Login", href: "#" },
//   { label: "NIRI USA", href: "#" },
// ];

// const NAV_LINKS = [
//   {
//     label: "About Us",
//     href: "about",
//     children: [
//       { label: "Our Mission", href: "about" },
//       { label: "Our Members", href: "member" }, 
//       { label: "Board Members", href: " BoardOfDirectors" },
//     ],
//   },
//   {
//     label: "Investigators",
//     href: "#investigators",
//     children: [
//       { label: "Current Investigators", href: "current" },
//       { label: "Become an Investigator", href: "invest" },
//     ],
//   },
//   { label: "Projects", href: "project" },
//   {
//   label: "Get Involved",
//   href: "#get-involved",
//   children: [
//     { label: "Volunteer", href: "vol" },
//     { label: "Research Internship", href: "internship" },
//     { label: "Join NIRI Community", href: "#join-community" },
//     { label: "Donate", href: "donate" },
//     { label: "Partner With Us", href: "partner" },
//   ],
// },
//   {
//     label: "Activities",
//     href: "#activities",
//     children: [
//       { label: "Events", href: "event" },
//       { label: "News", href: "news" },
//          { label: "Publication", href: "publication" },
//           { label: "Newsletter", href: "newspaper" },
//            { label: "Blogs & Article", href: "blog" },
          
//     ],
//   },
//   { label: "Support", href: "support" },

// ];

// function Seal() {
//   return (
//     <Link to="/">
//       <img
//         src={logo}
//         alt="NIRI Logo"
//         width={60}
//         height={60}
//         className="w-[60px] h-[60px] object-contain shrink-0"
//       />
//     </Link>
//   );
// }

// function Wordmark() {
//   return (
//     <a
//       href="#home"
//       className="flex items-center gap-3 shrink-0 group focus:outline-none"
//     >
//       <Seal />
//       <span className="flex flex-col leading-none">
//         <span
//           className="text-white text-[20px] md:text-[22px] tracking-wide"
//           style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
//         >
//           NIRI
//         </span>
//         <span
//           className="hidden xs:block sm:block text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.28em] text-[#c9a227] mt-1"
//           style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//         >
//           NEXUS INSTITUTE OF RESEARCH AND INNOVATION
//         </span>
//       </span>
//     </a>
//   );
// }

// function BracketLink({ href, children, className = "", onClick }) {
//   return (
//     <a
//       href={href}
//       onClick={onClick}
//       className={`group/link relative inline-flex items-center px-1.5 py-1 rounded-sm
//                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]
//                   ${className}`}
//     >
//       <span
//         aria-hidden="true"
//         className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-focus-visible/link:opacity-100 group-focus-visible/link:translate-x-0 transition-all duration-200 ease-out mr-1"
//         style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//       >
//         [
//       </span>
//       <span>{children}</span>
//       <span
//         aria-hidden="true"
//         className="opacity-0 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-focus-visible/link:opacity-100 group-focus-visible/link:translate-x-0 transition-all duration-200 ease-out ml-1"
//         style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//       >
//         ]
//       </span>
//     </a>
//   );
// }

// function DesktopDropdown({ item }) {
//   const [open, setOpen] = useState(false);
//   const closeTimer = useRef(null);
//   const containerRef = useRef(null);

//   const handleEnter = () => {
//     if (closeTimer.current) clearTimeout(closeTimer.current);
//     setOpen(true);
//   };
//   const handleLeave = () => {
//     closeTimer.current = setTimeout(() => setOpen(false), 120);
//   };

//   useEffect(() => {
//     if (!open) return;
//     const handleClick = (e) => {
//       if (containerRef.current && !containerRef.current.contains(e.target))
//         setOpen(false);
//     };
//     const handleKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     document.addEventListener("mousedown", handleClick);
//     document.addEventListener("keydown", handleKey);
//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, [open]);

//   if (!item.children) {
//     return (
//       <BracketLink
//         href={item.href}
//         className="text-[14px] font-medium text-white/90 hover:text-white transition-colors"
//       >
//         {item.label}
//       </BracketLink>
//     );
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//     >
//       <button
//         onClick={() => setOpen((o) => !o)}
//         aria-expanded={open}
//         aria-haspopup="true"
//         className="flex items-center gap-1 px-1.5 py-1 rounded-sm text-[14px] font-medium text-white/90 hover:text-white transition-colors
//                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
//       >
//         {item.label}
//         <FaChevronDown
//           size={12}
//           className={`transition-transform duration-200 text-[#c9a227] ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       <div
//         role="menu"
//         className={`absolute left-0 top-full pt-2 min-w-[230px] transition-all duration-150 origin-top
//                     ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
//       >
//         <ul className="bg-[#f7f4ec] border-t-2 border-[#c9a227] shadow-xl overflow-hidden py-1">
//           {item.children.map((child, i) => (
//             <li key={child.label} role="none">
//               {i > 0 && <div className="mx-4 h-px bg-[#14213d]/10" />}
//               <a
//                 href={child.href}
//                 role="menuitem"
//                 className="group/item flex items-center gap-2 px-4 py-2.5 text-sm text-[#14213d] hover:text-[#c8102e] transition-colors
//                            focus:outline-none focus-visible:bg-[#14213d]/5"
//               >
//                 <span
//                   className="text-[#c9a227] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-focus-visible/item:opacity-100 group-focus-visible/item:translate-x-0 transition-all duration-150"
//                   style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//                 >
//                   {">"}
//                 </span>
//                 {child.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function MobileAccordionItem({ item, onNavigate }) {
//   const [open, setOpen] = useState(false);

//   if (!item.children) {
//     return (
//       <a
//         href={item.href}
//         onClick={onNavigate}
//         className="block px-5 py-3.5 text-[15px] font-medium text-white/95 border-b border-white/10
//                    focus:outline-none focus-visible:bg-white/5"
//       >
//         {item.label}
//       </a>
//     );
//   }

//   return (
//     <div className="border-b border-white/10">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex items-center justify-between px-5 py-3.5 text-[15px] font-medium text-white/95
//                    focus:outline-none focus-visible:bg-white/5"
//         aria-expanded={open}
//       >
//         {item.label}
//         <FaChevronDown
//           size={14}
//           className={`transition-transform duration-200 text-[#c9a227] ${open ? "rotate-180" : ""}`}
//         />
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96" : "max-h-0"}`}
//       >
//         <ul className="bg-[#071744] pb-2">
//           {item.children.map((child) => (
//             <li key={child.label}>
//               <a
//                 href={child.href}
//                 onClick={onNavigate}
//                 className="flex items-center gap-2 px-9 py-2.5 text-sm text-white/75 hover:text-white focus:outline-none focus-visible:text-white"
//               >
//                 <span
//                   className="text-[#c9a227]"
//                   style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//                 >
//                   {">"}
//                 </span>
//                 {child.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   useEffect(() => {
//     if (!mobileOpen) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") setMobileOpen(false);
//     };
//     document.addEventListener("keydown", handleKey);
//     return () => document.removeEventListener("keydown", handleKey);
//   }, [mobileOpen]);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 8);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMobile = useCallback(() => setMobileOpen(false), []);

//   return (
//     <header
//       className="w-full sticky top-0 z-40"
//       style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
//       `}</style>

//       {/* Top bar for desktop */}
//       <div className="hidden md:flex items-center justify-between px-6 py-2 bg-[#f7f4ec] border-b-[3px] border-[#c9a227] text-sm">
//         <a
//           href={`mailto:${CONTACT_EMAIL}`}
//           className="flex items-center gap-2 text-[#14213d] hover:text-[#c8102e] transition-colors font-medium
//                      focus:outline-none focus-visible:underline"
//           style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 }}
//         >
//           <FaEnvelope size={14} />
//           {CONTACT_EMAIL}
//         </a>

//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-4">
//             {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 aria-label={label}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-[#14213d]/70 hover:text-[#c8102e] transition-colors
//                            focus:outline-none focus-visible:text-[#c8102e]"
//               >
//                 <Icon size={15} />
//               </a>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             {TOP_BAR_BUTTONS.map((btn) => (
//               <a
//                 key={btn.label}
//                 href={btn.href}
//                 className="px-4 py-1.5 border border-[#0b1f5c] text-[#0b1f5c] text-xs font-semibold tracking-wide
//                            hover:bg-[#0b1f5c] hover:text-white transition-colors
//                            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f5c] focus-visible:ring-offset-1"
//                 style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//               >
//                 {btn.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main nav bar */}
//       <div
//         className={`bg-[#0b1f5c] border-b border-[#c9a227]/30 transition-shadow duration-200
//                     ${scrolled ? "shadow-[0_4px_16px_rgba(7,23,68,0.35)]" : ""}`}
//       >
//         <div className="flex items-center justify-between px-4 md:px-6 py-3.5 max-w-[1400px] mx-auto">
//           <Wordmark />

//           <nav
//             className="hidden lg:flex items-center gap-2"
//             aria-label="Primary"
//           >
//             {NAV_LINKS.map((item) => (
//               <DesktopDropdown key={item.label} item={item} />
//             ))}
//           </nav>

//           <div className="hidden lg:block">
//             <a
//               href="contact"
//               className="px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold tracking-wide
//                        hover:bg-[#a80d26] transition-colors
//                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
//               style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//             >
//               Contact Us
//             </a>
//           </div>

//           <button
//             onClick={() => setMobileOpen(true)}
//             className="lg:hidden text-white p-2.5 rounded-sm
//                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
//             aria-label="Open menu"
//           >
//             <FaBars size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       <div
//         className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${
//           mobileOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//         aria-hidden={!mobileOpen}
//       >
//         <div className="absolute inset-0 bg-black/50" onClick={closeMobile} />
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label="Menu"
//           className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0b1f5c] shadow-2xl border-l-2 border-[#c9a227]
//                      transition-transform duration-300 flex flex-col
//                      ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
//             <span
//               className="text-white text-lg tracking-wide"
//               style={{
//                 fontFamily: "'Fraunces', Georgia, serif",
//                 fontWeight: 600,
//               }}
//             >
//               Menu
//             </span>
//             <button
//               onClick={closeMobile}
//               className="text-white p-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
//               aria-label="Close menu"
//             >
//               <FaTimes size={22} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto">
//             {NAV_LINKS.map((item) => (
//               <MobileAccordionItem
//                 key={item.label}
//                 item={item}
//                 onNavigate={closeMobile}
//               />
//             ))}
//           </div>

//           <div className="p-5 border-t border-white/10 space-y-4">
//             <a
//               href="#contact"
//               onClick={closeMobile}
//               className="block text-center px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold tracking-wide
//                        hover:bg-[#a80d26] transition-colors
//                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
//               style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//             >
//               Contact Us
//             </a>
//             <div className="flex items-center justify-center gap-5 pt-1">
//               {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-white/80 hover:text-white focus:outline-none focus-visible:text-white p-1"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "office@nirinepal.org";

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

const TOP_BAR_BUTTONS = [
  { label: "NIRI Email Login", href: "#" },
  { label: "NIRI USA", href: "#" },
];

const NAV_LINKS = [
  {
    label: "About Us",
    to: "about",
    children: [
      { label: "Our Mission", to: "about" },
      { label: "Our Members", to: "member" },
      { label: "Board Members", to: "BoardOfDirectors" },
    ],
  },
  {
    label: "Investigators",
    to: "#investigators",
    children: [
      { label: "Current Investigators", to: "current" },
      { label: "Become an Investigator", to: "invest" },
    ],
  },
  { label: "Projects", to: "project" },
  {
    label: "Get Involved",
    to: "#get-involved",
    children: [
      { label: "Volunteer", to: "vol" },
      { label: "Research Internship", to: "internship" },
      { label: "Join NIRI Community", to: "#join-community" },
      { label: "Donate", to: "donate" },
      { label: "Partner With Us", to: "partner" },
    ],
  },
  {
    label: "Activities",
    to: "#activities",
    children: [
      { label: "Events", to: "event" },
      { label: "News", to: "news" },
      { label: "Publication", to: "publication" },
      { label: "Newsletter", to: "newspaper" },
      { label: "Blogs & Article", to: "blog" },
    ],
  },
  { label: "Support", to: "support" },
];

function Seal() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="NIRI Logo"
        width={60}
        height={60}
        className="w-[60px] h-[60px] object-contain shrink-0"
      />
    </Link>
  );
}

function Wordmark() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 shrink-0 group focus:outline-none"
    >
      <Seal />
      <span className="flex flex-col leading-none">
        <span
          className="text-white text-[20px] md:text-[22px] tracking-wide"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
        >
          NIRI
        </span>
        <span
          className="hidden xs:block sm:block text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.28em] text-[#c9a227] mt-1"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          NEXUS INSTITUTE OF RESEARCH AND INNOVATION
        </span>
      </span>
    </Link>
  );
}

function BracketLink({ to, children, className = "", onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group/link relative inline-flex items-center px-1.5 py-1 rounded-sm
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]
                  ${className}`}
    >
      <span
        aria-hidden="true"
        className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-focus-visible/link:opacity-100 group-focus-visible/link:translate-x-0 transition-all duration-200 ease-out mr-1"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        [
      </span>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="opacity-0 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-focus-visible/link:opacity-100 group-focus-visible/link:translate-x-0 transition-all duration-200 ease-out ml-1"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        ]
      </span>
    </Link>
  );
}

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const containerRef = useRef(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target))
        setOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  if (!item.children) {
    return (
      <BracketLink
        to={item.to}
        className="text-[14px] font-medium text-white/90 hover:text-white transition-colors"
      >
        {item.label}
      </BracketLink>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 px-1.5 py-1 rounded-sm text-[14px] font-medium text-white/90 hover:text-white transition-colors
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
      >
        {item.label}
        <FaChevronDown
          size={12}
          className={`transition-transform duration-200 text-[#c9a227] ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="menu"
        className={`absolute left-0 top-full pt-2 min-w-[230px] transition-all duration-150 origin-top
                    ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
      >
        <ul className="bg-[#f7f4ec] border-t-2 border-[#c9a227] shadow-xl overflow-hidden py-1">
          {item.children.map((child, i) => (
            <li key={child.label} role="none">
              {i > 0 && <div className="mx-4 h-px bg-[#14213d]/10" />}
              <Link
                to={child.to}
                role="menuitem"
                className="group/item flex items-center gap-2 px-4 py-2.5 text-sm text-[#14213d] hover:text-[#c8102e] transition-colors
                           focus:outline-none focus-visible:bg-[#14213d]/5"
              >
                <span
                  className="text-[#c9a227] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-focus-visible/item:opacity-100 group-focus-visible/item:translate-x-0 transition-all duration-150"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {">"}
                </span>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileAccordionItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        className="block px-5 py-3.5 text-[15px] font-medium text-white/95 border-b border-white/10
                   focus:outline-none focus-visible:bg-white/5"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-[15px] font-medium text-white/95
                   focus:outline-none focus-visible:bg-white/5"
        aria-expanded={open}
      >
        {item.label}
        <FaChevronDown
          size={14}
          className={`transition-transform duration-200 text-[#c9a227] ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="bg-[#071744] pb-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                to={child.to}
                onClick={onNavigate}
                className="flex items-center gap-2 px-9 py-2.5 text-sm text-white/75 hover:text-white focus:outline-none focus-visible:text-white"
              >
                <span
                  className="text-[#c9a227]"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {">"}
                </span>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className="w-full sticky top-0 z-40"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Top bar for desktop */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 bg-[#f7f4ec] border-b-[3px] border-[#c9a227] text-sm">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 text-[#14213d] hover:text-[#c8102e] transition-colors font-medium
                     focus:outline-none focus-visible:underline"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 }}
        >
          <FaEnvelope size={14} />
          {CONTACT_EMAIL}
        </a>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-[#14213d]/70 hover:text-[#c8102e] transition-colors
                           focus:outline-none focus-visible:text-[#c8102e]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {TOP_BAR_BUTTONS.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className="px-4 py-1.5 border border-[#0b1f5c] text-[#0b1f5c] text-xs font-semibold tracking-wide
                           hover:bg-[#0b1f5c] hover:text-white transition-colors
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f5c] focus-visible:ring-offset-1"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`bg-[#0b1f5c] border-b border-[#c9a227]/30 transition-shadow duration-200
                    ${scrolled ? "shadow-[0_4px_16px_rgba(7,23,68,0.35)]" : ""}`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-3.5 max-w-[1400px] mx-auto">
          <Wordmark />

          <nav
            className="hidden lg:flex items-center gap-2"
            aria-label="Primary"
          >
            {NAV_LINKS.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="contact"
              className="px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold tracking-wide
                       hover:bg-[#a80d26] transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2.5 rounded-sm
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            aria-label="Open menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMobile} />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0b1f5c] shadow-2xl border-l-2 border-[#c9a227]
                     transition-transform duration-300 flex flex-col
                     ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span
              className="text-white text-lg tracking-wide"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
              }}
            >
              Menu
            </span>
            <button
              onClick={closeMobile}
              className="text-white p-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {NAV_LINKS.map((item) => (
              <MobileAccordionItem
                key={item.label}
                item={item}
                onNavigate={closeMobile}
              />
            ))}
          </div>

          <div className="p-5 border-t border-white/10 space-y-4">
            <Link
              to="contact"
              onClick={closeMobile}
              className="block text-center px-5 py-2.5 bg-[#c8102e] text-white text-sm font-semibold tracking-wide
                       hover:bg-[#a80d26] transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f5c]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Contact Us
            </Link>
            <div className="flex items-center justify-center gap-5 pt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white focus:outline-none focus-visible:text-white p-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}